"use client";
import * as React from "react";
import { useState } from "react";

const FaqSection: React.FC = () => {
  const faqItems = [
    {
      question: "What courses does Samiksha Academy offer?",
      answer: "Samiksha Academy offers a range of UPSC, RPSC, and foundational programs with subject-specific and integrated courses.",
    },
    {
      question: "Do you offer online classes?",
      answer: "Yes, we offer both live online classes and recorded sessions accessible via our learning portal.",
    },
    {
      question: "What are the fees for the IAS coaching program",
      answer: "Our fees vary by course duration and coverage. Please contact our admissions team for detailed brochures and discounts.",
    },
    {
      question: "What is the success rate of your academy?",
      answer: "Over the past 5 years, our academy has maintained a consistent 30%+ success rate in major competitive exams.",
    },
    {
      question: "Do you provide personal mentorship?",
      answer: "Yes, we assign personal mentors to track progress, provide guidance, and tailor strategies for each student.",
    },
  ];

  const FaqItem: React.FC<{
    question: string;
    answer: string;
    className?: string;
  }> = ({ question, answer, className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <article
        className={`flex flex-wrap gap-6 items-start py-9 pr-6 pl-20 bg-white rounded-md shadow-2xl max-md:px-5 ${className}`}
      >
        <h2 className="flex-auto mt-3 text-slate-900">{question}</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-10 px-1.5 w-6 h-6 text-white whitespace-nowrap bg-black rounded-full"
          aria-expanded={isOpen}
          aria-controls={`answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
        >
          {isOpen ? "-" : "+"}
        </button>
        {isOpen && answer && (
          <div
            id={`answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
            className="w-full mt-4 text-slate-700"
          >
            {answer}
          </div>
        )}
      </article>
    );
  };

  return (
    <section className="flex overflow-hidden flex-col items-center px-20 pt-28 pb-48 bg-opacity-20 max-md:px-5 max-md:py-24">
      <div className="flex flex-col w-full max-w-[1111px] max-md:max-w-full">
        <h1 className="self-center ml-8 text-4xl text-center text-white max-md:max-w-full">
          Frequently Ask Questions
        </h1>
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[55%] max-md:ml-0 max-md:w-full">
              <div className="mt-20 w-[600px] text-lg font-semibold leading-tight max-md:mt-10 max-md:max-w-full">
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
