"use client";
import Image from "next/image";
import Component from "./Component";

const Abimance = () => {
  return (
    <section className="w-full  py-20">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
        {/* Left Side: Experience */}
        <div className="flex-1">
          <h2 className="text-[#ebbd28] text-4xl sm:text-5xl font-bold mb-6">
            Experience Our Ambiance
          </h2>

          <div className="h-1 w-72 bg-[#ebbd28] mb-8" />

          <p className="text-white text-lg leading-8 max-w-lg mb-12">
            Step into a world where modern elegance meets timeless comfort. Our carefully curated
            spaces are designed to enhance your dining experience, creating memorable moments in an
            atmosphere of sophisticated luxury.
          </p>

          <div className="space-y-6">
            {[
              "Intimate Private Dining Rooms",
              "Scenic Outdoor Terrace",
              "Elegant Bar & Lounge",
              "Curated Wine Cellar",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div className="bg-[#ebbd28] w-10 h-10 rounded-full flex items-center justify-center">
                  <Image
                    src="https://c.animaapp.com/v9ACUEeD/img/frame-3.svg"
                    alt="Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-white text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Categories */}
        <div className="flex-1">
          <h3 className="text-white text-3xl font-extrabold mb-6">Categories</h3>

          <div className="flex flex-wrap gap-6 mb-12">
            <div className="bg-[#ebbd28] rounded-full px-8 py-4">
              <span className="text-black text-2xl font-semibold">Shamshabad</span>
            </div>
            <div>
              <span className="text-white text-2xl font-semibold">Shivarampally</span>
            </div>
          </div>

          <div className="mt-10 flex justify-center lg:justify-start">
            <Component property1="frame-39" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abimance;
