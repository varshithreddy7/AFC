'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import OrderDetailsCard from '@/components/ui/OrderDetailsCard'
import Image from 'next/image'

interface FoodItem {
  title: string
  price: string
  image: string
}

// ────────────────────────────────────────────────────────────────────────────────
// Data
// ────────────────────────────────────────────────────────────────────────────────
const menuItems: string[] = [
  'Pizza',
  'Milk Shakes',
  'Combos',
  'Fries',
  'Mojitos',
  'Deserts',
]

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

// ────────────────────────────────────────────────────────────────────────────────
// Component
// ────────────────────────────────────────────────────────────────────────────────
export default function ResponsiveMenu() {
  const [activeCategory, setActiveCategory] = useState<string>('Pizza')
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[url('/images/hero-bg.jpg')] bg-cover bg-center text-white">
      {/* ─────────────── Mobile Header ─────────────── */}
      <div className="md:hidden flex flex-col items-center p-4 bg-black/40 backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-2">Menu Items</h1>
        <div className="flex justify-center items-center gap-4 mb-6">
          <motion.div
            className="h-[3px] w-24 bg-yellow-300 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          <motion.div
            className="w-5 h-5 rounded-full bg-[#ebbd28]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
          />
          <motion.div
            className="h-[3px] w-24 bg-yellow-300 origin-right"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>

        {/* Horizontal‑scrolling categories */}
        <div
          className="w-full flex flex-wrap items-center justify-center scrollbar-hidden scrollbar-thumb-transparent scrollbar-track-transparent"
        >
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`inline-block mx-1 px-3 py-1 rounded-full text-sm font-semibold border-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
              /* Active styles */
              activeCategory === item
                ? 'bg-yellow-400 text-black border-yellow-400'
                : 'text-white border-gray-700 hover:bg-yellow-400 hover:text-black hover:border-yellow-400'
            }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* ─────────────── Layout Wrapper ─────────────── */}
      <div className="flex flex-col md:flex-row min-h-screen bg-black/60">
        {/* Sidebar (desktop only) */}
        <aside className="hidden md:block md:w-1/4 lg:w-1/5 p-6 bg-black/50 backdrop-blur-sm overflow-y-auto">
          <h2 className="text-3xl font-bold mb-4">Categories</h2>
          <div className="flex items-center gap-2 mb-8">
            <div className="h-[2px] w-8 bg-yellow-300" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="h-[2px] w-8 bg-yellow-300" />
          </div>

          {menuItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => setActiveCategory(item)}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`block w-full text-left py-3 px-4 rounded-lg mb-1 transition-all ${
              activeCategory === item
                ? 'bg-yellow-400 text-black font-semibold shadow-lg'
                : 'hover:bg-gray-800'
            }`}
            >
              {item}
            </motion.button>
          ))}
        </aside>

        {/* ─────────────── Main Content ─────────────── */}
        <main className="flex-1 p-6 md:p-8 lg:p-10 space-y-8 overflow-y-auto">
          {/* Category heading */}
          <AnimatePresence mode="wait">
            <motion.header
              key={activeCategory + '-header'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                {activeCategory}
              </h1>
              <div className="flex justify-center items-center gap-3">
                <div className="h-[2px] w-12 bg-yellow-300" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="h-[2px] w-12 bg-yellow-300" />
              </div>
            </motion.header>
          </AnimatePresence>

          {/* Items grid */}
          <AnimatePresence mode="wait">
            <motion.section
              key={activeCategory + '-items'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {foodData[activeCategory].map((item, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className="bg-gray-900/70 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl backdrop-blur-md flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-40 md:h-48 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      fill
                      onError={(e) => {
                        ;(e.currentTarget as HTMLImageElement).src = '/images/pizza.png'
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <div className="text-yellow-400 text-sm mb-2">{'★'.repeat(5)}</div>
                    <p className="text-xs text-gray-300 flex-1 mb-4 leading-relaxed">
                      Experience the perfect blend of premium ingredients and expert craftsmanship in every bite.
                    </p>
                    <div className="flex items-center justify-between gap-4 mt-auto">
                      <span className="text-yellow-400 text-xl font-bold">{item.price}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-yellow-300"
                        onClick={() => setIsOrderModalOpen(true)}
                      >
                        Order Now
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.section>
          </AnimatePresence>

          {/* Empty state */}
          {(!foodData[activeCategory] || foodData[activeCategory].length === 0) && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <h3 className="text-xl text-gray-400 mb-2">No items available</h3>
              <p className="text-gray-500">Please check back later!</p>
            </motion.div>
          )}
        </main>
      </div>

      {/* ─────────────── Order Modal ─────────────── */}
      <OrderDetailsCard isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </div>
  )
}

// ────────────────────────────────────────────────────────────────────────────────
// ✨ Quick Note – Hiding the mobile scrollbar
// If you want to fully hide the horizontal scrollbar on mobile WebKit browsers,
// add this to your global CSS (requires the tailwind-scrollbar-hide plugin or
// manual CSS):
// .scrollbar-hide::-webkit-scrollbar { display: none; }
// ────────────────────────────────────────────────────────────────────────────────