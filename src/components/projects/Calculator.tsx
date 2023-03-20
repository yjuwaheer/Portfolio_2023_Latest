import React, { useState, useContext } from "react";
// Tooltip
import ReactTooltip from "react-tooltip";
// Icons
import { BsCalculatorFill } from "react-icons/bs";
import { SiReact } from "react-icons/si";
import { ImArrowUpRight2 } from "react-icons/im";
// Icons Demo App
import { MdChangeCircle } from "react-icons/md";
// Context
import { GlobalContext } from "../../contexts/GlobalContext";
// Framer Motion
import { motion } from "framer-motion";

const Calculator = () => {
  // States
  const [bgColor, setBgColor] = useState("bg-sky-600");

  // Context
  const { darkMode } = useContext(GlobalContext);

  // Cycle colors
  const cycleColors = () => {
    const colors = [
      "bg-sky-600",
      "bg-red-600",
      "bg-orange-600",
      "bg-indigo-600",
      "bg-green-600",
    ];

    const index = colors.indexOf(bgColor);

    if (index === colors.length - 1) {
      setBgColor(colors[0]);
    } else {
      setBgColor(colors[index + 1]);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <div
            className={`mb-1 text-2xl font-semibold ${
              darkMode ? "text-gray-50" : ""
            }`}
          >
            Calculator App
          </div>
          <div
            className={`hidden font-medium  ${
              darkMode ? "text-gray-100" : "text-gray-500"
            } sm:block`}
          >
            A calculator app built with react
            <SiReact className="inline ml-1" />
          </div>
        </div>
        <a
          href="https://calculator-react-jet.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          data-tip
          data-for="calculator"
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

      {/* Demo App */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="flex justify-center"
      >
        <div className={`w-10/12 sm:w-1/2 lg:w-3/4 ${bgColor} rounded-xl`}>
          <div className="h-28"></div>
          <div className="w-full bg-gray-100 border-b-2"></div>
          <div className="flex justify-around">
            <div className="flex flex-col items-center">
              <MdChangeCircle
                className="mt-4 mb-3 text-2xl font-semibold text-gray-100 cursor-pointer hover:text-gray-300"
                onClick={() => cycleColors()}
              />
              <div className="my-3 text-xl font-semibold text-gray-100">7</div>
              <div className="my-3 text-xl font-semibold text-gray-100">4</div>
              <div className="my-3 text-xl font-semibold text-gray-100">1</div>
              <div className="my-3 text-xl font-semibold text-gray-100">`</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="my-3 text-xl font-semibold text-gray-100">AC</div>
              <div className="my-3 text-xl font-semibold text-gray-100">8</div>
              <div className="my-3 text-xl font-semibold text-gray-100">5</div>
              <div className="my-3 text-xl font-semibold text-gray-100">2</div>
              <div className="my-3 text-xl font-semibold text-gray-100">0</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="my-3 text-xl font-semibold text-gray-100">C</div>
              <div className="my-3 text-xl font-semibold text-gray-100">9</div>
              <div className="my-3 text-xl font-semibold text-gray-100">6</div>
              <div className="my-3 text-xl font-semibold text-gray-100">3</div>
              <div className="my-3 text-xl font-semibold text-gray-100">.</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="px-2 my-3 text-xl font-semibold rounded-full text-amber-500">
                /
              </div>
              <div className="px-2 my-3 text-xl font-semibold rounded-full text-amber-500">
                x
              </div>
              <div className="px-2 my-3 text-xl font-semibold rounded-full text-amber-500">
                -
              </div>
              <div className="px-2 my-3 text-xl font-semibold rounded-full text-amber-500">
                +
              </div>
              <div className="px-2 my-3 text-xl font-semibold rounded-full text-amber-500">
                =
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tooltip Component */}
      <ReactTooltip id="calculator" type={darkMode ? "light" : "dark"}>
        <span className="flex items-center">
          View App <BsCalculatorFill className="mx-2" />
        </span>
      </ReactTooltip>
    </div>
  );
};

export default Calculator;
