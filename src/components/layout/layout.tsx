import React from "react";
import Profile from "../profile/profile";
import AboutMe from "../about-me/about-me";
import Skills from "../skills/skills";
import Socials from "../socials/socials";
import Books from "../books/books";
import Referrals from "../referrals/referrals";

const Layout: React.FC = () => {
  return (
    <main>
      <div className="mx-auto max-w-7xl py-10 xl:px-6 2xl:px-8">
        <div className="sm:px-6 sm:py-10 lg:px-8 bg-white rounded-sm shadow-lg">
          <Profile />
          <AboutMe />
          <Skills />
          <Socials />
          <Books />
          <Referrals />
        </div>
      </div>
    </main>
  );
};

export default Layout;
