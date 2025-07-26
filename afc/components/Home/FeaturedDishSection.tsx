"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import OrderDetailsCard from "@/components/ui/OrderDetailsCard";

interface FeaturedDish {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  isBestSeller?: boolean;
}

const featuredDishes: FeaturedDish[] = [
  {
    id: 1,
    name: "Fried Chicken Combos",
    description: "A delightful combo of crispy fried chicken pieces, seasoned to perfection and served with sides.",
    price: "₹299",
    image: "/images/burger.png",
    rating: 5,
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Pizza",
    description: "Cheesy and delicious pizza topped with flavorful chicken, veggies, and special seasonings.",
    price: "₹399",
    image: "/images/pizza.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Sandwich",
    description: "Grilled chicken sandwich layered with fresh veggies and sauces, perfect for a quick bite.",
    price: "₹999",
    image: "/images/fried-chicken.jpg",
    rating: 5,
    isBestSeller: true,
  },
  {
    id: 4,
    name: "Milk shakes",
    description: "Thick and creamy milkshakes in a variety of classic flavors to cool you down.",
    price: "₹349",
    image: "/images/combo-home.jpg",
    rating: 4.6,
  },
];


export const FeaturedDishSection = () => {
  const [currentDish, setCurrentDish] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentDish((prev) => (prev + 1) % featuredDishes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextDish = () => {
    setCurrentDish((prev) => (prev + 1) % featuredDishes.length);
  };

  const prevDish = () => {
    setCurrentDish((prev) => (prev - 1 + featuredDishes.length) % featuredDishes.length);
  };

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative w-full mb-8 sm:mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black text-[#ebbd28] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight mb-4 sm:mb-6"
          >
            Featured Dishes
          </motion.h2>

          <div className="flex items-center justify-center">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "48px" }}
              viewport={{ once: true }}
              className="h-0.5 bg-[#ebbd28] hidden sm:block sm:w-12 lg:w-24"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mx-4 sm:mx-6 lg:mx-8 font-normal text-white text-sm sm:text-base lg:text-lg text-center tracking-[2px] sm:tracking-[3px] lg:tracking-[4px] leading-relaxed"
            >
              DISCOVER OUR SIGNATURE ITEMS
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "48px" }}
              viewport={{ once: true }}
              className="h-0.5 bg-[#ebbd28] hidden sm:block sm:w-12 lg:w-24"
            />
          </div>
        </div>

        {/* Dishes Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDish}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center"
            >
              {/* Dish Image */}
              <motion.div
                className="relative w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-[600px] xl:w-[632px] 
                  h-64 sm:h-80 md:h-96 lg:h-[350px] xl:h-[421px] mx-auto lg:mx-0"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={featuredDishes[currentDish].image}
                  alt={featuredDishes[currentDish].name}
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
                {featuredDishes[currentDish].isBestSeller && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 
                      bg-[#ebbd28] px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full"
                  >
                    <span className="font-bold text-black text-xs sm:text-sm tracking-[1px] sm:tracking-[2px]">
                      BEST SELLER
                    </span>
                  </motion.div>
                )}
              </motion.div>

              {/* Dish Info */}
              <div className="flex-1 max-w-full lg:max-w-[500px] text-center lg:text-left px-4 sm:px-0">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-black text-white text-2xl sm:text-3xl lg:text-4xl mb-4 lg:mb-6"
                >
                  {featuredDishes[currentDish].name}
                </motion.h3>

                <div className="flex gap-1 sm:gap-2 mb-3 sm:mb-4 justify-center lg:justify-start">
                  {[...Array(5)].map((_, index) => (
                    <motion.svg
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${
                        index < featuredDishes[currentDish].rating
                          ? 'text-[#ebbd28]'
                          : 'text-gray-600'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
                >
                  {featuredDishes[currentDish].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-between gap-4 sm:gap-0"
                >
                  <span className="text-[#ebbd28] text-2xl sm:text-3xl font-black order-2 sm:order-1">
                    {featuredDishes[currentDish].price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#ebbd28] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-500 transition-colors order-1 sm:order-2"
                    onClick={() => setIsOrderModalOpen(true)}
                  >
                    Order Now
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Hidden on mobile, show on hover for desktop */}
          {isHovered && (
            <div className="absolute top-1/2 -translate-y-1/2 w-full justify-between px-4 hidden lg:flex">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevDish}
                className="bg-black/50 hover:bg-[#ebbd28] text-white hover:text-black p-3 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextDish}
                className="bg-black/50 hover:bg-[#ebbd28] text-white hover:text-black p-3 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          )}

          {/* Mobile Navigation Arrows - Always visible */}
          <div className="flex justify-between items-center mt-6 lg:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevDish}
              className="bg-black/50 hover:bg-[#ebbd28] text-white hover:text-black p-2.5 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextDish}
              className="bg-black/50 hover:bg-[#ebbd28] text-white hover:text-black p-2.5 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 sm:gap-3 lg:gap-4 mt-6 sm:mt-8">
            {featuredDishes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDish(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  currentDish === index
                    ? 'w-6 sm:w-8 bg-[#ebbd28]'
                    : 'w-6 sm:w-8 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Order Details Modal */}
      <OrderDetailsCard
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </section>
  );
};

export default FeaturedDishSection;