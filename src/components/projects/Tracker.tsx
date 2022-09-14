import React, { useState } from "react";
// Tooltip
import ReactTooltip from "react-tooltip";
// Icons
import { IoLogoElectron } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { BsWindows } from "react-icons/bs";
// Icons Demo App
import { BiHome } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GoProject } from "react-icons/go";
import { FcTodoList } from "react-icons/fc";

const Tracker = () => {
  // States
  const [tab, setTab] = useState("dashboard");

  return (
    <div className="overflow-hidden">
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

      {/* Demo App */}
      <div className="flex">
        {/* Menu */}
        <div className="flex flex-col justify-between bg-white rounded-l-xl">
          <div>
            <div className="flex items-center justify-center h-24 mb-4 text-xl font-bold bg-gray-50 rounded-l-xl">
              <FcTodoList className="text-4xl" />
            </div>

            <div
              className={`flex items-center px-8 py-2 mx-3 my-2 font-semibold outline-none cursor-pointer rounded-xl hover:bg-red-500 hover:text-white ${
                tab === "dashboard" ? "bg-red-500 text-white" : "text-gray-600"
              }`}
              onClick={() => setTab("dashboard")}
            >
              <BiHome />
              <div className="pl-1">Dashboard</div>
            </div>

            <div
              className={`flex items-center px-8 py-2 mx-3 my-2 font-semibold outline-none cursor-pointer rounded-xl hover:bg-red-500 hover:text-white ${
                tab === "tasks" ? "bg-red-500 text-white" : "text-gray-600"
              }`}
              onClick={() => setTab("tasks")}
            >
              <FaTasks />
              <div className="pl-1">Tasks</div>
            </div>

            <div
              className={`flex items-center px-8 py-2 mx-3 my-2 font-semibold outline-none cursor-pointer rounded-xl hover:bg-red-500 hover:text-white ${
                tab === "projects" ? "bg-red-500 text-white" : "text-gray-600"
              }`}
              onClick={() => setTab("projects")}
            >
              <GoProject />
              <div className="pl-1">Projects</div>
            </div>

            <div
              className={`flex items-center px-8 py-2 mx-3 my-2 font-semibold outline-none cursor-pointer rounded-xl hover:bg-red-500 hover:text-white ${
                tab === "settings" ? "bg-red-500 text-white" : "text-gray-600"
              }`}
              onClick={() => setTab("settings")}
            >
              <FiSettings />
              <div className="pl-1">Settings</div>
            </div>
          </div>
        </div>
        {/* Demo App Sections */}
        <div>
          <img
            src="/images/tracker1.png"
            alt="tracker1"
            className={`rounded-r-xl ${
              tab === "dashboard" ? "opacity-100" : "opacity-0 hidden"
            }`}
          />
          <img
            src="/images/tracker2.png"
            alt="tracker2"
            className={`rounded-r-xl ${
              tab === "tasks" ? "opacity-100" : "opacity-0 hidden"
            }`}
          />
          <img
            src="/images/tracker3.png"
            alt="tracker3"
            className={`rounded-r-xl ${
              tab === "projects" ? "opacity-100" : "opacity-0 hidden"
            }`}
          />
          <img
            src="/images/tracker4.png"
            alt="tracker4"
            className={`rounded-r-xl ${
              tab === "settings" ? "opacity-100" : "opacity-0 hidden"
            }`}
          />
        </div>
      </div>

      {/* Tooltip Component */}
      <ReactTooltip id="tracker">
        <span className="flex items-center">
          Download <BsWindows className="mx-2" /> App
        </span>
      </ReactTooltip>
    </div>
  );
};

export default Tracker;
