import React from "react";
// Tooltip
import ReactTooltip from "react-tooltip";
// Icons
import { BiChalkboard } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { ImArrowUpRight2 } from "react-icons/im";
// Icons Demo App
import { MdChangeCircle } from "react-icons/md";

const Board = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-1 text-2xl font-semibold">Whiteboard App</div>
          <div className="flex items-center font-medium text-gray-500">
            A collaboration board built with nodejs
            <FaNodeJs className="ml-1" />
          </div>
        </div>
        <a
          href="https://hackfrostwhiteboard-production.up.railway.app/trial"
          target="_blank"
          rel="noopener noreferrer"
          data-tip
          data-for="board"
          className="p-2 text-xl text-gray-400 border-2 rounded-full cursor-pointer bottom-2 right-2 bg-gray-50 hover:border-gray-300 hover:text-black"
        >
          <ImArrowUpRight2 />
        </a>
      </div>
      <div className="my-3 border-b border-gray-200"></div>

      {/* Demo App */}
      <div className="flex justify-center"></div>

      {/* Tooltip Component */}
      <ReactTooltip id="board">
        <span className="flex items-center">
          View App <BiChalkboard className="mx-2" />
        </span>
      </ReactTooltip>
    </div>
  );
};

export default Board;
