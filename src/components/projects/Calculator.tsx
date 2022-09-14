import React from "react";
// Tooltip
import ReactTooltip from "react-tooltip";
// Icons
import { BsCalculatorFill } from "react-icons/bs";
import { SiReact } from "react-icons/si";
import { ImArrowUpRight2 } from "react-icons/im";
// Icons Demo App
import { IoMdHome, IoMdSearch, IoMdAddCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";

const Calculator = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-1 text-2xl font-bold">Calculator App</div>
          <div className="flex items-center font-medium text-gray-500">
            A calculator app built with react
            <SiReact className="ml-1" />
          </div>
        </div>
        <a
          href="https://calculator-react-jet.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          data-tip
          data-for="calculator"
          className="p-2 text-xl text-gray-400 border-2 rounded-full cursor-pointer bottom-2 right-2 bg-gray-50 hover:border-gray-300 hover:text-black"
        >
          <ImArrowUpRight2 />
        </a>
      </div>
      <div className="my-3 border-b border-gray-200"></div>

      {/* Menu */}
      <div className="absolute z-50 flex -translate-x-1/2 top-[21rem] left-1/2 bg-gray-100 rounded-xl border border-gray-200"></div>

      {/* Demo App */}
      <div className="flex justify-center"></div>

      {/* Tooltip Component */}
      <ReactTooltip id="calculator">
        <span className="flex items-center">
          View App <BsCalculatorFill className="mx-2" />
        </span>
      </ReactTooltip>
    </div>
  );
};

export default Calculator;
