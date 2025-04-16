"use client";

import * as React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {

  return (
    <div className="relative w-full h-[442px] bg-[#1e1e1e]">
      <div className="absolute w-[1423px] h-[198px] top-[90px] left-14">
        <div className="absolute w-[1423px] h-[198px] top-0 left-0">
          <div className="relative w-[1417px] h-[202px] -top-0.5 -left-0.5">
            <div className="left-10 absolute w-[475px] h-[202px] top-0 bg-[#1e1e1e] border-2 border-solid border-[#ebbd28]" />

            <div className="left-[471px] absolute w-[475px] h-[202px] top-0 bg-[#1e1e1e] border-2 border-solid border-[#ebbd28]" />

            <div className="left-[942px] absolute w-[475px] h-[202px] top-0 bg-[#1e1e1e] border-2 border-solid border-[#ebbd28]" />

            <p className="absolute top-[61px] left-14 [font-family:'Inter',Helvetica] font-semibold text-[#ffffff80] text-base tracking-[2.00px] leading-10 whitespace-nowrap">
              {" "}
              🕛&nbsp;&nbsp;Open At : 12.00 PM&nbsp;&nbsp;To&nbsp;&nbsp;11.00 PM
            </p>

            <div className="absolute top-[101px] left-[94px] [font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-[2.00px] leading-10 whitespace-nowrap">
              ✉ Afcindiaofficial@gmail.com
            </div>

            <div className="absolute top-[107px] left-[558px] [font-family:'Inter',Helvetica] font-semibold text-[#ebbd28] text-2xl tracking-[2.00px] leading-10 whitespace-nowrap">
              Absolutely Fried Chicken
            </div>

            <div className="absolute top-[136px] left-[708px] [font-family:'Inter',Helvetica] font-semibold text-white text-sm tracking-[2.00px] leading-10 whitespace-nowrap">
              Where Tastes Matter .....
            </div>

            <p className="absolute w-[414px] top-[37px] left-[972px] [font-family:'Nunito',Helvetica] font-normal text-transparent text-base leading-[31px]">
              <span className="font-black text-white tracking-[0.32px]">
                For Franchise
              </span>
              <br />
              <span className="font-semibold text-white tracking-[0.32px]">
                {"  "}Contact:
              </span>
              <br />


              <span className="font-semibold text-[#ebbd28] tracking-[0.32px]">
                📞 Call +91 76 740 73004 - Chaitanya Varma
              </span>
              <br />


              <span className="font-semibold text-[#ebbd28] tracking-[0.32px]">
                📞 Call +91 95050 66245 - Narasimha
              </span>
            </p>
          </div>
        </div>

        <img
          className="absolute w-[113px] h-[113px] top-0 left-[668px] object-cover rounded-full"
          alt="Image"
          src="/images/Afc-logo.png"
        />
      </div>

      <div className="absolute w-[477px] h-[50px] top-[329px] left-[522px]">
        <p className="absolute top-[23px] left-0 [font-family:'Inter',Helvetica] font-bold text-[#ebbd28] text-lg text-center tracking-[4.00px] leading-[27px] whitespace-nowrap">
          © 2025 ALL RIGHTS RESERVED BY AFC
        </p>

        <img
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200px] h-[3px]" // Tailwind class equivalent to w-200 and h-3 (12px)
          alt="Image"
          src="/images/afc-footer-img.jpg"
        />
      </div>
    </div>
  );
};

export default Footer;