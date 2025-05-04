"use client";

import React from "react";

const Team: React.FC = () => {
  return (
    <div className="relative w-full h-auto pt-[50px] px-[20px] py-[20px] sm:px-[100px]">
      <div className="flex justify-center items-center mb-10">
        <div className="font-extrabold text-white text-4xl tracking-[0] leading-[50px] whitespace-nowrap">
          OUR TEAM
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-10 md:gap-20">
        {/* Team Member 1 */}
        <div className="w-[100%] sm:w-[450px] h-[444px] bg-black border-2 border-solid border-[#ebbd28] relative">
          <img
            className="w-full h-[341px] object-cover"
            alt="Image"
            src="https://c.animaapp.com/v9ACUEeD/img/image-48@2x.png"
          />
          <div className="absolute bottom-0 left-0 p-4 font-bold text-white text-xl bg-black bg-opacity-50">
            CHAITANYA VARMA
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="w-[100%] sm:w-[450px] h-[444px] bg-black overflow-hidden border-2 border-solid border-[#ebbd28] relative">
          <img
            className="w-full h-[341px] object-cover"
            alt="Image"
            src="https://c.animaapp.com/v9ACUEeD/img/image-48-1@2x.png"
          />
          <div className="absolute bottom-0 left-0 p-4 font-bold text-white text-xl bg-black bg-opacity-50">
            NARASHIMA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
