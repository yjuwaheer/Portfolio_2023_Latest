import React from "react";
// Router
import { useNavigate, useLocation } from "react-router-dom";
// Icons
import { HiOutlineMail } from "react-icons/hi";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  // Hooks
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <div className="flex items-center justify-between mt-10 mb-16">
        <div className="flex flex-col items-center font-semibold text-gray-800">
          Yudish Juwaheer
        </div>
        <div className="flex text-gray-400">
          <a
            href="mailto:yjuwaheer@mun.ca"
            className="mx-2 text-xl cursor-pointer hover:text-gray-800"
          >
            <HiOutlineMail />
          </a>
          <a
            href="https://github.com/yjuwaheer"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-xl cursor-pointer hover:text-gray-800"
          >
            <FaGithubAlt />
          </a>
          <a
            href="https://www.linkedin.com/in/yudishjuwaheer/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-xl cursor-pointer hover:text-gray-800"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="fixed z-50 flex p-2 font-medium -translate-x-1/2 border-2 border-gray-200 rounded-full bottom-5 left-1/2 bg-gray-50">
        <button
          className={`px-4 py-2 mr-2 ${
            pathname === "/" ? "bg-gray-200" : ""
          } rounded-full cursor-pointer hover:bg-gray-200`}
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          className={`flex items-center px-4 py-2 ${
            pathname === "/projects" ? "bg-gray-200" : ""
          } mr-2 rounded-full cursor-pointer hover:bg-gray-200`}
          onClick={() => {
            navigate("/projects");
          }}
        >
          <div className="w-2 h-2 mr-1 bg-green-500 rounded-full"></div>
          Projects
        </button>
        <button
          className={`px-4 py-2 mr-2 ${
            pathname === "/about" ? "bg-gray-200" : ""
          } rounded-full cursor-pointer hover:bg-gray-200`}
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </button>
        <a
          href="/documents/ResumeYudishJuwaheer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200"
        >
          Resume
        </a>
      </nav>
    </>
  );
};

export default Navbar;
