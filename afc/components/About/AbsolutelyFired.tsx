"use client";
import React from "react";

const AbsolutelyFried: React.FC = () => {
  return (
    <div>
      <section className="relative w-screen max-w-screen-xl mx-auto">
        <img
          src="/images/about_page.png"
          className="w-screen h-full object-cover"
          alt="About"
        />
        {/* Text overlay in bottom-left */}
        <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-12  rounded-md max-w-md">
          <h2 className="text-2xl font-bold text-[#ebbd28]">Absolutely Fried Chicken</h2>
          
        </div>
      </section>

      <section className="w-full pt-20 px-6 flex justify-center">
        <div className="max-w-4xl text-2xl leading-loose font-nunito text-white">
          <p>
            <span className="font-bold text-[#ebbd28]">Absolutely Fried Chicken</span>{" "}
            is a celebration of crispy, golden perfection, bringing together the best of
            comfort food with a vibrant, welcoming atmosphere. Known for its signature
            secret recipe, AFC delivers irresistibly juicy, flavor-packed bites that keep
            guests coming back for more. The menu features a tempting selection of fried
            chicken, sides, and sauces, all crafted to elevate the experience. Whether
            grabbing a quick bite or sharing a hearty meal with loved ones, AFC offers a
            satisfying, no-fuss dining experience. Committed to quality and hospitality,
            AFC ensures every visit is filled with warmth, crunch, and deliciousness.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AbsolutelyFried;
