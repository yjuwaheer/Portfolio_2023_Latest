import React from "react";
// Components
import ModelViewer from "../global/ModelViewer";
// Icons
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";
import { TbArrowRightTail } from "react-icons/tb";
import { MdFullscreenExit, MdFullscreen, MdClose } from "react-icons/md";

const Hero = () => {
  return (
    <div className="flex items-center mx-10 lg:justify-around xl:justify-between lg:mx-10 xl:mx-0">
      {/* Me Window section */}
      <div className="flex flex-col sm:w-[600px] lg:w-[400px] border-2 border-gray-600 rounded-xl">
        <div className="flex items-center justify-between p-3 border-b-2 border-gray-600">
          <div className="font-semibold">Me</div>
          <div className="flex">
            <div className="w-4 h-4 mx-1 text-sm text-white border border-gray-600 rounded-full cursor-pointer hover:bg-yellow-500">
              <MdFullscreenExit />
            </div>
            <div className="w-4 h-4 mx-1 text-sm text-white border border-gray-600 rounded-full cursor-pointer hover:bg-green-500">
              <MdFullscreen />
            </div>
            <div className="w-4 h-4 ml-1 text-sm text-white border border-gray-600 rounded-full cursor-pointer hover:bg-red-500">
              <MdClose />
            </div>
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
            opportunities to learn more.
          </div>
        </div>
        <a
          href="mailto:yjuwaheer@mun.ca"
          className="flex items-center justify-between p-3 pr-5 rounded-b-xl hover:bg-gray-100 hover:cursor-pointer hover:pr-3"
        >
          <div className="text-xl font-semibold">Let's Talk</div>
          <TbArrowRightTail className="text-3xl" />
        </a>
      </div>

      {/* 3D Model */}
      <div className="lg:w-[350px] xl:w-[700px] hidden lg:block h-80">
        <ModelViewer
          scale="3.5"
          position={[-0.7, -0.7, 0]}
          rotation={[0.2, 0.7, 0]}
          modelPath={"/images/pixel_laptop.glb"}
        />
      </div>
    </div>
  );
};

export default Hero;
