import Menu from "components/menu/Menu";
import ResponsiveComponent from "components/menu/ResponsiveComponet";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AFC Menu - Best Fried Chicken, Burgers & Pizza | Order Online",
  description: "Explore AFC's delicious menu featuring the best fried chicken, crispy burgers, mouth-watering pizza, and more. Premium quality ingredients, amazing taste. Order online for delivery!",
  keywords: "AFC menu, best fried chicken menu, chicken burgers, pizza menu, crispy chicken, fried chicken near me, chicken combo meals, AFC food delivery, premium chicken restaurant menu",
  openGraph: {
    title: "AFC Menu - Best Fried Chicken & More | Order Now",
    description: "Discover AFC's amazing menu with the best fried chicken, burgers, pizza & combo meals. Premium quality, fresh ingredients. Order online!",
    images: [{
      url: '/images/burger.png',
      width: 1200,
      height: 630,
      alt: 'AFC Menu - Best Fried Chicken, Burgers & Pizza'
    }],
  },
  twitter: {
    title: "AFC Menu - Best Fried Chicken Restaurant",
    description: "Explore AFC's delicious menu with the best fried chicken, burgers & pizza. Order online!"
  },
  alternates: {
    canonical: 'https://your-domain.com/menu'
  }
};

export default function MenuPage() {
  return (
    <div>
      <h1 className="sr-only">AFC Menu - Best Fried Chicken, Burgers, Pizza & More</h1>
      <ResponsiveComponent/>
      <Menu />
    </div>
  );
}
