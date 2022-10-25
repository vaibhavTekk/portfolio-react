import React from "react";
import ProjectItem from "../items/ProjectItem";
import wallt from "../../assets/images/walt-expense-tracker.png";
function Projects() {
  const projectList = [
    {
      title: "Expense Tracker App",
      image: wallt,
      description: "Expense Tracker App",
      list: ["React + Tailwind", "Express", "Mongo"],
      github: "https://github.com/vaibhavTekk/expense-tracker-frontend",
      livelink: "https://wallt.vaibhavtekk.tech/",
    },
    {
      title: "Expense Tracker App",
      image: wallt,
      description: "Expense Tracker App",
      list: ["React + Tailwind", "Express", "Mongo"],
      github: "https://github.com/vaibhavTekk/expense-tracker-frontend",
      livelink: "https://wallt.vaibhavtekk.tech/",
    },
    {
      title: "Expense Tracker App",
      image: wallt,
      description: "Expense Tracker App",
      list: ["React + Tailwind", "Express", "Mongo"],
      github: "https://github.com/vaibhavTekk/expense-tracker-frontend",
      livelink: "https://wallt.vaibhavtekk.tech/",
    },
    {
      title: "Expense Tracker App",
      image: wallt,
      description: "Expense Tracker App",
      list: ["React + Tailwind", "Express", "Mongo"],
      github: "https://github.com/vaibhavTekk/expense-tracker-frontend",
    },
    {
      title: "Expense Tracker App",
      image: wallt,
      description: "Expense Tracker App",
      list: ["React + Tailwind", "Express", "Mongo"],
      github: "https://github.com/vaibhavTekk/expense-tracker-frontend",
      livelink: "https://wallt.vaibhavtekk.tech/",
    },
  ];

  return (
    <div className="flex flex-col items-start my-12 mx-auto">
      <p className="text-4xl md:text-6xl font-extrabold my-2">Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 my-2 mx-auto md:mx-0 w-full">
        {projectList.map((data) => {
          return <ProjectItem data={data} key={data.title}></ProjectItem>;
        })}
      </div>
    </div>
  );
}

export default Projects;
