import React, { useEffect, useState } from "react";
import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";

type Theme = "light" | "dark" | "system";
const themes: Theme[] = ["light", "dark", "system"];

const DarkModeToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");

  const currentTheme: Record<Theme, React.ReactNode> = {
    light: <SunIcon className="h-8 w-8 cursor-pointer" />,
    dark: <MoonIcon className="h-8 w-8 cursor-pointer" />,
    system: <ComputerDesktopIcon className="h-8 w-8 cursor-pointer" />,
  };

  const onChangeTheme = (themeOption: Theme) => {
    setTheme(themeOption);
    setIsOpen(false);
  };

  const onWindowMatch = () => {
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefer-color-scheme: dark)");

    if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme as Theme);
    }
    onWindowMatch();
  }, []);

  useEffect(() => {
    const element = document.documentElement;

    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <div className="relative">
      <div id="language" onClick={() => setIsOpen((prev) => !prev)} className="text-gray-700 hover:text-gray-600">
        {currentTheme[theme]}
      </div>
      <div
        className={classNames(
          "absolute -right-2 -top-10 flex w-12 flex-col items-center justify-center gap-2 overflow-hidden rounded-md bg-gray-lightest py-2 transition-all delay-100 ease-in-out duration-200 dark:bg-gray-800",
          !isOpen ? "max-h-0 -translate-y-20 opacity-0" : "max-h-40 translate-y-24 opacity-100"
        )}
      >
        {themes.map((value) => (
          <div
            key={value}
            onClick={() => onChangeTheme(value)}
            className="h-8 w-8 cursor-pointer text-gray-400 hover:text-gray-400 dark:text-gray-600 dark:hover:text-gray-400"
          >
            {currentTheme[value]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DarkModeToggle;
