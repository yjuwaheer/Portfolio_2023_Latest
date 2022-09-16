import React from "react";
// Icons
import { AiOutlineNumber } from "react-icons/ai";
import { ImArrowUpRight2 } from "react-icons/im";

const Featured = () => {
  return (
    <div className="flex flex-col items-center lg:items-stretch lg:mx-10 xl:mx-0">
      <div className="mt-16 mb-3 text-4xl font-bold text-gray-400">
        Featured
      </div>
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="relative px-5 py-10 bg-gray-100 mb-7 lg:mb-0 w-96 h-80 lg:w-1/3 xl:w-96 rounded-xl">
          <div className="flex items-center justify-center w-16 p-1 text-3xl font-semibold text-white bg-blue-400 rounded-xl">
            <AiOutlineNumber /> 1
          </div>
          <div className="my-5 text-2xl font-semibold text-gray-800">
            Trading App
          </div>
          <div className="text-gray-500">
            A web app made for my web development university course. It allows
            users to trade with in-built virtual currency.
          </div>
          <a
            href="https://cs3100tradingapp-production.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute p-2 text-xl text-gray-400 border-2 rounded-full cursor-pointer bottom-2 right-2 bg-gray-50 hover:border-gray-300 hover:text-black"
          >
            <ImArrowUpRight2 />
          </a>
        </div>

        <div className="relative px-5 py-10 bg-gray-100 mb-7 lg:mb-0 w-96 h-80 lg:w-1/3 xl:w-96 rounded-xl lg:mx-5">
          <div className="flex items-center justify-center w-16 p-1 text-3xl font-semibold text-white bg-amber-400 rounded-xl">
            <AiOutlineNumber /> 2
          </div>
          <div className="my-5 text-2xl font-semibold text-gray-800">
            Forum App
          </div>
          <div className="text-gray-500">
            A web app for users to ask questions. Tried to replicate Reddit.
          </div>
          <a
            href="https://reddit-clone-yjuwaheer.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute p-2 text-xl text-gray-400 border-2 rounded-full cursor-pointer bottom-2 right-2 bg-gray-50 hover:border-gray-300 hover:text-black"
          >
            <ImArrowUpRight2 />
          </a>
        </div>

        <div className="relative px-5 py-10 bg-gray-100 w-96 h-80 lg:w-1/3 xl:w-96 rounded-xl">
          <div className="flex items-center justify-center w-16 p-1 text-3xl font-semibold text-white bg-orange-400 rounded-xl">
            <AiOutlineNumber /> 3
          </div>
          <div className="my-5 text-2xl font-semibold text-gray-800">
            Todo App
          </div>
          <div className="text-gray-500">
            A web app to store and organize tasks in 4 categories. Uses local
            storage to persist data.
          </div>
          <a
            href="https://todo-app-react-kappa.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute p-2 text-xl text-gray-400 border-2 rounded-full cursor-pointer bottom-2 right-2 bg-gray-50 hover:border-gray-300 hover:text-black"
          >
            <ImArrowUpRight2 />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Featured;
