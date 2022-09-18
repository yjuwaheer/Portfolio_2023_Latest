import React, { useState } from "react";
// Tooltip
import ReactTooltip from "react-tooltip";
// Icons
import { BsCalculatorFill } from "react-icons/bs";
import { SiReact } from "react-icons/si";
import { ImArrowUpRight2 } from "react-icons/im";
// Icons Demo App
import { MdChangeCircle } from "react-icons/md";

const Calculator = () => {
  const [bgColor, setBgColor] = useState("bg-sky-600");

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
          <div className="mb-1 text-2xl font-semibold">Calculator App</div>
          <div className="hidden font-medium text-gray-500 sm:block">
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
          className="p-2 text-xl text-gray-400 border-2 rounded-full cursor-pointer bottom-2 right-2 bg-gray-50 hover:border-gray-300 hover:text-black"
        >
          <ImArrowUpRight2 />
        </a>
      </div>
      <div className="my-3 border border-gray-200"></div>

      {/* Demo App */}
      <div className="flex justify-center">
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
      </div>

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
