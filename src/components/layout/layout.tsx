import React from "react";
import AboutMe from "../about-me/about-me";
import { DarkModeContextProvider } from "../common/dark-mode-toggle/context/dark-mode-context";
import Hero from "../hero/hero";
import Skills from "../skills/skills";
import ReferralsSection from "../referrals/referrals-section";

const Layout: React.FC = () => {
  return (
    <DarkModeContextProvider>
      <Hero />
      <AboutMe />
      <Skills />
      <ReferralsSection />
      {/* <main className="dark:bg-gray-900">
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
      </main> */}
    </DarkModeContextProvider>
  );
};

export default Layout;
