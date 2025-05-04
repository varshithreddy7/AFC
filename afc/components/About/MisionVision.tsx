"use client";
import React from "react";

const MissionVision: React.FC = () => {
  return (
    <section className="relative w-full max-w-screen-xl mx-auto px-4 py-20 flex flex-col items-center">
      {/* Mission + Vision Tabs */}
      <div className="flex gap-6 mb-10">
        <div className="bg-[#ebbd28] rounded px-6 py-3 font-bold text-black text-xl">
          Our Mission
        </div>
        <div className="border border-[#ebbd28] rounded px-6 py-3 font-bold text-[#ebbd28] text-xl">
          Our Vision
        </div>
      </div>

      {/* Mission + Image Flex Row */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 w-full">
        {/* Mission Box */}
        <div className="bg-[#151414] border border-[#ebbd28] rounded p-8 w-full lg:w-[48%] text-white">
          <h2 className="text-[#ebbd28] text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl mb-6">
            To revolutionize the food industry through innovative cooking
            techniques, premium ingredients, and exceptional customer service.
          </p>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[#ebbd28] text-2xl leading-none">✓</span>
              <span>Delivering culinary excellence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#ebbd28] text-2xl leading-none">✓</span>
              <span>Maintaining highest quality standards</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#ebbd28] text-2xl leading-none">✓</span>
              <span>Creating memorable experiences</span>
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-[48%]">
          <img
            src="https://c.animaapp.com/v9ACUEeD/img/image-80@2x.png"
            alt="Mission Visual"
            className="w-full h-auto rounded object-cover"
          />

          {/* Stats Overlay */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-opacity-80 rounded-lg pt-18 flex justify-between w-[300px]">
            <div className="text-center">
              <div className="text-4xl">👨</div>
              <div className="text-[#ebbd28] font-bold text-xl">100K+</div>
            </div>
            <div className="text-center">
              <div className="text-4xl">🏪</div>
              <div className="text-[#ebbd28] font-bold text-xl">50+</div>
            </div>
            <div className="text-center">
              <div className="text-4xl">🏆</div>
              <div className="text-[#ebbd28] font-bold text-xl">25+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
