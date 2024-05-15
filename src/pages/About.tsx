import React, { useContext } from "react";
// Components
import Hero from "../components/about/Hero";
import MainCard from "../components/about/MainCard";
// Context
import { GlobalContext, IGlobalContext } from "../contexts/GlobalContext";
// Framer Motion
import { motion } from "framer-motion";

const About = () => {
  // Context
  const { darkMode } = useContext<IGlobalContext>(GlobalContext);

  return (
    <div>
      <Hero />

      {/* Hightlights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.1 }}
        className="flex flex-col items-center"
      >
        <div
          className={`text-4xl font-semibold text-center ${
            darkMode ? "text-gray-50" : ""
          }`}
        >
          Hi, I'm Yudish
        </div>
        <div
          className={`px-2 my-2 font-medium ${
            darkMode
              ? "text-gray-50 bg-neutral-700"
              : "text-gray-700 bg-gray-100"
          } border rounded-xl
          `}
        >
          Currently a Software Developer I
        </div>

        <div
          className={`flex flex-col items-center ${
            darkMode ? "text-gray-50" : ""
          }`}
        >
          <div className="text-5xl font-semibold sm:text-6xl mt-14 lg:text-8xl">
            Passionate
          </div>
          <div className="mt-4 text-5xl text-center sm:text-6xl lg:text-8xl">
            at crafting
          </div>
          <div className="mt-4 text-5xl sm:text-6xl lg:text-8xl">websites</div>
        </div>
      </motion.div>

      {/* Main card */}
      <MainCard />
    </div>
  );
};

export default About;
