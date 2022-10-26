import React from "react";
import { GitHub } from "react-feather";
import { Instagram } from "react-feather";
import { Linkedin } from "react-feather";

function Links() {
  const linkList = [
    { icon: <GitHub />, text: "Github", link: "https://github.com/vaibhavTekk" },
    { icon: <Instagram />, text: "Instagram", link: "https://www.instagram.com/vaibhavtekk/" },
    { icon: <Linkedin />, text: "Linkedin", link: "https://www.linkedin.com/in/vaibhav-tekkalur" },
  ];

  return (
    <div className="flex flex-col items-start my-12 mx-auto">
      <p className="text-4xl md:text-6xl font-extrabold my-2">Links</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 my-2 mx-auto md:mx-0 w-full">
        {linkList.map(({ icon, link, text }) => {
          return (
            <span key={text} className="flex flex-row items-center justify-start p-2 box bg-v-white">
              <span className="mx-4">{icon}</span>
              <a href={link} target="_blank" rel="noreferrer">
                <span className="text-lg lg:text-xl font-bold underline-hover-3">{text}</span>
              </a>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Links;
