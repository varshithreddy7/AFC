"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export const GroupWrapper = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-[1322px] mx-auto my-24 px-4"
    >
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-18">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="https://c.animaapp.com/89fS0TNm/img/image-51.png"
            alt="Absolutely Fried Chicken"
            width={500}
            height={300}
            className="w-full max-w-md h-auto object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Text Box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-2 border-yellow-400 p-6 lg:p-8 rounded-lg max-w-3xl mt-18"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white text-xl leading-relaxed font-medium"
          >
            <span className="text-yellow-500 text-2xl">Absolutely Fried Chicken </span>
            is a fast-food restaurant chain that
            specializes in fried chicken, pizzas, Burgers and many more.
            The company was founded in 2021 by two friends who wanted to bring
            the taste of Southern-style fried chicken to the masses. Since then,
            Absolutely Fried Chicken has grown to become one of the most popular
            fast-food chains in the country, with locations in every major city.
            We are now looking to expand our brand by offering franchise opportunities
            to entrepreneurs who share our passion for great food and excellent customer service.
          </motion.p>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-left mt-12"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="inline-block w-80 h-1 bg-yellow-400 mb-4 text-center ml-10"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-white text-2xl font-bold tracking-wide ml-14"
        >
          LET'S GROW TOGETHER
        </motion.p>
      </motion.div>
    </motion.div>
  );
};