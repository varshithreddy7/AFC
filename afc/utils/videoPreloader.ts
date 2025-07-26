/**
 * Enhanced Video Preloader Utility
 * Handles video preloading with better error handling and performance optimization
 */

export interface VideoPreloadOptions {
  src: string;
  timeout?: number;
  retries?: number;
  priority?: 'high' | 'low';
}

export interface VideoPreloadResult {
  success: boolean;
  error?: string;
  loadTime?: number;
  retryCount?: number;
}

class VideoPreloader {
  private static instance: VideoPreloader;
  private cache = new Map<string, Promise<VideoPreloadResult>>();
  private loadingPromises = new Map<string, Promise<void>>();

  private constructor() {}

  static getInstance(): VideoPreloader {
    if (!VideoPreloader.instance) {
      VideoPreloader.instance = new VideoPreloader();
    }
    return VideoPreloader.instance;
  }

  /**
   * Preload a video with enhanced error handling and retry logic
   */
  async preloadVideo(options: VideoPreloadOptions): Promise<VideoPreloadResult> {
    const { src, timeout = 15000, retries = 3, priority = 'high' } = options;
    
    // Return cached result if available
    if (this.cache.has(src)) {
      return this.cache.get(src)!;
    }

    // Create preload promise
    const preloadPromise = this.performPreload(src, timeout, retries);
    this.cache.set(src, preloadPromise);

    return preloadPromise;
  }

  private async performPreload(
    src: string, 
    timeout: number, 
    maxRetries: number
  ): Promise<VideoPreloadResult> {
    const startTime = Date.now();
    let retryCount = 0;

    const attemptLoad = (): Promise<VideoPreloadResult> => {
      return new Promise((resolve) => {
        const video = document.createElement('video');
        const timeoutId = setTimeout(() => {
          video.src = '';
          resolve({
            success: false,
            error: 'Timeout exceeded',
            loadTime: Date.now() - startTime,
            retryCount
          });
        }, timeout);

        const cleanup = () => {
          clearTimeout(timeoutId);
          video.removeEventListener('canplaythrough', onSuccess);
          video.removeEventListener('error', onError);
          video.removeEventListener('loadedmetadata', onMetadataLoaded);
          video.src = '';
        };

        const onSuccess = () => {
          cleanup();
          resolve({
            success: true,
            loadTime: Date.now() - startTime,
            retryCount
          });
        };

        const onError = () => {
          cleanup();
          if (retryCount < maxRetries) {
            retryCount++;
            // Exponential backoff
            const delay = Math.min(1000 * Math.pow(2, retryCount - 1), 5000);
            setTimeout(() => {
              attemptLoad().then(resolve);
            }, delay);
          } else {
            resolve({
              success: false,
              error: 'Failed to load after maximum retries',
              loadTime: Date.now() - startTime,
              retryCount
            });
          }
        };

        const onMetadataLoaded = () => {
          // For mobile devices, metadata loading might be sufficient
          if (this.isMobileDevice()) {
            onSuccess();
          }
        };

        // Set up event listeners
        video.addEventListener('canplaythrough', onSuccess, { once: true });
        video.addEventListener('error', onError, { once: true });
        video.addEventListener('loadedmetadata', onMetadataLoaded, { once: true });

        // Configure video for optimal loading
        video.preload = 'metadata';
        video.muted = true;
        video.playsInline = true;
        video.crossOrigin = 'anonymous';

        // Start loading
        video.src = src;
        video.load();
      });
    };

    return attemptLoad();
  }

  /**
   * Preload multiple videos with priority handling
   */
  async preloadMultiple(videoOptions: VideoPreloadOptions[]): Promise<VideoPreloadResult[]> {
    // Sort by priority (high priority first)
    const sortedOptions = videoOptions.sort((a, b) => {
      if (a.priority === 'high' && b.priority === 'low') return -1;
      if (a.priority === 'low' && b.priority === 'high') return 1;
      return 0;
    });

    // Load high priority videos first, then low priority
    const highPriorityVideos = sortedOptions.filter(opt => opt.priority === 'high');
    const lowPriorityVideos = sortedOptions.filter(opt => opt.priority === 'low');

    const results: VideoPreloadResult[] = [];

    // Load high priority videos in parallel
    if (highPriorityVideos.length > 0) {
      const highPriorityResults = await Promise.all(
        highPriorityVideos.map(opt => this.preloadVideo(opt))
      );
      results.push(...highPriorityResults);
    }

    // Load low priority videos after high priority ones
    if (lowPriorityVideos.length > 0) {
      const lowPriorityResults = await Promise.all(
        lowPriorityVideos.map(opt => this.preloadVideo(opt))
      );
      results.push(...lowPriorityResults);
    }

    return results;
  }

  /**
   * Clear cache and reset preloader
   */
  clearCache(): void {
    this.cache.clear();
    this.loadingPromises.clear();
  }

  /**
   * Check if video is already preloaded
   */
  isPreloaded(src: string): boolean {
    return this.cache.has(src);
  }

  /**
   * Get preload result from cache
   */
  async getPreloadResult(src: string): Promise<VideoPreloadResult | null> {
    if (this.cache.has(src)) {
      return await this.cache.get(src)!;
    }
    return null;
  }

  private isMobileDevice(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  /**
   * Optimize video URL for better loading performance
   */
  optimizeVideoUrl(baseUrl: string, options?: {
    quality?: 'auto' | 'high' | 'medium' | 'low';
    format?: 'auto' | 'mp4' | 'webm';
  }): string {
    const { quality = 'auto', format = 'auto' } = options || {};
    
    // For Cloudinary URLs, add optimization parameters
    if (baseUrl.includes('cloudinary.com')) {
      let optimizedUrl = baseUrl;
      
      // Add quality parameter
      if (quality !== 'auto') {
        optimizedUrl = optimizedUrl.replace('/video/upload/', `/video/upload/q_${quality}/`);
      } else {
        optimizedUrl = optimizedUrl.replace('/video/upload/', '/video/upload/q_auto:low/');
      }
      
      // Add format parameter
      if (format !== 'auto') {
        optimizedUrl = optimizedUrl.replace('/video/upload/', `/video/upload/f_${format}/`);
      } else {
        optimizedUrl = optimizedUrl.replace('/video/upload/', '/video/upload/f_auto/');
      }
      
      return optimizedUrl;
    }
    
    return baseUrl;
  }
}

export default VideoPreloader.getInstance();
