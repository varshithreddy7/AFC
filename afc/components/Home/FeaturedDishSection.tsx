"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
    name: "Classic Fried Chicken",
    description: "Our signature crispy chicken marinated in secret blend of spices.",
    price: "₹299",
    image: "/images/burger.png",
    rating: 4.8,
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Spicy Wings Bucket",
    description: "8 pieces of perfectly spiced wings with our signature sauce.",
    price: "₹399",
    image: "/images/pizza.png",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Family Feast",
    description: "12 pieces chicken, 4 sides, and drinks. Perfect for sharing!",
    price: "₹999",
    image: "/images/fried-chicken.jpg",
    rating: 5,
    isBestSeller: true,
  },
  {
    id: 4,
    name: "Chicken Burger Combo",
    description: "Crispy chicken fillet, fresh veggies with fries and drink.",
    price: "₹349",
    image: "/images/combo-home.jpg",
    rating: 4.6,
  },
];

export const FeaturedDishSection = () => {
  const [currentDish, setCurrentDish] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentDish((prev) => (prev + 1) % featuredDishes.length);
    }, 3000); // Faster transition
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextDish = () => {
    setCurrentDish((prev) => (prev + 1) % featuredDishes.length);
  };

  const prevDish = () => {
    setCurrentDish((prev) => (prev - 1 + featuredDishes.length) % featuredDishes.length);
  };

  return (
    <section className="relative w-full py-20">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Header */}
        <div className="relative w-full h-[180px]">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute top-[79px] left-1/2 -translate-x-1/2 font-black text-[#ebbd28] text-5xl text-center leading-[48px]"
          >
            Featured Dishes
          </motion.h2>

          <div className="absolute w-[656px] h-7 top-[143px] left-1/2 -translate-x-1/2 flex items-center justify-center">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "96px" }}
              viewport={{ once: true }}
              className="h-0.5 bg-[#ebbd28]"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mx-8 font-normal text-white text-lg text-center tracking-[4px] leading-7 whitespace-nowrap"
            >
              DISCOVER OUR SIGNATURE ITEMS
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "96px" }}
              viewport={{ once: true }}
              className="h-0.5 bg-[#ebbd28]"
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
              transition={{ duration: 0.3 }} // Faster animation
              className="flex gap-8 items-center"
            >
              {/* Dish Image */}
              <motion.div
                className="relative w-[632px] h-[421px]"
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
                    className="absolute top-6 left-6 bg-[#ebbd28] px-4 py-2 rounded-full"
                  >
                    <span className="font-bold text-black text-sm tracking-[2px]">
                      BEST SELLER
                    </span>
                  </motion.div>
                )}
              </motion.div>

              {/* Dish Info */}
              <div className="flex-1 max-w-[500px]">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-black text-white text-4xl mb-6"
                >
                  {featuredDishes[currentDish].name}
                </motion.h3>

                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <motion.svg
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`w-6 h-6 ${index < featuredDishes[currentDish].rating
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
                  className="text-white text-lg leading-relaxed mb-8"
                >
                  {featuredDishes[currentDish].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between"
                >
                  <span className="text-[#ebbd28] text-3xl font-black">
                    {featuredDishes[currentDish].price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#ebbd28] text-black px-8 py-4 rounded-full 
                      font-bold text-lg hover:bg-yellow-500 transition-colors"
                  >
                    Order Now
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Only show when hovered */}
          {isHovered && (
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
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

          {/* Navigation Dots */}
          <div className="flex justify-center gap-4 mt-8">
            {featuredDishes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDish(index)}
                className={`h-2 rounded-full transition-all duration-300 ${currentDish === index
                    ? 'w-8 bg-[#ebbd28]'
                    : 'w-8 bg-white/30 hover:bg-white/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishSection;