import React, { useContext } from "react";
// Icons
import { HiCursorClick } from "react-icons/hi";
// Context
import { GlobalContext, IGlobalContext } from "../../contexts/GlobalContext";
// Framer Motion
import { motion } from "framer-motion";

const Hero = () => {
  // Context
  const { darkMode } = useContext<IGlobalContext>(GlobalContext);

  return (
    <div className="flex justify-center">
      {/* Avatar and cursors */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="relative w-max"
      >
        <img
          src={
            darkMode
              ? "/notion_avatar_transparent_cropped_light.png"
              : "/notion_avatar_transparent_cropped.png"
          }
          alt="avatar"
        />
        <div className="absolute flex bottom-10 -right-8">
          <HiCursorClick
            className={`mr-1 ${darkMode ? "text-gray-50" : "text-gray-700"}`}
          />
          <div
            className={`px-2 text-sm font-medium ${
              darkMode
                ? "bg-neutral-700 text-gray-50"
                : "text-gray-600 bg-gray-100"
            } rounded-xl`}
          >
            Developer
          </div>
        </div>
        <div className="absolute flex bottom-16 -left-6">
          <div
            className={`px-2 text-sm font-medium ${
              darkMode
                ? "bg-neutral-700 text-gray-50"
                : "text-gray-600 bg-gray-100"
            } rounded-xl`}
          >
            Student
          </div>
          <HiCursorClick
            className={`ml-1 ${
              darkMode ? "text-gray-50" : "text-gray-700"
            } rotate-90`}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
