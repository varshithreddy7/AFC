"use client";

import React from 'react';
import { FaMapMarkerAlt, FaCompass, FaMapMarked } from "react-icons/fa";
import { BsGeoAltFill, BsBuilding } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const locations = [
  { 
    city: "Shamshabad", 
    address: "Shamshabad Road, Hyderguda, Near St. Mary's College",
    directLink: "https://g.co/kgs/k6LF3fm"
  },
  { 
    city: "Shivrampally", 
    address: "6-1-21, Inner Ring Rd, Bavan Colony, Shivrampalli Village",
    directLink: "https://g.co/kgs/tXh4ZcL"
  },
  { 
    city: "Gowlidoddi", 
    address: " 5-3/12' Plot no: 12, Phase 1, Sai Tulasi enclave Gowlidoddi",
    directLink: "https://g.co/kgs/9j35prf" 
  },
  { 
    city: "Moula Ali", 
    address: "Raghavendra Nagar, Laxmi Nagar, Moula Ali",
    directLink: "https://g.co/kgs/Yz9idFH" 
  }
];

export default function OurLocations() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="locations"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative w-full bg-gradient-to-b from-[#ebbd28] to-yellow-500 py-20 px-8 border-b-4 border-black overflow-hidden"
      >
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          className="absolute top-12 left-12 transform -rotate-12"
        >
          <BsGeoAltFill className="text-black text-8xl" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          className="absolute bottom-12 right-12 transform rotate-12"
        >
          <BsBuilding className="text-black text-8xl" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <div className="flex items-center justify-center gap-6 mb-16">
            <FaCompass className="text-black text-5xl transform -rotate-12" />
            <h2 className="text-black font-extrabold text-5xl uppercase tracking-wider text-center">Our Locations</h2>
            <FaMapMarked className="text-black text-5xl transform rotate-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  zIndex: 10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 }
                }}
                className={`relative flex flex-col items-center gap-3 text-base font-semibold text-black bg-white/90 backdrop-blur-sm px-8 py-6 rounded-xl shadow-lg border-2 border-black hover:bg-black hover:text-yellow-400 duration-200 w-[320px] justify-self-center ${
                  index === locations.length - 1 ? 'md:col-span-2 md:justify-self-center lg:col-span-1 lg:col-start-2' : ''
                }`}
              >
                <a
                  href={location.directLink || `https://www.google.com/maps/search/${encodeURIComponent(location.city + ' ' + location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 transition-colors duration-200 group hover:text-yellow-400"
                >
                  <FaMapMarkerAlt className="text-yellow-500 text-2xl transition-colors duration-200 group-hover:text-yellow-400 mb-1" />
                  <span className="text-xl font-bold transition-colors duration-200">{location.city}</span>
                  <span className="text-gray-600 text-sm font-medium text-center transition-colors duration-200 group-hover:text-gray-300">{location.address}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
