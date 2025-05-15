"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  property1: "frame-40" | "frame-39";
  className?: string;
}

const Component: React.FC<Props> = ({ property1, className = "" }) => {
  const [isFrame39, setIsFrame39] = useState(property1 === "frame-39");

  // Toggle between frames in a loop
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFrame39((prev) => !prev);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full max-w-[740px] aspect-[740/534] ${className}`}>
      {/* Animated Image */}
      <div className="relative w-full h-[493px] overflow-hidden">
        <AnimatePresence mode="wait">
          {isFrame39 ? (
            <motion.img
              key="frame-39"
              src="https://c.animaapp.com/v9ACUEeD/img/image-65-1.png"
              alt="Ambiance Visual Frame 39"
              className="absolute w-full h-full object-cover"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          ) : (
            <motion.img
              key="frame-40"
              src="https://c.animaapp.com/v9ACUEeD/img/image-66.png"
              alt="Ambiance Visual Frame 40"
              className="absolute w-full h-full object-cover"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Animated Dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-10 py-2">
        <motion.div
          className={`w-5 h-5 rounded-[10px] ${
            isFrame39 ? "bg-[#ebbd28]" : "bg-white border border-[#ebbd28]"
          }`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className={`w-5 h-5 rounded-[10px] ${
            isFrame39 ? "bg-white border border-[#ebbd28]" : "bg-[#ebbd28]"
          }`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};

export default Component;