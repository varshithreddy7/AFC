"use client";

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  loading?: "lazy" | "eager";
  quality?: number;
  sizes?: string;
  fallbackSrc?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  fill = false,
  priority = false,
  loading = "lazy",
  quality = 85,
  sizes,
  fallbackSrc = "/images/placeholder-food.jpg"
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(fallbackSrc);
    }
  };

  const imageProps = {
    src: imageSrc,
    alt,
    className,
    onError: handleError,
    priority,
    loading,
    quality,
    sizes
  };

  if (fill) {
    return (
      <Image
        {...imageProps}
        alt={alt}
        fill
      />
    );
  }

  return (
    <Image
      {...imageProps}
      alt={alt}
      width={width || 400}
      height={height || 300}
    />
  );
}
