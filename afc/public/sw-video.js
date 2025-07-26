/**
 * Service Worker for Video Caching
 * Optimizes video loading performance by implementing intelligent caching strategies
 */

const CACHE_NAME = 'afc-video-cache-v1';
const VIDEO_CACHE_NAME = 'afc-video-content-v1';

// Video URLs to cache
const VIDEO_URLS = [
  'https://res.cloudinary.com/dx8ayxllj/video/upload/v1753449979/afc-2_wpvaut.mp4',
  'https://res.cloudinary.com/dx8ayxllj/video/upload/f_auto,q_auto:low/v1753449979/afc-2_wpvaut.mp4',
  'https://res.cloudinary.com/dx8ayxllj/video/upload/f_webm,q_auto:low/v1753449979/afc-2_wpvaut.webm'
];

// Install event - cache video resources
self.addEventListener('install', (event) => {
  console.log('AFC Video Service Worker installing...');
  
  event.waitUntil(
    caches.open(VIDEO_CACHE_NAME).then((cache) => {
      console.log('Caching video resources...');
      // Pre-cache video metadata (not full videos to avoid large initial cache)
      return Promise.all(
        VIDEO_URLS.map(url => {
          return fetch(url, {
            method: 'HEAD', // Only fetch headers to check availability
            mode: 'cors',
            cache: 'no-cache'
          }).then(response => {
            if (response.ok) {
              console.log(`Video available: ${url}`);
            }
          }).catch(err => {
            console.warn(`Video unavailable: ${url}`, err);
          });
        })
      );
    })
  );
  
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('AFC Video Service Worker activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== VIDEO_CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  self.clients.claim();
});

// Fetch event - handle video requests with smart caching
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Handle video requests
  if (isVideoRequest(request)) {
    event.respondWith(handleVideoRequest(request));
  }
  // Handle other requests normally
  else {
    event.respondWith(
      caches.match(request).then((response) => {
        return response || fetch(request);
      })
    );
  }
});

// Check if request is for video content
function isVideoRequest(request) {
  const url = new URL(request.url);
  return (
    url.hostname.includes('cloudinary.com') ||
    request.url.includes('.mp4') ||
    request.url.includes('.webm') ||
    request.url.includes('video')
  ) && request.method === 'GET';
}

// Handle video requests with Range support
async function handleVideoRequest(request) {
  const cache = await caches.open(VIDEO_CACHE_NAME);
  const url = new URL(request.url);
  
  try {
    // Check if we have the video in cache
    const cachedResponse = await cache.match(request, { ignoreVary: true });
    
    if (cachedResponse) {
      console.log('Serving video from cache:', request.url);
      
      // Handle Range requests for cached videos
      if (request.headers.get('range')) {
        return handleRangeRequest(request, cachedResponse);
      }
      
      return cachedResponse;
    }
    
    // If not in cache, fetch from network
    console.log('Fetching video from network:', request.url);
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Clone response for caching (only for smaller videos or key frames)
      const responseToCache = networkResponse.clone();
      
      // Only cache if content-length is reasonable (< 50MB) or if it's optimized
      const contentLength = networkResponse.headers.get('content-length');
      const shouldCache = !contentLength || 
        parseInt(contentLength) < 50 * 1024 * 1024 || 
        url.pathname.includes('q_auto:low');
      
      if (shouldCache) {
        cache.put(request, responseToCache).catch(err => {
          console.warn('Failed to cache video:', err);
        });
      }
      
      return networkResponse;
    }
    
    throw new Error(`Network response not ok: ${networkResponse.status}`);
    
  } catch (error) {
    console.error('Video request failed:', error);
    
    // Return a fallback response or cached version if available
    const fallbackResponse = await cache.match(request, { ignoreVary: true });
    if (fallbackResponse) {
      return fallbackResponse;
    }
    
    // Return error response
    return new Response('Video temporarily unavailable', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// Handle Range requests for cached videos
function handleRangeRequest(request, cachedResponse) {
  const rangeHeader = request.headers.get('range');
  const match = rangeHeader.match(/bytes=(\d+)-(\d*)/);
  
  if (!match) {
    return cachedResponse;
  }
  
  const start = parseInt(match[1]);
  const end = match[2] ? parseInt(match[2]) : undefined;
  
  return cachedResponse.arrayBuffer().then(buffer => {
    const slice = end ? buffer.slice(start, end + 1) : buffer.slice(start);
    const contentLength = slice.byteLength;
    const totalLength = buffer.byteLength;
    
    return new Response(slice, {
      status: 206,
      statusText: 'Partial Content',
      headers: {
        'Content-Range': `bytes ${start}-${start + contentLength - 1}/${totalLength}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': contentLength.toString(),
        'Content-Type': cachedResponse.headers.get('Content-Type') || 'video/mp4'
      }
    });
  });
}

// Message handling for cache management
self.addEventListener('message', (event) => {
  const { type, payload } = event.data;
  
  switch (type) {
    case 'PRELOAD_VIDEO':
      preloadVideo(payload.url).then(() => {
        event.ports[0]?.postMessage({ success: true });
      }).catch(error => {
        event.ports[0]?.postMessage({ success: false, error: error.message });
      });
      break;
      
    case 'CLEAR_VIDEO_CACHE':
      clearVideoCache().then(() => {
        event.ports[0]?.postMessage({ success: true });
      });
      break;
      
    default:
      console.log('Unknown message type:', type);
  }
});

// Preload specific video
async function preloadVideo(url) {
  const cache = await caches.open(VIDEO_CACHE_NAME);
  
  try {
    const response = await fetch(url, {
      mode: 'cors',
      cache: 'no-cache'
    });
    
    if (response.ok) {
      await cache.put(url, response);
      console.log('Video preloaded successfully:', url);
    }
  } catch (error) {
    console.error('Failed to preload video:', error);
    throw error;
  }
}

// Clear video cache
async function clearVideoCache() {
  const cache = await caches.open(VIDEO_CACHE_NAME);
  const keys = await cache.keys();
  
  await Promise.all(keys.map(key => cache.delete(key)));
  console.log('Video cache cleared');
}
