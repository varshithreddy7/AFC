"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
          {/* Left Column */}
          <motion.article 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[37%] order-2 lg:order-1"
          >
            <div className="flex flex-col px-2 sm:px-4 lg:pl-5 text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-none text-[#ebbd28] mb-6 sm:mb-8 lg:mb-0">
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
                className="mt-6 sm:mt-8 lg:mt-20 xl:mt-40 text-base sm:text-lg lg:text-xl leading-relaxed text-white/90"
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
                className="flex flex-col p-4 sm:p-6 lg:p-8 mt-6 sm:mt-7 bg-black/80 rounded-xl border border-[#ebbd28]/20 backdrop-blur-sm"
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                  <div className="p-2.5 sm:p-3  flex-shrink-0">
                    <img
                      src="https://i0.wp.com/blindtigersamui.com/wp-content/uploads/2024/07/private_dining_room_01_x1140.jpg?fit=1140%2C800&ssl=1"
                      alt="Private Dining"
                      
                      className="sm:w-6 sm:h-6"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#ebbd28] leading-tight">
                    Private Dining Experience
                  </h3>
                </div>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-white/90">
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
            className="flex-1 w-full order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[475px]">
                <Image
                  src="/images/experience-img.png"
                  alt="Royal Crunch Chicken"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-8 w-full">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight"
                  >
                    Royal Crunch Chicken
                  </motion.h2>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 bg-[#ebbd28] text-black rounded-lg font-bold text-sm sm:text-base hover:bg-yellow-500 transition-colors"
                  >
                    View Gallery
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5" 
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

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-12 sm:h-12 bg-[#ebbd28] rounded-full opacity-20 blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-[#ebbd28] rounded-full opacity-30 blur-sm"
              />
            </div>
          </motion.article>
        </div>

       
      </div>
    </section>
  );
};

export default ExperienceSection;