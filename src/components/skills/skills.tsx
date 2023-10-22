import React from "react";
import dynamic from "next/dynamic";
import { feSkills, beSkills, techSkills } from "@/data/skills";
import { feTools, beTools, techTools } from "@/data/frameworks";
import { useTranslation } from "next-i18next";

const SkillsBar = dynamic(() => import("../charts/skills-bar").then((module) => module.default), {
  ssr: false,
});
const FrameworksPie = dynamic(() => import("../charts/frameworks-pie").then((module) => module.default), {
  ssr: false,
});

const specificSkills = [
  {
    skillsTitle: "feSkills",
    skills: feSkills,
    toolsTitle: "feTools",
    tools: feTools,
    notesTitle: "feNotes",
  },
  {
    skillsTitle: "beSkills",
    skills: beSkills,
    toolsTitle: "beTools",
    tools: beTools,
    notesTitle: "beNotes",
  },
  {
    skillsTitle: "techSkills",
    skills: techSkills,
    toolsTitle: "techTools",
    tools: techTools,
    notesTitle: "techNotes",
  },
];

const Skills: React.FC = () => {
  const { t } = useTranslation("skills");

  return (
    <section>
      <div className="w-full flex flex-col items-center justify-center gap-8 overflow-hidden">
        {specificSkills.map(({ skillsTitle, skills, toolsTitle, tools, notesTitle }) => (
          <div
            key={skillsTitle}
            className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 lg:grid-cols-2"
          >
            <div className="w-full">
              <h5 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl dark:text-white">
                {t(skillsTitle)}
              </h5>
              <SkillsBar data={skills} />
            </div>
            <div className="w-full">
              <h5 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl dark:text-white">
                {t(toolsTitle)}
              </h5>
              <FrameworksPie data={tools} />
            </div>
            <div className="w-full mb-20 xl:mb-48 lg:col-span-2">
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
                {t(notesTitle)}
              </h5>
              <p className="text-gray-800 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae, officia nulla modi
                doloremque quibusdam dolor doloribus deserunt praesentium incidunt.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
