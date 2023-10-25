import React from "react";
import { useTranslation } from "next-i18next";
import ProfileImage from "../profile/profile-image";
import HeroArrow from "../hero/hero-arrow";
import GreenArrow from "../common/icons/green-arrow/green-arrow";

const AboutMe: React.FC = () => {
  const { t } = useTranslation("about-me");

  return (
    <section id="about">
      <div className="bg-[#ffeedb] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-10 sm:px-20 grid grid-cols-1 gap-x-12 gap-y-20 lg:grid-cols-2">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold uppercase tracking-widest text-[#61C9A8] sm:text-3xl">{t("aboutMe")}</h2>
            <p className="mt-10 text-base leading-8 text-gray-800">{t("paragraphOne")}</p>
            <p className="mt-2 text-base leading-8 text-gray-800">{t("paragraphTwo")}</p>
            <div className="mt-10 flex items-center justify-start gap-6">
              <GreenArrow />
              <a href="#" className="text-[#61C9A8] text-sm uppercase font-bold underline tracking-widest">
                Download resume
              </a>
            </div>
          </div>
          <ProfileImage />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
