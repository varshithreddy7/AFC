"use client";
import { Timeline } from "@/components/ui/timeline";
import React from "react";
import { motion, useInView } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const TimelineItem: React.FC<TimelineItemProps> = ({ data }) => (
    <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-4">
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        src={data.src}
        alt={data.alt}
        className="w-full md:w-1/3 rounded-lg object-cover"
      />
      <motion.p 
        variants={itemVariants}
        className="text-white bg-transparent"
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
            description: "Our journey started in 2020 with a vision to revolutionize the food industry. We began with a small team and big dreams."
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
            description: "In 2021, we opened our first flagship store, which became an instant hit among food lovers."
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
            description: "By 2023, we expanded to multiple locations, serving thousands of happy customers every day."
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
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative w-full max-w-screen-xl mx-auto px-4 py-20 bg-transparent"
      style={{
        backdropFilter: "blur(5px)",
      }}
    >
      <motion.div
        variants={itemVariants}
        className="text-center mb-16 relative"
      >
        <div className="absolute top-[47px] left-[106px]  font-black text-white text-2xl text-center tracking-[2.00px] leading-[35px] whitespace-nowrap">
          OUR JOURNEY
        </div>

        <div className="absolute w-[103px] h-[7px] top-[86px] left-[126px]">
          <div className="absolute w-[5px] h-[7px] top-0 left-[49px] bg-[#ebbd28] rounded-[2.52px/3.5px]" />

          <img
            className="left-0 absolute w-10 h-[3px] top-0"
            alt="Line"
            src="https://c.animaapp.com/W6zTihmA/img/line-1.svg"
          />

          <img
            className="left-[63px] absolute w-10 h-[3px] top-0"
            alt="Line"
            src="https://c.animaapp.com/W6zTihmA/img/line-2.svg"
          />
        </div>
      </motion.div>
      
      <Timeline data={timelineData} />
    </motion.section>
  );
};

export default OurJourney;