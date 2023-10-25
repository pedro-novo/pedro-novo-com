/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "next-i18next";

const people = [
  {
    name: "Ricardo Jorge",
    role: "Senior Software Engineer",
    company: "OMEGA Systems",
    imageUrl:
      "https://media.licdn.com/dms/image/D4E03AQGI1QlImPghAA/profile-displayphoto-shrink_800_800/0/1675606734821?e=1703721600&v=beta&t=N06v_HX5OCeR4qyHyOFPPcvGqRyuXmvK_NRleBEx0zo",
    feedback:
      "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/ricardojorgexyz/",
    companyUrl: "https://www.omegasys.eu/",
  },
  {
    name: "Nuno Casteleira",
    role: "Mid Software Engineer",
    company: "Critical TechWorks",
    imageUrl:
      "https://media.licdn.com/dms/image/C4D03AQE3ODIPrXp_8A/profile-displayphoto-shrink_400_400/0/1603644633438?e=1703721600&v=beta&t=rMsrsIQkvz1oQZ4mXPex6gJFnqakxcmqMBY4phWThkU",
    feedback:
      "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/nunocasteleira/",
    companyUrl: "https://www.criticaltechworks.com/",
  },
  {
    name: "Joana Valente",
    role: "Junior Software Engineer",
    company: "Critical TechWorks",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQFXL4eh305mwA/profile-displayphoto-shrink_400_400/0/1669026531833?e=1703721600&v=beta&t=NRr7X8yPy_os6BjT4a5bw8eARieREJZeBO6xWvUw6o8",
    feedback:
      "I have been fortunate to have had the opportunity to work alongside Pedro for the past year. He really is one of the hardest people to find: someone who is able to create a welcoming, positive, and enjoyable work environment. Throughout working with Pedro, I have seen first hand his dedication to providing the best possible solutions, as well as a remarkable capability not only to learn from others, but also to share his knowledge with colleagues about various topics.He truly stands out as an exceptional team member, and I consider him a rare gem in our field.",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/joana-pais-valente/",
    companyUrl: "https://www.criticaltechworks.com/",
  },
  {
    name: "Inês Melo",
    role: "Junior Software Engineer",
    company: "Critical TechWorks",
    imageUrl:
      "https://media.licdn.com/dms/image/C4D03AQE54-YbahaCdg/profile-displayphoto-shrink_400_400/0/1600181599415?e=1703721600&v=beta&t=p26R0X6W-rDk28GFxe7NRk5cglPK4d1tSQ1VUsiKE_s",
    feedback:
      "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/mariaines-mrmelo/",
    companyUrl: "https://www.criticaltechworks.com/",
  },
  {
    name: "Pedro Torres",
    role: "Mid Software Engineer",
    company: "ING",
    imageUrl:
      "https://media.licdn.com/dms/image/C4D03AQFPBWXO-AvQpw/profile-displayphoto-shrink_400_400/0/1617751299753?e=1703721600&v=beta&t=wEu1WG-HYmJwtNkhOehH1u_mYXKUudsfOeBPBHxsq_0",
    feedback:
      "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/pedro-areal-torres/",
    companyUrl: "https://www.ing.com/Home.htm",
  },

  // More people...
];

const ReferralsSection: React.FC = () => {
  const { t } = useTranslation("referrals");

  return (
    <section id="referrals">
      <div className="bg-white py-24 md:py-32 lg:py-40 dark:bg-gray-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-[#61C9A8] text-5xl text-left font-black tracking-[.25em] uppercase">
              {t("referrals")}
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-200">
              In the Referrals section, colleagues share their firsthand experiences working with me. Their feedback
              showcases the positive collaboration, teamwork, and successful outcomes we achieved together. These
              testimonials offer a glimpse into the strong professional connections I build and the trust I inspire.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img
                  className="aspect-[3/2] w-20 rounded-2xl object-cover dark:border-2 dark:border-gray-200"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900 dark:text-white">{person.name}</h3>
                <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {person.role}{" "}
                  <span className="text-gray-600 dark:text-gray-400 font-bold hover:text-gray-400 dark:hover:text-gray-200">
                    <a href={person.companyUrl} target="_blank">
                      @ {person.company}
                    </a>
                  </span>
                </p>
                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-200">{person.feedback}</p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a
                      href={person.twitterUrl}
                      className="text-gray-400 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-200"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className="text-gray-400 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-200"
                    >
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

export default ReferralsSection;
