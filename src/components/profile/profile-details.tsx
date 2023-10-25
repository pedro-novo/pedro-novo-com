import React from "react";
import { useTranslation } from "next-i18next";
import FlagDropdown from "../common/flag-dropdown/flag-dropdown";

const links: { title: string; href: string }[] = [
  { title: "LinkedIn", href: "https://www.linkedin.com/in/pedro-novo-teixeira/" },
  { title: "GitHub", href: "https://github.com/pedro-novo" },
  { title: "Portfolio", href: "https://pedro-novo.com" },
];

const ProfileDetails: React.FC = () => {
  const { t } = useTranslation("profile");

  return (
    <div>
      <h4 className="text-xl text-gray-900 font-bold">{t("profileDetails")}</h4>
      <div className="mt-4">
        <div className="sm:flex sm:py-2">
          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-32">{t("name")}</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Pedro Novo</dd>
        </div>
        <div className="sm:flex sm:py-2">
          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-32">{t("email")}</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">pedro.novo.93@gmail.com</dd>
        </div>
        <div className="sm:flex sm:py-2">
          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-32">{t("role")}</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Software Engineer</dd>
        </div>
        <div className="sm:flex sm:py-2">
          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-32">{t("company")}</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Critical Techworks</dd>
        </div>
        <div className="sm:flex sm:py-2">
          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-32">{t("socials")}</dt>
          <div className="flex items-center justify-between gap-4">
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">LinkedIn</dd>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">GitHub</dd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
