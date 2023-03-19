import React, { useState, useContext } from "react";
// Tooltip
import ReactTooltip from "react-tooltip";
// Icons
import { BsYoutube } from "react-icons/bs";
import { SiSfml } from "react-icons/si";
import { ImArrowUpRight2 } from "react-icons/im";
// Icons Demo Game
import { AiOutlineGif } from "react-icons/ai";
import { IoImage, IoImages } from "react-icons/io5";
// Context
import { GlobalContext } from "../../contexts/GlobalContext";

const MadWizard = () => {
  // States
  const [tab, setTab] = useState("wgif");

  // Context
  const { darkMode } = useContext(GlobalContext);

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <div
            className={`mb-1 text-2xl font-semibold ${
              darkMode ? "text-gray-50" : ""
            }`}
          >
            Mad Wizard
          </div>
          <div
            className={`hidden font-medium  ${
              darkMode ? "text-gray-100" : "text-gray-500"
            } sm:block`}
          >
            A game built with C++ & SFML
            <SiSfml className="inline ml-1" />
          </div>
        </div>
        <a
          href="https://www.youtube.com/watch?v=PsfP5HsXaV0"
          target="_blank"
          rel="noopener noreferrer"
          data-tip
          data-for="wizard"
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
          className={`px-2 py-1 rounded-full cursor-pointer ${
            tab === "wgif" ? "bg-gray-300" : ""
          } hover:bg-gray-300`}
          onClick={() => {
            setTab("wgif");
          }}
        >
          <AiOutlineGif />
        </div>
        <div
          className={`px-2 py-1 mr-1 rounded-full cursor-pointer ${
            tab === "w1" ? "bg-gray-300" : ""
          } hover:bg-gray-300`}
          onClick={() => {
            setTab("w1");
          }}
        >
          <IoImage />
        </div>
        <div
          className={`px-2 py-1 mr-1 rounded-full cursor-pointer ${
            tab === "w2" ? "bg-gray-300" : ""
          } hover:bg-gray-300`}
          onClick={() => {
            setTab("w2");
          }}
        >
          <IoImages />
        </div>
      </div>

      {/* Demo Game */}
      <div className="flex justify-center">
        <img
          src="/images/wizard.gif"
          alt="wizardgif"
          className={`rounded-xl ${
            tab === "wgif" ? "opacity-100" : "opacity-0 hidden"
          }`}
        />
        <img
          src="/images/wizard1.png"
          alt="wizard1"
          className={`rounded-xl ${
            tab === "w1" ? "opacity-100" : "opacity-0 hidden"
          }`}
        />
        <img
          src="/images/wizard2.png"
          alt="wizard2"
          className={`rounded-xl ${
            tab === "w2" ? "opacity-100" : "opacity-0 hidden"
          }`}
        />
      </div>

      {/* Tooltip Component */}
      <ReactTooltip id="wizard" type={darkMode ? "light" : "dark"}>
        <span className="flex items-center">
          Watch Trailer <BsYoutube className="mx-2" />
        </span>
      </ReactTooltip>
    </div>
  );
};

export default MadWizard;
