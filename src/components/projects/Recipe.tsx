import React, { useState } from "react";
// Tooltip
import ReactTooltip from "react-tooltip";
// Icons
import { GoMarkGithub } from "react-icons/go";
import { SiExpo } from "react-icons/si";
import { ImArrowUpRight2 } from "react-icons/im";
// Icons Demo App
import { IoMdHome, IoMdSearch, IoMdAddCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";

const Recipe = () => {
  // States
  const [tab, setTab] = useState("home");

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-1 text-2xl font-bold">Recipe App</div>
          <div className="hidden font-medium text-gray-500 sm:block">
            A recipe app built with react native (expo)
            <SiExpo className="inline ml-1" />
          </div>
        </div>
        <a
          href="https://github.com/yjuwaheer/Recipe_App"
          target="_blank"
          rel="noopener noreferrer"
          data-tip
          data-for="recipe"
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
          className={`px-2 py-1 mr-1 rounded-full cursor-pointer ${
            tab === "search" ? "bg-gray-300" : ""
          } hover:bg-gray-300`}
          onClick={() => {
            setTab("search");
          }}
        >
          <IoMdSearch />
        </div>
        <div
          className={`px-2 py-1 mr-1 rounded-full cursor-pointer ${
            tab === "add" ? "bg-gray-300" : ""
          } hover:bg-gray-300`}
          onClick={() => {
            setTab("add");
          }}
        >
          <IoMdAddCircleOutline />
        </div>
        <div
          className={`px-2 py-1 mr-1 rounded-full cursor-pointer ${
            tab === "profile" ? "bg-gray-300" : ""
          } hover:bg-gray-300`}
          onClick={() => {
            setTab("profile");
          }}
        >
          <CgProfile />
        </div>
        <div
          className={`px-2 py-1 rounded-full cursor-pointer ${
            tab === "settings" ? "bg-gray-300" : ""
          } hover:bg-gray-300`}
          onClick={() => {
            setTab("settings");
          }}
        >
          <FiSettings />
        </div>
      </div>

      {/* Demo App */}
      <div className="flex justify-center">
        <img
          src="/images/recipe1_mob.png"
          alt="recipe1"
          className={`w-3/4 ${
            tab === "home" ? "opacity-100" : "opacity-0 hidden"
          }`}
        />
        <img
          src="/images/recipe2_mob.png"
          alt="recipe1"
          className={`w-3/4 ${
            tab === "search" ? "opacity-100" : "opacity-0 hidden"
          }`}
        />
        <img
          src="/images/recipe3_mob.png"
          alt="recipe1"
          className={`w-3/4 ${
            tab === "add" ? "opacity-100" : "opacity-0 hidden"
          }`}
        />
        <img
          src="/images/recipe4_mob.png"
          alt="recipe1"
          className={`w-3/4 ${
            tab === "profile" ? "opacity-100" : "opacity-0 hidden"
          }`}
        />
        <img
          src="/images/recipe5_mob.png"
          alt="recipe1"
          className={`w-3/4 ${
            tab === "settings" ? "opacity-100" : "opacity-0 hidden"
          }`}
        />
      </div>

      {/* Tooltip Component */}
      <ReactTooltip id="recipe">
        <span className="flex items-center">
          View Repo <GoMarkGithub className="mx-2" />
        </span>
      </ReactTooltip>
    </div>
  );
};

export default Recipe;
