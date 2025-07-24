import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "../../components/Header";
import { Footer } from "components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AFC - Best Fried Chicken | Absolutely Fried Chicken Restaurant",
  description: "Experience the best fried chicken at AFC (Absolutely Fried Chicken). Premium quality, fresh ingredients, crispy chicken, burgers, pizza & more. Order online for delivery or join our franchise family.",
  keywords: "best fried chicken, AFC, absolutely fried chicken, crispy chicken, chicken restaurant, fried chicken near me, chicken burgers, premium chicken, fresh chicken, chicken delivery, chicken franchise, quality chicken",
  authors: [{ name: "AFC Restaurant" }],
  creator: "AFC - Absolutely Fried Chicken",
  publisher: "AFC Restaurant",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'AFC - Best Fried Chicken | Absolutely Fried Chicken Restaurant',
    description: 'Experience the best fried chicken at AFC. Premium quality, fresh ingredients, crispy chicken, burgers & more. Order online or join our franchise.',
    images: [
      {
        url: '/images/fried-chicken.jpg',
        width: 1200,
        height: 630,
        alt: 'AFC Best Fried Chicken - Crispy and Delicious',
      },
      {
        url: '/images/Afc-logo.png',
        width: 512,
        height: 512,
        alt: 'AFC Logo - Absolutely Fried Chicken',
      },
    ],
    siteName: 'AFC - Absolutely Fried Chicken',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AFC - Best Fried Chicken Restaurant',
    description: 'Experience the best fried chicken at AFC. Premium quality, fresh ingredients, crispy chicken. Order now!',
    images: ['/images/fried-chicken.jpg'],
    creator: '@AFCRestaurant',
  },
  alternates: {
    canonical: 'https://your-domain.com',
  },
  category: 'food',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "AFC - Absolutely Fried Chicken",
    "description": "Best fried chicken restaurant offering premium quality crispy chicken, burgers, pizza and more with fresh ingredients.",
    "url": "https://your-domain.com",
    "logo": "https://your-domain.com/images/Afc-logo.png",
    "image": "https://your-domain.com/images/fried-chicken.jpg",
    "priceRange": "$$",
    "servesCuisine": ["American", "Fast Food", "Fried Chicken"],
    "menu": "https://your-domain.com/menu",
    "hasMenu": {
      "@type": "Menu",
      "name": "AFC Menu",
      "description": "Best fried chicken, burgers, pizza and more"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "telephone": "+91-XXXXXXXXXX",
    "openingHours": "Mo-Su 10:00-23:00",
    "paymentAccepted": "Cash, Credit Card, Debit Card, UPI",
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://your-domain.com/",
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "deliveryMethod": [
        "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
        "http://purl.org/goodrelations/v1#DeliveryModePickUp"
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ebbd28" />
        <link rel="icon" href="/images/Afc-logo.png" />
        <link rel="apple-touch-icon" href="/images/Afc-logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          fontFamily: "var(--font-geist-sans)",
          backgroundImage: "url('/images/for_frames_new.png')",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Header/>
        <main role="main">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
