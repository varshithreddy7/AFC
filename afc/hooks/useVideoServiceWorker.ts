/**
 * Hook for Video Service Worker Management
 * Handles registration and communication with the video caching service worker
 */

import { useEffect, useCallback } from 'react';

interface UseVideoServiceWorkerOptions {
  enabled?: boolean;
  debug?: boolean;
}

interface ServiceWorkerAPI {
  preloadVideo: (url: string) => Promise<boolean>;
  clearVideoCache: () => Promise<boolean>;
  isSupported: boolean;
  isRegistered: boolean;
}

export const useVideoServiceWorker = (
  options: UseVideoServiceWorkerOptions = {}
): ServiceWorkerAPI => {
  const { enabled = true, debug = false } = options;

  const log = useCallback((message: string, ...args: any[]) => {
    if (debug) {
      console.log(`[VideoSW] ${message}`, ...args);
    }
  }, [debug]);

  // Check if service workers are supported
  const isSupported = typeof navigator !== 'undefined' && 'serviceWorker' in navigator;
  const isRegistered = false; // Will be updated during registration

  // Register service worker
  useEffect(() => {
    if (!enabled || !isSupported) {
      log('Service worker not enabled or not supported');
      return;
    }

    const registerServiceWorker = async () => {
      try {
        // Check if already registered
        const existingRegistration = await navigator.serviceWorker.getRegistration('/sw-video.js');
        
        if (existingRegistration) {
          log('Video service worker already registered');
          return existingRegistration;
        }

        // Register new service worker
        const registration = await navigator.serviceWorker.register('/sw-video.js', {
          scope: '/',
          updateViaCache: 'none'
        });

        log('Video service worker registered successfully');

        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                log('New video service worker available');
                // Optionally notify user about update
              }
            });
          }
        });

        return registration;
      } catch (error) {
        console.error('Failed to register video service worker:', error);
      }
    };

    registerServiceWorker();
  }, [enabled, isSupported, log]);

  // Preload video function
  const preloadVideo = useCallback(async (url: string): Promise<boolean> => {
    if (!isSupported || !navigator.serviceWorker.controller) {
      log('Cannot preload video: service worker not available');
      return false;
    }

    try {
      const messageChannel = new MessageChannel();
      
      const response = await new Promise<{ success: boolean; error?: string }>((resolve) => {
        messageChannel.port1.onmessage = (event) => {
          resolve(event.data);
        };

        navigator.serviceWorker.controller!.postMessage(
          {
            type: 'PRELOAD_VIDEO',
            payload: { url }
          },
          [messageChannel.port2]
        );
      });

      if (response.success) {
        log(`Video preloaded successfully: ${url}`);
        return true;
      } else {
        log(`Failed to preload video: ${response.error}`);
        return false;
      }
    } catch (error) {
      console.error('Error preloading video:', error);
      return false;
    }
  }, [isSupported, log]);

  // Clear video cache function
  const clearVideoCache = useCallback(async (): Promise<boolean> => {
    if (!isSupported || !navigator.serviceWorker.controller) {
      log('Cannot clear cache: service worker not available');
      return false;
    }

    try {
      const messageChannel = new MessageChannel();
      
      const response = await new Promise<{ success: boolean }>((resolve) => {
        messageChannel.port1.onmessage = (event) => {
          resolve(event.data);
        };

        navigator.serviceWorker.controller!.postMessage(
          {
            type: 'CLEAR_VIDEO_CACHE'
          },
          [messageChannel.port2]
        );
      });

      if (response.success) {
        log('Video cache cleared successfully');
        return true;
      } else {
        log('Failed to clear video cache');
        return false;
      }
    } catch (error) {
      console.error('Error clearing video cache:', error);
      return false;
    }
  }, [isSupported, log]);

  return {
    preloadVideo,
    clearVideoCache,
    isSupported,
    isRegistered
  };
};

export default useVideoServiceWorker;
