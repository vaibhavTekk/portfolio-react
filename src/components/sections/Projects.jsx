import React from "react";
import ProjectItem from "../items/ProjectItem";

import wallt from "../../assets/images/walt-expense-tracker.png";
import terminal from "../../assets/images/terminal-website.png";
import timetable from "../../assets/images/timetable.png";
import ttt from "../../assets/images/ttt.png";
function Projects() {
  const projectList = [
    {
      title: "Expense Tracker App",
      image: wallt,
      description: "Expense Tracker App",
      list: ["React + Tailwind", "Express", "Mongo"],
      github: "https://github.com/vaibhavTekk/expense-tracker-frontend",
      livelink: "https://wallt.vercel.app/",
    },
    {
      title: "Terminal Portfolio",
      image: terminal,
      description: "An Interactive Terminal Style Portfolio",
      list: ["NextJS", "Tailwind"],
      github: "https://github.com/vaibhavTekk/terminal-website",
      livelink: "https://terminal-website-alpha.vercel.app/",
    },
    {
      title: "VIT Timetable to Calendar",
      image: timetable,
      description: "Converts VTOP Timetable HTML to a Calendar File",
      list: ["Express", "HTML + JS", "Tailwind"],
      github: "https://github.com/vaibhavTekk/vit-timetable-parser-2",
      livelink: "https://vit-timetable.herokuapp.com/",
    },
    {
      title: "Tic Tac Toe",
      image: ttt,
      description: "Tic Tac Toe built using TailwindCSS and JS",
      list: ["HTML", "Javascript", "Tailwind"],
      github: "https://github.com/vaibhavTekk/tic-tac-toe-js",
      livelink: "http://tictac.vaibhavtekk.tech/",
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
