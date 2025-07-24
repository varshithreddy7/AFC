"use client";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";


const FaqSection: React.FC = () => {
  const faqItems = [
    {
      question: "What are AFC's opening hours?",
      answer:
        "Most AFC outlets are open from 11:00 AM to 11:00 PM, seven days a week. Timings may vary by location, so please check your nearest outlet for exact hours.",
    },
    {
      question: "Does AFC offer vegetarian options?",
      answer:
        "Yes! Alongside our signature fried chicken, we offer a variety of vegetarian dishes, including burgers, pizzas, and sides. Check our menu for the full selection.",
    },
    {
      question: "Can I order AFC food online?",
      answer:
        "Absolutely! You can order online through our website, Zomato, or Swiggy for home delivery. Visit the Order Now section for more details.",
    },
    {
      question: "How can I become an AFC franchise owner?",
      answer:
        "You can start by filling out the franchise inquiry form on our website. Our team will guide you through the process, from setup to launch and beyond.",
    },
    {
      question: "What support does AFC provide to franchisees?",
      answer:
        "AFC offers end-to-end support: kitchen setup, staff hiring, chef training, marketing, and ongoing operational guidance. We’re with you every step of the way!",
    },
    {
      question: "What is the investment required for an AFC franchise?",
      answer:
        "Our franchise model is designed to be affordable and scalable. Investment varies by location and format. Contact us for a detailed proposal tailored to your needs.",
    }
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
        className={`bg-white rounded-md shadow-2xl p-6 max-md:p-4 ${className}`}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="flex-1 text-md font-semibold text-slate-900 leading-relaxed">
            {question}
          </h2>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="flex-shrink-0 flex items-center justify-center w-10 h-10 text-white bg-black rounded-full shadow-md hover:bg-[#ebbd28] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition-colors"
            aria-expanded={isOpen}
            aria-controls={`answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
          </motion.button>
        </div>

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
    <section className="flex overflow-hidden flex-col items-center px-20 pt-28 pb-48 bg-opacity-20 max-md:px-5 max-md:py-24 bg-[url('/images/faq-bg.png')] bg-cover bg-center z-100">
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
      
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="mt-12 max-md:mt-8 space-y-4">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;