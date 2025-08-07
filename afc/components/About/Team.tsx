"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const hoverEffect = {
  scale: 1.05,
  boxShadow: "0 8px 32px 0 rgba(235,189,40,0.25)",
  transition: { duration: 0.3 }
};

const founders = [
  { name: "CHAITANYA VARMA", img: "/images/owner2.png", role: "Founder" },
  { name: "NARASHIMA", img: "/images/owner1.png", role: "Founder" }
];

// const franchiseOwners = [
//   { name: "RAVI", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArlOmRRBmBdYmedl4gxyBQJeyU4x5RTwf6A&s", role: "Franchise Owner" },
//   { name: "SURESH", img: "https://img.freepik.com/premium-photo/ai-human-avatar-characters-male-model_1166271-38.jpg", role: "Franchise Owner" },
//   { name: "PRIYA", img: "https://static.vecteezy.com/system/resources/previews/039/334/802/large_2x/ai-generated-indian-female-student-free-photo.jpg", role: "Franchise Owner" }
// ];


const Team: React.FC = () => {
  // Helper to render a row with label and animated cards
  const renderRow = (
    label: string,
    members: Array<{ name: string; img: string; role: string }>,
    cardSize = "w-[110px] h-[130px] xs:w-[120px] xs:h-[150px] sm:w-[150px] sm:h-[200px] md:w-[180px] md:h-[250px]",
    gridCols = "grid-cols-2"
  ) => (
    <div className="flex flex-col items-center w-full mb-8">
      {/* Bigger label and more space below */}
      <div className="mb-5 text-base xs:text-xl sm:text-2xl md:text-3xl font-extrabold text-yellow-300 tracking-wide drop-shadow-lg text-center">
        {label}
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`
          grid ${gridCols} gap-3 xs:gap-5 sm:gap-10 w-full max-w-fit mx-auto place-items-center
        `}
      >
        {members.map((member) => (
          <motion.div
            key={member.name}
            variants={item}
            whileHover={hoverEffect}
            className={`
              ${cardSize}
              bg-black border-2 border-solid border-[#ebbd28] relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 group
              flex flex-col justify-end items-center
            `}
          >
            <Image
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt={member.name}
              src={member.img}
              fill
            />
            {/* Badge */}
            <div className="absolute top-1 left-1 xs:top-2 xs:left-2 sm:top-3 sm:left-3 bg-yellow-300 text-black text-[9px] xs:text-xs font-bold px-2 xs:px-3 py-1 rounded-full shadow">
              {member.role}
            </div>
            {/* Name */}
            <div className="absolute bottom-0 left-0 right-0 p-1 xs:p-2 sm:p-3 font-bold text-white text-[10px] xs:text-xs sm:text-lg bg-gradient-to-t from-black/80 to-transparent text-center">
              {member.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center mb-8"
      >
        <div className="flex flex-col justify-center items-center w-full">
          <div className="font-extrabold text-white text-lg xs:text-2xl sm:text-4xl tracking-[0] leading-[28px] xs:leading-[40px] sm:leading-[50px] whitespace-nowrap text-center">
            OUR TEAM
          </div>
          <div className="flex justify-center items-center gap-2 sm:gap-4 mb-6">
            <motion.div
              className="h-[2px] w-8 sm:w-16 bg-yellow-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <motion.div
              className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[#ebbd28]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            />
            <motion.div
              className="h-[2px] w-8 sm:w-16 bg-yellow-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Hierarchical Team Layout */}
      <div className="relative w-full h-auto pt-6 sm:pt-10 px-1 xs:px-2 sm:px-[100px] py-2 sm:py-5 flex flex-col items-center bg-[#00000003]">

        {/* Founders Row - Fixed 2 in a row */}
        {renderRow(
          "Founders", 
          founders, 
          "w-[110px] h-[130px] xs:w-[120px] xs:h-[150px] sm:w-[250px] sm:h-[350px]",
          "grid-cols-2"
        )}

        {/* Glowing thin vertical connection line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ originY: 0 }}
          className="bg-yellow-300 w-[2px] sm:w-[3px] h-8 xs:h-10 sm:h-20 mx-auto my-2 rounded-full z-0 shadow-[0_0_8px_2px_rgba(235,189,40,0.7)]"
        />

        {/* Franchise Owners Row - 3 per row */}
        {/**
         * Franchise Owners Row and connection line commented out
         *
         * {renderRow(
         *   "Franchise Owners", 
         *   franchiseOwners, 
         *   "w-[110px] h-[130px] xs:w-[120px] xs:h-[150px] sm:w-[200px] sm:h-[280px]",
         *   "grid-cols-3"
         * )}
         *
         * <motion.div
         *   initial={{ scaleY: 0 }}
         *   whileInView={{ scaleY: 1 }}
         *   viewport={{ once: true }}
         *   transition={{ duration: 0.8, delay: 0.8 }}
         *   style={{ originY: 0 }}
         *   className="bg-yellow-300 w-[2px] sm:w-[3px] h-8 xs:h-10 sm:h-20 mx-auto my-2 rounded-full z-0 shadow-[0_0_8px_2px_rgba(235,189,40,0.7)]"
         * />
         */}
      </div>
    </>
  );
};

export default Team;