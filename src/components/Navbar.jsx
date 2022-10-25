import React from "react";
import { GitHub } from "react-feather";

function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center h-24 px-12 py-8 w-full">
      <span className="text-2xl font-bold">Vaibhav Tekkalur</span>
      <ul className="flex flex-row gap-2 text-2xl font-bold">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
      </ul>
      <ul className="justify-self-end">
        <a href="https://github.com/vaibhavTekk" target="_blank" rel="noreferrer">
          <div className="hover:bg-v-white bg-v-blue box w-10 h-10 flex flex-col justify-center items-center">
            <GitHub size="24"></GitHub>
          </div>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
