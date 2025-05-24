"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export const FrameWrapper = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full py-20 flex flex-row items-center gap-12"
    >
      <div className="flex flex-wrap justify-center items-start gap-12 max-w-[1440px] px-6">
        {/* Left: Background image with form overlay */}
        <motion.div
          variants={formVariants}
          className="relative w-[822px] h-[987px]"
        >
          <motion.div
            variants={formVariants}
            className="absolute w-[770px] h-[353px] top-[200px] left-[13px] rounded-xl p-6 flex flex-col justify-center items-center gap-4 shadow-lg"
          >
            {["Name", "Email", "Phone No"].map((placeholder, index) => (
              <motion.input
                key={placeholder}
                variants={inputVariants}
                type={placeholder === "Email" ? "email" : placeholder === "Phone No" ? "tel" : "text"}
                placeholder={placeholder}
                className="w-full h-[200px] px-4 py-10 rounded-md bg-transparent border-2 border-[#ebbd28] text-white placeholder-white focus:outline-none"
              />
            ))}

            <motion.input
              variants={inputVariants}
              type="textarea"
              placeholder="Address"
              className="w-full h-[700px] px-4 py-24 rounded-md bg-transparent border-2 border-[#ebbd28] text-white placeholder-white focus:outline-none"
            />

            <motion.button
              variants={inputVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-50 bg-[#ebbd28] text-black font-bold py-2 rounded-md hover:bg-yellow-500 transition"
            >
              Submit
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right: Text content and image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8 max-w-[468px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              width={468}
              height={353}
              className="w-full h-[353px] object-cover rounded-xl"
              alt="AFC Experience"
              src="https://c.animaapp.com/89fS0TNm/img/image-61@2x.png"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="[font-family:'Nunito',Helvetica] text-xl leading-10"
          >
            <span className="font-black text-[#ebbd28]">
              Absolutely Fried Chicken
            </span>
            <span className="font-bold text-white">
              {" "}
              can access your favorite social media platforms seamlessly while
              enjoying your meal. Share mouthwatering snapshots of your dining
              experience or connect with friends online in between bites of our
              crispy delights. Embrace the intersection of delicious food and
              digital connectivity for a modern dining experience.
            </span>
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FrameWrapper;