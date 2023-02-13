import React, { useContext } from "react";
// Router
import { useNavigate } from "react-router-dom";
// Icons
import { HiOutlineEmojiSad } from "react-icons/hi";
// Context
import { GlobalContext, IGlobalContext } from "../contexts/GlobalContext";

const Error = () => {
  // Hooks
  const navigate = useNavigate();

  // Context
  const { darkMode } = useContext<IGlobalContext>(GlobalContext);

  return (
    <div className="flex flex-col items-center justify-center mx-10 md:mx-0">
      <div
        className={`mb-10 font-semibold ${
          darkMode ? "text-gray-50" : "text-gray-900"
        } text-8xl`}
      >
        404
      </div>
      <div
        className={`text-6xl ${darkMode ? "text-gray-50" : "text-gray-900"}`}
      >
        Oops!
      </div>
      <div className="my-3 text-xl font-semibold text-center text-orange-400 md:font-medium md:text-4xl">
        Something went wrong <HiOutlineEmojiSad className="inline" />
      </div>
      <div
        className={`text-lg text-center ${
          darkMode ? "text-gray-100" : "text-gray-900"
        } md:text-2xl`}
      >
        Don't worry, click the{" "}
        <span
          className="font-bold text-orange-400 cursor-pointer hover:underline underline-offset-2"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </span>{" "}
        button
      </div>
    </div>
  );
};

export default Error;
