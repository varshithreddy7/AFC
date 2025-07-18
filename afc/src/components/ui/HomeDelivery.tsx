import React from "react";
import Image from "next/image";

const HomeDelivery = () => {
  return (
    <div className="relative bg-black rounded-[30px] overflow-hidden w-[300px] md:w-[510] h-[650px] max-w-[95vw] max-h-[95vh] md:w-[510px] md:h-[650px] sm:w-[90vw] sm:h-auto mx-auto">
      <div className="absolute top-[24px] left-1/2 transform -translate-x-1/2 text-[18px] md:text-[24px] font-extrabold text-white tracking-widest w-full text-center">
        ORDER DETAILS
      </div>

      <Image
        className="absolute w-[120px] h-[120px] top-[68px] left-1/2 transform -translate-x-1/2 rounded-full object-cover"
        alt="Logo"
        src="https://c.animaapp.com/MFAqxUgt/img/image-3@2x.png"
        width={120}
        height={120}
      />

      <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2 text-[#FFD700] font-bold text-[20px] md:text-[22px] text-center w-full">
        Home Food Delivery
      </div>

      <p className="absolute top-[236px] left-[32px] right-[32px] text-center text-white text-sm leading-[20px]">
        We deliver delicious homemade food to nearby locations. Place your order
        by contacting us directly.
      </p>

      <div className="absolute w-[440px] max-w-[80%] left-1/2 transform -translate-x-1/2 top-[285px] mt-3">
        <div className="bg-[#1a1a1a] rounded-lg p-4 mb-4 border border-[#ffd700]">
          <div className="bg-[#ffd700] w-[42px] h-[42px] rounded-full mx-auto mb-2 flex items-center justify-center text-black font-medium">
            CV
          </div>
          <div className="text-white text-center font-medium">Chaitainya Varma</div>
          <div className="text-center text-[#ffd700] text-[15px] font-semibold mt-1">
            +91 76740 73004
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#ffd700]">
          <div className="bg-[#ffd700] w-[42px] h-[42px] rounded-full mx-auto mb-2 flex items-center justify-center text-black font-medium">
            N
          </div>
          <div className="text-white text-center font-medium">Narasimha</div>
          <div className="text-center text-[#ffd700] text-[15px] font-semibold mt-1">
            +91 95050 66245
          </div>
        </div>
      </div>

      <div className="absolute bottom-[35px] left-1/2 transform -translate-x-1/2 text-white text-[13px] text-center w-full mt-4">
        Available payment methods:
      </div>

      <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 flex gap-8 ">
        <Image
          src="https://c.animaapp.com/MFAqxUgt/img/image-73@2x.png"
          alt="Google Pay"
          className="w-[30px] h-[30px]"
          width={30}
          height={30}
        />
        <Image
          src="https://c.animaapp.com/MFAqxUgt/img/image-75@2x.png"
          alt="Phone Pay"
          className="w-[30px] h-[30px]"
          width={30}
          height={30}
        />
        <Image
          src="https://c.animaapp.com/MFAqxUgt/img/image-74@2x.png"
          alt="Cash"
          className="w-[30px] h-[30px]"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default HomeDelivery;
