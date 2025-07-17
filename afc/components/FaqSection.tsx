/* eslint-disable react/jsx-key */
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
      question: "Is AFC food freshly prepared?",
      answer:
        "Yes, all our dishes are made fresh daily using high-quality ingredients. We never use frozen raw materials.",
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
    },
    {
      question: "Can I host parties or events at AFC?",
      answer:
        "Yes! Many of our outlets offer party packages and event hosting. Contact your nearest AFC for details and reservations.",
    },
    {
      question: "Is there a loyalty or membership program?",
      answer:
        "Yes, AFC offers exclusive deals and rewards for members. Ask at your local outlet or check our website for the latest offers.",
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
          className="z-10 flex items-center justify-center w-10 h-10 text-white bg-black rounded-full shadow-md hover:bg-[#ebbd28] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition-colors"
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
      
      <div className="flex flex-col w-full max-w-[1111px] max-md:max-w-full text-center items-center relative">
      
        <div className="max-md:max-w-full mt-2 w-full max-w-[1111px] z-10">
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

export default FaqSection;