import React from "react";
import { BackgroundBorder } from "./sections/BackgroundBorder";

import { Contact } from "./sections/Contact";

import { Group } from "./sections/Group";
import { GroupWrapper } from "./sections/GroupWrapper";
import ContactForm from "./sections/FrameWrapper";

const Franchasie = () => {
  return (
    <div className=" flex justify-center w-full mt-32">
      <div className="overflow-hidden w-full max-w-8xl relative flex flex-col gap-20 ">
        {/* Glows */}
        <div className="absolute w-[1040px] h-[983px] rounded-[900px] opacity-10 bg-gradient-radial from-[#EBBE29] to-[#856C17] left-[70%] top-[10%] -z-10" />
        <div className="absolute w-[1040px] h-[983px] rounded-[900px] opacity-10 bg-gradient-radial from-[#EBBE29] to-[#856C17] right-[70%] top-[30%] -z-10" />

      


        {/* Franchise Banner */}
        <div
          className="w-full h-[80vh] sm:bg-cover md:bg-cover bg-center rounded-md flex items-center justify-center"
          style={{ backgroundImage: `url(https://c.animaapp.com/89fS0TNm/img/grab--n--go-model-3.png)` }}
        />

        {/* Sub-banner Label */}
        <div className=" absolute top-[620px] md:top-[510px] bg-black rounded-t-[15px] text-center py-6 px-6">
          <h2 className="text-[#ebbd28] text-5xl tracking-[2px] font-serif">FRANCHISE</h2>
        </div>

        {/* Components */}
        <BackgroundBorder />
       
        <Group />
        
        <GroupWrapper />
        <Contact />
        <ContactForm />
      </div>
    </div>
  );
};

export default Franchasie;
