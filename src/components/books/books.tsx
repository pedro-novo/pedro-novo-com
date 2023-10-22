import React from "react";
import { useTranslation } from "next-i18next";

const Books: React.FC = () => {
  const { t } = useTranslation("books");

  return (
    <section>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">{t("books")}</h2>
      </div>
    </section>
  );
};

export default Books;
