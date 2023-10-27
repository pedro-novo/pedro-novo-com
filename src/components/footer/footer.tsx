/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "next-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation("footer");

  return (
    <footer>
      <div className="bg-black">
        <div className="text-left p-8">
          <img className="h-8 w-auto" src="./pn_white_logo.png" alt="logo" />
        </div>
        <div className="mx-auto max-w-7xl px-10 sm:px-20 pb-24">
          <h1 className="text-white text-2xl font-bold text-center sm:text-4xl">{t("wantToKnowMore")}</h1>
          <a href="mailto:pedro.novo.93@gmail.com">
            <h1 className="text-[#61C9A8] text-2xl font-extrabold text-center uppercase hover:text-[#79c9b0] sm:text-4xl">
              {t("getInTouch")}
            </h1>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
