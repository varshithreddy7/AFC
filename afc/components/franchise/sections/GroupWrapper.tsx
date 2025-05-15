import React from "react";

export const GroupWrapper = () => {
  return (
    <div className="relative w-full max-w-[1322px] mx-auto my-24 px-4">
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-18">
        {/* Image */}
        <img
          src="https://c.animaapp.com/89fS0TNm/img/image-51.png"
          alt="Absolutely Fried Chicken"
          className="w-full max-w-md h-auto object-cover rounded-xl shadow-lg"
        />

        {/* Text Box */}
        <div className="border-2 border-yellow-400 p-6 lg:p-8  rounded-lg max-w-3xl mt-18">
         
          <p className="text-white text-xl leading-relaxed font-medium">
            <span className="text-yellow-500 text-2xl">Absolutely Fried Chicken  </span>
             is a fast-food restaurant chain that
            specializes in fried chicken,pizzas,Burgers and manymore.
            The company was founded in 2021 by a two friends who wanted to bring
            the taste of Southern-style fried chicken to the masses. Since then,
            Absolutely Fried Chicken has grown to become one of the most popular
            fast-food chains in the country, with locations in every major city.
            We are now looking to expand our brand by offering franchise opportunities
            to entrepreneurs
            who share our passion for great food and excellent customer service.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-left mt-12">
        <div className="inline-block w-80 h-1 bg-yellow-400 mb-4 text-center ml-10"></div>
        <p className="text-white text-2xl font-bold tracking-wide ml-14">
          LET’S GROW TOGETHER
        </p>
      </div>
    </div>
  );
};


