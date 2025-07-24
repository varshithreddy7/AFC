import AbsolutelyFired from "components/About/AbsolutelyFired";
import MisionVision from "components/About/MisionVision";
import Team from "components/About/Team";
import OurJourney from "components/About/OurJourney";
import OurLocations from "components/OurLocations";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About AFC - Best Fried Chicken Restaurant | Our Story & Mission",
  description: "Learn about AFC's journey to become the best fried chicken restaurant. Our mission, vision, team, and commitment to serving premium quality crispy chicken with fresh ingredients.",
  keywords: "about AFC, best fried chicken restaurant story, AFC mission, AFC team, premium chicken restaurant, absolutely fried chicken history, AFC vision, quality chicken commitment",
  openGraph: {
    title: "About AFC - Best Fried Chicken Restaurant Story",
    description: "Discover AFC's journey to becoming the best fried chicken restaurant. Learn about our mission, team, and commitment to quality.",
    images: [{
      url: '/images/about-us-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'About AFC - Best Fried Chicken Restaurant Team and Story'
    }],
  },
  twitter: {
    title: "About AFC - Best Fried Chicken Restaurant",
    description: "Learn about AFC's journey and commitment to serving the best fried chicken with premium quality."
  },
  alternates: {
    canonical: 'https://your-domain.com/about'
  }
};

export default function AboutPage() {
  return (
    <div>
      <h1 className="sr-only">About AFC - Best Fried Chicken Restaurant Story</h1>
      <AbsolutelyFired/>
      <MisionVision/>
      <OurJourney/>
      <OurLocations/>
      <Team/>
    </div>
  );
}
