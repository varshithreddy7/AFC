"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { BackgroundBorder } from "./sections/BackgroundBorder";
import { Group } from "./sections/Group";
import { GroupWrapper } from "./sections/GroupWrapper";
import ContactForm from "./sections/FrameWrapper";
import OurLocations from "components/OurLocations";
import videoPreloader from "../../utils/videoPreloader";

const FranchisePage: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [preloadComplete, setPreloadComplete] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Video source URLs
  const videoSources = {
    primary: "https://res.cloudinary.com/dx8ayxllj/video/upload/v1753449382/afc-4_nhbapk.mp4",
    optimized: videoPreloader.optimizeVideoUrl(
      "https://res.cloudinary.com/dx8ayxllj/video/upload/v1753449382/afc-4_nhbapk.mp4",
      { quality: 'auto', format: 'auto' }
    ),
    webm: "https://res.cloudinary.com/dx8ayxllj/video/upload/f_webm,q_auto:low/v1753449382/afc-4_nhbapk.webm"
  };

  // Smooth scroll to next section
  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };


  // Preload video when component mounts
  useEffect(() => {
    const preloadVideo = async () => {
      try {
        const result = await videoPreloader.preloadVideo({
          src: videoSources.optimized,
          timeout: 10000,
          retries: 2,
          priority: 'high'
        });
        
        if (result.success) {
          setPreloadComplete(true);
          console.log(`Franchise video preloaded successfully in ${result.loadTime}ms`);
        } else {
          console.warn('Franchise video preload failed:', result.error);
          // Try to preload fallback
          const fallbackResult = await videoPreloader.preloadVideo({
            src: videoSources.primary,
            timeout: 8000,
            retries: 1,
            priority: 'high'
          });
          if (fallbackResult.success) {
            setPreloadComplete(true);
          }
        }
      } catch (error) {
        console.error('Franchise video preload error:', error);
      }
    };

    preloadVideo();
  }, [videoSources.optimized, videoSources.primary]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Enhanced video retry mechanism
  const retryVideoLoad = useCallback(() => {
    const video = videoRef.current;
    if (!video || retryCount >= 3) return;

    setRetryCount(prev => prev + 1);
    setVideoError(false);
    setVideoLoaded(false);
    setLoadingProgress(0);
    
    // Reset video and try again
    video.currentTime = 0;
    video.load();
  }, [retryCount]);

  // Enhanced video loading and play strategy
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isIntersecting) return;

    // Set video properties for better compatibility
    video.volume = 0;
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('playsinline', 'true');
    
    // Progress tracking
    const updateProgress = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const duration = video.duration || 1;
        const progress = (bufferedEnd / duration) * 100;
        setLoadingProgress(Math.min(progress, 100));
      }
    };

    // Enhanced play strategy with multiple fallbacks
    const attemptPlay = async () => {
      try {
        // Ensure video is ready
        if (video.readyState < 3) {
          await new Promise(resolve => {
            const onCanPlay = () => {
              video.removeEventListener('canplay', onCanPlay);
              resolve(void 0);
            };
            video.addEventListener('canplay', onCanPlay);
          });
        }

        video.currentTime = 0;
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          await playPromise;
        }
        
        setVideoLoaded(true);
        setVideoError(false);
        console.log('Franchise video playing successfully');
      } catch (error) {
        console.log('Franchise autoplay attempt failed, setting up user interaction:', error);
        
        // Set up user interaction handlers
        const playOnInteraction = async (event: Event) => {
          event.preventDefault();
          try {
            await video.play();
            setVideoLoaded(true);
            setVideoError(false);
            // Remove listeners after successful play
            ['click', 'touchstart', 'keydown'].forEach(eventType => {
              document.removeEventListener(eventType, playOnInteraction);
            });
          } catch (err) {
            console.error('Franchise video play failed even with user interaction:', err);
            setVideoError(true);
          }
        };
        
        // Add multiple interaction listeners
        ['click', 'touchstart', 'keydown'].forEach(eventType => {
          document.addEventListener(eventType, playOnInteraction, { once: true, passive: true });
        });

        // Show video as loaded even if autoplay failed (user can interact)
        setVideoLoaded(true);
      }
    };

    // Event handlers
    const handleLoadedMetadata = () => {
      console.log('Franchise video metadata loaded');
      setTimeout(attemptPlay, 200);
    };

    const handleError = (e: Event) => {
      console.error('Franchise video source failed to load:', e);
      setVideoError(true);
      
      // Auto-retry if we haven't exceeded retry limit
      if (retryCount < 3) {
        setTimeout(retryVideoLoad, 2000);
      }
    };

    const handleLoadStart = () => {
      console.log('Franchise video loading started...');
      setLoadingProgress(0);
    };

    const handleLoadedData = () => {
      console.log('Franchise video data loaded successfully');
      setVideoLoaded(true);
    };

    const handleCanPlayThrough = () => {
      console.log('Franchise video can play through completely');
      setLoadingProgress(100);
    };

    // Add event listeners
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleError);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('progress', updateProgress);
    video.addEventListener('canplaythrough', handleCanPlayThrough);
    
    // Force load the video
    video.load();
    
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('progress', updateProgress);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, [isIntersecting, retryCount, retryVideoLoad]);

  return (
    <div className="w-full min-w-full overflow-x-hidden">
      {/* Video Hero Section */}
      <section 
        ref={containerRef}
        className="relative w-screen min-h-screen overflow-hidden" 
        style={{ height: '100vh', minHeight: '100dvh', width: '100vw' }}
      >
        {/* Header Spacer */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent z-10 pointer-events-none" />
        
        {/* Video Container */}
        <div className="absolute inset-0 w-full h-full bg-black">
          {isIntersecting && (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full transition-opacity duration-500"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
              poster="/images/combo-3.jpg"
              webkit-playsinline="true"
              x5-playsinline="true"
              x5-video-player-type="h5"
              x5-video-player-fullscreen="true"
              crossOrigin="anonymous"
              disablePictureInPicture
              disableRemotePlayback
              style={{
                width: '100vw',
                height: '100vh',
                objectFit: 'cover',
                objectPosition: 'center',
                minWidth: '100vw',
                minHeight: '100vh',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) scale(1.01)',
                opacity: videoLoaded ? 1 : 0
              }}
            >
              <source 
                src={videoSources.optimized} 
                type="video/mp4" 
              />
              <source 
                src={videoSources.webm} 
                type="video/webm" 
              />
              <source 
                src={videoSources.primary} 
                type="video/mp4" 
              />
            </video>
          )}
        </div>
        
        {/* Enhanced Loading indicator */}
        {(!videoLoaded || !isIntersecting) && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-30">
            <div className="text-white text-center max-w-sm">
              {videoError ? (
                <>
                  <div className="text-red-400 text-4xl mb-4">⚠️</div>
                  <p className="text-lg font-medium mb-2">Video Loading Issue</p>
                  <p className="text-sm text-gray-300 mb-4">We&apos;re having trouble loading the video</p>
                  {retryCount < 3 && (
                    <button 
                      onClick={retryVideoLoad}
                      className="bg-[#EBBE29] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#d4a625] transition-colors"
                    >
                      Retry Loading ({3 - retryCount} attempts left)
                    </button>
                  )}
                </>
              ) : (
                <>
                  <div className="relative mb-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EBBE29] mx-auto"></div>
                    {loadingProgress > 0 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold">{Math.round(loadingProgress)}%</span>
                      </div>
                    )}
                  </div>
                  <p className="text-lg font-medium">
                    {preloadComplete ? 'Initializing Video...' : 'Loading Franchise Experience...'}
                  </p>
                  <p className="text-sm text-gray-300 mt-2">
                    {loadingProgress > 0 
                      ? `Buffering video... ${Math.round(loadingProgress)}%`
                      : preloadComplete 
                        ? "Video ready, starting playback..."
                        : "Optimizing video for your device..."
                    }
                  </p>
                  {loadingProgress > 0 && (
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                      <div 
                        className="bg-[#EBBE29] h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${loadingProgress}%` }}
                      ></div>
                    </div>
                  )}
                  {preloadComplete && loadingProgress === 0 && (
                    <div className="mt-3 text-xs text-green-400">
                      ✓ Video optimized for your connection
                    </div>
                  )}
                </>
              )}
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
