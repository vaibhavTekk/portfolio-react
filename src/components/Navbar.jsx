import React from "react";
import { GitHub } from "react-feather";


function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center px-12 py-4 w-full sticky top-0 z-50 backdrop-blur-sm">
      <span className="text-lg md:text-2xl font-bold">Vaibhav Tekkalur</span>
      {/*
      <ul className="hidden md:flex flex-row gap-2 text-2xl font-bold backdrop">
        <li>
          Home
          <Link to="hero" spy={true} smooth={true} offset={50} duration={500}></Link>
        </li>
        <li>
          <ScrollLink to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </ScrollLink>
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
      </ul>
      */}
      <ul className="justify-self-end flex flex-row items-center justify-center">
        <li>
          <a href="https://github.com/vaibhavTekk" target="_blank" rel="noreferrer">
            <div className="hover:bg-v-white bg-v-blue box w-10 h-10 flex flex-col justify-center items-center">
              <GitHub size="24"></GitHub>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
