"use client";
import React from "react";

interface Props {
  property1: "frame-40" | "frame-39";
  className?: string;
}

const Component: React.FC<Props> = ({ property1, className = "" }) => {
  const isFrame39 = property1 === "frame-39";
  const activeColor = isFrame39 ? "#ebbd28" : "white";
  const inactiveColor = isFrame39 ? "white" : "#ebbd28";

  return (
    <div className={`relative w-full max-w-[740px] aspect-[740/534] ${className}`}>
      <img
        src={
          isFrame39
            ? "https://c.animaapp.com/v9ACUEeD/img/image-65-1.png"
            : "https://c.animaapp.com/v9ACUEeD/img/image-66.png"
        }
        alt="Ambiance Visual"
        className="w-full h-[493px] object-cover"
      />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-10 py-2">
        <div className="w-5 h-5 rounded-[10px]" style={{ backgroundColor: isFrame39 ? activeColor : inactiveColor }} />
        <div className="w-5 h-5 rounded-[10px]" style={{ backgroundColor: isFrame39 ? inactiveColor : activeColor }} />
      </div>
    </div>
  );
};

export default Component;
