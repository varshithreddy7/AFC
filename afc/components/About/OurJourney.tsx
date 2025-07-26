"use client";
import { Timeline } from "@/components/ui/timeline";
import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// Define TypeScript interfaces
interface TimelineItemData {
  src: string;
  alt: string;
  description: string;
}

interface TimelineItemProps {
  data: TimelineItemData;
}

const OurJourney = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  // Animation variants removed - using inline animations for better TypeScript compatibility

  const TimelineItem: React.FC<TimelineItemProps> = ({ data }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center gap-4"
    >
      <motion.div className="relative w-full md:w-1/3 aspect-video rounded-lg overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full"
        >
          <Image
            src={data.src}
            alt={data.alt}
            className="w-full h-full object-cover rounded-lg"
            fill
            loading="lazy"
            quality={85}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
      </motion.div>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-white text-base md:text-lg leading-relaxed"
      >
        {data.description}
      </motion.p>
    </motion.div>
  );

  const timelineData = [
    {
      title: "The Beginning",
      content: (
        <TimelineItem 
          data={{
            src: "https://c.animaapp.com/89fS0TNm/img/grab--n--go-model-3.png",
            alt: "The Beginning",
            description: "Our journey started in 2022 with a vision to serve. We began with a small team and big dreams."
          }}
        />
      ),
    },
    {
      title: "First Milestone",
      content: (
        <TimelineItem 
          data={{
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1FoL1avel_ZusYiF8NTHow_5YvSrgn4J-KgmnTn7CKHX2WeLQQam27I&s",
            alt: "First Milestone",
            description: "In 2023, we opened our first flagship store, which became an instant hit among food lovers."
          }}
        />
      ),
    },
    {
      title: "Expanding Horizons",
      content: (
        <TimelineItem 
          data={{
            src: "https://img.freepik.com/free-photo/close-up-hands-using-smartphone_23-2149250119.jpg?semt=ais_hybrid&w=740",
            alt: "Expanding Horizons",
            description: "By 2024, we expanded to multiple locations, serving thousands of happy customers every day."
          }}
        />
      ),
    },
    {
      title: "Looking Ahead",
      content: (
        <TimelineItem 
          data={{
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBWE2P7mFMOgvDK0OqIuebLVtuoi7HCoZzwxMdej8RzmBVmihsWcFrwwM&s",
            alt: "Looking Ahead",
            description: "Our journey continues as we strive to innovate and bring the best culinary experiences to our customers."
          }}
        />
      ),
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, staggerChildren: 0.3 }}
      className="relative w-full max-w-screen-xl mx-auto px-4 py-20 bg-black/20"
      style={{
        backdropFilter: "blur(10px)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full mb-8 sm:mb-12 lg:mb-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-black text-[#ebbd28] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight mb-4 sm:mb-6"
        >
          Our Journey
        </motion.h2>
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '48px' }}
            viewport={{ once: true }}
            className="h-0.5 bg-[#ebbd28] hidden sm:block sm:w-12 lg:w-24"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-4 sm:mx-6 lg:mx-8 font-normal text-white text-sm sm:text-base lg:text-lg text-center tracking-[2px] sm:tracking-[3px] lg:tracking-[4px] leading-relaxed uppercase"
          >
            From One Kitchen to a Craving Across Cities
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '48px' }}
            viewport={{ once: true }}
            className="h-0.5 bg-[#ebbd28] hidden sm:block sm:w-12 lg:w-24"
          />
        </div>
      </motion.div>
      
      <Timeline data={timelineData} />
    </motion.section>
  );
};

export default OurJourney;