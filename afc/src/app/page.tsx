import HomePage from "components/HomePage";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AFC - Best Fried Chicken Restaurant | Order Fresh Crispy Chicken Online",
  description: "Craving the best fried chicken? AFC serves premium quality, fresh crispy chicken, delicious burgers, pizza & more. Order online for delivery or dine-in at our restaurant. Join AFC franchise family today!",
  keywords: "best fried chicken, AFC restaurant, crispy chicken delivery, fresh chicken near me, chicken burgers, premium fried chicken, order chicken online, AFC franchise, quality chicken restaurant, chicken combo meals",
  openGraph: {
    title: "AFC - Best Fried Chicken | Fresh Crispy Chicken Restaurant",
    description: "Experience the best fried chicken at AFC. Premium quality, fresh ingredients, delicious crispy chicken. Order now for delivery!",
    images: [{
      url: '/images/fried-chicken.jpg',
      width: 1200,
      height: 630,
      alt: 'AFC Best Fried Chicken - Crispy and Delicious'
    }],
  },
  twitter: {
    title: "AFC - Best Fried Chicken Restaurant",
    description: "Experience the best fried chicken at AFC. Premium quality, fresh ingredients. Order now!"
  },
  alternates: {
    canonical: 'https://your-domain.com'
  }
};

export default function Home() {
  return (
    <div>
      <h1 className="sr-only">AFC - Best Fried Chicken Restaurant | Premium Quality Crispy Chicken</h1>
      <HomePage />
    </div>
  );
}
