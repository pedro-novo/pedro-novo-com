/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileNav from "./mobile-nav";

const navigation = [
  { name: "About me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Referrals", href: "#referrals" },
  { name: "Portfolio", href: "#" },
];

const HeroHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between py-4 px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Pedro Novo</span>
            <img className="h-8 w-auto" src="./pn_white_logo.png" alt="logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm uppercase font-semibold leading-6 text-white hover:text-[#61C9A8]"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <MobileNav isOpen={mobileMenuOpen} navigation={navigation} onCloseSidebar={() => setMobileMenuOpen(false)} />
    </header>
  );
};

export default HeroHeader;
