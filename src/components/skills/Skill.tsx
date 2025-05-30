"use client";

import { useRef } from "react";
import SkillCard from "./SkillCard";

const Skill = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skills = [
    "TypeScript",
    "HTML5",
    "React",
    "Next",
    "Express",
    "ShadcnUI",
    "Bootstrap",
    "AntDesign",
    "TailwindCSS",
    "Github",
    "Jira",
    "Figma",
  ];

  return (
    <section ref={sectionRef} className="py-4" id="skill">
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {skills.map((skill, index) => (
          <SkillCard
            icon={skill}
            index={index}
            sectionRef={sectionRef}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skill;
