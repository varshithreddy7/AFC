import  Menu  from "components/menu/Menu";
import PizzaCarousel from "components/menu/carousel";
import Image from "next/image";
import CircularCarousel from "components/menu/MenuSpinnerMobile";
import ResponsiveComponent from "components/menu/ResponsiveComponet";

export default function Home() {
  return (
   <div>
    {/* <PizzaCarousel /> */}
    <ResponsiveComponent/>
    <Menu />
   {/* somewhere in your page */}

   </div>
  );
}
