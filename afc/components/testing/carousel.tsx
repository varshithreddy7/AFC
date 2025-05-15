"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const pizzas = [
  { id: 1, name: "Margherita", desc: "Classic cheese & tomato", img: "/images/pizza.png" },
  { id: 2, name: "Pepperoni", desc: "Spicy & bold", img: "/images/pizza2.png" },
  { id: 3, name: "Veggie", desc: "Fresh & crispy", img: "/images/pizza3.png" },
  { id: 4, name: "BBQ Chicken", desc: "Smoky & sweet", img: "/images/pizza.png" },

]

const PIZZA_SIZE = 400
const RADIUS = 550

export default function PizzaSpinWheel() {
  const [rotation, setRotation] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)

  useEffect(() => {
    if (!autoRotate) return
  
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pizzas.length)
      setRotation((prev) => prev - 360 / pizzas.length)
    }, 3000)
  
    return () => clearInterval(interval)
  }, [autoRotate, pizzas.length])
  

  const handleSelect = (i: number) => {
    setActiveIndex(i)
    setRotation(-i * (360 / pizzas.length))
    setAutoRotate(false)
  }

  return (
    <div>



        <div className="  text-center mt-40  font-family:'Nunito',Helvetica] font-extrabold text-white text-[64px] tracking-[0] leading-[normal]">
            OUR MENU
          </div>
    <div className="w-full h-screen  flex items-center justify-center text-white overflow-hidden -mt-[150px] relative">


      {/* Left Container Thumbnails + Title */}
      <div className="absolute left-10 flex flex-col items-center gap-6">
        <div className="text-center mt-4 max-w-[200px] min-h-[60px]">
          <motion.h1
            key={pizzas[activeIndex].name}
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            >
            {pizzas[activeIndex].name}
          </motion.h1>
          <motion.p
            key={pizzas[activeIndex].desc}
            className="text-sm text-gray-400 mt-1"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            >
            {pizzas[activeIndex].desc}
          </motion.p>
        </div>

        <div className="flex  gap-4">
          {pizzas.map((pizza, i) => (
            <img
            key={pizza.id}
            src={pizza.img}
            alt={pizza.name}
            className={`w-24 h-24 object-contain rounded-full border-2 cursor-pointer transition-transform ${i === activeIndex ? "border-yellow-500 scale-110" : "border-transparent"
            }`}
            onClick={() => handleSelect(i)}
            />
          ))}
        </div>

      </div>


      {/* Spin Wheel Right Side */}
      <div className="absolute left-[1500px] w-[440px] h-[440px]">
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="absolute inset-0"
          >
          {pizzas.map((pizza, i) => {
            const angleDeg = (360 / pizzas.length) * i
            const angleRad = (angleDeg * Math.PI) / 180
            const x = Math.cos(angleRad) * RADIUS + 220 - PIZZA_SIZE / 2
            const y = Math.sin(angleRad) * RADIUS + 220 - PIZZA_SIZE / 2
            
            return (
              <motion.img
                key={pizza.id}
                src={pizza.img}
                alt={pizza.name}
                className="absolute object-contain cursor-pointer rounded-full"
                style={{
                  width: `${PIZZA_SIZE}px`,
                  height: `${PIZZA_SIZE}px`,
                  left: x,
                  top: y,
                }}
                whileHover={{ scale: 1.2 }}
                onClick={() => handleSelect(i)}
                />
              )
            })}
        </motion.div>
            </div>
      </div>
    </div>
  )
}
