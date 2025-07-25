"use client";

import React, { useState, useRef, useEffect } from "react";
import { BackgroundBorder } from "./sections/BackgroundBorder";
import { Group } from "./sections/Group";
import { GroupWrapper } from "./sections/GroupWrapper";
import ContactForm from "./sections/FrameWrapper";
import OurLocations from "components/OurLocations";

const FranchisePage: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to next section
  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle video play on mobile
  useEffect(() => {
    if (videoLoaded && videoRef.current && isMobile) {
      // Try to play video on mobile after a short delay
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(err => {
            console.log('Mobile autoplay failed:', err);
            setVideoError(true);
          });
        }
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [videoLoaded, isMobile]);

  return (
    <div className="w-full min-w-full overflow-x-hidden">
      {/* Video Hero Section */}
      <section className="relative w-screen min-h-screen overflow-hidden" style={{ height: '100vh', minHeight: '100dvh', width: '100vw' }}>
        {/* Header Spacer */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent z-10 pointer-events-none" />
        
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
            onLoadStart={() => {
              console.log('Video loading started');
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
            <source src="/videos/afc-4.mp4" type="video/mp4" />
            <source src="/videos/afc-3.mp4" type="video/mp4" />
            {/* Fallback content for unsupported browsers */}
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(/images/combo-3.jpg)' }}>
              <p className="text-white text-center pt-20">Your browser does not support video playback.</p>
            </div>
          </video>
        </div>
        
        {/* Mobile Fallback Image */}
        {(videoError || (isMobile && !videoLoaded)) && (
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
        
        {/* Franchise Call-to-Action Overlay */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-black/60 backdrop-blur-sm rounded-xl px-8 py-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              <span className="text-[#EBBE29]">JOIN AFC</span> FRANCHISE
            </h2>
            <p className="text-gray-200 text-sm mb-4 max-w-sm">
              Start your journey with India&apos;s growing fried chicken chain
            </p>
            
            <button 
              className="bg-[#EBBE29] text-black px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#d4a625] transition-all duration-300 mb-3 hover:scale-105 active:scale-95"
              onClick={scrollToNextSection}
            >
              GET INFO NOW
            </button>
            
            {/* Scroll Hint */}
            <div className="flex flex-col items-center text-white/60 animate-bounce mt-2">
              <p className="text-xs mb-1">Explore details below</p>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the Content */}
      <div className="w-full" ref={nextSectionRef}>
        <BackgroundBorder />
        <Group />
        <GroupWrapper />
        <OurLocations />
        <ContactForm />
      </div>
    </div>
  );
};

export default FranchisePage;
