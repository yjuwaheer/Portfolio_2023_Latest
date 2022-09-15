import React from "react";
// Icons
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { GiIsland } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { ImHeart } from "react-icons/im";
import { BsEmojiSmile } from "react-icons/bs";

const MainCard = () => {
  return (
    <div className="flex justify-center mt-16">
      <div className="flex flex-col w-1/2 px-8 py-4 bg-gray-100 rounded-xl">
        <div className="text-xl font-semibold text-gray-700">
          My brief story till now...
        </div>

        <div className="my-3 border"></div>

        <div className="flex items-start mb-4">
          <div>
            <IoIosArrowDroprightCircle className="mt-1 mr-2" />
          </div>
          <div className="font-medium text-gray-600">
            Born and raised in Mauritius{" "}
            <GiIsland className="inline mb-1 ml-1" />. For those wondering it's
            in the Indian Ocean. If you ever get the chance, I highly recommend
            visiting. Completed high school back home. Afterwards moved to NL,
            Canada to pursue a B.Sc. at MUN{" "}
            <FaUniversity className="inline mb-1 ml-1" />.
          </div>
        </div>

        <div className="flex items-start mb-4">
          <div>
            <IoIosArrowDroprightCircle className="mt-1 mr-2" />
          </div>
          <div className="font-medium text-gray-600">
            I am currently completing my major in Computer Science{" "}
            <RiComputerFill className="inline mb-1 ml-1" />. I have always been
            fascinated by computers especially the internet. I really love
            building websites and bring ideas to life.
          </div>
        </div>

        <div className="flex mb-4 italic text-gray-400">
          ~ More chapters waiting to be written...{" "}
          <div className="ml-1 text-gray-800 animate-pulse">|</div>
        </div>

        <div className="text-gray-800">
          Everything that I am today is because of my Dad. I am very grateful
          for his constant support. <ImHeart className="inline mx-1 mb-1" />{" "}
          <BsEmojiSmile className="inline mb-1" />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
