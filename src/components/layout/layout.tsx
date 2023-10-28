import React from "react";
import AboutMe from "../about-me/about-me";
import { DarkModeContextProvider } from "../common/dark-mode-toggle/context/dark-mode-context";
import Hero from "../hero/hero";
import Skills from "../skills/skills";
import Footer from "../footer/footer";
import Referrals from "../referrals/referrals";
import Books from "../books/books";

const Layout: React.FC = () => {
  return (
    <DarkModeContextProvider>
      <Hero />
      <AboutMe />
      <Skills />
      <Books />
      <Referrals />
      <Footer />
    </DarkModeContextProvider>
  );
};

export default Layout;
