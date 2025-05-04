"use clinet"

const AboutSection=() => {
return (
    <div className="relative w-[1440px] h-[682px]" data-model-id="444:265">
        <div className="absolute top-[47px] left-[106px] font-['Merriweather',serif] font-black text-white text-2xl text-center tracking-[2.00px] leading-[35px] whitespace-nowrap">
          ABOUT US
        </div>

        <div className="absolute w-[103px] h-[7px] top-[86px] left-[126px]">
          <div className="absolute w-[5px] h-[7px] top-0 left-[49px] bg-[#ebbd28] rounded-[2.52px/3.5px]" />

          <img
            className="left-0 absolute w-10 h-[3px] top-0"
            alt="Line"
            src="https://c.animaapp.com/W6zTihmA/img/line-1.svg"
          />

          <img
            className="left-[63px] absolute w-10 h-[3px] top-0"
            alt="Line"
            src="https://c.animaapp.com/W6zTihmA/img/line-2.svg"
          />
        </div>

        <div className="w-[442px] top-[121px] font-bold text-[#ebbd28] text-[40px] tracking-[0] leading-[60px] whitespace-nowrap absolute left-[106px] font-['Merriweather',serif]">
          Absolute Fried Chicken
        </div>

        <p className="w-[536px] top-[178px] font-semibold text-white text-xl tracking-[2.00px] leading-[37px] absolute left-[106px] font-['Work_Sans',sans-serif]">
          Absolutely Fried Chicken is a bustling hub for crispy, golden delights
          that satisfy cravings instantly. Our signature recipe, a closely guarded
          secret, ensures each bite is bursting with flavor and juiciness.Nestled
          in the heart of the town, it&#39;s a go-to spot for those seeking
          comfort food on the go. With friendly service and affordable prices,
          it&#39;s a favorite haunt for families and friends alike.
        </p>

        <div className="absolute w-[400px] h-[79px] top-[539px] left-[106px]">
          <div className="left-[21px] absolute top-0 font-['Merriweather',serif] font-bold text-[#ebbd28] text-[32px] text-center tracking-[0] leading-[48px] whitespace-nowrap">
            15+
          </div>

          <div className="left-[156px] absolute top-0 font-['Merriweather',serif] font-bold text-[#ebbd28] text-[32px] text-center tracking-[0] leading-[48px] whitespace-nowrap">
            50+
          </div>

          <div className="absolute top-[55px] left-[150px] font-['Work_Sans',sans-serif] font-normal text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Locations
          </div>

          <div className="absolute top-0 left-[290px] font-['Merriweather',serif] font-bold text-[#ebbd28] text-[32px] text-center tracking-[0] leading-[48px] whitespace-nowrap">
            2M+
          </div>

          <div className="absolute top-[55px] left-[259px] font-['Work_Sans',sans-serif] font-normal text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Happy Customers
          </div>

          <div className="absolute w-[122px] top-[55px] left-0 font-['Work_Sans',sans-serif] font-normal text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Years Experience
          </div>
        </div>

        <div className="absolute w-[574px] h-[613px] top-[3px] left-[765px]">
          <div className="absolute w-[182px] h-[53px] top-[560px] left-[221px]">
            <button className="relative w-[180px] h-[53px] bg-[#ebbd28] rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-[#d4a720]">
              <span className="font-['Ubuntu',sans-serif] font-bold text-black text-xl text-center tracking-[0] leading-[48px] whitespace-nowrap">
                Visit Our Place
              </span>
            </button>
          </div>

          <img
            className="absolute w-[574px] h-[574px] top-0 left-0 object-cover"
            alt="Image"
            src="https://c.animaapp.com/W6zTihmA/img/image-80.png"
          />
        </div>
      </div>
);
}

export default AboutSection;