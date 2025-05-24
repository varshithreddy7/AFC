"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Locations" },
  { number: "2M+", label: "Happy Customers" },
];

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1.0] // Custom cubic-bezier curve for smoother motion
      }
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "40px",
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { 
        duration: 0.5, 
        type: "spring", 
        stiffness: 200, 
        damping: 10 
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: 0.3, 
        ease: "easeOut" 
      }
    },
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 0px 20px rgba(235, 189, 40, 0.8)",
      transition: { 
        duration: 0.3,
        ease: "easeOut" 
      }
    },
    tap: { 
      scale: 0.95,
      transition: { 
        duration: 0.1 
      }
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-20 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-[1440px] mx-auto px-4"
        style={{ 
          willChange: "transform, opacity",
          backfaceVisibility: "hidden"
        }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            className="flex-1 space-y-12"
            style={{ willChange: "opacity, transform" }}
          >
            {/* Header */}
            <div className="space-y-2">
              <motion.h2 
                variants={itemVariants}
                className="font-['Merriweather',serif] font-black text-white text-2xl tracking-[2.00px]"
              >
                ABOUT US
              </motion.h2>
              <div className="flex items-center gap-2 w-[103px]">
                <motion.div
                  variants={lineVariants}
                  className="h-[3px] bg-[#ebbd28]"
                  style={{ willChange: "width" }}
                />
                <motion.div
                  variants={dotVariants}
                  className="w-[5px] h-[7px] bg-[#ebbd28] rounded-[2.52px/3.5px]"
                  style={{ willChange: "transform" }}
                />
                <motion.div
                  variants={lineVariants}
                  className="h-[3px] bg-[#ebbd28]"
                  style={{ willChange: "width" }}
                />
              </div>
            </div>

            {/* Title */}
            <motion.h3
              variants={itemVariants}
              className="font-['Merriweather',serif] font-bold text-[#ebbd28] text-[40px] leading-[60px]"
            >
              Absolute Fried Chicken
            </motion.h3>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="font-['Work_Sans',sans-serif] font-semibold text-white text-xl tracking-[2.00px] leading-[37px] max-w-[536px]"
            >
              Absolutely Fried Chicken is a bustling hub for crispy, golden delights
              that satisfy cravings instantly. Our signature recipe, a closely guarded
              secret, ensures each bite is bursting with flavor and juiciness. Nestled
              in the heart of the town, it&#39;s a go-to spot for those seeking
              comfort food on the go. With friendly service and affordable prices,
              it&#39;s a favorite haunt for families and friends alike.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-[400px]">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: i => ({
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        delay: i * 0.15, 
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    })
                  }}
                  className="text-center"
                  style={{ willChange: "opacity, transform" }}
                >
                  <div className="font-['Merriweather',serif] font-bold text-[#ebbd28] text-[32px] leading-[48px]">
                    {stat.number}
                  </div>
                  <div className="font-['Work_Sans',sans-serif] text-white text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            variants={imageVariants}
            className="relative w-full lg:w-[800px] h-[800px]"
            style={{ 
              willChange: "transform, opacity",
              perspectiveOrigin: "center",
              perspective: "1000px"
            }}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <Image
                src="/images/about-home.png"
                alt="Absolute Fried Chicken Restaurant"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                quality={100}
              />
            </div>
            {/* Visit Button */}
            <motion.div
              variants={buttonVariants}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2"
            >
              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                className="bg-[#ebbd28] rounded-lg px-12 py-4 transition-colors duration-300 hover:bg-[#d4a720] shadow-lg"
                style={{ 
                  willChange: "transform, box-shadow",
                  transformStyle: "preserve-3d"
                }}
              >
                <span className="font-['Ubuntu',sans-serif] font-bold text-black text-xl whitespace-nowrap">
                  Visit Our Place
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;