import React from "react";
// Icons
import { HiCursorClick } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="flex justify-center">
      {/* Avatar and cursors */}
      <div className="relative w-max">
        <img src="notion_avatar_transparent_cropped.png" alt="avatar" />
        <div className="absolute flex bottom-10 -right-8">
          <HiCursorClick className="mr-1 text-gray-700 " />
          <div className="px-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-xl">
            Developer
          </div>
        </div>
        <div className="absolute flex bottom-16 -left-6">
          <div className="px-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-xl">
            Student
          </div>
          <HiCursorClick className="ml-1 text-gray-700 rotate-90" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
