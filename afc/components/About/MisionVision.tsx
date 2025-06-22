"use client";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const contentRef = React.useRef(null);
  const isInView = useInView(contentRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full px-4 py-20 max-w-screen-xl mx-auto">
      {/* Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {["mission", "vision"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 font-bold text-lg sm:text-xl rounded transition-all duration-300 ${
              activeTab === tab
                ? "bg-[#ebbd28] text-black"
                : "border border-[#ebbd28] text-[#ebbd28]"
            }`}
          >
            Our {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </motion.div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <motion.div
          ref={contentRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[#151414] border border-[#ebbd28] rounded p-6 sm:p-8 text-white w-full lg:w-1/2"
        >
          <motion.h2
            variants={itemVariants}
            className="text-[#ebbd28] text-3xl sm:text-4xl font-bold mb-4"
          >
            Our Mission
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg leading-relaxed mb-6"
          >
            To revolutionize the food industry through innovative cooking techniques, premium
            ingredients, and exceptional customer service.
          </motion.p>
          <motion.ul variants={containerVariants} className="space-y-4 text-base sm:text-lg">
            {[
              "Delivering culinary excellence",
              "Maintaining highest quality standards",
              "Creating memorable experiences",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <span className="text-[#ebbd28] text-xl">✓</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-[40%] max-w-[400px]"
        >
          <img
            src="https://c.animaapp.com/v9ACUEeD/img/image-80@2x.png"
            alt="Mission Visual"
            className="w-full h-auto object-cover rounded"
          />
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center lg:justify-start items-center gap-8 mt-10"
      >
        {[
          { emoji: "👨‍👩‍👧‍👦", value: "100K+" },
          { emoji: "🏪", value: "50+" },
          { emoji: "🏆", value: "25+" },
        ].map((stat, index) => (
          <motion.div key={index} variants={itemVariants} className="text-center">
            <div className="text-4xl sm:text-5xl">{stat.emoji}</div>
            <div className="font-bold text-xl sm:text-2xl text-[#ebbd28]">{stat.value}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MissionVision;
