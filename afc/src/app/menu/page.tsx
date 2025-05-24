import  Menu  from "components/menu/Menu";
import PizzaCarousel from "components/testing/carousel";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <PizzaCarousel />
    <Menu />
   </div>
  );
}
