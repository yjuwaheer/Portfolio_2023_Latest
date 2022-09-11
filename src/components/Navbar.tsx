import React from "react";
// Icons
import { HiOutlineMail } from "react-icons/hi";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between mt-10 mb-16 items-center">
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
    </nav>
  );
};

export default Navbar;
