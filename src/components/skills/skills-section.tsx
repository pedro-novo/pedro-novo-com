import { beTools, feTools, techTools } from "@/data/frameworks";
import { beSkills, feSkills, techSkills } from "@/data/skills";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import GreenArrow from "../common/icons/green-arrow/green-arrow";
import classNames from "classnames";

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

const SkillsSection: React.FC = () => {
  const [tabButton, setTabButton] = useState("frontend");

  const onChangeTab = (tab: string) => {
    setTabButton(tab);
  };

  const tabRecord: Record<string, { skills: React.ReactNode; tools: React.ReactNode }> = {
    frontend: {
      skills: <SkillsBar data={feSkills} color={"#61C9A8"} />,
      tools: (
        <FrameworksPie data={feTools} colors={["#61C9A8", "#86e4c7", "#a7efd9", "#c5f6e7", "#d7f3eb", "#e8efed"]} />
      ),
    },
    backend: {
      skills: <SkillsBar data={beSkills} color={"#61C9A8"} />,
      tools: (
        <FrameworksPie data={beTools} colors={["#61C9A8", "#86e4c7", "#a7efd9", "#c5f6e7", "#d7f3eb", "#e8efed"]} />
      ),
    },
    technical: {
      skills: <SkillsBar data={techSkills} color={"#61C9A8"} />,
      tools: (
        <FrameworksPie data={techTools} colors={["#61C9A8", "#86e4c7", "#a7efd9", "#c5f6e7", "#d7f3eb", "#e8efed"]} />
      ),
    },
  };

  return (
    <section>
      <div className="bg-[#ffeedb] py-12 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-10 sm:px-20 grid grid-cols-1 gap-x-12 gap-y-20 lg:grid-cols-2">
          <div className="col-span-2">
            <h1 className="text-[#61C9A8] text-5xl text-right font-extrabold tracking-widest uppercase">Skills</h1>
          </div>
          <div className="col-span-2 flex items-center justify-center gap-6">
            <GreenArrow />
            {tabButtons.map((button) => (
              <button
                key={button}
                className={classNames(
                  "bg-none border-none text-[#61C9A8] text-sm uppercase tracking-[.25em] hover:text-[#69d9b6] first-letter:uppercase",
                  tabButton === button && "font-bold"
                )}
                onClick={() => onChangeTab(button)}
              >
                {button}
              </button>
            ))}
          </div>
          <div className="col-span-2 lg:col-span-1">{tabRecord[tabButton].skills}</div>
          <div className="col-span-2 lg:col-span-1">{tabRecord[tabButton].tools}</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
