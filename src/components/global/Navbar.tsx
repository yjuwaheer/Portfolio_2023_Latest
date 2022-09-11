import React from "react";
// Icons
import { HiOutlineMail } from "react-icons/hi";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between mt-10 mb-16 items-center">
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
      <nav className="flex fixed bottom-5 left-1/2 -translate-x-1/2 p-2 bg-gray-50 border-2 border-gray-200 rounded-full font-medium">
        <button className="bg-gray-200 px-4 py-2 mr-2 rounded-full hover:bg-gray-200 cursor-pointer">
          Home
        </button>
        <button className="flex items-center px-4 py-2 mr-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <div className="w-2 h-2 mr-1 rounded-full bg-green-500"></div>
          Projects
        </button>
        <button className="px-4 py-2 mr-2 rounded-full hover:bg-gray-200 cursor-pointer">
          About
        </button>
        <button className="px-4 py-2 rounded-full hover:bg-gray-200 cursor-pointer">
          Resume
        </button>
      </nav>
    </>
  );
};

export default Navbar;
