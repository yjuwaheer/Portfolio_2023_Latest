import React, { useContext } from "react";
// Router
import { useNavigate, useLocation } from "react-router-dom";
// Icons
import { HiOutlineMail } from "react-icons/hi";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { MdLightMode, MdNightlight } from "react-icons/md";
// Context
import { GlobalContext, IGlobalContext } from "../../contexts/GlobalContext";

const Navbar = () => {
  // Hooks
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Context
  const { darkMode, handleDarkMode } =
    useContext<IGlobalContext>(GlobalContext);

  return (
    <>
      <div className="flex items-center justify-between mx-10 mt-10 mb-16 lg:mx-10 xl:mx-0">
        <div
          className={`flex flex-col items-center text-sm font-semibold ${
            darkMode ? "text-gray-50" : "text-gray-800"
          } cursor-pointer sm:text-base`}
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        >
          Yudish Juwaheer
        </div>
        <div className={`flex ${darkMode ? "text-gray-50" : "text-gray-400"}`}>
          {darkMode ? (
            <MdLightMode
              className={`mx-2 text-xl cursor-pointer ${
                darkMode ? "hover:text-gray-300" : "hover:text-gray-800"
              } hover:text-gray-800`}
              onClick={() => {
                handleDarkMode(false);
              }}
            />
          ) : (
            <MdNightlight
              className="mx-2 text-xl cursor-pointer hover:text-gray-800"
              onClick={() => {
                handleDarkMode(true);
              }}
            />
          )}
          <a
            href="mailto:yjuwaheer@mun.ca"
            className={`mx-2 text-xl cursor-pointer ${
              darkMode ? "hover:text-gray-300" : "hover:text-gray-800"
            }`}
          >
            <HiOutlineMail />
          </a>
          <a
            href="https://github.com/yjuwaheer"
            target="_blank"
            rel="noopener noreferrer"
            className={`mx-2 text-xl cursor-pointer ${
              darkMode ? "hover:text-gray-300" : "hover:text-gray-800"
            }`}
          >
            <FaGithubAlt />
          </a>
          <a
            href="https://www.linkedin.com/in/yudishjuwaheer/"
            target="_blank"
            rel="noopener noreferrer"
            className={`mx-2 text-xl cursor-pointer ${
              darkMode ? "hover:text-gray-300" : "hover:text-gray-800"
            }`}
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed z-50 flex p-1 font-medium -translate-x-1/2 border-2  rounded-full bottom-5 left-1/2 ${
          darkMode
            ? "bg-neutral-300 border-gray-50"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <button
          className={`px-3 sm:px-4 py-2 mr-2 ${
            pathname === "/" ? "bg-gray-200 text-black" : "text-gray-600"
          } rounded-full cursor-pointer hover:bg-gray-200 text-sm sm:text-base font-semibold hover:text-black`}
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        >
          Home
        </button>
        <button
          className={`flex items-center px-3 sm:px-4 py-2 ${
            pathname === "/projects"
              ? "bg-gray-200 text-black"
              : "text-gray-600"
          } mr-2 rounded-full cursor-pointer hover:bg-gray-200 text-sm sm:text-base font-semibold hover:text-black`}
          onClick={() => {
            navigate("/projects");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-2 h-2 mr-1 bg-green-500 rounded-full"></div>
          Projects
        </button>
        <button
          className={`px-3 sm:px-4 py-2 mr-2 ${
            pathname === "/about" ? "bg-gray-200 text-black" : "text-gray-600"
          } rounded-full cursor-pointer hover:bg-gray-200 text-sm sm:text-base font-semibold hover:text-black`}
          onClick={() => {
            navigate("/about");
            window.scrollTo(0, 0);
          }}
        >
          About
        </button>
        <a
          href="/documents/ResumeYudishJuwaheer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 text-sm font-semibold text-gray-600 rounded-full cursor-pointer sm:px-4 hover:bg-gray-200 sm:text-base hover:text-black"
        >
          Resume
        </a>
      </nav>
    </>
  );
};

export default Navbar;
