/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "next-i18next";

const people = [
  {
    name: "Ricardo Jorge",
    role: "Senior Frontend Engineer",
    company: "OMEGA Systems",
    imageUrl:
      "https://media.licdn.com/dms/image/D4E03AQGI1QlImPghAA/profile-displayphoto-shrink_800_800/0/1675606734821?e=1703721600&v=beta&t=N06v_HX5OCeR4qyHyOFPPcvGqRyuXmvK_NRleBEx0zo",
    feedback: `Pedro is the cheerful and light-hearted person that everyone loves to have on the team while also being extremely dedicated and passionate about his craft. When there are problems to be solved or challenges to be overcome you can count on Pedro to carry the hard work, put in however many hours he needs, and still swipe the floor at the end of the day.
    He is a team player on the office and on the field, he understands how to work with others as a unit to reach a common goal. He makes sure that everyone gets a chance to be heard and a chance to speak, facilitating communication across teams and departments, and overall making everyone life's easier.
    I'm proud to have witnessed Pedro pick up programming and engineering on his own and carve out a career for himself. I personally taught him the fundamentals of Frontend development, and now he is coming back and teaching new patterns and practices to me.
    He did not stop there and made sure to also learn tools from end to end and is totally able to develop a high quality fullstack application by himself.
    I've known him for many years, we've been team mates and champions outside the office and all that synergy still carries over for everything we do together. He is my right-hand man for Frontend projects, and he is my future CTO.`,
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
      "I have been fortunate to have had the opportunity to work alongside Pedro for the past year. He really is one of the hardest people to find: someone who is able to create a welcoming, positive, and enjoyable work environment. Throughout working with Pedro, I have seen first hand his dedication to providing the best possible solutions, as well as a remarkable capability not only to learn from others, but also to share his knowledge with colleagues about various topics. He truly stands out as an exceptional team member, and I consider him a rare gem in our field.",
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
    feedback: `I endorse collaborating with Pedro for his remarkable qualities as a team member. What sets Pedro apart is not just his dedication, professionalism, and strong work ethic, but also his unwavering empathy and caring nature. He's the kind of colleague who not only excels professionally but genuinely cares about the well-being of those he works with.
    Pedro's dedication to our team goes beyond the ordinary. He consistently contributes innovative ideas, not just for the sake of progress, but because he genuinely wants to see each of us thrive. His seamless collaboration style and positive attitude create an atmosphere of support that elevates every project.
    Pedro's ability to adapt to challenging situations is a testament to his character.. He's not just a skilled professional; he's a true team player who adds a personal touch to everything he does.
    `,
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
    feedback: `It's been a pleasure working with you on our full-stack project. I should mention that initially, I was aware of your relatively short experience as a developer, but I was surprised by your strong understanding of coding practices, your proficiency with React and TypeScript, and your knowledge of component libraries such as MUI and Tailwind. 
    What stood out the most was the fact that as soon as you joined the project you identified anomalies that would make the project difficult to scale and maintain in the future, and from this came your initiative to rebuild the UI from scratch, addressing these issues and also adding a personal touch to create user interfaces that would take it to the next level.
    I must thank you for the suggestion you gave me when I read the book "The Tao of React", as you warned me of some bad practices and coding habits I had that were affecting the quality of the code I was delivering. Your guidance has been fundamental to my growth as a developer and the growth of the project, and for that I thank you very much.`,
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/pedro-areal-torres/",
    companyUrl: "https://www.ing.com/Home.htm",
  },

  // More people...
];

const Referrals: React.FC = () => {
  const { t } = useTranslation("referrals");

  return (
    <section id="referrals">
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-10 sm:px-20 grid grid-cols-1 gap-x-12 gap-y-20 lg:grid-cols-2">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-[#61C9A8] text-3xl text-center font-black tracking-[.25em] uppercase sm:text-left sm:text-4xl">
              {t("referrals")}
            </h2>
          </div>
          <ul
            role="list"
            className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 lg:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:col-span-2 place-items-start"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img
                  className="aspect-[3/2] w-20 rounded-2xl object-cover border-2 border-[#61C9A8]"
                  src={person.imageUrl}
                  alt={person.name}
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
                    <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
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
