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
        <div className="px-2 my-2 font-medium text-gray-700 bg-gray-100 border rounded-xl">
          Recent Graduate from{" "}
          <a
            href="https://mun.ca/"
            target="_blank"
            rel="noreferrer noopener"
            className="underline-offset-2 hover:underline"
          >
            MUN
          </a>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-5xl font-semibold sm:text-6xl mt-14 lg:text-8xl">
            Passionate
          </div>
          <div className="mt-4 text-5xl text-center sm:text-6xl lg:text-8xl">
            at crafting
          </div>
          <div className="mt-4 text-5xl sm:text-6xl lg:text-8xl">websites</div>
        </div>
      </div>

      {/* Main card */}
      <MainCard />
    </div>
  );
};

export default About;
