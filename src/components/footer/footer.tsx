/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-black">
        <div className="text-left p-8">
          <img className="h-8 w-auto" src="./pn_white_logo.png" alt="logo" />
        </div>
        <div className="mx-auto max-w-7xl px-10 sm:px-20 pb-24">
          <h1 className="text-white text-4xl font-bold text-center">Want to know more about me?</h1>
          <h1 className="text-[#61C9A8] text-4xl font-extrabold text-center uppercase">Get in touch</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
