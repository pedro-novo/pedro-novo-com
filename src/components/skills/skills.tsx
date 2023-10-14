import React from "react";
import dynamic from "next/dynamic";
import { feSkills, beSkills, techSkills } from "@/data/skills";
import { feTools, beTools, otherTools } from "@/data/frameworks";

const SkillsBar = dynamic(() => import("../charts/skills-bar").then((module) => module.default), {
  ssr: false,
});
const FrameworksPie = dynamic(() => import("../charts/frameworks-pie").then((module) => module.default), {
  ssr: false,
});

const Skills: React.FC = () => {
  return (
    <section>
      <div className="w-full flex flex-col items-center justify-center gap-8">
        <div className="w-full flex flex-col items-start justify-between lg:flex-row">
          <div className="w-full">
            <h5 className="text-xl">Frontend Skills</h5>
            <SkillsBar data={feSkills} />
          </div>
          <div className="w-full">
            <h5 className="text-xl">Frontend Tools</h5>
            <FrameworksPie data={feTools} />
          </div>
          <div className="w-full">
            <h5 className="text-xl">Frontend Notes</h5>
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-between lg:flex-row">
          <div className="w-full">
            <h5 className="text-xl">Backend Skills</h5>
            <SkillsBar data={beSkills} />
          </div>
          <div className="w-full">
            <h5 className="text-xl">Backend Tools</h5>
            <FrameworksPie data={beTools} />
          </div>
          <div className="w-full">
            <h5 className="text-xl">Backend Notes</h5>
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-between lg:flex-row">
          <div className="w-full">
            <h5 className="text-xl">Technical Skills</h5>
            <SkillsBar data={techSkills} />
          </div>
          <div className="w-full">
            <h5 className="text-xl">Technical Tools</h5>
            <FrameworksPie data={otherTools} />
          </div>
          <div className="w-full">
            <h5 className="text-xl">Technical Notes</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
