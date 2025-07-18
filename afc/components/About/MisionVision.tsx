"use client";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

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
        {activeTab === "mission" && (
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
              <motion.li variants={itemVariants} className="flex items-start gap-3">
                <span className="text-[#ebbd28] text-xl">✓</span>
                <span>Serve fresh, flavorful, and affordable food with a smile.</span>
              </motion.li>
              {["Delivering culinary excellence", "Maintaining highest quality standards", "Creating memorable experiences"].map((item, index) => (
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
        )}
        {activeTab === "vision" && (
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
              Our Vision
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed mb-6"
            >
              To be the most loved and trusted quick-service restaurant brand, known for our fresh flavors, innovation, and community spirit.
            </motion.p>
            <motion.ul variants={containerVariants} className="space-y-4 text-base sm:text-lg">
              <motion.li variants={itemVariants} className="flex items-start gap-3">
                <span className="text-[#ebbd28] text-xl">✓</span>
                <span>Expanding our reach to new cities and communities across the country.</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start gap-3">
                <span className="text-[#ebbd28] text-xl">✓</span>
                <span>Setting new standards for quality, hygiene, and customer delight in the food industry.</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start gap-3">
                <span className="text-[#ebbd28] text-xl">✓</span>
                <span>Building a vibrant franchise network that empowers entrepreneurs and creates lasting value.</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-[40%] max-w-[400px]"
        >
          <Image
            src="https://c.animaapp.com/v9ACUEeD/img/image-80@2x.png"
            alt="Mission Visual"
            className="w-full h-auto object-cover rounded"
            width={400}
            height={300}
          />
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center items-stretch gap-8 mt-10"
      >
        {/* Modern SVG icons for stats */}
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-between text-center h-full min-w-[120px]">
          <div className="flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 bg-[#ebbd28]/10 rounded-full mb-2">
            {/* User Group Icon */}
            <svg className="w-7 h-7 sm:w-10 sm:h-10 text-[#ebbd28]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-7a4 4 0 11-8 0 4 4 0 018 0zm6 13v-2a4 4 0 00-3-3.87M3 20v-2a4 4 0 013-3.87" />
            </svg>
          </div>
          <div className="font-bold text-xl sm:text-2xl text-[#ebbd28]">10K+</div>
          <div className="text-xs sm:text-sm text-white/70 mt-1">Happy Customers</div>
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-between text-center h-full min-w-[120px]">
          <div className="flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 bg-[#ebbd28]/10 rounded-full mb-2">
            {/* Store Icon */}
            <svg className="w-7 h-7 sm:w-10 sm:h-10 text-[#ebbd28]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V6a1 1 0 011-1h16a1 1 0 011 1v1M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2zm0 0V10m14 11V10" />
            </svg>
          </div>
          <div className="font-bold text-xl sm:text-2xl text-[#ebbd28]">5+</div>
          <div className="text-xs sm:text-sm text-white/70 mt-1">Locations</div>
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-between text-center h-full min-w-[120px]">
          <div className="flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 bg-[#ebbd28]/10 rounded-full mb-2">
            {/* Star Icon (modern, premium) */}
            <svg className="w-7 h-7 sm:w-10 sm:h-10 text-[#ebbd28]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.5l2.92 6.26 6.88.6c.56.05.79.74.36 1.12l-5.24 4.6 1.56 6.7c.13.56-.47 1-1 .7L12 18.27l-5.48 3.21c-.53.31-1.13-.14-1-.7l1.56-6.7-5.24-4.6c-.43-.38-.2-1.07.36-1.12l6.88-.6L12 2.5z" />
            </svg>
          </div>
          <div className="font-bold text-xl sm:text-2xl text-[#ebbd28]">10+</div>
          <div className="text-xs sm:text-sm text-white/70 mt-1">Awards</div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MissionVision;
