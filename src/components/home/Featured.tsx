import React from "react";
// Icons
import { AiOutlineNumber } from "react-icons/ai";

const Featured = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-16 mb-3 text-4xl font-bold text-gray-400">
        Featured
      </div>
      <div className="flex justify-between">
        <div className="h-80 w-96 px-5 py-10 bg-gray-100 rounded-xl">
          <div className="flex justify-center items-center w-16 p-1 text-3xl font-semibold text-white bg-blue-400 rounded-xl">
            <AiOutlineNumber /> 1
          </div>
          <div className="text-2xl my-5 font-semibold text-gray-800">
            Trading App
          </div>
          <div className="text-gray-500">
            A web app made for my web development university course. It allows
            users to trade with in-built virtual currency.
          </div>
        </div>

        <div className="h-80 w-96 px-5 py-10 bg-gray-100 rounded-xl">
          <div className="flex justify-center items-center w-16 p-1 text-3xl font-semibold text-white bg-amber-400 rounded-xl">
            <AiOutlineNumber /> 2
          </div>
          <div className="text-2xl my-5 font-semibold text-gray-800">
            Forum App
          </div>
          <div className="text-gray-500">
            A forum web app for users to ask questions. Tried to replicate Reddit.
          </div>
        </div>

        <div className="h-80 w-96 px-5 py-10 bg-gray-100 rounded-xl">
          <div className="flex justify-center items-center w-16 p-1 text-3xl font-semibold text-white bg-orange-400 rounded-xl">
            <AiOutlineNumber /> 3
          </div>
          <div className="text-2xl my-5 font-semibold text-gray-800">
            Todo App
          </div>
          <div className="text-gray-500">
            A todo web app to store your tasks. Uses local storage to persist data.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
