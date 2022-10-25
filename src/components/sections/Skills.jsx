import React from "react";
import SkillItem from "../items/SkillItem";
import react from "../../assets/icons/react-2.svg";
function Skills() {
  const skillList = [
    { icon: react, skill: "React" },
    { icon: react, skill: "React" },
    { icon: react, skill: "React" },
    { icon: react, skill: "React" },
    { icon: react, skill: "React" },
    { icon: react, skill: "React" },
  ];

  return (
    <div className="flex flex-col items-start my-12 mx-auto">
      <p className="text-4xl md:text-6xl font-extrabold my-2">Skills</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-8 my-2 mx-auto md:mx-0 w-full">
        {skillList.map(({ icon, skill }) => {
          return <SkillItem key={icon} icon={icon} skill={skill}></SkillItem>;
        })}
      </div>
    </div>
  );
}

export default Skills;
