'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import OrderDetailsCard from '@/components/ui/OrderDetailsCard'
import Image from 'next/image'

interface FoodItem {
  title: string
  price: string
  image: string
  fallbackImage?: string
}

// ────────────────────────────────────────────────────────────────────────────────
// Data
// ────────────────────────────────────────────────────────────────────────────────
const menuItems: string[] = [
  'Fried Chicken',
  'Combos',
  'Burgers',
  'Pizzas',
  'Sandwich',
  'Mojitos',
  'Milkshakes',
  'Deserts',
]

// Fallback images for different categories
const categoryFallbacks: Record<string, string> = {
  'Fried Chicken': '/images/fried-chicken.jpg',
  'Combos': '/images/combo-home.jpg',
  'Burgers': '/images/burger.png',
  'Pizzas': '/images/pizza.png',
  'Sandwich': '/images/burger.png', // Use burger as sandwich fallback
  'Mojitos': '/images/mocktail1.png',
  'Milkshakes': '/images/milkshake-1.JPG',
  'Deserts': '/images/ds-1.JPG',
}

const foodData: Record<string, FoodItem[]> = {
  'Fried Chicken': [
    { title: 'Brosted Chicken', price: '₹150', image: '/images/brosted.png', fallbackImage: '/images/fried-chicken.jpg' },
    { title: 'Chicken legs', price: '₹150', image: '/images/legs.JPG', fallbackImage: '/images/fried-chicken.jpg' },
    { title: "Chicken popcorn", price: "₹120", image:'/images/popcorn.JPG', fallbackImage: '/images/fried-chicken.jpg'},
    {title:"Chicken nuggets", price:"₹150", image:"/images/nugets.JPG", fallbackImage: '/images/fried-chicken.jpg'},
    {title:"Chicken lolly pops", price:"₹150", image:"/images/lolly-pops.png", fallbackImage: '/images/fried-chicken.jpg'},
  ],
  'Combos': [
    { title: "Fried Supreme Combo", price: '₹299', image: '/images/combo-1.jpg', fallbackImage: '/images/combo-home.jpg' },
    { title: "Fried Special Combo", price: '₹299', image: '/images/combo-2.jpg', fallbackImage: '/images/combo-home.jpg' },
    { title: "Fried Friendship Combo", price: '₹299', image: '/images/combo-3.jpg', fallbackImage: '/images/combo-home.jpg' },
    { title: "Wings Combo", price: '₹299', image: '/images/combo-4.jpg', fallbackImage: '/images/combo-home.jpg' },
    { title: "Fried Boneless", price: '₹299', image: '/images/combo-5.jpg', fallbackImage: '/images/combo-home.jpg' },
    { title: "Brosted Chicken Combo", price: '₹299', image: '/images/combo-6.jpg', fallbackImage: '/images/combo-home.jpg' },
  ],
  'Burgers': [
    {title: 'Paneer Burger', price: '₹149', image: '/images/bg-4.JPG', fallbackImage: '/images/burger.png' },
    {title: 'Veg Popular Burger', price: '₹149', image: '/images/bg-5.JPG', fallbackImage: '/images/burger2.png' },
    {title: 'King Burger', price: '₹149', image: '/images/bg-6.JPG', fallbackImage: '/images/burger3.png' },
    { title: 'Chicken Patty Burger', price: '₹149', image: '/images/bg-3.JPG', fallbackImage: '/images/burger.png' },
    { title: 'Special Chicken Grilled Burger', price: '₹149', image: '/images/bg-2.JPG', fallbackImage: '/images/burger2.png' },
    { title: 'Chicken Crispy Zinger Burger', price: '₹149', image: '/images/bg-1.JPG', fallbackImage: '/images/burger3.png' },
  ],
  'Pizzas': [
    { title: 'Veggie Paradise Pizza', price: '₹199', image: '/images/piza-1.JPG', fallbackImage: '/images/pizza.png' },
    { title: 'Paneer Tikka Pizza', price: '₹199', image: '/images/piza-2.JPG', fallbackImage: '/images/pizza2.png' },
    { title: 'Margherita Pizza', price: '₹199', image: '/images/piza-3.JPG', fallbackImage: '/images/pizza3.png' },
    { title: 'Chicken Supreme Pizza', price: '₹199', image: '/images/piza-4.JPG', fallbackImage: '/images/pizza.png' },
    { title: 'Roasted Chicken Pizza', price: '₹199', image: '/images/piza-5.jpg', fallbackImage: '/images/pizza2.png' },
  ],
  'Sandwich': [
    { title: 'Paneer Sandwich', price: '₹129', image: '/images/sd-1.JPG', fallbackImage: '/images/burger.png' },
    { title: 'Chicken Sandwich', price: '₹129', image: '/images/sd-2.JPG', fallbackImage: '/images/burger2.png' },
  ],
  'Mojitos': [
    { title: 'Virgin Mojito', price: '₹70', image: '/images/mocktail1.png', fallbackImage: '/images/mocktail1.png' },
    { title: 'Watermelon Mojito', price: '₹70', image: '/images/mocktail3.png', fallbackImage: '/images/mocktail2.png' },
    { title: 'Blueberry Mojito', price: '₹80', image: '/images/mocktail2.png', fallbackImage: '/images/mocktail3.png' },
  ],
  'Milkshakes': [
    { title: 'Oreo Milkshake', price: '₹129', image: '/images/milkshake-1.JPG', fallbackImage: '/images/milkshake-2.jpg' },
    { title: 'Chocolate Milkshake', price: '₹129', image: '/images/milkshake-2.jpg', fallbackImage: '/images/milkshake-3.jpg' },
    { title: 'Kitkat Milkshake', price: '₹129', image: '/images/milkshake-3.jpg', fallbackImage: '/images/milkshake-1.JPG' },
  ],
  'Deserts': [
    { title: 'Hot Sizzling Brownie', price: '₹149', image: '/images/ds-1.JPG', fallbackImage: '/images/ds-2.jpg' },
    { title: 'Choco Lava Brownie', price: '₹149', image: '/images/ds-2.jpg', fallbackImage: '/images/ds-1.JPG' },
  ],
}

// ────────────────────────────────────────────────────────────────────────────────
// Component
// ────────────────────────────────────────────────────────────────────────────────
// Image Component with Loading State
const MenuItemImage = ({ item, category }: { item: FoodItem; category: string }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [imgSrc, setImgSrc] = useState(item.image)

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    // Try fallback image first
    if (item.fallbackImage && imgSrc !== item.fallbackImage) {
      setImgSrc(item.fallbackImage)
      setIsLoading(true)
    } else if (categoryFallbacks[category] && imgSrc !== categoryFallbacks[category]) {
      setImgSrc(categoryFallbacks[category])
      setIsLoading(true)
    }
  }

  return (
    <div className="relative h-48 sm:h-40 md:h-48 w-full overflow-hidden bg-gray-800">
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Error State */}
      {hasError && !isLoading && (
        <div className="absolute inset-0 bg-gray-800 flex flex-col items-center justify-center text-gray-400">
          <div className="text-4xl mb-2">🍽️</div>
          <p className="text-sm text-center px-2">Image not available</p>
        </div>
      )}
      
      {/* Image */}
      <Image
        src={imgSrc}
        alt={`${item.title} - AFC Restaurant Menu Item`}
        className={`w-full h-full object-cover hover:scale-105 transition-all duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        quality={85}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
    </div>
  )
}

export default function ResponsiveMenu() {
  const [activeCategory, setActiveCategory] = useState<string>('Fried Chicken')
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
                  <MenuItemImage item={item} category={activeCategory} />

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