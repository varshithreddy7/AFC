"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const stats = [
  { number: "150+", label: "Locations" },
  { number: "95%", label: "Success Rate" },
  { number: "₹40L+", label: "Avg. Monthly Revenue" }
];

const testimonials = [
  {
    name: "Amit Patel",
    role: "Multi-Unit Owner",
    quote: "AFC's proven business model and support system helped me expand to 3 successful outlets in just 2 years.",
    location: "Bangalore",
    revenue: "₹48L/month",
    image: "/images/owner1.png"
  },
  {
    name: "Priya Shah",
    role: "Franchise Partner",
    quote: "The training and ongoing support from AFC made my transition to restaurant ownership seamless.",
    location: "Mumbai",
    revenue: "₹52L/month",
    image: "/images/owner2.png"
  },
  {
    name: "Rajesh Kumar",
    role: "Restaurant Owner",
    quote: "The brand recognition and quality standards have helped me build a loyal customer base quickly.",
    location: "Delhi",
    revenue: "₹45L/month",
    image: "/images/owner3.jpg"
  }
];

export const FranchiseSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // auto change every 5 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="relative w-full py-20">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-[1440px] mx-auto px-4"
      >
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h1 className="text-6xl font-bold text-[#ebbd28] leading-tight mb-6">
              Build Your Success Story with AFC
            </h1>
            <p className="text-xl text-white mb-12 leading-relaxed">
              Join India's fastest-growing QSR franchise network. Our partners average
              ₹40L+ monthly revenue with our proven business model.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-black border border-[#ebbd28] rounded-2xl hover:bg-[#ebbd28]/5 transition-all duration-300"
                >
                  <motion.p 
                    className="text-4xl font-bold text-[#ebbd28] mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-white">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="relative rounded-3xl overflow-hidden mb-8">
              <Image
                src="/images/afc_store.png"
                alt="AFC Store"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
                priority
              />
            </div>

            {/* Interactive Testimonial Card */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-black border border-[#ebbd28] p-6 rounded-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#ebbd28]">
                      <Image
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#ebbd28] font-bold text-lg">
                        {testimonials[currentTestimonial].name}
                      </h3>
                      <p className="text-white text-sm mb-2">
                        {testimonials[currentTestimonial].role}
                      </p>
                      <p className="text-white mb-3 italic">
                        "{testimonials[currentTestimonial].quote}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <span>📍 {testimonials[currentTestimonial].location}</span>
                          <span className="text-[#ebbd28] font-semibold">
                            {testimonials[currentTestimonial].revenue}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevTestimonial}
                            className="p-2 hover:bg-[#ebbd28]/10 rounded-full transition-colors"
                          >
                            <svg className="w-6 h-6 text-[#ebbd28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextTestimonial}
                            className="p-2 hover:bg-[#ebbd28]/10 rounded-full transition-colors"
                          >
                            <svg className="w-6 h-6 text-[#ebbd28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Testimonial Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentTestimonial === index 
                        ? 'w-8 bg-[#ebbd28]' 
                        : 'bg-[#ebbd28]/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ebbd28] text-black px-12 py-4 rounded-xl font-bold text-xl
              hover:bg-yellow-500 transition-all duration-300 shadow-lg"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FranchiseSection;
