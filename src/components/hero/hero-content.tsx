/* eslint-disable react/no-unescaped-entities */
import React from "react";
import HeroArrow from "./hero-arrow";
import GithubIcon from "../icons/github-icon";
import { LinkIcon } from "@heroicons/react/20/solid";
import LinkedInIcon from "../icons/linkedin-icon";

const HeroContent: React.FC = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center px-8 py-32 sm:py-48 lg:py-56">
        <div className="max-w-2xl flex items-center justify-center flex-col">
          <h1 className="text-2xl font-bold tracking-normal text-white sm:text-4xl lg:text-5xl">
            Hello, my name is <span className="underline">Pedro Novo</span> and I'm a{" "}
            <span className="text-[#61C9A8] font-extrabold">Full Stack Developer</span>{" "}
          </h1>
          <HeroArrow height="65" />
          <div className="mt-10 flex items-center justify-center">
            <a
              href="#"
              className="rounded-md bg-[#61c9a8] px-3.5 py-1.5 text-sm uppercase font-semibold text-white shadow-sm hover:bg-[#69d9b6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
      <div className="-mt-[150px] flex items-center justify-center flex-col animate-pulse">
        <h6 className="text-xs font-thin text-white tracking-widest rotate-90">Scroll</h6>
        <HeroArrow height="30" />
      </div>
      <div className="absolute w-16 h-full left-0 top-0 flex flex-col items-center justify-center gap-4">
        <h5 className="mb-24 text-sm font-thin text-white tracking-[.25em] -rotate-90 whitespace-nowrap">
          Check my socials
        </h5>
        <GithubIcon />
        <LinkedInIcon />
      </div>
    </>
  );
};

export default HeroContent;
