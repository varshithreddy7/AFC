"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ExperienceSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-6 sm:gap-8 lg:gap-10">
          {/* Left Column: Content always first */}
          <motion.article 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[37%] order-1"
          >
            <div className="flex flex-col px-2 sm:px-4 lg:pl-5 text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-[#ebbd28] mb-4 sm:mb-6 text-left">
                Where Vibes <br className="hidden sm:block" /> Meet Flavor ✨
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-4 sm:mt-6 lg:mt-12 text-base sm:text-lg lg:text-xl leading-relaxed text-white/90"
              >
                <span className="font-semibold">AFC Outlets: More Than Just Food — It’s an Experience.</span> Step into a world where every corner is designed to delight your senses. Cozy seating, vibrant colors, and Instagram-worthy nooks set the stage for memorable moments. With upbeat music, ambient lighting, and a spotless, modern vibe, AFC is the perfect place to catch up with friends or enjoy a solo treat. Here, every meal is a mood — and every visit is a vibe you’ll want to relive.
              </motion.p>
            </div>
          </motion.article>

          {/* Right Column: Image always second */}
          <motion.article 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full order-2"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-56 sm:h-72 md:h-96 lg:h-[400px] xl:h-[475px]">
                <Image
                  src="/images/amb-2.png"
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
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight"
                  >
                    Where Vibe <span className="text-[#ebbd28]">Meets Taste</span>
                  </motion.h2>
                  
                  <Link href="/gallery">
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
                  </Link>
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