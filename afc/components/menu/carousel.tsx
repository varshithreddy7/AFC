
"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const PIZZA_SIZE = 400
const RADIUS = 550

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
  ]
}

const PizzaSpinWheel = () => {
  const categoryKeys = Object.keys(categories)
  const [activeCategory, setActiveCategory] = useState("pizzas")
  const [spinningItems, setSpinningItems] = useState(categories["pizzas"])
  const [rotation, setRotation] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const rotationRef = useRef(0)

  const angleStep = spinningItems?.length ? 360 / spinningItems.length : 0

  useEffect(() => {
    setSpinningItems(categories[activeCategory])
    setRotation(0)
    rotationRef.current = 0
    setActiveIndex(0)
  }, [activeCategory])

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % spinningItems.length
    const targetRotation = rotationRef.current - angleStep
    setRotation(targetRotation)
    rotationRef.current = targetRotation
    setActiveIndex(newIndex)
  }

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + spinningItems.length) % spinningItems.length
    const targetRotation = rotationRef.current + angleStep
    setRotation(targetRotation)
    rotationRef.current = targetRotation
    setActiveIndex(newIndex)
  }

  const handleSelectItem = (i) => {
    const targetRotation = -i * angleStep
    const diff = (targetRotation - rotationRef.current + 540) % 360 - 180
    setRotation(rotationRef.current + diff)
    rotationRef.current = targetRotation
    setActiveIndex(i)
  }

  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 opacity-20" />
      </motion.div>

      <div className="relative z-10">
        {/* Header with animations */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="text-center pt-40 font-extrabold text-white text-[54px]">OUR MENU</div>
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
        </motion.div>

        <div className="w-full h-screen flex items-center justify-center text-white -mt-[150px] relative">
          {/* Info + Category Tabs */}
          <div className="absolute left-10 flex flex-col items-center gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={spinningItems[activeIndex]?.id}
                className="text-center mt-4 max-w-[400px] min-h-[60px] mr-40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1
                  className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
                  animate={{ 
                    textShadow: "0 0 10px rgba(234, 179, 8, 0.5)"
                  }}
                >
                  {spinningItems[activeIndex]?.name}
                </motion.h1>
                <motion.p
                  className="text-sm text-gray-300 mt-2"
                >
                  {spinningItems[activeIndex]?.desc}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            <motion.div 
              className="flex gap-4 flex-wrap w-[450px] justify-center"
            >
              {categoryKeys.map((key) => (
                <motion.img
                  key={key}
                  src={categories[key][0].img}
                  alt={key}
                  className={`w-20 h-20 object-cover rounded-full border-2 cursor-pointer ${
                    key === activeCategory ? "border-yellow-500 scale-110" : "border-transparent"
                  }`}
                  
                  
                  onClick={() => setActiveCategory(key)}
                />
              ))}
            </motion.div>
          </div>

          {/* Carousel */}
          <div className="absolute left-[1500px] w-[440px] h-[440px]">
            <motion.h1 
              className="text-4xl text-white left-[-1400px] absolute font-bold"
            >
              <motion.span
                animate={{
                  color: ["#fbbf24", "#f59e0b", "#d97706", "#f59e0b", "#fbbf24"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Our Specials
              </motion.span>
              <motion.div 
                className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mt-2"
              />
            </motion.h1>
            
            {/* Navigation buttons */}
           <div className="absolute top-1/2 left-[-300] transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center">
  <motion.button
    onClick={handlePrev}
    className="w-16 h-16 mr-[600px] ml-[2px] rounded-full  flex items-center justify-center shadow-lg"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </motion.button>

  <motion.button
    onClick={handleNext}
    className="w-16 h-16 mr-[100px] rounded-full  flex items-center justify-center shadow-lg"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </motion.button>
</div>

            
            <motion.div
              animate={{ rotate: rotation }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="absolute inset-0"
            >
              {spinningItems.map((item, i) => {
                const angleDeg = angleStep * i
                const angleRad = (angleDeg * Math.PI) / 180
                const x = Math.cos(angleRad) * RADIUS + 220 - PIZZA_SIZE / 2
                const y = Math.sin(angleRad) * RADIUS + 220 - PIZZA_SIZE / 2

                return (
                  <motion.div
                    key={item.id}
                    className="absolute"
                    style={{
                      left: x,
                      top: y,
                      width: `${PIZZA_SIZE}px`,
                      height: `${PIZZA_SIZE}px`,
                    }}
                    animate={{ rotate: -rotation }}
                    
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="object-contain cursor-pointer rounded-full w-full h-full  hover:scale-130 hover:rotate-10 transition-transform duration-300"
                      onClick={() => handleSelectItem(i)}
                    />
                  </motion.div>
                )
              })}
            </motion.div>
            
            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-yellow-500 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-xl">
              <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">MENU</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PizzaSpinWheel
