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
        className="relative mb-2 w-max"
      >
        <img
          src={
            darkMode
              ? "/notion_avatar_transparent_cropped_light.png"
              : "/notion_avatar_transparent_cropped.png"
          }
          alt="avatar"
          className="min-h-[30px]"
        />
        <div className="absolute flex bottom-6 -right-10">
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
            Building apps
          </div>
        </div>
        <div className="absolute flex bottom-14 -left-8">
          <div
            className={`px-2 text-sm font-medium ${
              darkMode
                ? "bg-neutral-700 text-gray-50"
                : "text-gray-600 bg-gray-100"
            } rounded-xl`}
          >
            Developer
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
