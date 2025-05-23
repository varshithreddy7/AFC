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
      >
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            className="flex-1 space-y-12"
          >
            {/* Header */}
            <div className="space-y-2">
              <motion.h2
                variants={itemVariants}
                className="font-black text-5xl text-[#ebbd28] tracking-[2.00px]" // Updated font size and color
              >
                ABOUT US
              </motion.h2>
              <div className="flex items-center gap-4 w-[656px]"> {/* Updated width and gap */}
                <motion.div
                  variants={lineVariants}
                  className="h-0.5 bg-[#ebbd28] w-24" // Updated height and width
                />
                <motion.p
                  className="font-normal text-white text-lg tracking-[4px] leading-7 whitespace-nowrap"
                >
                  OUR STORY
                </motion.p>
                <motion.div
                  variants={lineVariants}
                  className="h-0.5 bg-[#ebbd28] w-24" // Updated height and width
                />
              </div>
            </div>

            {/* Title */}
            <motion.h3
              variants={itemVariants}
              className="font-black text-white text-4xl" // Updated font style
            >
              Absolute Fried Chicken
            </motion.h3>

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="text-white text-lg leading-relaxed" // Updated text style
            >
              <p>
                Absolutely Fried Chicken is a bustling hub for crispy, golden delights
                that satisfy cravings instantly. Our signature recipe, a closely guarded
                secret, ensures each bite is bursting with flavor and juiciness. Nestled
                in the heart of the town, it&#39;s a go-to spot for those seeking
                comfort food on the go. With friendly service and affordable prices,
                it&#39;s a favorite haunt for families and friends alike.
              </p>
            </motion.div>

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
                >
                  <div className="font-black text-[#ebbd28] text-3xl mb-2"> {/* Updated font style */}
                    {stat.number}
                  </div>
                  <div className="text-white text-lg tracking-[2px]"> {/* Updated text style */}
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ebbd28] text-black px-8 py-4 rounded-full 
                font-bold text-lg hover:bg-yellow-500 transition-colors"
            >
              Visit Our Place
            </motion.button>
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;