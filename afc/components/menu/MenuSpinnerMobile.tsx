"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Mobile circular carousel with left ↔ right slide + spin effect on active image
 * ----------------------------------------------------------
 * – `direction` state captures whether the user clicked Next (+1) or Prev (‑1).
 * – Each visible item animates its **x/scale/opacity** as before, but the *active* (center)
 *   image also rotates ±360° depending on the navigation direction.
 * – The new item entering from the left/right starts slightly off‑screen and fades in.
 */

const categories = {
  pizzas: [
    { id: 1, name: "Margherita", desc: "Classic cheese & tomato", img: "/images/pizza.png" },
    { id: 2, name: "Pepperoni", desc: "Spicy & bold", img: "/images/pizza2.png" },
    { id: 3, name: "Veggie", desc: "Fresh & crispy", img: "/images/pizza3.png" },
    { id: 4, name: "BBQ Chicken", desc: "Smoky & sweet", img: "/images/pizza.png" },
  ],
  burgers: [
    { id: 5, name: "Cheeseburger", desc: "Juicy with melted cheese", img: "images/burger1.png" },
    { id: 6, name: "Veggie Burger", desc: "Grilled garden delight", img: "images/burger2.png" },
    { id: 7, name: "Double Beef", desc: "Stacked & meaty", img: "images/burger3.png" },
    { id: 8, name: "Monster Burger", desc: "Mega-sized goodness", img: "images/burger2.png" },
  ],
  mocktails: [
    { id: 9, name: "Mojito", desc: "Minty & fresh", img: "images/mocktail2.png" },
    { id: 10, name: "Berry Blast", desc: "Fruity explosion", img: "images/mocktail1.png" },
    { id: 11, name: "Sunset Punch", desc: "Tropical vibe", img: "images/mocktail3.png" },
    { id: 12, name: "Citrus Rush", desc: "Zesty delight", img: "images/mocktail2.png" },
  ],
  chickenfries: [
    { id: 13, name: "Crispy Strips", desc: "Golden & crunchy", img: "images/fires1.png" },
    { id: 14, name: "Spicy Wings", desc: "Hot & saucy", img: "images/fires2.png" },
    { id: 15, name: "Nuggets", desc: "Bite-sized flavor", img: "images/fires1.png" },
    { id: 16, name: "Hot Drumsticks", desc: "Fiery & crunchy", img: "images/fires2.png" },
  ],
} as const;

type CategoryKey = keyof typeof categories;

type Item = (typeof categories)[CategoryKey][number];

const PizzaSpinWheelMobile: React.FC = () => {
  const categoryKeys = Object.keys(categories) as CategoryKey[];
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("pizzas");
  const [carouselItems, setCarouselItems] = useState<Item[]>([...categories["pizzas"]]);
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

  /** Variants use `custom` to know the item's relative position and navigation direction */
  const itemVariants = {
    initial: ({ position, direction }: { position: -1 | 0 | 1; direction: 1 | -1 }) => ({
      x: position * 90 + direction * 60, // start a bit further in nav direction
      scale: position === 0 ? 0.5 : 0.3,
      opacity: 0,
      rotate: direction * 90,
      zIndex: 5,
    }),
    animate: ({ position, direction }: { position: -1 | 0 | 1; direction: 1 | -1 }) => ({
      x: position * 90,
      scale: position === 0 ? 1 : 0.4,
      opacity: position === 0 ? 1 : 0.5,
      rotate: position === 0 ? 0 : direction * (position === -1 ? -25 : 25),
      zIndex: position === 0 ? 10 : 5,
      transition: { type: "spring", stiffness: 300, damping: 30, duration: 0.5 },
    }),
    exit: ({ position, direction }: { position: -1 | 0 | 1; direction: 1 | -1 }) => ({
      x: position * 90 - direction * 60,
      scale: position === 0 ? 0.5 : 0.3,
      opacity: 0,
      rotate: direction * -90,
      zIndex: 0,
    }),
  };

  return (
    <div className="relative overflow-hidden min-h-screen ">
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
          <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden ">
            {getVisibleItems().map((item) => (
              <motion.div
                key={item.id}
                custom={{ position: item.position, direction }}
                variants={itemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                onClick={() => handleSelectItem(item.index)}
                className="absolute cursor-pointer "   
              >
                {/* Halo for active */}
                {item.position === 0 && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl "
                    animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ width: "100vw", height: "120%", left: "-10%", top: "-10%" }}
                  />
                )}

                <motion.img
                  src={item.img}
                  alt={item.name}
                  className="w-64 h-64 object-cover rounded-full   relative z-10" 
                  animate={item.position === 0 ? { rotate: [0, direction * 3] } : { rotate: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
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
            <motion.img
              key={key}
              src={categories[key][0].img}
              alt={key}
              className={`w-16 h-16 object-cover rounded-full border-2 cursor-pointer ${
                key === activeCategory ? "border-yellow-500 scale-110" : "border-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(key)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PizzaSpinWheelMobile;
