import { useEffect } from "react"
import { motion } from "framer-motion"

export default function SelectedCard({ selected }) {
  useEffect(() => {
    const audio = new Audio(selected.audio)
    audio.play()
    return () => audio.pause()
  }, [selected])

  return (
    <motion.div
      layoutId={`card-${selected.id}`}
      className="max-w-4xl w-full mx-auto bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-600"
    >
      <img
        src={selected.image}
        alt={selected.title}
        className="w-full h-[60vh] object-cover"
      />
      <div className="p-10 text-white space-y-6">
        <h2 className="text-3xl font-extrabold">{selected.title}</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          {selected.description}
        </p>
        <p className="italic text-sm text-gray-500">Click anywhere to close</p>
      </div>
    </motion.div>
  )
}
