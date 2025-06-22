"use client";
import Image from "next/image";
import Component from "./Component";
import { motion, useInView } from "framer-motion";
import React from "react";

const Abimance = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full py-16 px-4 sm:px-6"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side */}
        <motion.div variants={containerVariants} className="flex-1">
          <motion.h2
            variants={itemVariants}
            className="text-[#ebbd28] text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
          >
            Experience Our Ambiance
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="h-1 w-32 sm:w-64 bg-[#ebbd28] mb-6 sm:mb-8"
          />

          <motion.p
            variants={itemVariants}
            className="text-white text-base sm:text-lg leading-7 sm:leading-8 max-w-xl mb-10"
          >
            Step into a world where modern elegance meets timeless comfort. Our carefully curated
            spaces are designed to enhance your dining experience, creating memorable moments in an
            atmosphere of sophisticated luxury.
          </motion.p>

          <motion.div variants={containerVariants} className="space-y-4 sm:space-y-6">
            {[
              "Intimate Private Dining Rooms",
              "Scenic Outdoor Terrace",
              "Elegant Bar & Lounge",
              "Curated Wine Cellar",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-center space-x-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#ebbd28] w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <Image
                    src="https://c.animaapp.com/v9ACUEeD/img/frame-3.svg"
                    alt="Check Icon"
                    width={24}
                    height={24}
                  />
                </motion.div>
                <span className="text-white text-base sm:text-lg">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div variants={containerVariants} className="flex-1">
          <motion.h3
            variants={itemVariants}
            className="text-white text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6"
          >
            Categories
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-[#ebbd28] hover:cursor-pointer rounded-full px-6 py-3 sm:px-8 sm:py-4 hover:bg-[#d4a91f] transition duration-300"
            >
              <span className="text-black text-lg sm:text-2xl font-semibold">Shamshabad</span>
            </motion.button>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-transparent hover:cursor-pointer border border-[#ebbd28] rounded-full px-6 py-3 sm:px-8 sm:py-4 hover:bg-[#ebbd28] hover:text-black transition duration-300"
            >
              <span className="text-white text-lg sm:text-2xl font-semibold">Shivarampally</span>
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-6 sm:mt-10 flex justify-center lg:justify-start"
          >
            <Component property1="frame-39" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Abimance;
