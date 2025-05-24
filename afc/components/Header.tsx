"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ backgroundColor: "transparent" }}
      animate={{
        backgroundColor: scrolled ? "#141414" : "transparent",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="relative h-[130px] flex items-center justify-between px-8">
        {/* Logo */}
        <Link href="/" onClick={() => setActiveTab("HOME")}>
          <img
            src="/images/Afc-logo.png"
            alt="Logo"
            className="w-32 h-32 object-cover"
          />
        </Link>

        {/* Navigation */}
        <div className="relative flex gap-10 items-center">
          {tabs.map((tab, index) => (
            <Link
              href={tab.href}
              key={tab.name}
              style={{ textDecoration: 'none' }}
              className="no-underline hover:no-underline"
            >
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
        </div>

        {/* ORDER NOW Button */}
        <motion.div
          className="relative w-[305px] h-[77px]"
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