import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="relative w-[1440px] h-[130px]">
      <img
        className="w-32 h-32 top-0 left-0 absolute object-cover"
        alt="Image"
        src="https://c.animaapp.com/X56oiYEi/img/image-2@2x.png"
      />

      <div className="absolute w-[610px] h-12 top-[41px] left-[415px]">
        <div className="relative h-12">
          <div className="w-[137px] top-px left-0 flex items-center justify-center gap-2.5 p-2.5 absolute">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-black text-[#ebbd28] text-xl text-center tracking-[2.00px] leading-[27px] whitespace-nowrap">
              HOME
            </div>
          </div>

          <div className="w-[137px] top-0 left-[158px] flex items-center justify-center gap-2.5 p-2.5 absolute">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-black text-white text-xl text-center tracking-[2.00px] leading-[27px] whitespace-nowrap">
              ABOUT
            </div>
          </div>

          <div className="w-[138px] top-px left-[315px] flex items-center justify-center gap-2.5 p-2.5 absolute">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-black text-white text-xl text-center tracking-[2.00px] leading-[27px] whitespace-nowrap">
              MENU
            </div>
          </div>

          <div className="w-[137px] top-px left-[473px] flex items-center justify-center gap-2.5 p-2.5 absolute">
            <p className="relative w-fit mt-[-1.00px] ml-[-9.00px] mr-[-9.00px] [font-family:'Nunito',Helvetica] font-normal text-white text-xl text-center tracking-[2.00px] leading-[27px] whitespace-nowrap">
              <span className="font-black tracking-[0.40px]">franCHISE</span>

              <span className="tracking-[0.40px]">&nbsp;</span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute w-16 h-[5px] top-[89px] left-[451px]">
        <div className="absolute w-[3px] h-[5px] top-0 left-[30px] bg-[#ebbd28] rounded-[1.57px/2.5px]" />

        <Image
          className="left-0 absolute w-[25px] h-[3px] top-0"
          alt="Line"
          src="https://c.animaapp.com/X56oiYEi/img/line-1.svg"
          width={25}
          height={3}
        />

        <img
          className="left-[39px] absolute w-[25px] h-[3px] top-0"
          alt="Line"
          src="https://c.animaapp.com/X56oiYEi/img/line-2.svg"
        />
      </div>

      <div className="absolute w-[305px] h-[77px] top-[23px] left-[1100px]">
        <div className="relative w-[303px] h-[77px] bg-[#ebbd28] rounded-[30px]">
          <div className="absolute w-[149px] top-[17px] left-[62px] [font-family:'Nunito',Helvetica] font-black text-black text-xl tracking-[0] leading-[50px] whitespace-nowrap">
            ORDER NOW
          </div>

          <img
            className="w-[90px] h-[60px] top-2 left-[211px] absolute object-cover"
            alt="Image"
            src="https://c.animaapp.com/X56oiYEi/img/image-54@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;