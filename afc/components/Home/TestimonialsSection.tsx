// "use client";

// import { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// export default function TestimonialsSection() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   // Parallax effects - reversed directions
//   const leftStackY = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
//   const rightStackY = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // const testimonials = [
  //   {
  //     id: 1,
  //     name: "Sarah Johnson",
  //     role: "Food Critic",
  //     review: "The most authentic Italian cuisine I've tasted outside of Rome. The handmade pasta was perfection!",
  //     rating: 5,
  //     image: "/chef1.jpg"
  //   },
  //   {
  //     id: 2,
  //     name: "Michael Chen",
  //     role: "Regular Customer",
  //     review: "Their tiramisu is legendary. I come every Friday just for dessert and the warm atmosphere.",
  //     rating: 4,
  //     image: "/chef2.jpg"
  //   },
  //   {
  //     id: 3,
  //     name: "Emma Rodriguez",
  //     role: "Event Planner",
  //     review: "Hosted a corporate dinner here and everyone raved about the wine pairings. Flawless service.",
  //     rating: 5,
  //     image: "/chef3.jpg"
  //   },
  //   {
  //     id: 4,
  //     name: "David Kim",
  //     role: "Travel Blogger",
  //     review: "Found this hidden gem while exploring the city. The risotto alone is worth the trip!",
  //     rating: 5,
  //     image: "/chef4.jpg"
  //   }
  // ];

//   // Split testimonials into two equal stacks
//   const half = Math.ceil(testimonials.length / 2);
//   const leftTestimonials = testimonials.slice(0, half);
//   const rightTestimonials = [...testimonials.slice(half)].reverse(); // Reverse right stack

//   return (
//     <section 
//       ref={containerRef}
//       className="relative h-[300vh] bg-white"
//     >
//       {/* Fixed viewport container */}
//       <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
//         <motion.div 
//           style={{ opacity }}
//           className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-black"
//         />

//         {/* Left stack (builds upwards - new cards from bottom) */}
//         <motion.div 
//           style={{ y: leftStackY }}
//           className="absolute left-0 top-0 h-[400%] w-1/2 flex flex-col items-end pr-4 md:pr-8 gap-8"
//         >
//           {leftTestimonials.map((testimonial, index) => (
//             <div 
//               key={`left-${testimonial.id}`}
//               className="w-full h-screen flex items-center justify-end py-16"
//             >
//               <div className="w-[90%] md:w-4/5 h-[70vh] md:h-[80vh] bg-yellow-400 rounded-2xl border-2 border-black shadow-2xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
//                 <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>
//                 <div className="relative z-10">
//                   <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">{testimonial.name}</h2>
//                   <p className="text-black text-base md:text-lg mb-2 italic">{testimonial.role}</p>
//                   <p className="text-black text-lg md:text-xl mb-6">"{testimonial.review}"</p>
//                   <div className="text-yellow-800 text-xl md:text-2xl">
//                     {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </motion.div>

//         {/* Right stack (builds downwards - new cards from top) */}
//         <motion.div 
//           style={{ y: rightStackY }}
//           className="absolute right-0 top-0 h-[400%] w-1/2 flex flex-col items-start pl-4 md:pl-8 gap-8"
//         >
//           {rightTestimonials.map((testimonial, index) => (
//             <div 
//               key={`right-${testimonial.id}`}
//               className="w-full h-screen flex items-center justify-start py-16"
//             >
//               <div className="w-[90%] md:w-4/5 h-[70vh] md:h-[80vh] bg-black rounded-2xl border-2 border-yellow-400 shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center relative overflow-hidden">
//                 <div className="absolute inset-0 bg-yellow-400 opacity-10 pointer-events-none"></div>
//                 <div className="w-full md:w-1/2 h-1/3 md:h-full bg-gray-800 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
//                   <div 
//                     className="w-full h-full bg-cover bg-center"
//                     style={{ backgroundImage: `url(${testimonial.image})` }}
//                   />
//                 </div>
//                 <div className="w-full md:w-1/2 p-4 md:p-8 relative z-10">
//                   <h2 className="text-yellow-400 text-3xl md:text-4xl font-bold mb-4">{testimonial.name}</h2>
//                   <p className="text-white text-base md:text-lg mb-2 italic">{testimonial.role}</p>
//                   <p className="text-white text-lg md:text-xl mb-6">"{testimonial.review}"</p>
//                   <div className="text-yellow-400 text-xl md:text-2xl">
//                     {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </motion.div>

//         {/* Instruction indicator */}
//         <motion.div 
//           style={{ opacity }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-lg bg-black/50 px-4 py-2 rounded-full"
//         >
//           Scroll to navigate testimonials
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const leftStackY = useTransform(scrollYProgress, [0, 1], ["80%", "-80%"]);
  const rightStackY = useTransform(scrollYProgress, [0, 1], ["-80%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Critic",
      review: "The most authentic Italian cuisine I've tasted outside of Rome. The handmade pasta was perfection!",
      rating: 5,
      image: "/chef1.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Regular Customer",
      review: "Their tiramisu is legendary. I come every Friday just for dessert and the warm atmosphere.",
      rating: 4,
      image: "/chef2.jpg"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Travel Blogger",
      review: "Found this hidden gem while exploring the city. The risotto alone is worth the trip!",
      rating: 5,
      image: "/chef4.jpg"
    },
    {
      id: 5,
      name: "Lisa Wong",
      role: "Food Blogger",
      review: "The carbonara here changed my life. Perfectly al dente pasta with the creamiest sauce!",
      rating: 5,
      image: "/chef5.jpg"
    },
    
  ];

  // Split testimonials
  const half = Math.ceil(testimonials.length / 2);
  const leftTestimonials = testimonials.slice(0, half);
  const rightTestimonials = [...testimonials.slice(half)].reverse();

  return (
    <section 
      ref={containerRef}
      className="relative h-[200vh] "
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 "
        />

        {/* Left stack */}
        <motion.div 
          style={{ y: leftStackY }}
          className="absolute left-0 top-0 h-[300%] w-1/2 flex flex-col items-end pr-4 md:pr-8 gap-4"
        >
          {leftTestimonials.map((testimonial) => (
            <div 
              key={`left-${testimonial.id}`}
              className="w-full h-screen flex items-center justify-end py-8"
            >
              <div className="w-[90%] md:w-4/5 h-[60vh] bg-yellow-400 rounded-2xl border-2 border-black shadow-2xl p-6 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">{testimonial.name}</h2>
                  <p className="text-black text-base md:text-lg mb-2 italic">{testimonial.role}</p>
                  <p className="text-black text-lg md:text-xl mb-6">"{testimonial.review}"</p>
                  <div className="text-yellow-800 text-xl md:text-2xl">
                    {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right stack */}
        <motion.div 
          style={{ y: rightStackY }}
          className="absolute right-0 top-0 h-[300%] w-1/2 flex flex-col items-start pl-4 md:pl-8 gap-4"
        >
          {rightTestimonials.map((testimonial) => (
            <div 
              key={`right-${testimonial.id}`}
              className="w-full h-screen flex items-center justify-start py-8"
            >
              <div className="w-[90%] md:w-4/5 h-[60vh]  rounded-2xl border-2 border-yellow-400 shadow-2xl p-6 flex flex-col md:flex-row relative overflow-hidden">
                <div className="absolute inset-0 bg-yellow-400 opacity-10 pointer-events-none"></div>
                <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gray-800 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-center">
                  <h2 className="text-yellow-400 text-3xl md:text-4xl font-bold mb-4">{testimonial.name}</h2>
                  <p className="text-white text-base md:text-lg mb-2 italic">{testimonial.role}</p>
                  <p className="text-white text-lg md:text-xl mb-6">"{testimonial.review}"</p>
                  <div className="text-yellow-400 text-xl md:text-2xl">
                    {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
}