// "use client";
 
// import React from "react";
// import FaqSection from "./FaqSection";
// import HeroSection from "./Home/HeroSection";
// import FranchiseSection from "./Home/FranchiseSection";
// import FeaturedDishSection from "./Home/FeaturedDishSection";
// import ExperienceSection from "./Home/ExperienceSection";
// import Image from "next/image";
// import AboutSection from "./Home/AboutSection";
// import TestimonialsSection from "./Home/TestimonialsSection";
 
// const Home = () => {
//   const [inputValue, setInputValue] = React.useState("");
 
//   const handleClose = () => {
//     setInputValue("");
//   };
//   return (
//     <div >
//       {/* Hero Section */}
//       <HeroSection />
//       {/* About Us Section */}
//       <AboutSection />
//       {/* Franchise Success Section */}
//       <FranchiseSection />
 
//       {/* Featured Dishes Section */}
//       <FeaturedDishSection />
//       {/* Experience Section */}
//       <ExperienceSection />
//       {/* Testimonials Section */}
//       {/* 
//       <section className="flex overflow-hidden flex-col items-center pt-12 pr-7 pb-4 pl-16 bg-amber-400 rounded-[50px] max-md:px-5">
//         <h2 className="ml-6 text-4xl font-extrabold text-white max-md:max-w-full">
//           WHAT OUR CUSTOMERS SAY ?
//         </h2>
 
//         <div className="flex flex-wrap gap-5 justify-between items-center mt-7 ml-7 max-w-full w-[485px]">
//           <hr className="shrink-0 self-stretch my-auto bg-black border-black border-solid border-[3px] h-[3px] w-[190px]" />
//           <div className="flex shrink-0 self-stretch bg-black rounded-full border border-black border-solid h-[25px] w-[25px]" />
//           <hr className="shrink-0 self-stretch my-auto bg-black border-black border-solid border-[3px] h-[3px] w-[190px]" />
//         </div>
 
//         <div className="self-stretch mt-2.5 max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col">
//             <article className="w-6/12 max-md:ml-0 max-md:w-full">
//               <div className="overflow-hidden grow pt-28 w-full bg-amber-400 max-md:pt-24 max-md:mt-9 max-md:max-w-full">
//                 <div className="flex relative flex-col justify-center px-12 pt-6 pb-14 w-full bg-black min-h-[507px] rounded-[32px] shadow-[0px_58px_123px_rgba(21,21,21,0.15)] max-md:px-5 max-md:max-w-full">
//                   <div className="flex z-0 flex-col items-end w-full max-md:max-w-full">
//                     <img
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/61656e8fa7d7708890dcaec45af232678d1ab247?placeholderIfAbsent=true&apiKey=ab2ef5d51ed843ffa372bcaec288b309"
//                       alt="Decorative element"
//                       className="object-contain max-w-full aspect-[4.98] shadow-[0px_68px_145px_rgba(21,21,21,0.15)] w-[204px]"
//                     />
//                   </div>
 
//                   <blockquote className="z-0 mt-16 text-4xl text-white max-md:mt-10 max-md:max-w-full">
//                     If you want real marketing that works and effective implementation - mobile app's got you covered.
//                   </blockquote>
 
//                   <footer className="flex z-0 justify-between items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
//                     <div className="self-stretch my-auto min-w-60">
//                       <cite className="text-3xl font-extrabold text-amber-400 not-italic">
//                         Stephen Brekke
//                       </cite>
//                       <p className="text-xl text-white">Legacy Integration Producer</p>
//                     </div>
//                   </footer>
 
//                   <img
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdd256ae07d5c74e25b5ef742fcc529d9bc0a07a?placeholderIfAbsent=true&apiKey=ab2ef5d51ed843ffa372bcaec288b309"
//                     alt="Stephen Brekke"
//                     className="object-contain absolute z-0 max-w-full rounded-full aspect-square h-[152px] left-[50px] top-[-66px] w-[151px]"
//                   />
//                 </div>
//               </div>
//             </article>
 
//             <article className="w-6/12 max-md:ml-0 max-md:w-full">
//               <div className="overflow-hidden grow pt-28 w-full bg-amber-400 max-md:pt-24 max-md:mt-9 max-md:max-w-full">
//                 <div className="flex relative flex-col justify-center px-12 pt-6 pb-14 w-full bg-black min-h-[507px] rounded-[32px] shadow-[0px_58px_123px_rgba(21,21,21,0.15)] max-md:px-5 max-md:max-w-full">
//                   <div className="flex z-0 flex-col items-end w-full max-md:max-w-full">
//                     <img
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/3acbebf24bdea75889245d06f1415614ca8b85e3?placeholderIfAbsent=true&apiKey=ab2ef5d51ed843ffa372bcaec288b309"
//                       alt="Decorative element"
//                       className="object-contain max-w-full aspect-[4.98] shadow-[0px_68px_145px_rgba(21,21,21,0.15)] w-[204px]"
//                     />
//                   </div>
 
//                   <blockquote className="z-0 mt-16 text-4xl text-white max-md:mt-10 max-md:max-w-full">
//                     If you want real marketing that works and effective implementation - mobile app's got you covered.
//                   </blockquote>
 
//                   <footer className="flex z-0 justify-between items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
//                     <div className="self-stretch my-auto min-w-60">
//                       <cite className="text-3xl font-extrabold text-amber-400 not-italic">
//                         Stephen Brekke
//                       </cite>
//                       <p className="text-xl text-white">Legacy Integration Producer</p>
//                     </div>
//                   </footer>
 
//                   <img
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdd256ae07d5c74e25b5ef742fcc529d9bc0a07a?placeholderIfAbsent=true&apiKey=ab2ef5d51ed843ffa372bcaec288b309"
//                     alt="Stephen Brekke"
//                     className="object-contain absolute z-0 max-w-full rounded-full aspect-square h-[152px] left-[50px] top-[-66px] w-[151px]"
//                   />
//                 </div>
//               </div>
//             </article>
//           </div>
//         </div>
//       </section> */}
//       <TestimonialsSection/>
//       {/* FeedBack section*/}
//       <section className="flex flex-row gap-5 justify-between items-start px-5 py-10 rounded-[50px] max-md:flex-col max-md:gap-10 max-md:px-4">
//         {/* FAQ Section */}
//         <div className="w-1/2 max-md:w-full">
//           <FaqSection />
//         </div>
 
//         {/* Feedback Section */}
//         <div className="w-1/2 flex flex-col items-center font-semibold max-md:w-full pt-50">
//           {/* Header */}
//           <div className="flex flex-col items-center w-full">
//             <img
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/9482fb9f1aabb8a2cc6b1271facceeb769a403e3?placeholderIfAbsent=true&apiKey=ab2ef5d51ed843ffa372bcaec288b309"
//               className="object-contain max-w-full aspect-[0.73] w-[210px]"
//               alt="Feedback illustration"
//             />
//             <h1 className="mt-16 text-3xl text-white text-center max-md:mt-10">Any Questions?</h1>
//             <p className="mt-2 text-base text-white text-center max-w-md px-4">
//               You can ask anything you want to know about our services
//             </p>
//           </div>
 
//           {/* Input Section */}
//           <div className="w-full max-w-lg mt-10 px-4">
//             <div className="flex justify-between items-start gap-4 w-full">
//               <div className="flex flex-col flex-grow">
//                 <label htmlFor="feedback-input" className="text-sm text-white">
//                   Let us know your question
//                 </label>
//                 <input
//                   id="feedback-input"
//                   type="text"
//                   value={inputValue}
//                   onChange={(e) => setInputValue(e.target.value)}
//                   placeholder="Enter your question here..."
//                   className="mt-3 p-2 w-full text-base bg-transparent border-b border-white text-white outline-none placeholder-white focus:border-amber-400 transition-colors"
//                 />
//               </div>
//               {inputValue && (
//                 <button
//                   onClick={handleClose}
//                   className="mt-3 text-2xl text-neutral-900 hover:text-amber-400 cursor-pointer transition-colors"
//                   aria-label="Clear input"
//                 >
//                   ×
//                 </button>
//               )}
//             </div>
 
//             {/* Submit Button */}
//             <button
//               disabled={!inputValue.trim()}
//               className={`mt-6 w-full py-3 rounded-lg text-lg font-bold transition-colors ${inputValue.trim()
//                   ? "bg-amber-400 text-black hover:bg-amber-500"
//                   : "bg-gray-500 text-gray-300 cursor-not-allowed"
//                 }`}
//             >
//               Submit Question
//             </button>
//           </div>
//         </div>
//       </section>
 
 
//     </div>
//   );
// }
 
 
// export default Home;


"use client";

import React from "react";
import FaqSection from "./FaqSection";
import HeroSection from "./Home/HeroSection";
import FranchiseSection from "./Home/FranchiseSection";
import FeaturedDishSection from "./Home/FeaturedDishSection";
import ExperienceSection from "./Home/ExperienceSection";
import AboutSection from "./Home/AboutSection";
import TestimonialsSection from "./Home/TestimonialsSection";

const Home = () => {
  const [inputValue, setInputValue] = React.useState("");

  const handleClose = () => {
    setInputValue("");
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Us Section */}
      <AboutSection />
      
      {/* Franchise Success Section */}
      <FranchiseSection />

      {/* Featured Dishes Section */}
      <FeaturedDishSection />
      
      {/* Experience Section */}
      <ExperienceSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ & Feedback Section */}
      <section className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 py-10 md:py-16">
        {/* FAQ Section - Full width on mobile, half on desktop */}
        <div className="w-full lg:w-1/2">
          <FaqSection />
        </div>

        {/* Feedback Section - Full width on mobile, half on desktop */}
        <div className="w-full lg:w-1/2 flex flex-col items-center md:mt-40">
          {/* Header */}
          <div className="flex flex-col items-center w-full max-w-md mx-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9482fb9f1aabb8a2cc6b1271facceeb769a403e3?placeholderIfAbsent=true&apiKey=ab2ef5d51ed843ffa372bcaec288b309"
              className="w-40 md:w-52 lg:w-60 object-contain"
              alt="Feedback illustration"
            />
            <h1 className="mt-8 md:mt-12 text-2xl md:text-3xl lg:text-4xl text-white text-center font-bold">
              Any Questions?
            </h1>
            <p className="mt-2 md:mt-4 text-sm md:text-base text-white text-center opacity-80">
              You can ask anything you want to know about our services
            </p>
          </div>

          {/* Input Section */}
          <div className="w-full max-w-md mt-8 md:mt-12 px-4">
            <div className="flex justify-between items-start gap-4 w-full">
              <div className="flex flex-col flex-grow">
                <label htmlFor="feedback-input" className="text-sm text-white opacity-80">
                  Let us know your question
                </label>
                <input
                  id="feedback-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter your question here..."
                  className="mt-2 p-2 w-full text-base bg-transparent border-b border-white text-white outline-none placeholder-white/50 focus:border-amber-400 transition-colors"
                />
              </div>
              {inputValue && (
                <button
                  onClick={handleClose}
                  className="mt-2 text-2xl text-white hover:text-amber-400 cursor-pointer transition-colors"
                  aria-label="Clear input"
                >
                  ×
                </button>
              )}
            </div>

            {/* Submit Button */}
            <button
              disabled={!inputValue.trim()}
              className={`mt-6 w-full py-3 rounded-lg text-base md:text-lg font-bold transition-colors ${
                inputValue.trim()
                  ? "bg-amber-400 text-black hover:bg-amber-500"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
            >
              Submit Question
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;