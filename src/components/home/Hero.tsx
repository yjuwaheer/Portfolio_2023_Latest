import React from "react";
// Icons
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";
import { TbArrowRightTail } from "react-icons/tb";

const Hero = () => {
  return (
    <div>
      {/* Me Window section */}
      <div className="flex flex-col w-96 border-2 border-gray-600 rounded-xl">
        <div className="flex justify-between items-center p-3 border-b-2 border-gray-600">
          <div className="font-semibold">Me</div>
          <div className="flex">
            <div className="border border-gray-600 w-4 h-4 rounded-full mx-1"></div>
            <div className="border border-gray-600 w-4 h-4 rounded-full mx-1"></div>
            <div className="border border-gray-600 w-4 h-4 rounded-full ml-1"></div>
          </div>
        </div>
        <div className="flex flex-col p-3 border-b-2 border-gray-600">
          <div className="text-2xl font-semibold">
            Hello, I'm Yudish, a software developer, based in St. John's,
            Newfoundland, Canada. <FaCanadianMapleLeaf className="inline" />
          </div>
          <div className="mt-4 text-lg font-medium text-gray-800">
            I'm obssessed with web development{" "}
            <GiSpiderWeb className="inline" />, and I'm always looking for
            opportunities to learn more about it.
          </div>
        </div>
        <div className="flex justify-between items-center p-3 pr-5 rounded-b-xl hover:bg-gray-100 hover:cursor-pointer hover:pr-3">
          <div className="text-xl font-semibold">Lets' Talk</div>
          <TbArrowRightTail className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
