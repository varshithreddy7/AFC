/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "c.animaapp.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.builder.io" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "img.freepik.com" },
      { protocol: "https", hostname: "static.vecteezy.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },  
    ],
  },
};

module.exports = nextConfig;
