/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { CountryFlag, countryFlags } from "@/constants/country-flags";
import { useRouter } from "next/router";

const supportedLanguages = ["en", "es", "pt"];

const FlagDropdown: React.FC = () => {
  const { i18n } = useTranslation();
  const { push } = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [currentIdiom, setCurrentIdiom] = useState(supportedLanguages.includes(i18n.language) ? i18n.language : "en");

  const imageLanguage: Record<"en" | "es" | "pt", CountryFlag> = {
    en: countryFlags[0],
    es: countryFlags[1],
    pt: countryFlags[2],
  };

  const onLanguageChange = (lang: string) => {
    push("/", undefined, { locale: lang });
    setCurrentIdiom(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  }, [isOpen]);

  return (
    <div className="relative">
      <div id="language" onClick={() => setIsOpen((prev) => !prev)} className="w-full">
        <img
          src={imageLanguage[currentIdiom as "en" | "es" | "pt"].icon}
          alt={currentIdiom}
          className="h-8 w-8 cursor-pointer rounded-full border-2 border-gray-100 hover:border-gray-300"
        />
      </div>
      <div
        className={classNames(
          "absolute -top-10 -right-2 flex w-12 flex-col items-center justify-center gap-2 overflow-hidden rounded-md bg-gray-100 py-2 transition-all delay-100 ease-in-out duration-200 dark:bg-gray-800",
          !isOpen ? "max-h-0 -translate-y-20 opacity-0" : "max-h-40 translate-y-24 opacity-100"
        )}
      >
        {countryFlags.map((flag) => (
          <div key={flag.id} onClick={() => onLanguageChange(flag.language)}>
            <img
              src={flag.icon}
              alt={flag.title}
              className="h-8 w-8 cursor-pointer rounded-full border-2 border-gray-200 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-400"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlagDropdown;
