import React from "react";

export const FrameWrapper = () => {
  return (
    <div className="absolute w-[1440px] h-[1194px] top-[3830px] left-[489px]">
      <img
        className="absolute w-[822px] h-[987px] top-[86px] left-20"
        alt="Group"
        src="https://c.animaapp.com/89fS0TNm/img/group-1000001566.png"
      />

      <p className="absolute w-[446px] h-[520px] top-[474px] left-[933px] [font-family:'Nunito',Helvetica] font-normal text-transparent text-[32px] tracking-[0] leading-10">
        <span className="font-black text-[#ebbd28]">
          Absolutely Fried Chicken
        </span>

        <span className="font-bold text-white">
          {" "}
          can access your favorite social media platforms seamlessly while
          enjoying your meal. Share mouthwatering snapshots of your dining
          experience or connect with friends online in between bites of our
          crispy delights. Embrace the intersection of delicious food and
          digital connectivity for a modern dining experience.
        </span>
      </p>

      <img
        className="w-[468px] h-[353px] top-[89px] left-[922px] absolute object-cover"
        alt="Image"
        src="https://c.animaapp.com/89fS0TNm/img/image-61@2x.png"
      />
    </div>
  );
};

export default FrameWrapper;