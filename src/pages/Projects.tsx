import React from "react";
// Components
import Tracker from "../components/projects/Tracker";
import Recipe from "../components/projects/Recipe";
import Calculator from "../components/projects/Calculator";

const Projects = () => {
  return (
    <div>
      <div className="w-full px-8 py-4 overflow-hidden bg-gray-100 h-96 rounded-xl">
        <Tracker />
      </div>
      <div className="flex mt-10">
        <div className="w-1/2 px-8 py-4 mr-10 overflow-hidden bg-gray-100 h-96 rounded-xl">
          <Recipe />
        </div>
        <div className="w-1/2 px-8 py-4 overflow-hidden bg-gray-100 h-96 rounded-xl">
          <Calculator />
        </div>
      </div>
      <div className="flex mt-10">
        <div className="w-2/3 px-8 py-4 mr-10 overflow-hidden bg-gray-100 h-96 rounded-xl"></div>
        <div className="w-1/3 px-8 py-4 overflow-hidden bg-gray-100 h-96 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Projects;
