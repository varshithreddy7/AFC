"use client";

import React from "react";
import { motion } from "framer-motion";

const Team: React.FC = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const hoverEffect = {
    scale: 1.03,
    transition: { duration: 0.3 }
  };

  return (<>
   <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center mb-10"
      >
        <div className="flex flex-col justify-center items-center">

        
        <div className="font-extrabold text-white text-4xl tracking-[0] leading-[50px] whitespace-nowrap">
          OUR TEAM
        </div>
        <div className="flex justify-center items-center gap-4 mb-8">
            <motion.div 
              className="h-[3px] w-25 bg-yellow-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <motion.div 
              className="w-5 h-5 rounded-full bg-[#ebbd28]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            />
            <motion.div 
              className="h-[3px] w-25 bg-yellow-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
          </div>
      </motion.div>
  
    <div className="relative w-full h-auto pt-[50px] px-[20px] py-[20px] sm:px-[100px] flex flex-row justify-center items-center bg-[#00000003]">
     

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
        {/* Team Member 1 */}
        <motion.div 
          variants={item}
          whileHover={hoverEffect}
          className="w-full h-[500px] bg-black border-2 border-solid border-[#ebbd28] relative overflow-hidden"
        >
          <img
            className="w-full h-full object-fill transition-transform duration-500  pb-20"
            alt="Chaitanya Varma"
            src="images/owner2.png"
            />
          <div className="absolute bottom-0 left-0 right-0 p-4 font-bold text-white text-xl bg-gradient-to-t from-black to-transparent">
            CHAITANYA VARMA
          </div>
        </motion.div>

        {/* Team Member 2 */}
        <motion.div 
          variants={item}
          whileHover={hoverEffect}
          className="w-full h-[500px] bg-black border-2 border-solid border-[#ebbd28] relative overflow-hidden"
          >
          <img
            className="w-full h-full object-fill transition-transform duration-500  pb-20"
            alt="Narashima"
            src="images/owner1.png"
            />
          <div className="absolute bottom-0 left-0 right-0 p-4 font-bold text-white text-xl bg-gradient-to-t from-black to-transparent">
            NARASHIMA
          </div>
        </motion.div>

        {/* Team Member 3 - Example of additional member */}
        
      </motion.div>
    </div>
            </>
  );
};

export default Team;