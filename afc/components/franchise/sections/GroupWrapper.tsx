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
      className="relative w-full max-w-[1322px] mx-auto mb-24 px-4"
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div >
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
              className="w-64 md:w-[500px] h-auto object-cover rounded-xl shadow-lg mx-auto"
            />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="inline-block w-40 md:w-80 h-1 bg-yellow-400 mb-4 mx-auto"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-white text-lg md:text-2xl font-bold tracking-wide"
            >
              LET'S GROW TOGETHER
            </motion.p>
          </motion.div>


        </div>


        {/* Text Box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-2 border-yellow-400 p-4 md:p-8 rounded-lg max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white text-base md:text-xl leading-relaxed font-medium"
          >
            <span className="text-yellow-500 text-lg md:text-2xl font-bold">
              Absolutely Fried Chicken
            </span>{" "}
            is a fast-food restaurant chain that specializes in fried chicken, pizzas, burgers, and many more. The company was founded in 2021 by two friends who wanted to bring the taste of Southern-style fried chicken to the masses. Since then, Absolutely Fried Chicken has grown to become one of the most popular fast-food chains in the country, with locations in every major city. We are now looking to expand our brand by offering franchise opportunities to entrepreneurs who share our passion for great food and excellent customer service.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};
