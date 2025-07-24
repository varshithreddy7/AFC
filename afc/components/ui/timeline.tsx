"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineItemProps[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className="relative w-full">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#ebbd28]" />
      
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative flex items-center mb-12 last:mb-0"
        >
          {/* Timeline dot */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#ebbd28] border-4 border-black"
          />
          
          <div className="w-full">
            {/* Content wrapper */}
            <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
              <motion.h3
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                className="text-[#ebbd28] font-bold text-xl mb-4"
              >
                {item.title}
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                className="bg-black/30 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-[#ebbd28]/30"
              >
                {item.content}
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
