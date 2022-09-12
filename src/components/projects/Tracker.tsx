import React from "react";
// Tooltip
import ReactTooltip from "react-tooltip";
// Icons
import { IoLogoElectron } from "react-icons/io5";
import { ImArrowUpRight2 } from "react-icons/im";
import { FiDownload } from "react-icons/fi";
import { BsWindows } from "react-icons/bs";

const Tracker = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-1 text-2xl font-bold">Tracker App</div>
          <div className="flex items-center font-medium text-gray-500">
            A tracker app (tasks + projects) built with electron
            <IoLogoElectron className="ml-1" />
          </div>
        </div>
        <a
          href="https://reddit-clone-yjuwaheer.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          data-tip
          data-for="tracker"
          className="p-2 text-xl text-gray-400 border-2 rounded-full cursor-pointer bottom-2 right-2 bg-gray-50 hover:border-gray-300 hover:text-black"
        >
          <FiDownload />
        </a>
      </div>
      <div className="my-3 border-b border-gray-200"></div>
      <img
        src="/images/tracker.png"
        alt="tracker"
        className="border border-gray-200 rounded-xl"
      />

      {/* Tooltip Component */}
      <ReactTooltip id="tracker" effect="solid">
        <span className="flex items-center">
          Download <BsWindows className="mx-2" /> App
        </span>
      </ReactTooltip>
    </div>
  );
};

export default Tracker;
