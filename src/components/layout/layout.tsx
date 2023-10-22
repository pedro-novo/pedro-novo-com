import React from "react";
import Profile from "../profile/profile";
import AboutMe from "../about-me/about-me";
import Skills from "../skills/skills";
import Socials from "../socials/socials";
import Books from "../books/books";
import Referrals from "../referrals/referrals";
import Header from "../header/header";
import { DarkModeContextProvider } from "../dark-mode-toggle/context/dark-mode-context";

const Layout: React.FC = () => {
  return (
    <DarkModeContextProvider>
      <main className="dark:bg-gray-900">
        <Header />
        <div className="mx-auto max-w-7xl xl:px-6 2xl:px-8 overflow-hidden">
          <div className="sm:px-6 lg:px-8 bg-white dark:bg-gray-900 rounded-sm shadow-lg">
            <Profile />
            <AboutMe />
            <Skills />
            <Socials />
            <Books />
            <Referrals />
          </div>
        </div>
      </main>
    </DarkModeContextProvider>
  );
};

export default Layout;
