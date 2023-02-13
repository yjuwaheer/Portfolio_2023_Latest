import React, { useRef, useContext } from "react";
// React sketch canvas
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
// Tooltip
import ReactTooltip from "react-tooltip";
// Icons
import { FaChalkboard } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ImArrowUpRight2 } from "react-icons/im";
// Icons Demo App
import { GrPowerReset } from "react-icons/gr";
import { IoMdSave } from "react-icons/io";
// Context
import { GlobalContext, IGlobalContext } from "../../contexts/GlobalContext";

const Board = () => {
  // Hooks
  const canvasRef = useRef<ReactSketchCanvasRef>(null);

  // Context
  const { darkMode } = useContext<IGlobalContext>(GlobalContext);

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <div
            className={`mb-1 text-2xl font-semibold ${
              darkMode ? "text-gray-50" : ""
            }`}
          >
            Whiteboard App
          </div>
          <div
            className={`hidden font-medium  ${
              darkMode ? "text-gray-100" : "text-gray-500"
            } sm:block`}
          >
            A collaboration board built with nodejs
            <FaNodeJs className="inline ml-1" />
          </div>
        </div>
        <a
          href="https://hackfrostwhiteboard-production.up.railway.app/trial"
          target="_blank"
          rel="noopener noreferrer"
          data-tip
          data-for="board"
          className={`p-2 text-xl border-2 rounded-full cursor-pointer bottom-2 right-2 ${
            darkMode
              ? "text-gray-300 bg-neutral-800 border-neutral-200 hover:border-white hover:text-gray-50"
              : "text-gray-400 bg-gray-50 hover:border-gray-300 hover:text-black"
          } `}
        >
          <ImArrowUpRight2 />
        </a>
      </div>
      <div className="my-3 w-full h-[2px] rounded-full bg-gray-200 "></div>

      {/* Menu */}
      <div className="absolute z-10 flex -translate-x-1/2 top-[21rem] left-1/2 bg-gray-100 rounded-xl border border-gray-200">
        <div
          className={`px-2 py-1 mr-1 rounded-full cursor-pointer hover:bg-gray-300`}
          onClick={() => {
            canvasRef?.current?.clearCanvas();
          }}
        >
          <GrPowerReset />
        </div>
        <div
          className={`px-2 py-1 rounded-full cursor-pointer hover:bg-gray-300`}
          onClick={async () => {
            const svgData = await canvasRef?.current?.exportSvg();
            const downloadLink = document.createElement("a");
            downloadLink.download = "whiteboard.svg";
            downloadLink.href =
              "data:image/svg+xml;base64," + window.btoa(svgData!);
            downloadLink.click();
          }}
        >
          <IoMdSave />
        </div>
      </div>

      {/* Demo App */}
      <div className="flex justify-center">
        <div className="border-8 border-gray-700 sm:w-10/12 rounded-xl">
          <div className="border-4 border-gray-500 rounded-sm h-96">
            <ReactSketchCanvas
              ref={canvasRef}
              style={{ border: "none" }}
              strokeWidth={4}
              strokeColor="black"
              backgroundImage="/images/board_grid.jpg"
            />
          </div>
        </div>
      </div>

      {/* Tooltip Component */}
      <ReactTooltip id="board" type={darkMode ? "light" : "dark"}>
        <span className="flex items-center">
          View App <FaChalkboard className="mx-2" />
        </span>
      </ReactTooltip>
    </div>
  );
};

export default Board;
