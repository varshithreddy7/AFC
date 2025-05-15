// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const tabs = [
//   { name: "HOME", href: "/" },
//   { name: "ABOUT", href: "/about" },
//   { name: "MENU", href: "/menu" },
//   { name: "FRANCHISE", href: "/franchise" },
//   { name: "GALLERY", href: "/gallery" },
// ];

// const Header = () => {
//   const pathname = usePathname();
//   const [activeTab, setActiveTab] = useState("");
//   const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
//   const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const currentTab = tabs.find((tab) => tab.href === pathname);
//     if (currentTab) {
//       setActiveTab(currentTab.name);
//     }
//   }, [pathname]);

//   useEffect(() => {
//     const index = tabs.findIndex((tab) => tab.name === activeTab);
//     const tabElement = tabRefs.current[index];
//     if (tabElement) {
//       const { offsetLeft, clientWidth } = tabElement;
//       setUnderlineStyle({ left: offsetLeft, width: clientWidth });
//     }
//   }, [activeTab]);

//   // Handle scroll-based header opacity
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gradient-to-r from-black/80 to-yellow-500/80" : "bg-[#141414]"
//         }`}
//     >
//       <div className="relative h-[130px] flex items-center justify-between px-8">
//         {/* Logo */}
//         <Link href="/" onClick={() => setActiveTab("HOME")}>
//           <img
//             src="https://c.animaapp.com/X56oiYEi/img/image-2@2x.png"
//             alt="Logo"
//             className="w-32 h-32 object-cover"
//           />
//         </Link>

//         {/* Navigation */}
//         <div className="relative flex gap-10 items-center">
//           {tabs.map((tab, index) => (
//             <Link href={tab.href} key={tab.name}>
//               <div
//                 ref={(el) => (tabRefs.current[index] = el)}
//                 onClick={() => setActiveTab(tab.name)}
//                 className={`relative font-black text-xl tracking-[2px] cursor-pointer ${activeTab === tab.name ? "text-[#ebbd28]" : "text-white"
//                   }`}
//               >
//                 {tab.name}
//               </div>
//             </Link>
//           ))}

//           {/* Underline Indicator */}
//           <div
//             className="absolute bottom-[-5px] flex items-center gap-[3px] transition-all duration-300"
//             style={{
//               left: underlineStyle.left,
//               width: underlineStyle.width,
//             }}
//           >
//             {/* Dash */}
//             <div className="w-[60px] h-[3px] bg-[#ebbd28] rounded-sm" />
//             {/* Dot */}
//             <div className="w-[6px] h-[6px] bg-[#ebbd28] rounded-full" />
//             {/* Dash */}
//             <div className="w-[60px] h-[3px] bg-[#ebbd28] rounded-sm" />
//           </div>
//         </div>

//         {/* ORDER NOW Button */}
//         <div className="relative w-[305px] h-[77px]">
//           <div className="relative w-full h-full bg-[#ebbd28] rounded-[30px] flex items-center justify-center gap-2 px-6">
//             <span className="font-black text-black text-xl">ORDER NOW</span>
//             <img
//               src="https://c.animaapp.com/X56oiYEi/img/image-54@2x.png"
//               alt="Order"
//               className="w-[90px] h-[60px] object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;



"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const tabs = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "MENU", href: "/menu" },
  { name: "FRANCHISE", href: "/franchise" },
  { name: "GALLERY", href: "/gallery" },
];

const Header = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.href === pathname);
    if (currentTab) {
      setActiveTab(currentTab.name);
    }
  }, [pathname]);

  useEffect(() => {
    const index = tabs.findIndex((tab) => tab.name === activeTab);
    const tabElement = tabRefs.current[index];
    if (tabElement) {
      const { offsetLeft, clientWidth } = tabElement;
      setUnderlineStyle({ left: offsetLeft, width: clientWidth });
    }
  }, [activeTab]);

  // Handle scroll-based header opacity
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gradient-to-r from-black/80 to-yellow-500/80" : "bg-[#141414]"
        }`}
    >
      <div className="relative h-[130px] flex items-center justify-between px-8">
        {/* Logo */}
        <Link href="/" onClick={() => setActiveTab("HOME")}>
          <img
            src="https://c.animaapp.com/X56oiYEi/img/image-2@2x.png"
            alt="Logo"
            className="w-32 h-32 object-cover"
          />
        </Link>

        {/* Navigation */}
        <div className="relative flex gap-10 items-center">
          {tabs.map((tab, index) => (
            <Link href={tab.href} key={tab.name}>
            <div
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => setActiveTab(tab.name)}
              className={`relative font-black text-xl tracking-[2px] px-4 py-2 cursor-pointer overflow-hidden`}
            >
              {/* Background fill */}
              <div
                className={`absolute left-0 bottom-0 w-full bg-[#ebbd28] z-0 transition-all duration-500 ease-in-out ${
                  activeTab === tab.name ? "h-full" : "h-[0px]"
                }`}
              />
              {/* Text */}
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  activeTab === tab.name ? "text-black" : "text-white"
                }`}
              >
                {tab.name}
              </span>
            </div>
          </Link>
          
          ))}

          {/* Underline Indicator */}
          <motion.div
            className="absolute bottom-0 h-[4px] rounded-full"
            animate={{
              left: underlineStyle.left,
              width: underlineStyle.width,
              scaleX: [1, 1.8, 1],
              scaleY: [1, 0.6, 1],
              rotate: [0, -10 + Math.random() * 20, 0],
            }}
            transition={{
              duration: 0.6,
              ease: [0.68, -0.55, 0.265, 1.55],
            }}
          />

        </div>

        {/* ORDER NOW Button */}
        <div className="relative w-[305px] h-[77px]">
          <div className="relative w-full h-full bg-[#ebbd28] rounded-[30px] flex items-center justify-center gap-2 px-6">
            <span className="font-black text-black text-xl">ORDER NOW</span>
            <img
              src="https://c.animaapp.com/X56oiYEi/img/image-54@2x.png"
              alt="Order"
              className="w-[90px] h-[60px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

