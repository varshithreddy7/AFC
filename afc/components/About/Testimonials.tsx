"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Best chicken ever! Fresh, crispy, and perfectly spiced. Service was amazing! ✨",
    name: "Emily Parker",
    dish: "Loved the Crispy Chicken Combo",
    rating: "★★★★★"
  },
  {
    id: 2,
    quote: "Incredible atmosphere and taste! That special sauce is pure magic! Coming back for sure! 🔥",
    name: "Michael Johnson",
    dish: "Enjoyed the AFC Special Burger",
    rating: "★★★★★"
  },
  {
    id: 3,
    quote: "Perfect hangout spot! Great flavors, awesome vibes. Highly recommend to everyone! 👌",
    name: "Sarah Williams",
    dish: "Had the Family Feast Combo",
    rating: "★★★★★"
  }
];

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[503px] flex items-center justify-center py-10">
      {/* Main Card Container */}
      <div className="relative w-full max-w-[800px] h-[403px] mx-auto px-4">
        {/* Card Background - Now part of the relative container */}
        <div className="absolute inset-0 bg-[url(https://c.animaapp.com/v9ACUEeD/img/image.svg)] bg-cover bg-center rounded-[5px] shadow-lg" />

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8">
          {/* Static Title */}
          <h2 className="font-bold text-black text-[32px] text-center leading-[48px] mb-12">
            What Our Guests Say
          </h2>

          {/* Navigation Arrows */}
          <button 
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-black hover:text-[#ebbd28] transition-colors z-20"
          >
            ←
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-black hover:text-[#ebbd28] transition-colors z-20"
          >
            →
          </button>

          {/* Animated Content */}
          <div className="w-full h-[200px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                {/* Testimonial Text */}
                <p className="w-full max-w-[600px] font-normal text-black text-sm text-center leading-[30px] mb-6">
                  {testimonials[currentIndex].quote}
                </p>

                {/* Guest Name */}
                <div className="font-semibold text-black text-sm text-center leading-[27px]">
                  {testimonials[currentIndex].name}
                </div>

                {/* Guest Dish */}
                <div className="font-normal text-[#333333] text- text-center leading-6 mt-2">
                  {testimonials[currentIndex].dish}
                </div>

                {/* Star Rating */}
                <div className="font-normal text-black text-2xl text-center leading-9 mt-4">
                  {testimonials[currentIndex].rating}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-[#ebbd28]' : 'bg-black'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;