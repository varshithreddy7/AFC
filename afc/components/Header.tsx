// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import OrderDetailsCard from "@/components/ui/OrderDetailsCard";

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
//   const [scrolled, setScrolled] = useState(false);
//   const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

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

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.div
//       initial={{ backgroundColor: "transparent" }}
//       animate={{
//         backgroundColor: scrolled ? "#141414" : "transparent",
//       }}
//       transition={{ duration: 0.3 }}
//       className="fixed top-0 left-0 w-full z-50"
//     >
//       <div className="relative h-[130px] flex items-center justify-between px-8">
//         {/* Logo */}
//         <Link href="/" onClick={() => setActiveTab("HOME")}>
//           <img
//             src="/images/Afc-logo.png"
//             alt="Logo"
//             className="w-32 h-32 object-cover"
//           />
//         </Link>

//         {/* Navigation */}
//         <div className="relative flex gap-10 items-center">
//           {tabs.map((tab, index) => (
//             <Link
//               href={tab.href}
//               key={tab.name}
//               style={{ textDecoration: 'none' }}
//               className="no-underline hover:no-underline"
//             >
//               <div
//                 ref={(el) => (tabRefs.current[index] = el)}
//                 onClick={() => setActiveTab(tab.name)}
//                 className={`relative font-black text-xl tracking-[2px] px-4 py-2 cursor-pointer overflow-hidden`}
//               >
//                 {/* Background fill */}
//                 <div
//                   className={`absolute left-0 bottom-0 w-full bg-[#ebbd28] z-0 transition-all duration-500 ease-in-out ${
//                     activeTab === tab.name ? "h-full" : "h-[0px]"
//                   }`}
//                 />
//                 {/* Text */}
//                 <span
//                   className={`relative z-10 transition-colors duration-300 ${
//                     activeTab === tab.name ? "text-black" : "text-white"
//                   }`}
//                 >
//                   {tab.name}

//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* ORDER NOW Button */}
//         <motion.div
//           className="relative w-[305px] h-[77px]"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <div
//             className="relative w-full h-full bg-[#ebbd28] rounded-[30px] flex items-center justify-center gap-2 px-6 cursor-pointer hover:bg-yellow-500 transition-colors"
//             onClick={() => setIsOrderModalOpen(true)}
//           >
//             <span className="font-black text-black text-xl">ORDER NOW</span>
//             <img
//               src="https://c.animaapp.com/X56oiYEi/img/image-54@2x.png"
//               alt="Order"
//               className="w-[90px] h-[60px] object-cover"
//             />
//           </div>
//         </motion.div>

//         {/* OrderDetailsCard Modal */}
//         <OrderDetailsCard
//           isOpen={isOrderModalOpen}
//           onClose={() => setIsOrderModalOpen(false)}
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default Header;
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import OrderDetailsCard from "@/components/ui/OrderDetailsCard";

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
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.href === pathname);
    if (currentTab) {
      setActiveTab(currentTab.name);
    }
  }, [pathname]);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.div
      initial={{ backgroundColor: "transparent" }}
      animate={{
        backgroundColor: scrolled ? "#141414" : "transparent",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="relative h-[80px] md:h-[130px] flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" onClick={() => setActiveTab("HOME")}>
          <img
            src="/images/Afc-logo.png"
            alt="Logo"
            className="w-20 h-20 md:w-32 md:h-32 object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex relative gap-10 items-center">
          {tabs.map((tab, index) => (
            <Link
              href={tab.href}
              key={tab.name}
              style={{ textDecoration: 'none' }}
              className="no-underline hover:no-underline"
            >
              <div
                ref={(el) => { tabRefs.current[index] = el; }}
                onClick={() => setActiveTab(tab.name)}
                className={`relative font-black text-xl tracking-[2px] px-4 py-2 cursor-pointer overflow-hidden`}
              >
                {/* Background fill */}
                <div
                  className={`absolute left-0 bottom-0 w-full bg-[#ebbd28] z-0 transition-all duration-500 ease-in-out ${activeTab === tab.name ? "h-full" : "h-[0px]"
                    }`}
                />
                {/* Text */}
                <span
                  className={`relative z-10 transition-colors duration-300 ${activeTab === tab.name ? "text-black" : "text-white"
                    }`}
                >
                  {tab.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">


          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 45, y: 7 },
                closed: { rotate: 0, y: 0 }
              }}
              transition={{ duration: 0.3 }}
              className="w-8 h-1 bg-white mb-2"
            />
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 }
              }}
              transition={{ duration: 0.3 }}
              className="w-8 h-1 bg-white mb-2"
            />
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: -45, y: -7 },
                closed: { rotate: 0, y: 0 }
              }}
              transition={{ duration: 0.3 }}
              className="w-8 h-1 bg-white"
            />

          </button>
        </div>

        {/* Desktop ORDER NOW Button */}
        <motion.div
          className="hidden md:block relative w-[305px] h-[77px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className="relative w-full h-full bg-[#ebbd28] rounded-[30px] flex items-center justify-center gap-2 px-6 cursor-pointer hover:bg-yellow-500 transition-colors"
            onClick={() => setIsOrderModalOpen(true)}
          >
            <span className="font-black text-black text-xl">ORDER NOW</span>
            <img
              src="https://c.animaapp.com/X56oiYEi/img/image-54@2x.png"
              alt="Order"
              className="w-[90px] h-[60px] object-cover"
            />
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden fixed top-0 right-0 h-full w-3/4 bg-[#141414] shadow-lg z-50 p-4"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={toggleMobileMenu}
                  className="text-white text-2xl focus:outline-none"
                >
                  X
                </button>
              </div>
              <div className="flex flex-col items-center mt-10 space-y-8">
                {tabs.map((tab) => (
                  <Link
                    href={tab.href}
                    key={tab.name}
                    onClick={() => handleTabClick(tab.name)}
                    className="w-full text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-2xl font-bold py-4 px-6 rounded-lg ${activeTab === tab.name
                          ? "bg-[#ebbd28] text-black"
                          : "text-white hover:bg-gray-800"
                        }`}
                    >
                      {tab.name}
                    </motion.div>
                  </Link>
                ))}
                <motion.div
                  className="relative w-full max-w-[280px] h-[60px] mt-4"  // Increased width and height
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className="relative w-full h-full bg-[#ebbd28] rounded-[30px] flex items-center justify-center gap-2 px-6 cursor-pointer hover:bg-yellow-500 transition-colors"
                    onClick={() => {
                      setIsOrderModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <span className="font-black text-black text-xl sm:text-2xl">ORDER NOW</span>
                    <img
                      src="https://c.animaapp.com/X56oiYEi/img/image-54@2x.png"
                      alt="Order"
                      className="w-[90px] h-[40px] object-cover"  // Adjusted image size
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* OrderDetailsCard Modal */}
        <OrderDetailsCard
          isOpen={isOrderModalOpen}
          onClose={() => setIsOrderModalOpen(false)}
        />
      </div>
    </motion.div>
  );
};

export default Header;