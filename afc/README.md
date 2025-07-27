# AFC Restaurant Website

Hey there! 👋 This is the official website for AFC (Absolutely Fried Chicken) - a restaurant chain that's all about serving up some seriously good fried chicken.

**Check it out live:** [afcofficial.in](https://www.afcofficial.in)

## What's This All About?

Building a restaurant website isn't just about putting up some photos and calling it a day. We wanted to create something that actually makes people hungry and helps them find what they're looking for quickly. Here's what we've packed into this project:

- A **Next.js 15** setup with all the latest bells and whistles
- **Mobile-first design** because let's be real, everyone's on their phones
- **Fast loading images** - nobody wants to wait for food photos to load
- **SEO that actually works** - we want people to find us on Google
- Some pretty sweet **animations** using Framer Motion and GSAP
- A **circular menu carousel** that's honestly kind of addictive to play with

## Getting Started

Want to run this locally? Here's how:

```bash
# Grab the code
git clone [your-repo-url]
cd AFC-FRONTEND/AFC/afc

# Install everything
npm install

# Fire it up
npm run dev
```

That's it! Head to `http://localhost:3000` and you should see the magic happen.

## Project Layout

Here's how we've organized everything (because clean code matters):

```
src/
├── app/                 # Next.js app router pages
│   ├── about/          # Company story and team
│   ├── franchise/      # Franchise info
│   ├── gallery/        # Food photos (the good stuff)
│   ├── menu/           # Full menu with that circular carousel
│   └── api/            # Backend endpoints
├── components/         # All our React components
│   ├── Home/           # Homepage sections
│   ├── About/          # About page bits
│   ├── franchise/      # Franchise components
│   ├── Gallery/        # Gallery grid
│   ├── menu/           # Menu components (including the cool carousel)
│   └── ui/             # Reusable UI stuff
public/
└── images/             # All the food photos and assets
```

## The Pages

- **Homepage** - The main landing with hero section, about preview, menu highlights, and customer reviews
- **About** - The full story, mission, team photos, and company journey
- **Menu** - Interactive menu with categories and that spinning carousel thing
- **Gallery** - Food photography showcase
- **Franchise** - Information for potential franchise partners

## Environment Setup

You'll need these environment variables (create a `.env.local` file):

```env
# Backend API
NEXT_PUBLIC_API_URL=https://afc-backend-fhlt.onrender.com

# Site info
NEXT_PUBLIC_SITE_URL=https://www.afcofficial.in
NEXT_PUBLIC_SITE_NAME=AFC - Absolutely Fried Chicken

# Contact details
NEXT_PUBLIC_PHONE_1=+91 76740 73004
NEXT_PUBLIC_PHONE_2=+91 95050 66245
NEXT_PUBLIC_EMAIL=AfcIndiaofficial@gmail.com

# Social media links
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/afcofficial.in/
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/AfcIndian
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/AFCIndiaOfficial
```

## Design Choices

We went with a **golden yellow** (`#ebbd28`) as the primary color - it just screams "delicious fried chicken," doesn't it? Combined with clean blacks and whites, it gives that premium fast-food vibe.

For fonts, we're using **Geist Sans** and **Geist Mono** - they're clean, readable, and have that modern feel.

The animations are subtle but effective. We didn't want to go overboard, just enough to make interactions feel smooth and engaging.

## Performance Stuff

We've put some effort into making this thing fast:

- **Image optimization** with Next.js Image component (WebP/AVIF formats)
- **Automatic code splitting** so you only load what you need
- **Proper caching headers** for static assets
- **SEO meta tags** for better search visibility
- **Security headers** because safety first

## Tech Stack

Here's what we're working with:

- **Next.js 15** with the new App Router (because it's awesome)
- **React 19** for the UI magic
- **TypeScript** for fewer bugs and better developer experience
- **Tailwind CSS** for styling (utility classes FTW)
- **Framer Motion** for smooth animations
- **GSAP** for the more complex animations
- **Keen Slider** for carousels and sliders

## Deployment

We're hosted on **Vercel** (because it just works with Next.js):
- Automatic deployments from main branch
- Built-in CDN for fast global delivery
- SSL certificates handled automatically
- Performance monitoring out of the box

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check for linting issues
npm run lint:fix     # Fix linting issues automatically
npm run type-check   # Check TypeScript types
```

## Need Help?

If you run into issues or have questions, feel free to reach out:

- **Email:** afcindiaofficial@gmail.com
- **Phone:** +91 76740 73004 or +91 95050 66245
- **Instagram:** [@afcofficial.in](https://www.instagram.com/afcofficial.in/)

---

Built with ❤️ for AFC - Absolutely Fried Chicken
