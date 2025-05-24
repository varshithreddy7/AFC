"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <section className="px-5 py-20 w-full min-h-screen ">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex gap-10 max-md:flex-col">
          {/* Left Column */}
          <motion.article 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-[37%] max-md:w-full"
          >
            <div className="flex flex-col pl-5 text-white">
                <h1 className="text-7xl font-black leading-none max-md:text-4xl text-[#ebbd28]">
                Experience
                <br />
                Royal
                <br />
                Ambiance
                </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-40 text-xl leading-relaxed max-md:mt-10"
              >
                Step into a world of refined elegance where every detail is crafted
                to perfection. Our restaurant combines the warmth of traditional
                hospitality with contemporary luxury, creating an atmosphere that
                transforms dining into an art form.
              </motion.p>

              {/* Private Dining Card */}
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col p-8 mt-7 bg-black/80 rounded-xl border border-[#ebbd28]/20"
              >
                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-[#ebbd28] rounded-full">
                    <Image
                      src="/icons/dining.svg"
                      alt="Private Dining"
                      width={24}
                      height={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#ebbd28]">
                    Private Dining Experience
                  </h3>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-white/90">
                  Exclusive spaces designed for intimate gatherings and special
                  celebrations, offering personalized service.
                </p>
              </motion.article>
            </div>
          </motion.article>

          {/* Right Column */}
          <motion.article 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-md:w-full"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden h-[475px]">
                <Image
                  src="/images/experience-img.png"
                  alt="Royal Crunch Chicken"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Royal Crunch Chicken
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-[#ebbd28] text-black rounded-lg font-bold"
                  >
                    View Gallery
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;