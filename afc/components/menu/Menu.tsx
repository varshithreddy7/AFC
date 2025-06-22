'use client'

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface FoodItem {
  title: string
  price: string
  image: string
}

// Mock OrderDetailsCard component since it's not available
const OrderDetailsCard = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-900 text-white p-6 rounded-lg max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Order Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <p className="text-gray-300 mb-4">Your order has been placed successfully!</p>
        <button
          onClick={onClose}
          className="w-full bg-yellow-400 text-black py-2 rounded-full font-semibold hover:bg-yellow-300"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

const menuItems: string[] = ['Pizza', 'Milk Shakes', 'Combos', 'Fries', 'Mojitos', 'Deserts']

const foodData: Record<string, FoodItem[]> = {
  Pizza: [
    { title: 'Margherita Pizza', price: '₹199', image: '/images/pizza.png' },
    { title: 'Pepperoni Pizza', price: '₹249', image: '/images/pizza.png' },
    { title: 'BBQ Chicken Pizza', price: '₹299', image: '/images/pizza.png' },
    { title: 'Veggie Supreme', price: '₹229', image: '/images/pizza.png' },
  ],
  'Milk Shakes': [
    { title: 'Chocolate Shake', price: '₹99', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b' },
    { title: 'Strawberry Shake', price: '₹89', image: 'https://images.unsplash.com/photo-1559628233-5e5a5c55f9f5' },
    { title: 'Vanilla Shake', price: '₹79', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b' },
    { title: 'Oreo Shake', price: '₹109', image: 'https://images.unsplash.com/photo-1559628233-5e5a5c55f9f5' },
  ],
  Combos: [
    { title: 'Burger Combo', price: '₹299', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349' },
    { title: 'Pizza Combo', price: '₹349', image: 'https://images.unsplash.com/photo-1601924828371-d660d3b9f5b0' },
    { title: 'Chicken Combo', price: '₹279', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349' },
  ],
  Fries: [
    { title: 'Classic Fries', price: '₹79', image: 'https://images.unsplash.com/photo-1606755962773-0b3b220f5b4d' },
    { title: 'Peri Peri Fries', price: '₹99', image: 'https://images.unsplash.com/photo-1571091655789-9b3d8ddf10b8' },
    { title: 'Cheese Fries', price: '₹119', image: 'https://images.unsplash.com/photo-1606755962773-0b3b220f5b4d' },
  ],
  Mojitos: [
    { title: 'Mint Mojito', price: '₹59', image: 'https://images.unsplash.com/photo-1589308078051-dba3c1b08358' },
    { title: 'Lime Mojito', price: '₹69', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445' },
    { title: 'Berry Mojito', price: '₹79', image: 'https://images.unsplash.com/photo-1589308078051-dba3c1b08358' },
  ],
  Deserts: [
    { title: 'Chocolate Lava Cake', price: '₹129', image: 'https://images.unsplash.com/photo-1586985289688-1b4a1ae622b8' },
    { title: 'Vanilla Ice Cream', price: '₹79', image: 'https://images.unsplash.com/photo-1589712235274-22d3d8bc5a36' },
    { title: 'Brownie Sundae', price: '₹149', image: 'https://images.unsplash.com/photo-1586985289688-1b4a1ae622b8' },
  ],
}

export default function ResponsiveMenu() {
  const [activeCategory, setActiveCategory] = useState<string>('Pizza')
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen  text-white">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-black bg-opacity-50">
        <h1 className="text-xl font-bold">Menu</h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Category Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-16 left-0 right-0 bg-black bg-opacity-95 z-40 p-4 space-y-2"
          >
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveCategory(item)
                  setIsMobileMenuOpen(false)
                }}
                className={`block w-full text-left text-lg py-3 px-4 rounded-lg transition-all ${
                  activeCategory === item
                    ? 'bg-yellow-400 text-black font-semibold'
                    : 'hover:bg-gray-800'
                }`}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-full md:w-1/4 lg:w-1/5 p-4 md:p-6 space-y-3 bg-black bg-opacity-50">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-center md:text-left">Categories</h2>
            <div className="flex justify-center md:justify-start items-center gap-2 mt-2">
              <div className="h-[2px] w-8 bg-yellow-300" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="h-[2px] w-8 bg-yellow-300" />
            </div>
          </div>
          
          {menuItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => setActiveCategory(item)}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className={`block w-full text-left text-lg lg:text-xl py-3 px-4 rounded-lg transition-all ${
                activeCategory === item
                  ? 'bg-yellow-400 text-black font-semibold shadow-lg'
                  : 'hover:bg-gray-800 hover:translate-x-1'
              }`}
            >
              {item}
            </motion.button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4 md:p-6 lg:p-8">
          {/* Category Title */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + '-header'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                {activeCategory}
              </h1>
              <div className="flex justify-center items-center gap-3 md:gap-4">
                <div className="h-[2px] md:h-[3px] w-12 md:w-16 lg:w-20 bg-yellow-300" />
                <div className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5 rounded-full bg-yellow-400" />
                <div className="h-[2px] md:h-[3px] w-12 md:w-16 lg:w-20 bg-yellow-300" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Food Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + '-items'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4 md:space-y-6"
            >
              {foodData[activeCategory].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex flex-col sm:flex-row bg-black bg-opacity-60 text-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Image */}
                  <div className="w-full sm:w-48 md:w-56 lg:w-64 h-48 sm:h-40 md:h-48 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = '/images/pizza.png';
                      }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 md:p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">{item.title}</h2>
                      
                      {/* Decorative line */}
                      <div className="flex items-center gap-2 mb-3 md:mb-4">
                        <div className="h-[1px] w-6 md:w-8 lg:w-10 bg-yellow-300" />
                        <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-yellow-400" />
                        <div className="h-[1px] w-6 md:w-8 lg:w-10 bg-yellow-300" />
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center mb-2 md:mb-3 text-yellow-400 text-sm md:text-base">
                        {'★'.repeat(5)}
                      </div>
                      
                      {/* Description */}
                      <p className="text-xs md:text-sm text-gray-300 mb-4 leading-relaxed">
                        Experience the perfect blend of premium ingredients and expert craftsmanship in every bite.
                      </p>
                    </div>
                    
                    {/* Price and Order Button */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                      <span className="text-yellow-400 text-xl md:text-2xl font-bold">{item.price}</span>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto bg-yellow-400 text-black px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl"
                        onClick={() => setIsOrderModalOpen(true)}
                      >
                        Order Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {(!foodData[activeCategory] || foodData[activeCategory].length === 0) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <h3 className="text-xl text-gray-400 mb-2">No items available</h3>
              <p className="text-gray-500">Please check back later!</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Order Modal */}
      <OrderDetailsCard
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  )
}