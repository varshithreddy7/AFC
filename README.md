# AFC Restaurant - Frontend Website

Official website for AFC (Absolutely Fried Chicken) restaurant.

🌐 **Live Website:** [https://www.afcofficial.in](https://www.afcofficial.in)

## 🚀 Features

- **Modern React/Next.js** - Server-side rendering and optimal performance
- **Responsive Design** - Mobile-first approach with perfect mobile experience
- **SEO Optimized** - Rich meta tags, structured data, and social media integration
- **Interactive Components** - Smooth animations and engaging user experience
- **Contact Form** - Direct customer inquiry system with email integration
- **Menu Showcase** - Beautiful product displays with image optimization
- **Location Pages** - Multiple restaurant locations with maps integration
- **Franchise Information** - Complete franchise opportunity details

## 📁 Project Structure

```
src/
├── app/              # Next.js 13+ app directory
│   ├── about/        # About page
│   ├── franchise/    # Franchise page
│   ├── gallery/      # Gallery page
│   ├── menu/         # Menu page
│   └── api/          # API routes
├── components/       # React components
│   ├── Home/         # Homepage sections
│   ├── About/        # About page components
│   ├── franchise/    # Franchise components
│   ├── Gallery/      # Gallery components
│   ├── menu/         # Menu components
│   └── ui/           # Reusable UI components
└── public/           # Static assets
    └── images/       # Optimized images
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd AFC-FRONTEND/AFC/afc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.production .env.local
   # Update with your API endpoints if needed
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 🌐 Pages

- **/** - Homepage with hero, about, menu highlights, and testimonials
- **/about** - Company story, mission, vision, team, and journey
- **/menu** - Complete food menu with categories and pricing
- **/gallery** - Photo gallery showcasing food and restaurant
- **/franchise** - Franchise opportunities and contact form

## 🔧 Environment Variables

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://afc-backend-fhlt.onrender.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.afcofficial.in
NEXT_PUBLIC_SITE_NAME=AFC - Absolutely Fried Chicken

# Contact Information
NEXT_PUBLIC_PHONE_1=+91 76740 73004
NEXT_PUBLIC_PHONE_2=+91 95050 66245
NEXT_PUBLIC_EMAIL=AfcIndiaofficial@gmail.com

# Social Media
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/afcofficial.in/
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/AfcIndian
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/AFCIndiaOfficial
```

## 🎨 Design System

- **Colors:**
  - Primary: `#ebbd28` (AFC Gold)
  - Secondary: `#000000` (Black)
  - Background: `#ffffff` (White)
  
- **Typography:** Geist Sans & Geist Mono fonts
- **Animations:** Framer Motion for smooth interactions
- **Icons:** Lucide React and Hero Icons

## 📱 Performance Features

- **Image Optimization** - Next.js Image component with WebP/AVIF support
- **Code Splitting** - Automatic code splitting for faster loading
- **SEO Optimization** - Meta tags, Open Graph, Twitter Cards
- **Caching Strategy** - Optimized caching headers
- **Security Headers** - CSP, HSTS, and other security measures

## 🚀 Deployment

The website is deployed on [Vercel](https://vercel.com/) with:
- **Domain:** https://www.afcofficial.in
- **SSL Certificate** - Automatic HTTPS
- **CDN** - Global content delivery
- **Analytics** - Performance monitoring

## 🏗️ Built With

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations
- **Keen Slider** - Carousel component

## 📧 Contact

**AFC - Absolutely Fried Chicken**
- **Website:** https://www.afcofficial.in
- **Email:** afcindiaofficial@gmail.com
- **Phone:** +91 76740 73004, +91 95050 66245
- **Instagram:** [@afcofficial.in](https://www.instagram.com/afcofficial.in/)
- **Twitter:** [@AfcIndian](https://twitter.com/AfcIndian)

---

**AFC - Absolutely Fried Chicken** © 2025. All rights reserved.
