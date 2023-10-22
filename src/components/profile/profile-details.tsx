import React from "react";
import { useTranslation } from "next-i18next";
import FlagDropdown from "../flag-dropdown/flag-dropdown";

const links: { title: string; href: string }[] = [
  { title: "LinkedIn", href: "https://www.linkedin.com/in/pedro-novo-teixeira/" },
  { title: "GitHub", href: "https://github.com/pedro-novo" },
  { title: "Portfolio", href: "https://pedro-novo.com" },
];

const ProfileDetails: React.FC = () => {
  const { t } = useTranslation("profile");

  return <div className="dark:text-white">{t("profileDetails")}</div>;
};

export default ProfileDetails;
