import React from "react";
import { GitHub } from "react-feather";
import { Globe } from "react-feather";
function ProjectItem({ title, image, description, list, github, livelink }) {
  return (
    <div className="box flex flex-col justify-around items-start bg-v-white px-4 py-6 gap-2">
      <p className="text-2xl  font-bold">{title}</p>
      <img className="box-2 self-center" src={image} alt={title} />
      <p className="text-2xl font-medium">{description}</p>
      <ul className="text-xl font-medium">
        {list.map((item) => {
          return <li>{"• " + item}</li>;
        })}
      </ul>
      <div className="flex flex-row items-center w-full justify-center gap-4">
        <a href={github} className="flex flex-row items-center box bg-v-blue p-2">
          <GitHub></GitHub>
        </a>
        <span className="flex flex-row box items-center bg-v-blue p-2 gap-2 w-fit">
          <Globe></Globe>
          <a href={livelink} className="text-xl font-bold">
            Live Link
          </a>
        </span>
      </div>
    </div>
  );
}

export default ProjectItem;
