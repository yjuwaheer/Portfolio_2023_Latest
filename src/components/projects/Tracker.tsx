import React, { useState, useContext } from "react";
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
// Context
import { GlobalContext, IGlobalContext } from "../../contexts/GlobalContext";

const Tracker = () => {
  // States
  const [tab, setTab] = useState("dashboard");

  // Context
  const { darkMode } = useContext<IGlobalContext>(GlobalContext);

  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <div
            className={`mb-1 text-2xl font-semibold ${
              darkMode ? "text-gray-50" : ""
            }`}
          >
            Tracker App
          </div>
          <div
            className={`hidden font-medium  ${
              darkMode ? "text-gray-100" : "text-gray-500"
            } sm:block`}
          >
            A tracker app (tasks + projects) built with electron
            <IoLogoElectron className="inline ml-1" />
          </div>
        </div>
        <a
          href="/documents/Tracker.Setup.1.0.0.exe"
          target="_blank"
          rel="noopener noreferrer"
          data-tip
          data-for="tracker"
          className={`p-2 text-xl border-2 rounded-full cursor-pointer bottom-2 right-2 ${
            darkMode
              ? "text-gray-300 bg-neutral-800 border-neutral-200 hover:border-white hover:text-gray-50"
              : "text-gray-400 bg-gray-50 hover:border-gray-300 hover:text-black"
          } `}
        >
          <FiDownload />
        </a>
      </div>
      <div className="my-3 w-full h-[2px] rounded-full bg-gray-200 "></div>

      {/* Demo App */}
      <div className="flex">
        {/* Menu */}
        <div className="flex-col justify-between hidden bg-white md:flex rounded-l-xl">
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
        <div className="border rounded-xl md:rounded-none md:border-0">
          <img
            src="/images/tracker1.png"
            alt="tracker1"
            className={`rounded-xl md:rounded-r-xl md:rounded-l-none ${
              tab === "dashboard" ? "opacity-100" : "opacity-0 hidden"
            }`}
          />
          <img
            src="/images/tracker2.png"
            alt="tracker2"
            className={`rounded-xl md:rounded-r-xl md:rounded-l-none ${
              tab === "tasks" ? "opacity-100" : "opacity-0 hidden"
            }`}
          />
          <img
            src="/images/tracker3.png"
            alt="tracker3"
            className={`rounded-xl md:rounded-r-xl md:rounded-l-none ${
              tab === "projects" ? "opacity-100" : "opacity-0 hidden"
            }`}
          />
          <img
            src="/images/tracker4.png"
            alt="tracker4"
            className={`rounded-xl md:rounded-r-xl md:rounded-l-none ${
              tab === "settings" ? "opacity-100" : "opacity-0 hidden"
            }`}
          />
        </div>
      </div>

      {/* Tooltip Component */}
      <ReactTooltip id="tracker" type={darkMode ? "light" : "dark"}>
        <span className="flex items-center">
          Download <BsWindows className="mx-2" /> App
        </span>
      </ReactTooltip>
    </div>
  );
};

export default Tracker;
