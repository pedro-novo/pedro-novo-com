/* eslint-disable react/no-unescaped-entities */
import React from "react";
import HeroArrow from "./hero-arrow";
import GithubIcon from "../common/icons/github-icon";
import LinkedInIcon from "../common/icons/linkedin-icon";
import { useTranslation } from "next-i18next";

const HeroContent: React.FC = () => {
  const { t } = useTranslation("hero");

  return (
    <>
      <div className="absolute top-0 left-[50%] -translate-x-[50%] h-screen w-full flex items-center justify-center px-8 py-32 sm:py-48 lg:py-56">
        <div className="mx-auto max-w-lg flex items-center justify-center flex-col lg:max-w-2xl">
          <div className="pl-4 lg:pl-0">
            <h1 className="text-xl text-left font-bold tracking-normal text-white xs:text-2xl sm:text-4xl lg:text-5xl">
              {t("messageOne")} <span className="underline">{t("messageTwo")}</span> {t("messageThree")}{" "}
              <span className="text-[#61C9A8] font-extrabold">{t("messageFour")}</span>{" "}
            </h1>
          </div>
          <HeroArrow height="65" fill="white" />
          <div className="mt-10 flex items-center justify-center">
            <a
              href="mailto:pedro.novo.93@gmail.com"
              className="rounded-md bg-[#61c9a8] px-3.5 py-1.5 text-sm uppercase font-semibold text-white shadow-sm hover:bg-[#69d9b6]"
            >
              {t("getInTouch")}
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-14 left-[50%] -translate-x-[50%] flex items-center justify-center flex-col animate-pulse">
        <h6 className="text-xs font-thin text-white tracking-widest rotate-90">Scroll</h6>
        <HeroArrow height="30" fill="white" />
      </div>
      <div className="hidden absolute w-16 h-full left-0 top-0 items-center justify-center gap-4 lg:flex lg:flex-col">
        <h5 className="mb-24 text-sm font-thin text-white tracking-[.25em] -rotate-90 whitespace-nowrap">
          {t("checkSocials")}
        </h5>
        <a href="https://github.com/pedro-novo" target="_blank">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/pedro-novo-teixeira" target="_blank">
          <LinkedInIcon />
        </a>
      </div>
    </>
  );
};

export default HeroContent;
