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
      transition: {
        staggerChildren: 0.2,
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
    <section className="relative w-full max-w-screen-xl mx-auto px-4 py-20 flex flex-col items-center">
      {/* Mission + Vision Tabs */}
      <motion.div 
        className="flex gap-6 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button 
          className={`hover:cursor-pointer rounded px-6 py-3 font-bold text-xl transition-all duration-300 ${
            activeTab === "mission" 
              ? "bg-[#ebbd28] text-black" 
              : "border border-[#ebbd28] text-[#ebbd28]"
          }`}
          onClick={() => setActiveTab("mission")}
        >
          Our Mission
        </button>
        <button 
          className={`hover:cursor-pointer rounded px-6 py-3 font-bold text-xl transition-all duration-300 ${
            activeTab === "vision" 
              ? "bg-[#ebbd28] text-black" 
              : "border border-[#ebbd28] text-[#ebbd28]"
          }`}
          onClick={() => setActiveTab("vision")}
        >
          Our Vision
        </button>
      </motion.div>

      {/* Mission + Image Flex Row */}
      <div className="relative w-full h-[600px] flex justify-between items-center">
        {/* Mission Box */}
        <motion.div
          ref={contentRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[#151414] border border-[#ebbd28] rounded-[4px] p-8 text-white"
          style={{
            boxSizing: "border-box",
            width: "480px",
            height: "492px",
          }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-[#ebbd28] font-bold mb-4 text-[36px] leading-[54px]"
          >
            Our Mission
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-normal mb-6 text-[20px] leading-[36px] text-white"
          >
            To revolutionize the food industry through innovative cooking techniques,
            premium ingredients, and exceptional customer service.
          </motion.p>
          <motion.ul 
            variants={containerVariants}
            className="space-y-4 text-[18px] leading-[27px]"
          >
            {["Delivering culinary excellence", 
              "Maintaining highest quality standards", 
              "Creating memorable experiences"].map((item, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <span className="text-[#ebbd28] text-2xl leading-none">✓</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
          style={{
            width: "391px",
            height: "391px",
          }}
        >
          <img
            src="https://c.animaapp.com/v9ACUEeD/img/image-80@2x.png"
            alt="Mission Visual"
            className="w-full h-full object-cover rounded"
          />
        </motion.div>

        {/* Stats Overlay */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute flex justify-between items-center"
          style={{ top: "483px", left: "843px", width: "391px" }}
        >
          {[
            { emoji: "👨‍👩‍👧‍👦", value: "100K+" },
            { emoji: "🏪", value: "50+" },
            { emoji: "🏆", value: "25+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="font-normal text-[48px] leading-[72px] text-black">
                {stat.emoji}
              </div>
              <div className="font-bold text-[24px] leading-[36px] text-[#EBBE29]">
                {stat.value}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;