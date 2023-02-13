import React, { useContext } from "react";
// Components
import Tracker from "../components/projects/Tracker";
import Recipe from "../components/projects/Recipe";
import Calculator from "../components/projects/Calculator";
import Board from "../components/projects/Board";
import Design from "../components/projects/Design";
// Context
import { GlobalContext, IGlobalContext } from "../contexts/GlobalContext";

const Projects = () => {
  // Context
  const { darkMode } = useContext<IGlobalContext>(GlobalContext);

  return (
    <div>
      <div
        className={`h-full px-8 py-4 mx-10 overflow-hidden ${
          darkMode ? "bg-neutral-700" : "bg-gray-100"
        } sm:h-96 rounded-xl lg:mx-10 xl:mx-0`}
      >
        <Tracker />
      </div>
      <div className="flex flex-col mx-10 mt-10 lg:flex-row lg:mx-10 xl:mx-0">
        <div
          className={`w-full px-8 py-4 mb-10 overflow-hidden ${
            darkMode ? "bg-neutral-700" : "bg-gray-100"
          } lg:mr-10 lg:w-1/2 h-96 rounded-xl lg:mb-0`}
        >
          <Recipe />
        </div>
        <div
          className={`w-full px-8 py-4 overflow-hidden ${
            darkMode ? "bg-neutral-700" : "bg-gray-100"
          } lg:w-1/2 h-96 rounded-xl`}
        >
          <Calculator />
        </div>
      </div>
      <div className="flex flex-col mx-10 mt-10 lg:flex-row lg:mx-10 xl:mx-0">
        <div
          className={`w-full px-8 py-4 mb-10 overflow-hidden ${
            darkMode ? "bg-neutral-700" : "bg-gray-100"
          } lg:mr-10 lg:w-2/3 h-96 rounded-xl lg:mb-0`}
        >
          <Board />
        </div>
        <div
          className={`w-full px-8 py-4 overflow-hidden ${
            darkMode ? "bg-neutral-700" : "bg-gray-100"
          } lg:w-1/3 h-96 rounded-xl`}
        >
          <Design />
        </div>
      </div>
    </div>
  );
};

export default Projects;
