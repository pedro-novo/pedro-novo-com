import React from "react";
import { useTranslation } from "next-i18next";

const AboutMe: React.FC = () => {
  const { t } = useTranslation("about-me");

  return (
    <section>
      <div className="bg-white py-24 md:py-32 dark:bg-gray-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              {t("aboutMe")}
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-600 dark:text-white">{t("paragraphOne")}</p>
            <p className="mt-2 text-base leading-8 text-gray-600 dark:text-white">{t("paragraphTwo")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
