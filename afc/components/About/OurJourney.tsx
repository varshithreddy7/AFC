"use client";
import React from "react";

const OurJourney: React.FC = () => {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto px-4 py-20">
      <div className="relative w-full h-[636px]">
        <div className="absolute w-[417px] h-[545px] top-[55px] left-[448px]">
          {/* Timeline */}
          <div className="absolute w-[417px] h-[545px] top-0 left-0">
            <img
              className="absolute w-[5px] h-[507px] top-0 left-52"
              alt="Line"
              src="https://c.animaapp.com/v9ACUEeD/img/line-7.svg"
            />
            <div className="absolute w-[110px] h-[110px] top-[22px] left-0 rounded-full border-2 border-solid border-[#ebbd28]" />
            <div className="absolute w-[110px] h-[110px] top-[190px] left-[307px] rounded-full border-2 border-solid border-[#ebbd28] rotate-180" />
            <img
              className="absolute w-24 h-0.5 top-[75px] left-[108px] object-cover"
              alt="Line"
              src="https://c.animaapp.com/v9ACUEeD/img/line-8.svg"
            />
            <img
              className="absolute w-24 h-0.5 top-[243px] left-[213px] object-cover"
              alt="Line"
              src="https://c.animaapp.com/v9ACUEeD/img/line-9.svg"
            />

            {/* Arrows & Polygons */}
            <div className="absolute w-[46px] h-11 top-[54px] left-[203px] rotate-90">
              <div className="relative w-[38px] h-[33px] top-0.5 left-1">
                <img
                  className="w-[26px] h-7 top-[3px] left-[5px] absolute -rotate-90"
                  alt="Polygon"
                  src="https://c.animaapp.com/v9ACUEeD/img/polygon-1.svg"
                />
                <img
                  className="w-[33px] h-[38px] -top-0.5 left-0.5 absolute -rotate-90"
                  alt="Polygon"
                  src="https://c.animaapp.com/v9ACUEeD/img/polygon-2.svg"
                />
              </div>
            </div>

            <div className="absolute w-[46px] h-11 top-[223px] left-[173px] rotate-90">
              <div className="relative w-[38px] h-[33px] top-[9px] left-1">
                <img
                  className="absolute w-[26px] h-7 top-0.5 left-[5px] -rotate-90"
                  alt="Polygon"
                  src="https://c.animaapp.com/v9ACUEeD/img/polygon-1-1.svg"
                />
                <img
                  className="w-[33px] h-[38px] -top-0.5 left-0.5 absolute -rotate-90"
                  alt="Polygon"
                  src="https://c.animaapp.com/v9ACUEeD/img/polygon-2-1.svg"
                />
              </div>
            </div>

            <div className="absolute w-[46px] h-11 top-[501px] left-[186px] rotate-180">
              <div className="relative w-[38px] h-[33px] top-0.5 left-1">
                <img
                  className="absolute w-7 h-[26px] top-1 left-1 -rotate-180"
                  alt="Polygon"
                  src="https://c.animaapp.com/v9ACUEeD/img/polygon-1-2.svg"
                />
                <img
                  className="absolute w-[38px] h-[33px] top-0 left-0 -rotate-180"
                  alt="Polygon"
                  src="https://c.animaapp.com/v9ACUEeD/img/polygon-2-2.svg"
                />
              </div>
            </div>

            {/* Year Labels */}
            <div className="absolute top-14 left-[26px] font-bold text-[#ebbd28] text-2xl tracking-[0] leading-9">
              2022
            </div>
            <div className="absolute top-[225px] left-[333px] font-bold text-[#ebbd28] text-2xl tracking-[0] leading-9">
              2023
            </div>
          </div>

          {/* Image Section */}
          <div className="absolute w-[113px] h-[90px] top-[30px] left-[302px] rounded-tl-[3px] rounded-tr-[3px] bg-[url(https://c.animaapp.com/v9ACUEeD/img/grab--n--go-model-1@2x.png)] bg-cover bg-center" />
          <div className="absolute w-[113px] h-[90px] top-[201px] left-[0.5px] rounded-tl-[3px] rounded-tr-[3px] bg-[url(https://c.animaapp.com/v9ACUEeD/img/grab--n--go-model-1@2x.png)] bg-cover bg-center" />
        </div>

        {/* Title & Description */}
        <div className="absolute top-[105px] left-[899px] font-semibold text-white text-2xl tracking-[0] leading-9">
          Leading Startup Journey
        </div>
        <div className="absolute top-[276px] left-[154px] font-semibold text-white text-2xl tracking-[0] leading-9">
          Leading Startup Journey
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
