import React from "react";
// Components
import Hero from "../components/about/Hero";
import MainCard from "../components/about/MainCard";

const About = () => {
  return (
    <div>
      <Hero />

      {/* Hightlights */}
      <div className="flex flex-col items-center">
        <div className="text-4xl font-semibold text-center">Hi, I'm Yudish</div>
        <div className="px-2 my-2 font-medium text-gray-700 bg-gray-100 border rounded-xl">Currently a Final year student at MUN</div>
        
        <div className="font-semibold mt-14 text-8xl">Passionate</div>
        <div className="mt-4 text-8xl">to craft amazing</div>
        <div className="mt-4 text-8xl">websites</div>
      </div>

      {/* Main card */}
      <MainCard />
    </div>
  );
};

export default About;
