"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";



const categories = {
  chickenfries: [
    { id: 1, name: "Chicken Legs", desc: "", img: "/images/m-fires-12.png" },
    { id: 2, name: "Chicken Popcorn", desc: "", img: "/images/m-fires-14.png" },
    { id: 3, name: "Chicken Nuggets", desc: "", img: "/images/m-fires-11.png" },
    { id: 4, name: "Chicken Lollypops", desc: "", img: "/images/m-fires-3.png" },
  ],
  pizzas: [
    { id: 5, name: "Golden Corn Pizza", desc: "", img: "/images/m-pizza-3.png" },
    { id: 6, name: "Chicken supreme pizza", desc: "", img: "/images/m-pizza-4.png" },
    { id: 7, name: "Margherita pizza", desc: "", img: "/images/m-pizza-1.png" },
    { id: 8, name: "Roasted chicken Pizza", desc: "", img: "/images/pizza-2.png" },
  ],
  burgers: [
    { id: 9, name: "Chicken Crispy Burger", desc: "", img: "/images/m-burger-1.png" },
    { id: 10, name: "Veg Popular", desc: "", img: "/images/m-burger-5.png" },
    { id: 11, name: "Chicken Patty Burger", desc: "", img: "/images/burger3.png" },
    { id: 12, name: "Spicy Paneer Burger", desc: "", img: "/images/burger2.png" },
  ],
  mocktails: [
    { id: 13, name: "Virgin Mojito", desc: "", img: "/images/m-moktail-2.png" },
    { id: 14, name: "Blue Lagoon Mojito", desc: "", img: "/images/m-moktail-1.png" },
    { id: 15, name: "Green Mint Mojito", desc: "", img: "/images/m-mojito-6.png" },
    { id: 16, name: "Watermelon Mojito", desc: "", img: "/images/m-mocktail-4.png" },
  ],

} as const;

type CategoryKey = keyof typeof categories;

type Item = (typeof categories)[CategoryKey][number];

const PizzaSpinWheelMobile: React.FC = () => {
  const categoryKeys = Object.keys(categories) as CategoryKey[];
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("chickenfries");
  const [carouselItems, setCarouselItems] = useState<Item[]>([...categories["chickenfries"]]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1); // +1 -> next, -1 -> prev

  /** Whenever category changes reset */
  useEffect(() => {
    setCarouselItems([...categories[activeCategory]]);
    setActiveIndex(0);
    setDirection(1);
  }, [activeCategory]);

  /** Helpers */
  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const handleSelectItem = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Return the three visible items (‑1, 0, 1)
  const getVisibleItems = () => {
    const items: (Item & { position: -1 | 0 | 1; index: number })[] = [];
    const total = carouselItems.length;
    for (let offset = -1 as -1 | 0 | 1; offset <= 1; offset++) {
      const idx = (activeIndex + offset + total) % total;
      items.push({ ...carouselItems[idx], position: offset, index: idx });
    }
    return items;
  };


  return (
    <div className="relative  min-h-screen overflow-x-hidden ">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-2 py-4">
        {/* Header */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="font-extrabold text-white text-[42px] mb-10"
        >
          OUR MENU
           <div className="flex justify-center items-center gap-4 mb-8">
            <motion.div 
              className="h-[3px] w-25 bg-yellow-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <motion.div 
              className="w-5 h-5 rounded-full bg-[#ebbd28]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            />
            <motion.div 
              className="h-[3px] w-25 bg-yellow-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
        </motion.h1>

        {/* Carousel */}
        <div className="relative w-full max-w-[320px] h-[220px] flex items-center justify-center mb-4">
          {/* Nav buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20] top-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center z-20 text-black"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[-20] top-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center z-20 text-black"
          >
            ›
          </button>

          {/* Image track */}
          <div className="relative w-full h-[600px] flex items-center justify-center  ">
            {getVisibleItems().map((item) => (
              <motion.div
                key={item.id}
                initial={{
                  x: item.position * 90 + direction * 60,
                  scale: item.position === 0 ? 0.5 : 0.3,
                  opacity: 0,
                  rotate: direction * 90,
                  zIndex: 5,
                }}
                animate={{
                  x: item.position * 90,
                  scale: item.position === 0 ? 1 : 0.4,
                  opacity: item.position === 0 ? 1 : 0.5,
                  rotate: item.position === 0 ? 0 : direction * (item.position === -1 ? -25 : 25),
                  zIndex: item.position === 0 ? 10 : 5,
                }}
                exit={{
                  x: item.position * 90 - direction * 60,
                  scale: item.position === 0 ? 0.5 : 0.3,
                  opacity: 0,
                  rotate: direction * -90,
                  zIndex: 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.5 }}
                onClick={() => handleSelectItem(item.index)}
                className="absolute cursor-pointer "   
              >
                {/* Halo for active */}
                {item.position === 0 && (
                  <motion.div
                    className="absolute inset-0 bg-yellow-400/20 blur-xl "
                    animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ width: "100vw", height: "120%", left: "-10%", top: "-10%" }}
                  />
                )}

                <motion.div
                  animate={item.position === 0 ? { rotate: [0, direction * 3] } : { rotate: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative w-64 h-64 z-10"
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    width={256}
                    height={256}
                    loading="lazy"
                    quality={85}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Item description */}
        <motion.div
          key={carouselItems[activeIndex]?.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[250px] mx-auto mb-6"
        >
          <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-1">
            {carouselItems[activeIndex]?.name}
          </h2>
          <p className="text-xs text-gray-300">
            {carouselItems[activeIndex]?.desc}
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-2 flex-wrap justify-center"
        >
          {categoryKeys.map((key) => (
            <motion.div
              key={key}
              className={`relative w-16 h-16 rounded-full border-2 cursor-pointer overflow-hidden ${
                key === activeCategory ? "border-yellow-500 scale-110" : "border-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(key)}
            >
              <Image
                src={categories[key][0].img}
                alt={key}
                className="w-full h-full object-cover"
                width={64}
                height={64}
                loading="lazy"
                quality={80}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PizzaSpinWheelMobile;