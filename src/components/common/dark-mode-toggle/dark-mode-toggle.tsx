import React, { useEffect, useState } from "react";
import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { useDarkModeContext } from "./context/dark-mode-context";

type Theme = "light" | "dark" | "system";
const themes: Theme[] = ["light", "dark", "system"];

const DarkModeToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useDarkModeContext();

  const currentTheme: Record<Theme, React.ReactNode> = {
    light: <SunIcon className="h-8 w-8 cursor-pointer" />,
    dark: <MoonIcon className="h-8 w-8 cursor-pointer" />,
    system: <ComputerDesktopIcon className="h-8 w-8 cursor-pointer" />,
  };

  const onChangeTheme = (themeOption: Theme) => {
    setTheme(themeOption);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div id="language" onClick={() => setIsOpen((prev) => !prev)} className="text-gray-700 hover:text-gray-600">
        {currentTheme[theme]}
      </div>
      <div
        className={classNames(
          "absolute -right-2 -top-10 flex w-12 flex-col items-center justify-center gap-2 overflow-hidden rounded-md bg-gray-100 py-2 transition-all delay-100 ease-in-out duration-200",
          !isOpen ? "max-h-0 -translate-y-20 opacity-0" : "max-h-40 translate-y-24 opacity-100"
        )}
      >
        {themes.map((value) => (
          <div
            key={value}
            onClick={() => onChangeTheme(value)}
            className="h-8 w-8 cursor-pointer text-gray-400 hover:text-gray-600"
          >
            {currentTheme[value]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DarkModeToggle;
