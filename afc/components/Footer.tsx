"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative w-full bg-black   text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* About Section */}
          <div className="flex-1 max-w-md">
            <div className="flex items-center gap-4 mb-6">
              <Image
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                alt="AFC Logo"
                src="https://c.animaapp.com/ncrVY1LD/img/image-1@2x.png"
                width={80}
                height={80}
              />
              <h2 className="font-black text-2xl sm:text-3xl text-[#ebbd28]">
                <span className="text-[#ebbd28]">ABOUT</span>
                <span className="text-white"> US</span>
              </h2>
            </div>
            <p className="text-[#d9d9d9] text-base sm:text-lg leading-relaxed">
              Experience the perfect blend of crispy goodness and modern dining at
              AFC. Our commitment to quality and taste makes every bite an
              unforgettable experience. Join us for a journey of flavors that will
              keep you coming back for more.
            </p>
          </div>

          {/* Links and Info Section */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Navigation Links */}
            <div>
              <h3 className="font-black text-xl sm:text-2xl text-[#ebbd28] mb-4 sm:mb-6">QUICK LINKS</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/" className="text-white hover:text-[#ebbd28] transition-colors text-base sm:text-lg">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white hover:text-[#ebbd28] transition-colors text-base sm:text-lg">
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-white hover:text-[#ebbd28] transition-colors text-base sm:text-lg">
                    MENU
                  </Link>
                </li>
                <li>
                  <Link href="/franchise" className="text-white hover:text-[#ebbd28] transition-colors text-base sm:text-lg">
                    FRANCHISE
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-white hover:text-[#ebbd28] transition-colors text-base sm:text-lg">
                    GALLERY
                  </Link>
                </li>
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 className="font-black text-xl sm:text-2xl text-[#ebbd28] mb-4 sm:mb-6">LOCATIONS</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a 
                    href="https://g.co/kgs/k6LF3fm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d9d9d9] hover:text-[#ebbd28] transition-colors text-base sm:text-lg flex items-center gap-2"
                  >
                    Shamshabad
                  </a>
                </li>
                <li>
                  <a 
                    href="https://g.co/kgs/tXh4ZcL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d9d9d9] hover:text-[#ebbd28] transition-colors text-base sm:text-lg flex items-center gap-2"
                  >
                    Shivarampally
                  </a>
                </li>
                <li>
                  <a 
                    href={`https://g.co/kgs/9j35prf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d9d9d9] hover:text-[#ebbd28] transition-colors text-base sm:text-lg flex items-center gap-2"
                  >
                    Goulidodi
                  </a>
                </li>
                <li>
                  <a 
                    href={`https://g.co/kgs/Yz9idFH`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d9d9d9] hover:text-[#ebbd28] transition-colors text-base sm:text-lg flex items-center gap-2"
                  >
                    Moul Ali
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-black text-xl sm:text-2xl text-[#ebbd28] mb-4 sm:mb-6">CONTACT</h3>
              <div className="space-y-2 sm:space-y-3 text-[#d9d9d9] text-base sm:text-lg">
                <p>Call +91 76740 73004 - Chaitanya Varma</p>
                <p>Call +91 95050 66245 - Narasimha</p>
                <p>Afcindiaofficial@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Opening Hours Card */}
        <div className="bg-black border border-[#222222] rounded-3xl p-6 mb-12 max-w-md mx-auto lg:mx-0 lg:absolute lg:right-8 lg:top-20">
          <h3 className="font-bold text-2xl text-[#ebbd28] mb-6">
            <span className="text-[#ebbd28]">Opening </span>
            <span className="text-white">Hours</span>
          </h3>
          
          <div className="bg-[#ebbe291a] border border-[#333333] rounded-2xl p-4 mb-4">
            <div className="flex items-center gap-4">
              <span className="text-2xl">📅</span>
              <div>
                <p className="font-bold text-white">Everyday</p>
                <p className="text-[#ebbd28]">We&apos;re here to serve you</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#ebbe291a] border border-[#333333] rounded-2xl p-4">
            <div className="flex items-center gap-4">
              <span className="text-2xl">🕛</span>
              <div>
                <p className="font-bold text-[#ebbd28]">11:00 AM - 12:00 AM</p>
                <p className="text-[#d9d9d9]">Extended hours on weekends</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center pt-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-[6px] before:w-full before:bg-gradient-to-r before:from-black before:via-yellow-400 before:to-black">
          <p className="font-extrabold text-[#ebbd28] text-center mb-6">
            © 2025 ALL RIGHTS RESERVED BY AFC
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com/AfcIndian"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#ebbd28]/10 rounded-full flex items-center justify-center hover:bg-[#ebbd28] transition-all duration-300 group"
            >
              <Twitter className="w-5 h-5 text-[#ebbd28] group-hover:text-black transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/afcofficial.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#ebbd28]/10 rounded-full flex items-center justify-center hover:bg-[#ebbd28] transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-[#ebbd28] group-hover:text-black transition-colors" />
            </a>
            <a
              href="https://facebook.com/AFCIndiaOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#ebbd28]/10 rounded-full flex items-center justify-center hover:bg-[#ebbd28] transition-all duration-300 group"
            >
              <Facebook className="w-5 h-5 text-[#ebbd28] group-hover:text-black transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 