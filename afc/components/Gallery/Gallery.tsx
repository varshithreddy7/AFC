"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

const Gallery: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="w-full min-w-full overflow-x-hidden">
      {/* Video Hero Section */}
      <section className="relative w-screen min-h-screen overflow-hidden" style={{ height: '100vh', minHeight: '100dvh', width: '100vw' }}>
        {/* Video Container */}
        <div className="absolute inset-0 w-full h-full bg-black">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            controls={false}
            poster="/images/combo-3.jpg"
            webkit-playsinline="true"
            x5-playsinline="true"
            onError={(e) => {
              console.error('Video failed to load:', e);
              setVideoError(true);
            }}
            onLoadedData={() => {
              setVideoLoaded(true);
            }}
            onCanPlay={() => {
              // Force play for better mobile compatibility
              if (videoRef.current) {
                const playPromise = videoRef.current.play();
                if (playPromise !== undefined) {
                  playPromise.catch(err => {
                    console.log('Autoplay prevented:', err);
                    // Show fallback image if autoplay fails
                    setVideoError(true);
                  });
                }
              }
            }}
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              objectPosition: 'center',
              minWidth: '100vw',
              minHeight: '100vh',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%) scale(1.01)'
            }}
          >
            <source src="https://res.cloudinary.com/dx8ayxllj/video/upload/v1753449979/afc-2_wpvaut.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Mobile Fallback Image */}
        {(videoError || !videoLoaded) && (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url(/images/combo-3.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'scroll'
            }}
          />
        )}
        
        {/* Loading indicator */}
        {!videoLoaded && !videoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EBBE29] mx-auto mb-4"></div>
              <p>Loading video...</p>
            </div>
          </div>
        )}
        
        {/* Gallery Call-to-Action Overlay */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-black/60 backdrop-blur-sm rounded-xl px-8 py-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              <span className="text-[#EBBE29]">AFC</span> GALLERY
            </h2>
            <p className="text-gray-200 text-sm mb-4 max-w-sm">
              Discover moments captured at our AFC locations
            </p>
            
            {/* Scroll Hint */}
            <div className="flex flex-col items-center text-white/60 animate-bounce mt-2">
              <p className="text-xs mb-1">Explore gallery below</p>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>


        {/* Gallery Content */}
        <div className="min-h-screen w-full bg-black py-10">
          <div className="flex flex-col gap-6 md:gap-3 px-4 md:px-3 max-w-screen-xl md:max-w-none mx-auto">

            {/* Row 1 - Full Width */}
            <div className="relative w-full h-[200px] md:h-[350px]">
              <Image
                src="/images/combo-3.jpg"
                alt="Restaurant outdoor seating area"
                className="w-full h-full object-cover rounded-md"
                fill
                loading="lazy"
                quality={85}
                sizes="100vw"
              />
            </div>

            {/* Row 2 - Image and Video Side by Side */}
            <div className="w-full flex flex-row gap-4 md:gap-3 h-[200px] md:h-[350px]">
              <div className="relative w-2/3 h-full">
                <Image
                  src="/images/gall-1.JPG"
                  alt="Professional chef cooking in kitchen"
                  className="w-full h-full object-cover rounded-md"
                  fill
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 66vw, 66vw"
                />
              </div>
              <div className="relative w-1/3 h-full">
                <video
                  src="https://res.cloudinary.com/dx8ayxllj/video/upload/v1753450192/gall_zi7cb3.mp4"
                  className="w-full h-full object-cover rounded-md"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

            {/* Row 3 - Full Width */}
            <div className="relative w-full h-[200px] md:h-[350px]">
              <Image
                src="/images/amb-2.png"
                alt="AFC Restaurant Interior"
                className="w-full h-full object-cover rounded-md"
                fill
                style={{ objectPosition: 'center bottom' }}
                onError={(e) => {
                  console.error('Gallery row 3 image failed to load');
                  e.currentTarget.src = '/images/combo-3.jpg';
                }}
              />
            </div>

            {/* Row 4 - Two Images Side by Side (Reversed) */}
            <div className="w-full flex flex-row gap-4 md:gap-3 h-[200px] md:h-[350px]">
              <div className="relative w-1/3 h-full">
                <Image
                  src="/images/mojito-2.jpg"
                  alt="Plating"
                  className="w-full h-full object-cover rounded-md "
                  fill
                />
              </div>
              <div className="relative w-2/3 h-full overflow-hidden rounded-md">
                <Image
                  src="/images/gall-3.JPG"
                  alt="Family"
                  className="w-full h-full object-cover rounded-md"
                  fill
                  style={{ objectPosition: '80% 75%' }}
                  onError={(e) => {
                    console.error('Gallery image failed to load: /images/gall-3.JPG');
                    // Fallback to combo-3.jpg if image fails
                    e.currentTarget.src = '/images/combo-3.jpg';
                  }}
                />
              </div>
            </div>

            {/* Row 5 - Full Width */}
            <div className="relative w-full h-[200px] md:h-[350px]">
              <Image
                src="/images/gall-4.JPG"
                alt="AFC Restaurant Ambiance"
                className="w-full h-full object-cover rounded-md"
                fill
                style={{ objectPosition: 'center center' }}
                onError={(e) => {
                  console.error('Gallery row 5 image failed to load');
                  e.currentTarget.src = '/images/combo-3.jpg';
                }}
              />
            </div>

          </div>
        </div>
      </div>
  );
};

export default Gallery;
