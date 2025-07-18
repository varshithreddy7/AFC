"use client";
import React from "react";
import { motion } from "framer-motion";

export const DivWrapper = () => {
  const sectionRef = React.useRef(null);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="left-[1495px] absolute w-[360px] h-[544px] top-[1246px] bg-[#58554a] rounded border border-solid border-[#00000020] shadow-[12px_12px_30px_#ebbd2880]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute w-[358px] h-[228px] top-px left-px rounded-[3px_3px_0px_0px] bg-[url(https://c.animaapp.com/89fS0TNm/img/grab--n--go-model-2@2x.png)] bg-cover bg-[50%_50%]"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute w-[169px] h-[39px] top-[253px] left-[86px] [font-family:'Nunito',Helvetica] font-bold text-white text-[27px] text-center tracking-[0] leading-[30px]"
      >
        Hybrid
      </motion.div>

      <motion.div
        initial={{ scaleY: 0, originY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute w-[286px] h-0.5 top-[300px] left-[31px] bg-[#e69c00]"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col w-[318px] items-start absolute top-[318px] left-[21px]"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative w-fit mt-[-1.00px] font-afcofficial-in-semantic-item text-white whitespace-nowrap"
        >
          Quick Service AFC
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          viewport={{ once: true }}
          className="relative w-fit mt-4 font-afcofficial-in-semantic-item text-white whitespace-nowrap"
        >
          Dine-in and takeaway options
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          viewport={{ once: true }}
          className="relative w-fit mt-4 font-afcofficial-in-semantic-item text-white whitespace-nowrap"
        >
          Space requirement: 500-800 sq ft
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className="flex w-[304px] h-12 items-start px-2 py-[3px] absolute top-[453px] left-[26px] bg-[#ebbd28] rounded-[30px] border border-solid border-black"
      >
        <p className="relative flex-1 self-stretch [font-family:'Nunito',Helvetica] font-extrabold text-black text-[17px] text-center tracking-[0] leading-6">
          Investment Starting with 6 Lakhs
        </p>
      </motion.div>
    </motion.div>
  );
};

export default DivWrapper;