import React, { useState } from "react";
// Tooltip
import ReactTooltip from "react-tooltip";
// Icons
import { GoMarkGithub } from "react-icons/go";
import { SiExpo } from "react-icons/si";
import { ImArrowUpRight2 } from "react-icons/im";
// Icons Demo App
import { IoMdHome } from "react-icons/io";
import { MdFavorite } from "react-icons/md";

const Design = () => {
  // States
  const [tab, setTab] = useState("home");

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-1 text-2xl font-bold">Design App</div>
          <div className="hidden font-medium text-gray-500 sm:block">
            Design resources
            <SiExpo className="inline ml-1" />
          </div>
        </div>
        <a
          href="https://github.com/yjuwaheer/React_Native_DesRsc"
          target="_blank"
          rel="noopener noreferrer"
          data-tip
          data-for="design"
          className="p-2 text-xl text-gray-400 border-2 rounded-full cursor-pointer bottom-2 right-2 bg-gray-50 hover:border-gray-300 hover:text-black"
        >
          <ImArrowUpRight2 />
        </a>
      </div>
      <div className="my-3 border border-gray-200"></div>

      {/* Menu */}
      <div className="absolute z-10 flex -translate-x-1/2 top-[21rem] left-1/2 bg-gray-100 rounded-xl border border-gray-200">
        <div
          className={`px-2 py-1 mr-1 rounded-full cursor-pointer ${
            tab === "home" ? "bg-gray-300" : ""
          } hover:bg-gray-300`}
          onClick={() => {
            setTab("home");
          }}
        >
          <IoMdHome />
        </div>
        <div
          className={`px-2 py-1 rounded-full cursor-pointer ${
            tab === "fav" ? "bg-gray-300" : ""
          } hover:bg-gray-300`}
          onClick={() => {
            setTab("fav");
          }}
        >
          <MdFavorite />
        </div>
      </div>

      {/* Demo App */}
      <div className="flex justify-center">
        <img
          src="/images/design1_mob.png"
          alt="design1"
          className={`w-3/4 sm:w-1/2 lg:w-3/4 ${
            tab === "home" ? "opacity-100" : "opacity-0 hidden"
          }`}
        />
        <img
          src="/images/design2_mob.png"
          alt="design1"
          className={`w-3/4 sm:w-1/2 lg:w-3/4 ${
            tab === "fav" ? "opacity-100" : "opacity-0 hidden"
          }`}
        />
      </div>

      {/* Tooltip Component */}
      <ReactTooltip id="design">
        <span className="flex items-center">
          View Repo <GoMarkGithub className="mx-2" />
        </span>
      </ReactTooltip>
    </div>
  );
};

export default Design;
