import React from "react";
import dynamic from "next/dynamic";
import { feSkills, beSkills, techSkills } from "@/data/skills";
import { feTools, beTools, techTools } from "@/data/frameworks";

const SkillsBar = dynamic(() => import("../charts/skills-bar").then((module) => module.default), {
  ssr: false,
});
const FrameworksPie = dynamic(() => import("../charts/frameworks-pie").then((module) => module.default), {
  ssr: false,
});

const specificSkills = [
  {
    skillsTitle: "Frontend Skills",
    skills: feSkills,
    toolsTitle: "Frontend Tools",
    tools: feTools,
    notesTitle: "Frontend Notes",
  },
  {
    skillsTitle: "Backend Skills",
    skills: beSkills,
    toolsTitle: "Backend Tools",
    tools: beTools,
    notesTitle: "Backend Notes",
  },
  {
    skillsTitle: "Technical Skills",
    skills: techSkills,
    toolsTitle: "Technical Tools",
    tools: techTools,
    notesTitle: "Technical Notes",
  },
];

const Skills: React.FC = () => {
  return (
    <section>
      <div className="w-full flex flex-col items-center justify-center gap-8">
        {specificSkills.map(({ skillsTitle, skills, toolsTitle, tools, notesTitle }) => (
          <div key={skillsTitle} className="w-full flex flex-col items-start justify-between lg:flex-row">
            <div className="w-full">
              <h5 className="text-xl">{skillsTitle}</h5>
              <SkillsBar data={skills} />
            </div>
            <div className="w-full">
              <h5 className="text-xl">{toolsTitle}</h5>
              <FrameworksPie data={tools} />
            </div>
            <div className="w-full">
              <h5 className="text-xl">{notesTitle}</h5>
              <p className="text-gray-800">
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
