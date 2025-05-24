"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Tilt from "react-parallax-tilt"

const cards = [
  {
    id: 1,
    image: "/images/about-us-hero.jpg",
    title: "Clouds",
    description: "A cinematic voyage through the sky.",
    color: "from-amber-400 to-black-800"
  },
  {
    id: 2,
    image: "/images/about-home.png",
    title: "Greens",
    description: "Nature breathes in every frame.",
    color: "from-amber-400 to-black-800"
  },
  {
    id: 3,
    image: "/images/about-us-hero.jpg",
    title: "Rivers",
    description: "Flowing paths of ancient stories.",
    color: "from-amber-400 to-black-800"
  },
  {
    id: 4,
    image: "/images/about-us-hero.jpg",
    title: "Mountains",
    description: "Eternal guardians of the horizon.",
    color: "from-amber-400 to-black-800"
  },
  {
    id: 5,
    image: "/images/combo-home.jpg",
    title: "Forest",
    description: "Where sunlight dances through leaves.",
    color: "from-amber-400 to-black-800"
  },
  {
    id: 6,
    image: "/images/experience-img.png",
    title: "Ocean",
    description: "Endless waves of deep mystery.",
    color: "from-amber-400 to-black-800"
  },
  // {
  //   id: 7,
  //   image: "/images/",
  //   title: "Desert",
  //   description: "Silence speaks in golden dunes.",
  //   color: "from-amber-400 to-black-800"
  // },
]

function SelectedCard({ selected, onClose }) {
  useEffect(() => {
    return () => {}
  }, [selected])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-${selected.id}`}
        className="relative max-w-5xl w-full mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.img
          src={selected.image}
          alt={selected.title}
          className="w-full h-[60vh] object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />

        <div className={`absolute inset-0 bg-gradient-to-t ${selected.color} opacity-80`} />

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <motion.h2 
            className="text-4xl font-bold mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {selected.title}
          </motion.h2>
          <motion.p 
            className="text-xl mb-4 max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {selected.description}
          </motion.p>
          <motion.p 
            className="text-sm opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.5 }}
          >
            Click outside to close
          </motion.p>
        </div>

        <motion.div 
          className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Cards() {
  const [selected, setSelected] = useState(null)
  const [hoveredId, setHoveredId] = useState(null)

  const rows = []
  for (let i = 0; i < cards.length; i += 2) {
    rows.push(cards.slice(i, i + 2))
  }

  return (
    <div className="min-h-screen p-4 sm:p-10 space-y-8 mt-20">
      {rows.map((pair, rowIndex) => (
        <motion.div 
          key={rowIndex} 
          className="flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: rowIndex * 0.1 }}
        >
          {pair.map((card, idx) => (
            <Tilt
              key={card.id}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="1rem"
              className={`w-full ${idx % 2 === 0 ? "sm:w-2/5" : "sm:w-3/5"}`}
            >
              <motion.div
                layoutId={`card-${card.id}`}
                onClick={() => setSelected(card)}
                onHoverStart={() => setHoveredId(card.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="cursor-pointer rounded-2xl overflow-hidden shadow-xl relative group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-84 object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredId === card.id ? 1.05 : 1 }}
                  transition={{ duration: 0.5 }}
                />

                <div className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300`} />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-2xl font-bold">{card.title}</h2>
                  <p className="text-sm mt-1">{card.description}</p>
                </div>

                <motion.div 
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredId === card.id ? 1 : 0 }}
                  transition={{ type: "spring" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </motion.div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      ))}

      <AnimatePresence>
        {selected && (
          <SelectedCard selected={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}
