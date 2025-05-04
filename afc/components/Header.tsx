"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  { name: "HOME", href: "/", left: 350 },
  { name: "ABOUT", href: "/about", left: 500 },
  { name: "MENU", href: "/menu", left: 650 },
  { name: "FRANCHISE", href: "/franchise", left: 800 },
  {name:"GALLERY", href:"/gallery", left: 1000},
];

const Header = () => {
  const [activeTab, setActiveTab] = useState("HOME");

  const getLeft = (tab: string) => {
    const found = tabs.find((t) => t.name === tab);
    return found ? found.left : 451;
  };

  return (
    <div className="relative w-full h-[130px] bg-[#141414] ">
      <Link href="/">
      
      <img
        className="w-32 h-32 top-0 left-0 absolute object-cover"
        alt="Logo"
        src="https://c.animaapp.com/X56oiYEi/img/image-2@2x.png"
      />
      </Link>

      {/* NAVIGATION */}
      <div className="absolute w-[610px] h-12 top-[41px] left-[415px]">
        <div className="relative h-12">
          {tabs.map((tab) => (
            <Link href={tab.href} key={tab.name} onClick={() => setActiveTab(tab.name)}>
              <div
                className="w-[137px] flex items-center justify-center gap-2.5 p-2.5 absolute cursor-pointer"
                style={{ left: `${tab.left - 451}px` }}
              >
                <div
                  className={`relative w-fit font-black text-xl text-center tracking-[2px] leading-[27px] whitespace-nowrap ${
                    activeTab === tab.name ? "text-[#ebbd28]" : "text-white"
                  }`}
                >
                  {tab.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* UNDERLINE IMAGE INDICATOR */}
      <div
        className="absolute w-16 h-[5px] top-[89px] transition-all duration-300 ease-in-out"
        style={{ left: `${getLeft(activeTab)}px` }}
      >
        <div className="absolute w-[3px] h-[5px] top-0 left-[30px] bg-[#ebbd28] rounded-[1.57px/2.5px]" />
        <Image
          className="left-0 absolute w-[25px] h-[3px] top-0"
          alt="Line1"
          src="https://c.animaapp.com/X56oiYEi/img/line-1.svg"
          width={25}
          height={3}
        />
        <img
          className="left-[39px] absolute w-[25px] h-[3px] top-0"
          alt="Line2"
          src="https://c.animaapp.com/X56oiYEi/img/line-2.svg"
        />
      </div>

      {/* ORDER NOW BUTTON */}
      <div className="absolute w-[305px] h-[77px] top-[23px] left-[1200px]">
        <div className="relative w-[303px] h-[77px] bg-[#ebbd28] rounded-[30px]">
          <div className="absolute w-[149px] top-[17px] left-[62px] font-black text-black text-xl leading-[50px]">
            ORDER NOW
          </div>
          <img
            className="w-[90px] h-[60px] top-2 left-[211px] absolute object-cover"
            alt="Order"
            src="https://c.animaapp.com/X56oiYEi/img/image-54@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
