import React, { useContext } from "react";
// Icons
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { GiIsland, GiPaintBrush } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { ImHeart } from "react-icons/im";
import { BsEmojiSmile } from "react-icons/bs";
import { TbMathFunction } from "react-icons/tb";
// Context
import { GlobalContext, IGlobalContext } from "../../contexts/GlobalContext";
// Framer Motion
import { motion } from "framer-motion";

const MainCard = () => {
  // Context
  const { darkMode } = useContext<IGlobalContext>(GlobalContext);

  return (
    <div className="flex justify-center mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.2 }}
        className={`flex flex-col w-full px-8 py-4 mx-10 ${
          darkMode ? "bg-neutral-700" : "bg-gray-100"
        } lg:w-1/2 rounded-xl lg:mx-0`}
      >
        <div
          className={`text-xl font-semibold ${
            darkMode ? "text-gray-50" : "text-gray-700"
          }`}
        >
          My brief story till now...
        </div>

        <div className="my-3 border"></div>

        <div className="flex items-start mb-4">
          <div>
            <IoIosArrowDroprightCircle
              className={`mt-1 mr-2 ${darkMode ? "text-gray-50" : ""}`}
            />
          </div>
          <div
            className={`font-medium ${
              darkMode ? "text-gray-100" : "text-gray-600"
            }`}
          >
            Born and raised in Mauritius{" "}
            <GiIsland className="inline mb-1 ml-1" />. For those wondering it's
            in the Indian Ocean. If you ever get the chance, I highly recommend
            visiting. Completed high school back home. Afterwards moved to NL,
            Canada to pursue a B.Sc. at{" "}
            <a
              href="https://mun.ca/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline-offset-2 hover:underline"
            >
              MUN
            </a>{" "}
            <FaUniversity className="inline mb-1 ml-1" />.
          </div>
        </div>

        <div className="flex items-start mb-4">
          <div>
            <IoIosArrowDroprightCircle
              className={`mt-1 mr-2 ${darkMode ? "text-gray-50" : ""}`}
            />
          </div>
          <div
            className={`font-medium ${
              darkMode ? "text-gray-100" : "text-gray-600"
            }`}
          >
            I recently graduated with a major in Computer Science{" "}
            <RiComputerFill className="inline mb-1 ml-1" /> and a minor in
            Mathematics <TbMathFunction className="inline mb-1 ml-1" />. I have
            always been fascinated by computers especially the internet. I
            really love building websites and bringing ideas to life.
          </div>
        </div>

        <div className="flex items-start mb-4">
          <div>
            <IoIosArrowDroprightCircle
              className={`mt-1 mr-2 ${darkMode ? "text-gray-50" : ""}`}
            />
          </div>
          <div
            className={`font-medium ${
              darkMode ? "text-gray-100" : "text-gray-600"
            }`}
          >
            In terms of jobs, the first ever place I worked was in a paint brush{" "}
            factory back home <GiPaintBrush className="inline mb-1 ml-1" />.
            Here in Canada, I have held a few jobs from working for{" "}
            <a
              href="https://www.walmart.ca/en"
              target="_blank"
              rel="noreferrer noopener"
              className="underline-offset-2 hover:underline"
            >
              Walmart
            </a>{" "}
            to{" "}
            <a
              href="https://www.blood.ca/en"
              target="_blank"
              rel="noreferrer noopener"
              className="underline-offset-2 hover:underline"
            >
              Canadian Blood Services
            </a>
            . All my jobs have taught me something useful and I am thankful for
            all the experiences.
          </div>
        </div>

        <div
          className={`mb-4 italic ${
            darkMode ? "text-gray-300" : "text-gray-400"
          }`}
        >
          ~ More chapters waiting to be written...{" "}
          <div
            className={`inline ml-1 ${
              darkMode ? "text-gray-300" : "text-gray-800"
            } animate-blink`}
          >
            |
          </div>
        </div>

        <div className={darkMode ? "text-gray-100" : "text-gray-800"}>
          Everything that I am today is because of my Dad. I am very grateful
          for his constant support. <ImHeart className="inline mx-1 mb-1" />{" "}
          <BsEmojiSmile className="inline mb-1" />
        </div>
      </motion.div>
    </div>
  );
};

export default MainCard;
