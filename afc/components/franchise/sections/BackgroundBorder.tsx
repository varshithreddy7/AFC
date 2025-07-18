"use client";
import React from "react";
import { motion } from "framer-motion";

type CardProps = {
  image: string;
  title: string;
  points: string[];
  cta: string;
};

const Card: React.FC<CardProps> = ({ image, title, points, cta }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }} // Changed from -50 to 50 for downward animation
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}  // This ensures animation only happens once
    whileHover={{ scale: 1.02 }}
    className="relative w-[360px] h-auto bg-[#58554a] rounded border border-solid border-[#00000020] shadow-[12px_12px_30px_#ebbd2880] overflow-hidden mb-10"
  >
    {/* Top Image */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}  // Changed from -20 to 50
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full h-[228px] bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    />

    {/* Content Block */}
    <motion.div className="p-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}  // Changed from -20 to 50
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white text-center text-2xl font-bold mb-4"
      >
        {title}
      </motion.div>

      <motion.div 
        initial={{ scaleY: 0, originY: 0 }}  // Added originY for downward scale
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="h-0.5 bg-[#e69c00] mb-4 mx-auto w-[80%]" 
      />

      <motion.div className="text-white space-y-2 text-sm leading-relaxed text-center">
        {points.map((point, index) => (
          <motion.p 
            key={index}
            initial={{ opacity: 0, y: 20 }}  // Changed from -10 to 20
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            viewport={{ once: true }}
          >
            {point}
          </motion.p>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}  // Changed from -20 to 20
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-6"
      >
        <a href="#contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-[#ebbd28] text-black font-extrabold text-center py-3 rounded-[30px] border border-black text-sm"
        
        >
          {cta}
        </motion.button>
        </a>
      </motion.div>
    </motion.div>
  </motion.div>
);

export const BackgroundBorder: React.FC = () => {
  const sectionRef = React.useRef(null);

  const cardData: CardProps[] = [
    {
      image: "https://c.animaapp.com/89fS0TNm/img/grab--n--go-model-3.png",
      title: "Grab & Go Model",
      points: [
        "Quick service restaurant format",
        "Compact space requirement: 150-250 sq ft",
        "Ideal for high-traffic locations",
        "Focused on takeaway and delivery"
      ],
      cta: "Learn More About Grab & Go"
    },
    {
      image: "https://c.animaapp.com/HEE7tW43/img/image-82.png",
      title: "Express Kitchen",
      points: [
        "Full-service restaurant model",
        "Space requirement: 500-800 sq ft",
        "Dine-in and takeaway options",
        "Complete kitchen setup"
      ],
      cta: "Explore Express Kitchen"
    },
    {
      image: "https://c.animaapp.com/HEE7tW43/img/image-83.png",
      title: "Premium Outlet",
      points: [
        "Flagship restaurant format",
        "Space requirement: 1000-1500 sq ft",
        "Full dining experience",
        "Premium location focus"
      ],
      cta: "Discover Premium Outlet"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center text-white"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-black font-nunito mb-4"
      >
        OUR FRANCHISE MODEL
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center items-center gap-4 mb-8"
      >
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
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
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.5 }}
          className="h-[3px] w-40 bg-yellow-300" 
        />
      </motion.div>

      <div className="flex flex-wrap gap-24 justify-center">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </motion.section>
  );
};

export default BackgroundBorder;