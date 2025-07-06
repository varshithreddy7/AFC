
"use client";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";


const FaqSection: React.FC = () => {
  const faqItems = [
    {
      question: "What kind of service can I expect at AFC restaurants?",
      answer:
        "We prioritize friendly, fast, and professional service across all locations. Our team is trained to deliver a welcoming experience from the moment you step in.",
    },
    {
      question: "How is the ambiance at AFC outlets?",
      answer:
        "Our outlets are designed with cozy seating, vibrant interiors, and Instagrammable corners — perfect for casual dining and memorable moments.",
    },
    {
      question: "What kind of support do franchise owners receive?",
      answer:
        "Franchise owners get full support including kitchen setup, staff hiring, marketing materials, chef training, and ongoing operational guidance.",
    },
    
    {
      question: "Lifetime Partnership",
      answer:
        "We grow only when you grow — long‑term support guaranteed.",
    },
  ];


  const answerVariants = {
    collapsed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  } as const;

  const FaqItem: React.FC<{
    question: string;
    answer: string;
    className?: string;
  }> = ({ question, answer, className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className={`flex flex-wrap gap-6 items-start py-9 pr-6 pl-20 bg-white rounded-md shadow-2xl max-md:px-5 ${className}`}
      >
        <h2 className="flex-auto mt-3 text-md font-semibold text-slate-900">
          {question}
        </h2>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="z-10 flex items-center justify-center w-10 h-10 text-white bg-black rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 transition-colors"
          aria-expanded={isOpen}
          aria-controls={`answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
        </motion.button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              id={`answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
              variants={answerVariants}
              initial="collapsed"
              animate="open"
              exit="collapsed"
              className="w-full mt-4 text-base text-slate-700"
            >
              {answer}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>
    );
  };

  return (
<section className="flex overflow-hidden flex-col items-center px-20 pt-28 pb-48 bg-opacity-20 max-md:px-5 max-md:py-24 bg-[url('/images/faq-bg.png')] bg-cover bg-center">
       <div className="flex flex-col items-center align-center ">
         <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto text-4xl font-bold text-center text-white drop-shadow-sm max-md:max-w-full"
        >
          Franchise FAQs
        </motion.h1>
          <div className="flex justify-center items-center gap-4 mb-8">
            <motion.div 
              className="h-[3px] w-25 bg-yellow-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <motion.div 
              className="w-5 h-5 rounded-full bg-[#ebbd28]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            />
            <motion.div 
              className="h-[3px] w-25 bg-yellow-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
       </div>
      <div className="flex flex-col w-full max-w-[1111px] max-md:max-w-full text-center items-center">
        <div className="max-md:max-w-full mt-2 w-full max-w-[1111px]">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-full max-md:ml-0 max-md:w-full">
              <div className="mt-20 w-[600px] text-sm leading-tight max-md:mt-10 max-md:max-w-full">
                {faqItems.map((item, index) => (
                  <FaqItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    className={index > 0 ? "mt-4" : ""}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
