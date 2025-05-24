'use client'

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface FoodItem {
  title: string
  price: string
  image: string
}



const menuItems: string[] = ['Pizza', 'Milk Shakes', 'Combos', 'Fries', 'Mojitos', 'Deserts']

const foodData: Record<string, FoodItem[]> = {
  Pizza: [
    { title: 'Margherita Pizza', price: '₹199', image: '/images/pizza.png' },
    { title: 'Pepperoni Pizza', price: '₹249', image: '/images/pizza.png' },
    { title: 'Margherita Pizza', price: '₹199', image: '/images/pizza.png' },
    { title: 'Pepperoni Pizza', price: '₹249', image: '/images/pizza.png' },
  ],
  'Milk Shakes': [
    { title: 'Chocolate Shake', price: '₹99', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b' },
    { title: 'Strawberry Shake', price: '₹89', image: 'https://images.unsplash.com/photo-1559628233-5e5a5c55f9f5' },
  ],
  Combos: [
    { title: 'Burger Combo', price: '₹299', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349' },
    { title: 'Pizza Combo', price: '₹349', image: 'https://images.unsplash.com/photo-1601924828371-d660d3b9f5b0' },
  ],
  Fries: [
    { title: 'Classic Fries', price: '₹79', image: 'https://images.unsplash.com/photo-1606755962773-0b3b220f5b4d' },
    { title: 'Peri Peri Fries', price: '₹99', image: 'https://images.unsplash.com/photo-1571091655789-9b3d8ddf10b8' },
  ],
  Mojitos: [
    { title: 'Mint Mojito', price: '₹59', image: 'https://images.unsplash.com/photo-1589308078051-dba3c1b08358' },
    { title: 'Lime Mojito', price: '₹69', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445' },
  ],
  Deserts: [
    { title: 'Chocolate Lava Cake', price: '₹129', image: 'https://images.unsplash.com/photo-1586985289688-1b4a1ae622b8' },
    { title: 'Vanilla Ice Cream', price: '₹79', image: 'https://images.unsplash.com/photo-1589712235274-22d3d8bc5a36' },
  ],
}

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])
  const [activeCategory, setActiveCategory] = useState<string>('Pizza')

  return (
    <>
      <div className="flex min-h-screen text-white p-8">
        {/* Sidebar */}
        <div className="w-1/5  p-4 mt-45 space-y-4 rounded-r-xl bg-black">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`block w-full text-left text-xl py-2 px-4 rounded ${activeCategory === item
                  ? 'bg-yellow-400 text-black font-semibold rounded-r-full'
                  : 'hover:bg-gray-900 rounded-r-full'
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Food Cards */}
        <div className="w-4/5 px-8 overflow-hidden">
          <>
            <AnimatePresence mode="wait">
              <motion.h1
                key={activeCategory + '-title'}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="text-center  text-6xl font-sans mb-4"
              >
                {activeCategory}
              </motion.h1>
              <div className="flex justify-center items-center gap-4 mb-8">
                <div className="h-[3px] w-20 bg-yellow-300" />
                <div className="w-5 h-5 rounded-full bg-[#ebbd28]" />
                <div className="h-[3px] w-20 bg-yellow-300" />
              </div>
            </AnimatePresence>

            <div className="flex min-h-screen text-white p-8">
              {/* Sidebar unchanged */}

              {/* Food Cards with animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory + '-food'}
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="w-full px-8 py-4 overflow-hidden"
                >
                  {foodData[activeCategory].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex bg-black text-white rounded-lg overflow-hidden shadow-lg my-4"
                      data-aos="fade-up"
                    >
                      <img src={item.image} alt={item.title} className="w-120 h-64 object-cover" />
                      <div className="p-4 flex flex-col justify-between w-full">
                        <div>
                          <h2 className="text-xl font-bold">{item.title}</h2>
                          <div className="flex justify-start items-center gap-2 mb-8 ml-2">
                            <div className="h-[1px] w-10 bg-yellow-300" />
                            <div className="w-2 h-2 rounded-full bg-[#ebbd28]" />
                            <div className="h-[1px] w-10 bg-yellow-300" />
                          </div>
                          <div className="flex items-center mt-1 mb-2 text-yellow-400">★★★★★</div>
                          <p className="text-sm text-gray-300">
                            Experience the perfect blend of premium ingredients and expert craftsmanship in every bite.
                          </p>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-yellow-400 text-lg font-bold">{item.price}</span>
                          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-yellow-300">
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </>

        </div>
      </div>
    </>
  )
}
