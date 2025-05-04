import React from "react";

export const GroupWrapper = ()=> {
  return (
    <div className="absolute w-[1322px] h-[568px] top-[2635px] left-[537px]">
      <div className="absolute top-[541px] left-[123px] [font-family:'Nunito',Helvetica] font-semibold text-white text-2xl text-center tracking-[0] leading-[27px] whitespace-nowrap">
        LET’S&nbsp;&nbsp;GROW TOGETHER
      </div>

      <img
        className="w-[516px] h-[516px] top-0 left-0 absolute object-cover"
        alt="Image"
        src="https://c.animaapp.com/89fS0TNm/img/image-51.png"
      />

      <div className="absolute w-[742px] h-[418px] top-[107px] left-[579px] border-[3px] border-solid border-[#ebbd28]">
        <p className="absolute w-[701px] top-[5px] left-[33px] [font-family:'Nunito',Helvetica] font-normal text-transparent text-xl tracking-[0] leading-[39px]">
          <span className="font-black text-[#ebbd28]">
            Absolutely Fried Chicken
          </span>

          <span className="font-medium text-white">
            {" "}
            is a fast-food restaurant chain that specializes in fried
            chicken,pizzas,Burgers and manymore. The company was founded in 2021
            by a two friends who wanted to bring the taste of Southern-style
            fried chicken to the masses. Since then, Absolutely Fried Chicken
            has grown to become one of the most popular fast-food chains in the
            country, with locations in every major city. We are now looking to
            expand our brand by offering franchise opportunities to
            entrepreneurs who share our passion for great food and excellent
            customer service.{" "}
          </span>
        </p>
      </div>

      <img
        className="absolute w-[344px] h-0.5 top-[520px] left-[86px]"
        alt="Line"
        src="https://c.animaapp.com/89fS0TNm/img/line-6.svg"
      />
    </div>
  );
};


export default GroupWrapper;