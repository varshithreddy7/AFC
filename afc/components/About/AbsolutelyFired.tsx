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
    <div className="bg-black text-white font-nunito">
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
          <p>
            <span className="text-[#ebbd28] font-bold">Absolutely Fried Chicken</span>{" "}
            is a celebration of crispy,golden perfection, bringing together the best of comfort food with a vibrant,
            welcoming atmosphere. Known for its signature secret recipe, AFC delivers irresistibly juicy,
            flavor-packed bites that keep guests coming back for more.
            The menu features a tempting selection of fried chicken, sides, and sauces,
            all crafted to elevate the experience. Whether grabbing a quick bite or sharing a hearty meal
            with loved ones, AFC offers a satisfying, no-fuss dining experience.
            Committed to quality and hospitality, AFC ensures every visit is filled with warmth, crunch, and deliciousness.          </p>
        </motion.div>
      </section>

      {/* Tabs */}


      {/* Mission/Vision Panel */}

    </div>
  );
};

export default AboutSection;
