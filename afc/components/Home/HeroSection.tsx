"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import OrderDetailsCard from "@/components/ui/OrderDetailsCard";


const slides = [
  {
    video: "https://res.cloudinary.com/dpfwi3nym/video/upload/Untitled_video_-_Made_with_Clipchamp_2_qpylpo.mp4",
    title: "Absolutely Fried Chicken",
    subtitle: "🔥 Food That Makes You Drool",
    cta: "Order Now",
    action: "modal",
    alt: "Best fried chicken at AFC restaurant - crispy and delicious"
  },
  {
    video: "https://res.cloudinary.com/dpfwi3nym/video/upload/C2167_hubcwx.mp4",
    title: "Premium Quality",
    subtitle: "Fresh Ingredients, Amazing Taste",
    cta: "View Our Chicken Menu",
    path: "/menu",
    alt: "Fresh ingredients for the best fried chicken at AFC"
  },
  {
    video: "https://res.cloudinary.com/dpfwi3nym/video/upload/Untitled_video_-_Made_with_Clipchamp_1_hcpp4r.mp4",
    title: "Join AFC Franchise Family",
    subtitle: "Be Part of a Growing Success Story",
    cta: "Start Your AFC Journey",
    path: "/franchise",
    alt: "AFC franchise opportunity - best fried chicken business"
  },
];

const offers = [
  "🍗 Get 20% off on Best Fried Chicken - First Order Special!",
  "🍔 BOGO Free on AFC Chicken Burgers every Friday!",
  "🚚 Free delivery on Best Fried Chicken orders above ₹500!",
  "⭐ Exclusive Best Fried Chicken deals for AFC members!",
  "👨‍👩‍👧‍👦 Limited-time: 30% off on AFC Family Chicken Meals!",
  "🔥 Try AFC's Award-Winning Best Fried Chicken Today!",
];


export const HeroSection = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handleCtaClick = () => {
    const slide = slides[currentSlide];
    if (slide.action === "modal") {
      setIsOrderModalOpen(true);
    } else if (slide.path) {
      router.push(slide.path);
    }
  };


  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, slides.length);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const playVideo = async () => {
      try {
        videoRefs.current.forEach((video) => {
          if (video) {
            video.pause();
            video.currentTime = 0;
          }
        });
        const currentVideo = videoRefs.current[currentSlide];
        if (currentVideo) {
          await currentVideo.play();
        }
      } catch (error) {
        console.error("Error playing video:", error);
      }
    };
    playVideo();
  }, [currentSlide]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden" aria-label="AFC Best Fried Chicken Restaurant Hero">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {slides.map((slide, index) => (
              <video
                key={index}
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${currentSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                muted
                playsInline
                autoPlay
                loop
                preload="auto"
                onError={(e) => console.error("Video playback error:", e)}
                aria-label={slide.alt}
                title={slide.alt}
              >
                <source src={slide.video} type="video/mp4" />
                <track kind="captions" srcLang="en" label="English captions" />
              </video>

            ))}

            <div className="absolute inset-0 bg-black/40" />


            {/* HERO CONTENT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-10">
              <motion.header
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.2,
                }}
                className="relative text-center"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="h-1 bg-[#ebbd28] mx-auto"
                />
              </motion.header>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.6,
                }}
                className="text-base sm:text-xl md:text-2xl lg:text-3xl mb-6 md:mb-12 text-center max-w-2xl leading-relaxed px-2"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(235, 189, 40, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCtaClick}
                className="relative px-6 py-3 sm:px-10 sm:py-4 md:px-12 md:py-5 bg-[#ebbd28] text-black rounded-full 
      font-bold text-base sm:text-lg md:text-xl transition-all duration-300 shadow-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                aria-label={`${slides[currentSlide].cta} - Best Fried Chicken at AFC`}
              >
                {slides[currentSlide].cta}
              </motion.button>
            </div>




          </motion.div>
        </AnimatePresence>

        <nav className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4" aria-label="Hero slider navigation">
          {slides.map((slide, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              className={`h-2 rounded-full transition-all duration-500 ${currentSlide === index
                ? "bg-[#ebbd28] w-16 shadow-[0_0_15px_rgba(235,189,40,0.6)]"
                : "bg-white/50 w-8"
                }`}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              aria-current={currentSlide === index ? "true" : "false"}
            />
          ))}
        </nav>
      </section>

      {/* Order Modal */}
      <OrderDetailsCard
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />

      {/* Best Fried Chicken Offers Carousel */}
      <section className="w-full bg-black py-2 overflow-hidden" aria-label="AFC Best Fried Chicken Special Offers">
        <div className="relative w-full h-6">
          <div className="flex overflow-hidden" role="marquee" aria-live="polite">
            <motion.div
              className="flex gap-12 items-center whitespace-nowrap text-white text-sm font-semibold"
              animate={{
                x: [-1000, -2000]
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
                times: [0, 1]
              }}
              style={{
                willChange: "transform",
                backfaceVisibility: "hidden",
                translateZ: 0
              }}
            >
              {[...offers, ...offers, ...offers, ...offers].map((offer, index) => (
                <div key={index} className="inline-block px-6">
                  <span className="text-white">
                    {offer.split(" ").map((word, i) =>
                      word.includes("%") || word.includes("₹") || word.includes("BOGO") ? (
                        <span key={i} className="text-[#ebbd28] font-bold">
                          {word}{" "}
                        </span>
                      ) : (
                        `${word} `
                      )
                    )}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Duplicate for seamless looping */}
            <motion.div
              className="flex gap-12 items-center whitespace-nowrap text-white text-sm font-semibold"
              animate={{
                x: [0, -1000]
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
                times: [0, 1]
              }}
              style={{
                willChange: "transform",
                backfaceVisibility: "hidden",
                translateZ: 0
              }}
            >
              {[...offers, ...offers, ...offers, ...offers].map((offer, index) => (
                <div key={`dup-${index}`} className="inline-block px-6">
                  <span className="text-white">
                    {offer.split(" ").map((word, i) =>
                      word.includes("%") || word.includes("₹") || word.includes("BOGO") ? (
                        <span key={i} className="text-[#ebbd28] font-bold">
                          {word}{" "}
                        </span>
                      ) : (
                        `${word} `
                      )
                    )}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;