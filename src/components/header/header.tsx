import React from "react";
import DarkModeToggle from "../dark-mode-toggle/dark-mode-toggle";
import FlagDropdown from "../flag-dropdown/flag-dropdown";

const Header: React.FC = () => {
  return (
    <nav className="dark:bg-gray-800">
      <div className="mx-auto max-w-7xl xl:px-6 2xl:px-8">
        <div className="py-6 px-6 lg:px-12 w-full h-full flex items-center justify-between">
          <h1 className="text-2xl font-bold uppercase dark:text-white">Pedro Novo</h1>
          <div className="flex items-center justify-center gap-4">
            <DarkModeToggle />
            <FlagDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
