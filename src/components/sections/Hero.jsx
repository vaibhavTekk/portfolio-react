import React from "react";
import profilepic from "../../assets/images/profilepic.png";
import Typing from "../Typing";

function Hero() {
  return (
    <div className="flex flex-row items-center my-8 mb-12 md:mt-32 md:mb-48 w-full h-fit">
      <div className=" w-full pl-4 md:pl-12 pr-4 sm:pr-24 py-12 md:py-24 text-xl md:text-3xl lg:text-6xl text-center sm:text-left flex flex-col gap-1 bg-v-white box">
        <p>Hi ! 👋</p>
        <p>
          I&apos;m <span className="font-bold underline-hover-6 -p-1">Vaibhav Tekkalur</span>
        </p>
        <Typing className="text-xl md:text-3xl lg:text-6xl"></Typing>
      </div>
      <span className="hidden sm:flex box -ml-16 z-20 text-[0px]">
        <img
          className="h-[128px] w-[128px] md:h-[256px] md:w-[256px] object-cover"
          src={profilepic}
          alt="profile pic"
        ></img>
      </span>
    </div>
  );
}

export default Hero;
