import React, { useContext } from "react";
// Components
import Tracker from "../components/projects/Tracker";
import Recipe from "../components/projects/Recipe";
import Calculator from "../components/projects/Calculator";
import Board from "../components/projects/Board";
import Design from "../components/projects/Design";
import MadWizard from "../components/projects/MadWizard";
// Context
import { GlobalContext, IGlobalContext } from "../contexts/GlobalContext";
// Framer Motion
import { motion } from "framer-motion";

const Projects = () => {
  // Context
  const { darkMode } = useContext<IGlobalContext>(GlobalContext);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className={`h-full px-8 py-4 mx-10 overflow-hidden ${
          darkMode ? "bg-neutral-700" : "bg-gray-100"
        } sm:h-96 rounded-xl lg:mx-10 xl:mx-0`}
      >
        <Tracker />
      </motion.div>
      <div className="flex flex-col mx-10 mt-10 lg:flex-row lg:mx-10 xl:mx-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
          className={`w-full px-8 py-4 mb-10 overflow-hidden ${
            darkMode ? "bg-neutral-700" : "bg-gray-100"
          } lg:mr-10 lg:w-1/2 h-96 rounded-xl lg:mb-0`}
        >
          <Recipe />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.2 }}
          className={`w-full px-8 py-4 overflow-hidden ${
            darkMode ? "bg-neutral-700" : "bg-gray-100"
          } lg:w-1/2 h-96 rounded-xl`}
        >
          <Calculator />
        </motion.div>
      </div>
      <div className="flex flex-col mx-10 mt-10 lg:flex-row lg:mx-10 xl:mx-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.3 }}
          className={`w-full px-8 py-4 mb-10 overflow-hidden ${
            darkMode ? "bg-neutral-700" : "bg-gray-100"
          } lg:mr-10 lg:w-2/3 h-96 rounded-xl lg:mb-0`}
        >
          <Board />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.4 }}
          className={`w-full px-8 py-4 overflow-hidden ${
            darkMode ? "bg-neutral-700" : "bg-gray-100"
          } lg:w-1/3 h-96 rounded-xl`}
        >
          <Design />
        </motion.div>
      </div>
      <div className="flex flex-col mx-10 mt-10 lg:flex-row lg:mx-10 xl:mx-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.5 }}
          className={`h-full w-full px-8 py-4 overflow-hidden ${
            darkMode ? "bg-neutral-700" : "bg-gray-100"
          } lg:w-1/2 sm:h-96 rounded-xl`}
        >
          <MadWizard />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
