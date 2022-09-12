import React from "react";
// Components
import Tracker from "../components/projects/Tracker";

const Projects = () => {
  return (
    <div>
      <div className="w-full px-8 py-4 overflow-hidden bg-gray-100 h-96 rounded-xl">
        <Tracker />
      </div>
      <div className="flex mt-10">
        <div className="w-1/2 mr-10 bg-gray-100 h-96 rounded-xl"></div>
        <div className="w-1/2 bg-gray-100 h-96 rounded-xl"></div>
      </div>
      <div className="flex mt-10">
        <div className="w-2/3 mr-10 bg-gray-100 h-96 rounded-xl"></div>
        <div className="w-1/3 bg-gray-100 h-96 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Projects;
