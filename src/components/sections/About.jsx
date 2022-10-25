import React from "react";

function About() {
  return (
    <div className="flex flex-col items-start">
      <p className="text-4xl md:text-6xl font-extrabold my-2">About</p>
      <div className="w-full text-lg sm:text-xl md:text-4xl box bg-v-white p-8 md:p-12 my-2">
        <ul>
          <li>• Passionate Programmer</li>
          <li>• I’m a 2nd year Student Pursuing B.Tech CSE in VIT Chennai</li>
          <li>• Currently working on Full Stack Web Development</li>
          <li>• Learning Typescript and Next.js</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
