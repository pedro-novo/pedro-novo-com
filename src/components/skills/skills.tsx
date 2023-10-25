import { beTools, feTools, techTools } from "@/data/frameworks";
import { beSkills, feSkills, techSkills } from "@/data/skills";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import GreenArrow from "../common/icons/green-arrow/green-arrow";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

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

const tabButtons = ["frontend", "backend", "technical"];

const Skills: React.FC = () => {
  const { t } = useTranslation("skills");
  const [tabButton, setTabButton] = useState("frontend");

  const onChangeTab = (tab: string) => {
    setTabButton(tab);
  };

  const tabRecord: Record<
    string,
    { skillsTitle: string; toolsTitle: string; skillsComponent: React.ReactNode; toolsComponent: React.ReactNode }
  > = {
    frontend: {
      skillsTitle: "Frontend Skills",
      toolsTitle: "Frontend Tools",
      skillsComponent: <SkillsBar data={feSkills} color={"#61C9A8"} />,
      toolsComponent: (
        <FrameworksPie data={feTools} colors={["#61C9A8", "#86e4c7", "#a7efd9", "#c5f6e7", "#d7f3eb", "#e8efed"]} />
      ),
    },
    backend: {
      skillsTitle: "Backend Skills",
      toolsTitle: "Backend Skills",
      skillsComponent: <SkillsBar data={beSkills} color={"#61C9A8"} />,
      toolsComponent: (
        <FrameworksPie data={beTools} colors={["#61C9A8", "#86e4c7", "#a7efd9", "#c5f6e7", "#d7f3eb", "#e8efed"]} />
      ),
    },
    technical: {
      skillsTitle: "Technical Skills",
      toolsTitle: "Technical Skills",
      skillsComponent: <SkillsBar data={techSkills} color={"#61C9A8"} />,
      toolsComponent: (
        <FrameworksPie data={techTools} colors={["#61C9A8", "#86e4c7", "#a7efd9", "#c5f6e7", "#d7f3eb", "#e8efed"]} />
      ),
    },
  };

  return (
    <section id="skills">
      <div className="bg-[#ffeedb] py-12">
        <div className="mx-auto max-w-7xl px-10 sm:px-20 grid grid-cols-1 gap-x-12 gap-y-20 lg:grid-cols-2">
          <div className="col-span-2">
            <h1 className="text-[#61C9A8] text-center text-4xl font-black tracking-[.25em] uppercase sm:text-right">
              Skills
            </h1>
          </div>
          <div className="col-span-2 flex items-center justify-center gap-6">
            {tabButtons.map((button) => (
              <div key={button} className="flex items-center justify-center gap-4">
                {tabButton === button ? <GreenArrow width="30" /> : null}
                <button
                  className={classNames(
                    "bg-none border-none text-[#61C9A8] text-xs uppercase tracking-[.25em] hover:text-[#69d9b6] first-letter:uppercase",
                    tabButton === button && "font-bold"
                  )}
                  onClick={() => onChangeTab(button)}
                >
                  {button}
                </button>
              </div>
            ))}
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-gray-800 text-lg tracking-widest font-semibold">
              {t(tabRecord[tabButton].skillsTitle)}
            </h4>
            {tabRecord[tabButton].skillsComponent}
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-gray-800 text-lg tracking-widest font-semibold">
              {t(tabRecord[tabButton].toolsTitle)}
            </h4>
            {tabRecord[tabButton].toolsComponent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
