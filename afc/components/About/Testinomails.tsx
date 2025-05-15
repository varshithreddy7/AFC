"use client";

import React from "react";

const Testinomails: React.FC = () => {
  return (
    <div className="relative w-full h-[503px] overflow-hidden">
      <div
        className="absolute w-[800px] h-[403px] left-[320px] top-[50px] px-[40px] rounded-[5px]" // Added rounded-[5px] here
        style={{
          position: "absolute",
          width: "800px",
          height: "403px",
          left: "320px",
          top: "50px",
        }}
      >
        <div className="relative w-full h-[435px] bg-[url(https://c.animaapp.com/v9ACUEeD/img/image.svg)] bg-cover bg-center rounded-[5px]">
          {/* Title */}
          <div className="absolute top-[55px] left-[50%] transform -translate-x-[50%] font-bold text-black text-[32px] text-center leading-[48px]">
            What Our Guests Say
          </div>

          {/* Left Arrow */}
          <div className="absolute top-[211px] left-[0px] font-normal text-black text-2xl text-center leading-9">
            ←
          </div>

          {/* Testimonial Text */}
          <p className="absolute w-[90%] max-w-[900px] top-[138px] left-[50%] transform -translate-x-[50%] font-normal text-black text-xl text-center leading-[30px]">
            The best pasta I&#39;ve ever had! Fresh ingredients and authentic
            Italian flavors. The service was impeccable.
          </p>

          {/* Guest Name */}
          <div className="absolute top-[219px] left-[50%] transform -translate-x-[50%] font-semibold text-black text-lg text-center leading-[27px]">
            Emily Parker
          </div>

          {/* Guest Dish */}
          <div className="absolute top-[255px] left-[50%] transform -translate-x-[50%] font-normal text-[#333333] text-base text-center leading-6">
            Loved our Fettuccine Alfredo
          </div>

          {/* Star Rating */}
          <div className="absolute top-[286px] left-[50%] transform -translate-x-[50%] font-normal text-black text-2xl text-center leading-9">
            ★★★★★
          </div>

          {/* Right Arrow */}
          <div className="absolute top-[211px] right-[40px] font-normal text-black text-2xl text-center leading-9">
            →
          </div>

          {/* Dot Indicator */}
          <div className="absolute w-2 h-2 top-[355px] left-[50%] transform -translate-x-[50%] rounded-full bg-black" />
        </div>
      </div>
    </div>
  );
};

export default Testinomails;