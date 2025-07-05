'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface MenuItem {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

interface CircularCarouselProps {
  items: MenuItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const CircularCarousel: React.FC<CircularCarouselProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 4000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlay, autoPlayInterval]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getItemPosition = (index: number) => {
    const totalItems = items.length;
    const angle = (360 / totalItems) * index;
    const radius = 200; // Distance from center
    
    // Calculate position relative to current index
    const relativeIndex = (index - currentIndex + totalItems) % totalItems;
    const currentAngle = (360 / totalItems) * relativeIndex;
    
    const x = Math.cos((currentAngle - 90) * (Math.PI / 180)) * radius;
    const y = Math.sin((currentAngle - 90) * (Math.PI / 180)) * radius;
    
    return { x, y, angle: currentAngle };
  };

  const getItemScale = (index: number) => {
    const relativeIndex = (index - currentIndex + items.length) % items.length;
    
    if (relativeIndex === 0) return 1.2; // Center item (largest)
    if (relativeIndex === 1 || relativeIndex === items.length - 1) return 0.9; // Adjacent items
    return 0.7; // Other items
  };

  const getItemOpacity = (index: number) => {
    const relativeIndex = (index - currentIndex + items.length) % items.length;
    
    if (relativeIndex === 0) return 1; // Center item (fully visible)
    if (relativeIndex === 1 || relativeIndex === items.length - 1) return 0.8; // Adjacent items
    return 0.5; // Other items
  };

  const getItemZIndex = (index: number) => {
    const relativeIndex = (index - currentIndex + items.length) % items.length;
    return items.length - relativeIndex;
  };

  return (
    <div className="circular-carousel-container">
      {/* Main Carousel */}
      <div className="circular-carousel">
        <div className="carousel-center">
          {items.map((item, index) => {
            const position = getItemPosition(index);
            const scale = getItemScale(index);
            const opacity = getItemOpacity(index);
            const zIndex = getItemZIndex(index);
            
            return (
              <div
                key={item.id}
                className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
                onClick={() => goToSlide(index)}
              >
                <div className="item-circle">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="item-image"
                  />
                  <div className="item-overlay">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-price">{item.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Content */}
        <div className="center-content">
          <div className="center-item">
            <h2 className="center-title">{items[currentIndex]?.name}</h2>
            <p className="center-description">{items[currentIndex]?.description}</p>
            <span className="center-price">{items[currentIndex]?.price}</span>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          className="nav-arrow nav-arrow-left"
          onClick={prevSlide}
          disabled={isAnimating}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button 
          className="nav-arrow nav-arrow-right"
          onClick={nextSlide}
          disabled={isAnimating}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <style jsx>{`
        .circular-carousel-container {
          position: relative;
          width: 100%;
          height: 600px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          overflow: hidden;
          padding: 40px;
        }

        .circular-carousel {
          position: relative;
          width: 500px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-center {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .carousel-item {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: center;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .item-circle {
          position: relative;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .carousel-item.active .item-circle {
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }

        .item-circle:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4);
        }

        .item-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .item-circle:hover .item-image {
          transform: scale(1.1);
        }

        .item-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          color: white;
          padding: 10px;
          text-align: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .carousel-item.active .item-overlay,
        .item-circle:hover .item-overlay {
          opacity: 1;
        }

        .item-name {
          font-size: 12px;
          font-weight: 600;
          margin: 0 0 2px 0;
        }

        .item-price {
          font-size: 10px;
          margin: 0;
          color: #ffd700;
        }

        .center-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          border-radius: 20px;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          max-width: 250px;
        }

        .center-title {
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 10px 0;
          color: #fff;
        }

        .center-description {
          font-size: 14px;
          margin: 0 0 15px 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.4;
        }

        .center-price {
          font-size: 20px;
          font-weight: 600;
          color: #ffd700;
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          z-index: 1001;
        }

        .nav-arrow:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) scale(1.1);
        }

        .nav-arrow:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .nav-arrow-left {
          left: 20px;
        }

        .nav-arrow-right {
          right: 20px;
        }

        .carousel-indicators {
          display: flex;
          gap: 10px;
          margin-top: 30px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: white;
          transform: scale(1.2);
        }

        .indicator:hover {
          background: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 768px) {
          .circular-carousel-container {
            height: 500px;
            padding: 20px;
          }

          .circular-carousel {
            width: 400px;
            height: 400px;
          }

          .item-circle {
            width: 80px;
            height: 80px;
          }

          .center-content {
            padding: 20px;
            max-width: 200px;
          }

          .center-title {
            font-size: 20px;
          }

          .center-description {
            font-size: 12px;
          }

          .center-price {
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .circular-carousel {
            width: 300px;
            height: 300px;
          }

          .item-circle {
            width: 60px;
            height: 60px;
          }

          .center-content {
            padding: 15px;
            max-width: 150px;
          }

          .center-title {
            font-size: 16px;
          }

          .center-description {
            font-size: 10px;
          }

          .center-price {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default CircularCarousel;
