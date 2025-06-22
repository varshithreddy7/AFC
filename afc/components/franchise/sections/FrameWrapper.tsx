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
      className="relative w-full py-20 flex flex-row items-center justify-center gap-12"
    >
      <div className="flex flex-wrap justify-center items-start gap-12 max-w-[1440px] px-6">
        {/* Left: Form section */}
        <motion.div
          variants={formVariants}
          className="relative w-full md:w-[600px] bg-opacity-70 p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-[#ebbd28] mb-6">Contact Us</h2>
          
          <form className="flex flex-col gap-4">
            {["Name", "Email", "Phone"].map((field) => (
              <motion.div 
                key={field}
                variants={inputVariants}
                className="flex flex-col gap-1"
              >
                <label className="text-white text-sm">{field}</label>
                <input
                  type={
                    field === "Email" ? "email" : 
                    field === "Phone" ? "tel" : "text"
                  }
                  className="w-full h-12 px-4 rounded-md bg-transparent border-2 border-[#ebbd28] text-white placeholder-gray-300 focus:outline-none"
                  placeholder={`Enter your ${field}`}
                />
              </motion.div>
            ))}

            <motion.div 
              variants={inputVariants}
              className="flex flex-col gap-1"
            >
              <label className="text-white text-sm">Address</label>
              <textarea
                className="w-full h-32 px-4 py-2 rounded-md bg-transparent border-2 border-[#ebbd28] text-white placeholder-gray-300 focus:outline-none resize-none"
                placeholder="Enter your address"
              />
            </motion.div>

            <motion.button
              variants={inputVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#ebbd28] text-black font-bold py-3 rounded-md hover:bg-yellow-500 transition mt-4"
            >
              Submit
            </motion.button>
          </form>
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
              className="w-full h-auto object-cover rounded-xl"
              alt="AFC Experience"
              src="https://c.animaapp.com/89fS0TNm/img/image-61@2x.png"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl leading-8 text-white"
          >
            <span className="font-black text-[#ebbd28]">
              Absolutely Fried Chicken
            </span>
            {" "}
            can access your favorite social media platforms seamlessly while
            enjoying your meal. Share mouthwatering snapshots of your dining
            experience or connect with friends online in between bites of our
            crispy delights. Embrace the intersection of delicious food and
            digital connectivity for a modern dining experience.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FrameWrapper;