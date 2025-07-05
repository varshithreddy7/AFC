"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const franchiseFeatures = [
  { label: "LOW-COST", icon: "https://c.animaapp.com/89fS0TNm/img/image-52-5@2x.png" },
  { label: "RISK-FREE", icon: "https://c.animaapp.com/89fS0TNm/img/image-52-5@2x.png" },
  { label: "BUDGET-FRIENDLY", icon: "https://c.animaapp.com/89fS0TNm/img/image-52-5@2x.png" },
  { label: "SCALABLE", icon: "https://c.animaapp.com/89fS0TNm/img/image-52-5@2x.png" },
  { label: "PROPER GUIDANCE", icon: "https://c.animaapp.com/89fS0TNm/img/image-52-5@2x.png" },
  { label: "TRUST AND QUALITY", icon: "https://c.animaapp.com/89fS0TNm/img/image-52-5@2x.png" },
];
interface FeatureCardProps {
  label: string;  
  icon: string;
}

// const FeatureCard: React.FC<FeatureCardProps> = ({ label, icon }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//     whileHover={{ scale: 1.05 }}
//     className="w-full h-32 md:w-full md:h-32 bg-[#ebbd28] rounded-2xl border border-black shadow-[0_4px_15px_5px_rgba(235,189,40,0.5)] p-4 flex flex-col md:flex-row md:justify-around items-center justify-center gap-4"
//   >
//     <Image
//       src={icon}
//       alt={label}
//       width={40}
//       height={40}
      // className="object-cover md:w-16 md:h-16 w-10 h-10"
//     />
//     <h3 className="text-white  text-left text-sm md:text-2xl font-black font-nunito text-center">
//       {label}
//     </h3>
//   </motion.div>
// );

const FeatureCard: React.FC<FeatureCardProps>=({ label, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className="bg-[#ebbd28] rounded-2xl border border-black shadow-[0_4px_15px_5px_rgba(235,189,40,0.5)] p-6 flex flex-col md:flex-row items-center gap-6"
  >
    <Image src={icon} alt={label} width={32} height={32}    
       className="object-cover md:w-16 md:h-16 w-10 h-10"
 />
    <h3 className="text-white text-sm md:text-2xl font-black font-nunito">{label}</h3>
  </motion.div>
);

export const Group = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative py-20 px-4 text-center text-white"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-black font-nunito mb-4"
      >
        WHY OUR FRANCHISE IS BEST ?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center items-center gap-4 mb-8"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="h-[3px] w-40 bg-yellow-300"
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="w-5 h-5 rounded-full bg-[#ebbd28]"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="h-[3px] w-40 bg-yellow-300"
        />
      </motion.div>

      <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {franchiseFeatures.map((feature, idx) => (
          <FeatureCard key={idx} label={feature.label} icon={feature.icon} />
        ))}
      </div>
    </motion.section>
  );
};

export default Group;