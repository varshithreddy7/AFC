import React from "react";

export const FrameWrapper = () => {
  return (
    <div className="relative w-full py-20 flex flex-row items-center gap-12">
      {/* Section container */}
      <div className="flex flex-wrap justify-center items-start gap-12 max-w-[1440px] px-6">
        {/* Left: Background image with form overlay */}
        <div className="relative w-[822px] h-[987px]">

          <div className="absolute w-[770px] h-[353px] top-[200px] left-[13px]  rounded-xl p-6 flex flex-col justify-center items-center gap-4 shadow-lg">

            <input
              type="text"
              placeholder="Name"
              className="w-full h-[200px]  px-4 py-10 rounded-md bg-transparent border-2 border-[#ebbd28] text-white placeholder-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[200px]  px-4 py-10  rounded-md bg-transparent border-2 border-[#ebbd28] text-white placeholder-white focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone No"
              className="w-full h-[200px]  px-4 py-10  rounded-md bg-transparent border-2 border-[#ebbd28] text-white placeholder-white focus:outline-none"
            />

            <input
              type="textarea"
              placeholder="Address"
              className="w-full h-[700px] px-4 py-24 rounded-md bg-transparent border-2 border-[#ebbd28] text-white placeholder-white focus:outline-none"
            />


            <button className="w-50 bg-[#ebbd28] text-black font-bold py-2 rounded-md hover:bg-yellow-500 transition">
              Submit
            </button>
          </div>
        </div>

        {/* Right: Text content and image */}
        <div className="flex flex-col gap-8 max-w-[468px]">
          <img
            className="w-full h-[353px] object-cover rounded-xl"
            alt="Image"
            src="https://c.animaapp.com/89fS0TNm/img/image-61@2x.png"
          />
          <p className="[font-family:'Nunito',Helvetica] text-xl leading-10">
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
        </div>
      </div>
    </div>
  );
};

export default FrameWrapper;
