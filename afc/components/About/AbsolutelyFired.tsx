"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
  const [tab, setTab] = useState<"mission" | "vision">("mission");
  const textRef = useRef(null);
  const missionRef = useRef(null);
  const isInView = useInView(textRef, { once: true });
  const isMissionInView = useInView(missionRef, { once: true });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className=" text-white font-nunito">
      {/* Hero Banner */}
      <section className="relative w-full h-screen">
        <img
          src="/images/about-us-hero.jpg"
          className="w-full h-full object-cover"
          alt="About Hero"
        />
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-0 left-0 bg-black bg-opacity-60 p-10 rounded-md max-w-lg"
        >
          <h2 className="text-3xl font-extrabold text-[#ebbd28]">
            Absolutely Fried Chicken
          </h2>
        </motion.div>
      </section>

      {/* Brand Narrative */}
      <section className="w-full px-6 py-20 flex justify-center">
        <motion.div
          ref={textRef}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl text-2xl leading-loose"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-loose">
            <span className="text-[#ebbd28] font-bold">Absolutely Fried Chicken</span> was born from a bold idea to serve food that’s not just delicious, but made with integrity. We craft fresh, flavorful fried chicken, burgers, pizzas, desserts, and mojitos never using frozen ingredients. Our passionate chefs and caring team ensure every meal is memorable. Committed to quality and customer care, we also empower entrepreneurs with a trusted, low-investment franchise model. At AFC, you’re not just enjoying a meal—you’re joining a fresh, friendly food revolution.
          </p>
        </motion.div>
      </section>

      {/* Tabs */}


      {/* Mission/Vision Panel */}

    </div>
  );
};

export default AboutSection;
