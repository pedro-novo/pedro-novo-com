import React, { SetStateAction, createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface Props {
  children: React.ReactNode;
}

type DarkModeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<SetStateAction<Theme>>;
};

const DarkModeContext = createContext<DarkModeContextType>({
  theme: "system",
  setTheme: () => undefined,
});

const DarkModeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("system");

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

  return <DarkModeContext.Provider value={{ theme, setTheme }}>{children}</DarkModeContext.Provider>;
};

const useDarkModeContext = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("useDarkModeContext must be used within a DarkModeContextProvider");
  }

  return { ...context };
};

export { DarkModeContextProvider, useDarkModeContext };
export type { DarkModeContextType };
