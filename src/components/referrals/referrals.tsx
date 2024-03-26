import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { people } from "@/constants/people";

const Referrals: React.FC = () => {
  const { t } = useTranslation("referrals");

  return (
    <section id="referrals">
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-10 sm:px-20 grid grid-cols-1 gap-x-12 gap-y-20 lg:grid-cols-2">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-[#61C9A8] text-2xl text-center font-black tracking-[.25em] uppercase sm:text-left sm:text-4xl">
              {t("referrals")}
            </h2>
          </div>
          <ul
            role="list"
            className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 lg:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:col-span-2 place-items-start"
          >
            {people.map((person) => (
              <li key={person.name}>
                <Image
                  width={80}
                  height={40}
                  src={person.imageUrl}
                  alt={person.name}
                  className="aspect-[3/2] w-20 rounded-2xl object-cover border-2 border-[#61C9A8]"
                />
                <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
                <p className="text-sm leading-7 text-gray-600">
                  {person.role}{" "}
                  <span className="text-gray-600 font-bold hover:text-gray-400">
                    <a href={person.companyUrl} target="_blank">
                      @ {person.company}
                    </a>
                  </span>
                </p>
                <p className="mt-4 text-base leading-7 text-gray-600 whitespace-pre-line">{person.feedback}</p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Referrals;
