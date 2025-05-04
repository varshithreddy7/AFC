"use client";

import React from "react";
import FaqSection from "./FaqSection";

 const Home=()=> {
    const [inputValue, setInputValue] = React.useState("");

    const handleClose = () => {
      setInputValue("");
    };
  return (
    <div >
      {/* About Us Section */}
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
      {/* Franchise Success Section */}
      <div className="relative w-[1440px]">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />
        <main className="flex relative flex-row justify-start items-end p-10 mx-auto my-0 text-white max-w-[1440px] max-md:flex-col max-md:items-center max-md:max-w-[991px] max-sm:max-w-screen-sm">
          <section className="max-w-[600px] max-md:max-w-full max-md:text-center">
            <h1 className="mb-5 text-6xl font-bold text-amber-400 leading-[86px] max-sm:text-5xl max-sm:leading-[64px]">
              Build Your Success Story with AFC
            </h1>
            <p className="mb-10 text-xl leading-8 max-sm:text-base max-sm:leading-6">
              Join India's fastest-growing QSR franchise network. Our partners average
              ₹40L+ monthly revenue with our proven business model.
            </p>
            <div className="flex gap-6 max-md:justify-center">
              <article className="p-5 text-center bg-black rounded-2xl border border-amber-400 border-solid w-[132px] max-sm:w-[100px]">
                <p className="text-4xl font-bold text-amber-400 leading-[54px] max-sm:text-3xl max-sm:leading-10">
                  150+
                </p>
                <p className="text-base leading-6 text-white max-sm:text-sm max-sm:leading-5">
                  Locations
                </p>
              </article>
              <article className="p-5 text-center bg-black rounded-2xl border border-amber-400 border-solid w-[132px] max-sm:w-[100px]">
                <p className="text-4xl font-bold text-amber-400 leading-[54px] max-sm:text-3xl max-sm:leading-10">
                  95%
                </p>
                <p className="text-base leading-6 text-white max-sm:text-sm max-sm:leading-5">
                  Success Rate
                </p>
              </article>
              <article className="p-5 text-center bg-black rounded-2xl border border-amber-400 border-solid w-[132px] max-sm:w-[100px]">
                <p className="text-4xl font-bold text-amber-400 leading-[54px] max-sm:text-3xl max-sm:leading-10">
                  ₹40L+
                </p>
                <p className="text-base leading-6 text-white max-sm:text-sm max-sm:leading-5">
                  Avg. Monthly Revenue
                </p>
              </article>
            </div>
          </section>

          <section className="max-w-[600px] max-md:max-w-full max-md:text-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/11167eb05b03782ba7c7d868da72d991ef167434?placeholderIfAbsent=true"
              className="mb-5 w-full rounded-[40px]"
              alt="Store Image"
            />
            <h2 className="mb-5 text-2xl font-bold text-amber-400">
              Success Stories
            </h2>
            <article className="flex relative items-center p-5 bg-black rounded-2xl border border-amber-400 border-solid max-sm:flex-col max-sm:items-start">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d089d76e31e42c5dd791c006ccfa1035f97e614?placeholderIfAbsent=true"
                className="mr-5 w-12 h-12 rounded-full max-sm:mb-2.5"
                alt="Amit Patel's profile"
              />
              <div className="flex-1 max-sm:text-left">
                <h3 className="mb-1 text-base font-bold text-amber-400">Amit Patel</h3>
                <p className="mb-2 text-sm text-white">Multi-Unit Owner</p>
                <p className="mb-2 text-sm text-white">Incredible growth opportunity</p>
                <div className="flex items-center mb-1 text-xs text-white">
                  <i className="ti ti-map-pin mr-1" />
                  <span>Bangalore</span>
                </div>
                <p className="text-xs text-amber-400">₹48L/month</p>
              </div>
              <div className="flex absolute right-4 bottom-4 gap-2">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span className="w-2 h-2 bg-white rounded-full" />
                <span className="w-2 h-2 bg-white rounded-full" />
              </div>
            </article>
          </section>

          <button className="px-10 py-5 mt-10 mb-5 text-xl font-bold leading-8 text-center text-black bg-amber-400 rounded-xl cursor-pointer max-md:mt-5 max-sm:px-0 max-sm:py-4 max-sm:w-full">
            Start Your Journey
          </button>
        </main>
      </div>

      {/* Featured Dishes Section */}
      <div className="relative w-[1440px] h-[704px]" data-model-id="453:3415">
        <div className="absolute top-[79px] left-[499px] [font-family:'Nunito',Helvetica] font-black text-[#ebbd28] text-5xl text-center tracking-[0] leading-[48px] whitespace-nowrap">
          Featured Dishes
        </div>

        <div className="absolute w-[656px] h-7 top-[143px] left-[372px]">
          <div className="absolute w-24 h-0.5 top-[13px] left-0 bg-[#ebbd28]" />
          <div className="absolute top-0 left-[121px] [font-family:'Nunito',Helvetica] font-normal text-white text-lg text-center tracking-[4.00px] leading-7 whitespace-nowrap">
            DISCOVER OUR SIGNATURE ITEMS
          </div>
          <div className="absolute w-24 h-0.5 top-[13px] left-[558px] bg-[#ebbd28]" />
        </div>

        <div className="absolute w-[1200px] h-[470px] top-[234px] left-[120px] overflow-hidden overflow-x-scroll">
          <div className="relative w-[3680px] h-[470px]">
            <div className="absolute w-[1200px] h-[470px] top-0 left-0">
              <div className="absolute w-[632px] h-[421px] top-px left-0 bg-[url(https://c.animaapp.com/UZJm7K9Q/img/image-64-2.png)] bg-cover bg-[50%_50%]">
                <div className="w-36 h-9 top-[23px] left-6 absolute bg-[#ebbd28] rounded-[26843500px]">
                  <div className="absolute w-[111px] top-[7px] left-4 [font-family:'Inter',Helvetica] font-bold text-black text-sm tracking-[2.00px] leading-5 whitespace-nowrap">
                    BEST SELLER
                  </div>
                </div>

                <div className="w-12 h-12 top-[175px] left-4 shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_4px_12px_#ebbe294c] absolute bg-[#ebbd28] rounded-[26843500px]">
                  <img
                    className="absolute w-6 h-6 top-3 left-3"
                    alt="Frame"
                    src="https://c.animaapp.com/UZJm7K9Q/img/frame-19.svg"
                  />
                </div>
              </div>

              <div className="absolute w-[292px] top-[82px] left-[651px] [font-family:'Nunito',Helvetica] font-black text-white text-4xl tracking-[0] leading-10 whitespace-nowrap">
                Premium Burger
              </div>

              <div className="absolute w-[152px] h-6 top-[157px] left-[651px]">
                <img
                  className="absolute w-6 h-6 top-0 left-0"
                  alt="Frame"
                  src="https://c.animaapp.com/UZJm7K9Q/img/frame-3.svg"
                />
                <img
                  className="absolute w-6 h-6 top-0 left-8"
                  alt="Frame"
                  src="https://c.animaapp.com/UZJm7K9Q/img/frame-3.svg"
                />
                <img
                  className="absolute w-6 h-6 top-0 left-16"
                  alt="Frame"
                  src="https://c.animaapp.com/UZJm7K9Q/img/frame-3.svg"
                />
                <img
                  className="absolute w-6 h-6 top-0 left-24"
                  alt="Frame"
                  src="https://c.animaapp.com/UZJm7K9Q/img/frame-3.svg"
                />
                <img
                  className="absolute w-6 h-6 top-0 left-32"
                  alt="Frame"
                  src="https://c.animaapp.com/UZJm7K9Q/img/frame-4.svg"
                />
              </div>

              <p className="absolute w-[485px] top-[205px] left-[651px] [font-family:'Nunito',Helvetica] font-normal text-white text-lg tracking-[0] leading-[29.2px]">
                Experience the perfect blend of premium ingredients and expert
                craftsmanship in every bite.
              </p>

              <p className="absolute w-[105px] top-[277px] left-[648px] [font-family:'Inter',Helvetica] font-normal text-[#ebbd28] text-3xl tracking-[0] leading-9 whitespace-nowrap">
                <span className="font-black">₹19.99</span>
              </p>

              <div className="w-[156px] h-[60px] top-[266px] left-[996px] absolute bg-[#ebbd28] rounded-[26843500px]">
                <div className="absolute w-[95px] top-[15px] left-8 [font-family:'Nunito',Helvetica] font-bold text-black text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
                  Order Now
                </div>
              </div>

              <div className="w-12 h-12 top-44 left-[1136px] shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_4px_12px_#ebbe294c] absolute bg-[#ebbd28] rounded-[26843500px]">
                <img
                  className="absolute w-6 h-6 top-3 left-3"
                  alt="Frame"
                  src="https://c.animaapp.com/UZJm7K9Q/img/frame-20.svg"
                />
              </div>

              <div className="absolute w-16 h-2 top-[431px] left-[492px] bg-[#ebbd28] rounded-[26843500px]" />
              <div className="absolute w-16 h-2 top-[431px] left-[568px] bg-white rounded-[26843500px]" />
              <div className="absolute w-16 h-2 top-[431px] left-[644px] bg-white rounded-[26843500px]" />

              <div className="absolute w-[243px] h-[11px] top-32 left-[663px]">
                <div className="absolute w-3 h-[11px] top-0 left-[115px] bg-[#ebbd28] rounded-[5.96px/5.5px]" />
                <img
                  className="left-0 absolute w-[95px] h-px top-1.5"
                  alt="Line"
                  src="/img/line-1.svg"
                />
                <img
                  className="left-[148px] absolute w-[95px] h-px top-1.5"
                  alt="Line"
                  src="/img/line-2.svg"
                />
              </div>
            </div>

            <div className="absolute w-[1200px] h-[470px] top-0 left-[1240px] bg-black">
              <div className="absolute w-[632px] h-[421px] top-px left-0 bg-[url(https://c.animaapp.com/UZJm7K9Q/img/image-64-2.png)] bg-cover bg-[50%_50%]">
                <div className="w-36 h-9 top-[23px] left-6 absolute bg-[#ebbd28] rounded-[26843500px]">
                  <div className="absolute w-[111px] top-[7px] left-4 [font-family:'Inter',Helvetica] font-bold text-black text-sm tracking-[2.00px] leading-5 whitespace-nowrap">
                    BEST SELLER
                  </div>
                </div>

                <div className="w-12 h-12 top-[175px] left-4 shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_4px_12px_#ebbe294c] absolute bg-[#ebbd28] rounded-[26843500px]">
                  <img
                    className="absolute w-6 h-6 top-3 left-3"
                    alt="Frame"
                    src="https://c.animaapp.com/UZJm7K9Q/img/frame-19.svg"
                  />
                </div>
              </div>

              <div className="absolute w-[292px] top-[82px] left-[651px] [font-family:'Nunito',Helvetica] font-black text-white text-4xl tracking-[0] leading-10 whitespace-nowrap">
                Premium Burger
              </div>

              <div className="absolute w-[152px] h-6 top-[157px] left-[651px]">
                <img
                  className="absolute w-6 h-6 top-0 left-0"
                  alt="Frame"
                  src="https://c.animaapp.com/UZJm7K9Q/img/frame-17.svg"
                />
                <img
                  className="absolute w-6 h-6 top-0 left-8"
                  alt="Frame"
                  src="https://c.animaapp.com/UZJm7K9Q/img/frame-17.svg"
                />
                <img
                  className="absolute w-6 h-6 top-0 left-16"
                  alt="Frame"
                  src="https://c.animaapp.com/UZJm7K9Q/img/frame-17.svg"
                />
                <img
                  className="absolute w-6 h-6 top-0 left-24"
                  alt="Frame"
                  src="https://c.animaapp.com/UZJm7K9Q/img/frame-17.svg"
                />
                <img
                  className="absolute w-6 h-6 top-0 left-32"
                  alt="Frame"
                  src="https://c.animaapp.com/UZJm7K9Q/img/frame-18.svg"
                />
              </div>

              <p className="absolute w-[485px] top-[205px] left-[651px] [font-family:'Nunito',Helvetica] font-normal text-white text-lg tracking-[0] leading-[29.2px]">
                Experience the perfect blend of premium ingredients and expert
                craftsmanship in every bite.
              </p>

              <p className="absolute w-[105px] top-[277px] left-[648px] [font-family:'Inter',Helvetica] font-normal text-[#ebbd28] text-3xl tracking-[0] leading-9 whitespace-nowrap">
                <span className="font-black">₹19.99</span>
              </p>

              <div className="w-[156px] h-[60px] top-[266px] left-[996px] absolute bg-[#ebbd28] rounded-[26843500px]">
                <div className="absolute w-[95px] top-[15px] left-8 [font-family:'Nunito',Helvetica] font-bold text-black text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
                  Order Now
                </div>
              </div>

              <div className="w-12 h-12 top-44 left-[1136px] shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_4px_12px_#ebbe294c] absolute bg-[#ebbd28] rounded-[26843500px]">
                <img
                  className="absolute w-6 h-6 top-3 left-3"
                  alt="Frame"
                  src="https://c.animaapp.com/UZJm7K9Q/img/frame-20.svg"
                />
              </div>

              <div className="absolute w-16 h-2 top-[431px] left-[492px] bg-white rounded-[26843500px]" />
              <div className="absolute w-16 h-2 top-[431px] left-[568px] bg-[#ebbd28] rounded-[26843500px]" />
              <div className="absolute w-16 h-2 top-[431px] left-[644px] bg-white rounded-[26843500px]" />

              <div className="absolute w-[243px] h-[11px] top-32 left-[663px]">
                <div className="absolute w-3 h-[11px] top-0 left-[115px] bg-[#ebbd28] rounded-[5.96px/5.5px]" />
                <img
                  className="left-0 absolute w-[95px] h-px top-1.5"
                  alt="Line"
                  src="/img/image.svg"
                />
                <img
                  className="left-[148px] absolute w-[95px] h-px top-1.5"
                  alt="Line"
                  src="/img/line-2-2.svg"
                />
              </div>
            </div>

            <div className="absolute w-[1200px] h-[470px] top-0 left-[2480px] bg-black">
              <div className="absolute w-[632px] h-[421px] top-px left-0 bg-[url(https://c.animaapp.com/UZJm7K9Q/img/image-64-2.png)] bg-cover bg-[50%_50%]">
                <div className="w-36 h-9 top-[23px] left-6 absolute bg-[#ebbd28] rounded-[26843500px]">
                  <div className="absolute w-[111px] top-[7px] left-4 [font-family:'Inter',Helvetica] font-bold text-black text-sm tracking-[2.00px] leading-5 whitespace-nowrap">
                    BEST SELLER
                  </div>
                </div>

                <div className="w-12 h-12 top-[175px] left-4 shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_4px_12px_#ebbe294c] absolute bg-[#ebbd28] rounded-[26843500px]">
                  <img
                    className="absolute w-6 h-6 top-3 left-3"
                    alt="Frame"
                    src="https://c.animaapp.com/UZJm7K9Q/img/frame-19.svg"
                  />
                </div>
              </div>

              <div className="absolute w-[292px] top-[82px] left-[651px] [font-family:'Nunito',Helvetica] font-black text-white text-4xl tracking-[0] leading-10 whitespace-nowrap">
                Premium Burger
              </div>

              <div className="absolute w-[152px] h-6 top-[157px] left-[651px]">
                <img
                  className="absolute w-6 h-6 top-0 left-0"
                  alt="Frame"
                  src="https://c.animaapp.com/UZJm7K9Q/img/frame-17.svg"
                />
                <img
                  className="absolute w-6 h-6 top-0 left-8"
                  alt="Frame"
                  src="https://c.animaapp.com/UZJm7K9Q/img/frame-17.svg"
                />
                <img
                  className="absolute w-6 h-6 top-0 left-16"
                  alt="Frame"
                  src="https://c.animaapp.com/UZJm7K9Q/img/frame-17.svg"
                />
                <img
                  className="absolute w-6 h-6 top-0 left-24"
                  alt="Frame"
                  src="https://c.animaapp.com/UZJm7K9Q/img/frame-17.svg"
                />
                <img
                  className="absolute w-6 h-6 top-0 left-32"
                  alt="Frame"
                  src="https://c.animaapp.com/UZJm7K9Q/img/frame-18.svg"
                />
              </div>

              <p className="absolute w-[485px] top-[205px] left-[651px] [font-family:'Nunito',Helvetica] font-normal text-white text-lg tracking-[0] leading-[29.2px]">
                Experience the perfect blend of premium ingredients and expert
                craftsmanship in every bite.
              </p>

              <p className="absolute w-[105px] top-[277px] left-[648px] [font-family:'Inter',Helvetica] font-normal text-[#ebbd28] text-3xl tracking-[0] leading-9 whitespace-nowrap">
                <span className="font-black">₹19.99</span>
              </p>

              <div className="w-[156px] h-[60px] top-[266px] left-[996px] absolute bg-[#ebbd28] rounded-[26843500px]">
                <div className="absolute w-[95px] top-[15px] left-8 [font-family:'Nunito',Helvetica] font-bold text-black text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
                  Order Now
                </div>
              </div>

              <div className="w-12 h-12 top-44 left-[1136px] shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_0px_0px_transparent,0px_4px_12px_#ebbe294c] absolute bg-[#ebbd28] rounded-[26843500px]">
                <img
                  className="absolute w-6 h-6 top-3 left-3"
                  alt="Frame"
                  src="https://c.animaapp.com/UZJm7K9Q/img/frame-20.svg"
                />
              </div>

              <div className="absolute w-16 h-2 top-[431px] left-[492px] bg-white rounded-[26843500px]" />
              <div className="absolute w-16 h-2 top-[431px] left-[568px] bg-white rounded-[26843500px]" />
              <div className="absolute w-16 h-2 top-[431px] left-[644px] bg-[#ebbd28] rounded-[26843500px]" />

              <div className="absolute w-[243px] h-[11px] top-32 left-[663px]">
                <div className="absolute w-3 h-[11px] top-0 left-[115px] bg-[#ebbd28] rounded-[5.96px/5.5px]" />
                <img
                  className="left-0 absolute w-[95px] h-px top-1.5"
                  alt="Line"
                  src="/img/line-1-2.svg"
                />
                <img
                  className="left-[148px] absolute w-[95px] h-px top-1.5"
                  alt="Line"
                  src="/img/line-2-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Experience Section */}
      <section className="px-5 py-10 w-full min-h-screen ">
        <div className="overflow-hidden">
          <div className="flex gap-5 max-md:flex-col">
            {/* Description Column */}
            <article className="w-[37%] max-md:ml-0 max-md:w-full">
              <div className="max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col pl-5 text-white max-md:max-w-full">
                  <h1 className="self-start text-7xl font-black leading-none max-md:text-4xl">
                    Experience
                  </h1>
                  <p className="mt-40 text-xl leading-7 max-md:mt-10 max-md:max-w-full">
                    Step into a world of refined elegance where every detail is crafted
                    to perfection. Our restaurant combines the warmth of traditional
                    hospitality with contemporary luxury, creating an atmosphere that
                    transforms dining into an art form.
                  </p>
                </div>

                {/* Private Dining Card */}
                <article className="flex overflow-hidden flex-col pt-5 pr-1 pb-9 pl-5 mt-7 max-w-full bg-black w-[458px]">
                  <div className="flex gap-6 self-start text-2xl font-bold text-amber-400">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/13f56b99c25aa596c8c10ca66eb3e4731ae78693?placeholderIfAbsent=true&apiKey=ab2ef5d51ed843ffa372bcaec288b309"
                      alt=""
                      className="object-contain overflow-hidden shrink-0 self-start aspect-square w-[35px]"
                    />
                    <h3 className="flex-auto">Private Dining Experience</h3>
                  </div>
                  <p className="self-end mt-4 text-base leading-6 text-white">
                    Exclusive spaces designed for intimate gatherings and special
                    celebrations, offering personalized service.
                  </p>
                </article>
              </div>
            </article>

            {/* Gallery Column */}
            <article className="ml-5 w-[63%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col flex-wrap gap-5 justify-between items-start pb-96 pl-6 w-full font-bold rounded-3xl min-h-[475px] max-md:pb-24 max-md:pl-5 max-md:max-w-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3788da910e48b03d55497ac7b6fbe1d269d1c2a?placeholderIfAbsent=true&apiKey=ab2ef5d51ed843ffa372bcaec288b309"
                    alt="Royal Crunch Chicken presentation"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <h2 className="relative self-end mt-6 text-4xl leading-none text-white">
                    Royal Crunch Chicken
                  </h2>
                  <button
                    className="flex relative gap-1 self-start px-6 py-3 text-base text-black bg-amber-400 rounded-lg max-md:px-5"
                    aria-label="View gallery"
                  >
                    <span className="grow">View Gallery</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ef07fb3e80f84e161fe3d608f52321265dbd7c4?placeholderIfAbsent=true&apiKey=ab2ef5d51ed843ffa372bcaec288b309"
                      alt=""
                      className="object-contain overflow-hidden shrink-0 my-auto w-5 aspect-square"
                    />
                  </button>
                </div>

                {/* Review Card */}
                <article className="flex z-10 flex-col items-start self-end px-16 py-8 mt-0 max-w-full bg-black rounded-xl border border-amber-400 border-solid w-[300px] max-md:px-5">
                  <div className="flex gap-4">
                    <div className="flex flex-col justify-center py-2 my-auto bg-amber-400 rounded-[26843500px]">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7f8d10b7e704a2e08d80cac7ccfd9e36253f0b0?placeholderIfAbsent=true&apiKey=ab2ef5d51ed843ffa372bcaec288b309"
                        alt=""
                        className="object-contain overflow-hidden w-6 aspect-square"
                      />
                    </div>
                    <div className="flex flex-col text-base">
                      <h3 className="self-start font-bold text-amber-400">Guest Review</h3>
                      <div className="leading-6 text-black">
                        {Array(5).fill(null).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="mt-4 text-sm leading-5 text-white">
                    "An extraordinary dining experience. The ambiance is unmatched,
                    making every occasion special."
                  </blockquote>
                </article>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="flex overflow-hidden flex-col items-center pt-12 pr-7 pb-4 pl-16 bg-amber-400 rounded-[50px] max-md:px-5">
        <h2 className="ml-6 text-4xl font-extrabold text-white max-md:max-w-full">
          WHAT OUR CUSTOMERS SAY ?
        </h2>

        <div className="flex flex-wrap gap-5 justify-between items-center mt-7 ml-7 max-w-full w-[485px]">
          <hr className="shrink-0 self-stretch my-auto bg-black border-black border-solid border-[3px] h-[3px] w-[190px]" />
          <div className="flex shrink-0 self-stretch bg-black rounded-full border border-black border-solid h-[25px] w-[25px]" />
          <hr className="shrink-0 self-stretch my-auto bg-black border-black border-solid border-[3px] h-[3px] w-[190px]" />
        </div>

        <div className="self-stretch mt-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <article className="w-6/12 max-md:ml-0 max-md:w-full">
              <div className="overflow-hidden grow pt-28 w-full bg-amber-400 max-md:pt-24 max-md:mt-9 max-md:max-w-full">
                <div className="flex relative flex-col justify-center px-12 pt-6 pb-14 w-full bg-black min-h-[507px] rounded-[32px] shadow-[0px_58px_123px_rgba(21,21,21,0.15)] max-md:px-5 max-md:max-w-full">
                  <div className="flex z-0 flex-col items-end w-full max-md:max-w-full">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/61656e8fa7d7708890dcaec45af232678d1ab247?placeholderIfAbsent=true&apiKey=ab2ef5d51ed843ffa372bcaec288b309"
                      alt="Decorative element"
                      className="object-contain max-w-full aspect-[4.98] shadow-[0px_68px_145px_rgba(21,21,21,0.15)] w-[204px]"
                    />
                  </div>

                  <blockquote className="z-0 mt-16 text-4xl text-white max-md:mt-10 max-md:max-w-full">
                    If you want real marketing that works and effective implementation - mobile app's got you covered.
                  </blockquote>

                  <footer className="flex z-0 justify-between items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
                    <div className="self-stretch my-auto min-w-60">
                      <cite className="text-3xl font-extrabold text-amber-400 not-italic">
                        Stephen Brekke
                      </cite>
                      <p className="text-xl text-white">Legacy Integration Producer</p>
                    </div>
                  </footer>

                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdd256ae07d5c74e25b5ef742fcc529d9bc0a07a?placeholderIfAbsent=true&apiKey=ab2ef5d51ed843ffa372bcaec288b309"
                    alt="Stephen Brekke"
                    className="object-contain absolute z-0 max-w-full rounded-full aspect-square h-[152px] left-[50px] top-[-66px] w-[151px]"
                  />
                </div>
              </div>
            </article>

            <article className="w-6/12 max-md:ml-0 max-md:w-full">
              <div className="overflow-hidden grow pt-28 w-full bg-amber-400 max-md:pt-24 max-md:mt-9 max-md:max-w-full">
                <div className="flex relative flex-col justify-center px-12 pt-6 pb-14 w-full bg-black min-h-[507px] rounded-[32px] shadow-[0px_58px_123px_rgba(21,21,21,0.15)] max-md:px-5 max-md:max-w-full">
                  <div className="flex z-0 flex-col items-end w-full max-md:max-w-full">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3acbebf24bdea75889245d06f1415614ca8b85e3?placeholderIfAbsent=true&apiKey=ab2ef5d51ed843ffa372bcaec288b309"
                      alt="Decorative element"
                      className="object-contain max-w-full aspect-[4.98] shadow-[0px_68px_145px_rgba(21,21,21,0.15)] w-[204px]"
                    />
                  </div>

                  <blockquote className="z-0 mt-16 text-4xl text-white max-md:mt-10 max-md:max-w-full">
                    If you want real marketing that works and effective implementation - mobile app's got you covered.
                  </blockquote>

                  <footer className="flex z-0 justify-between items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
                    <div className="self-stretch my-auto min-w-60">
                      <cite className="text-3xl font-extrabold text-amber-400 not-italic">
                        Stephen Brekke
                      </cite>
                      <p className="text-xl text-white">Legacy Integration Producer</p>
                    </div>
                  </footer>

                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdd256ae07d5c74e25b5ef742fcc529d9bc0a07a?placeholderIfAbsent=true&apiKey=ab2ef5d51ed843ffa372bcaec288b309"
                    alt="Stephen Brekke"
                    className="object-contain absolute z-0 max-w-full rounded-full aspect-square h-[152px] left-[50px] top-[-66px] w-[151px]"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    {/* FeedBack section*/}
    <section className="flex flex-row gap-5 justify-between items-start px-5 py-10 rounded-[50px] max-md:flex-col max-md:gap-10 max-md:px-4">
  {/* FAQ Section */}
  <div className="w-1/2 max-md:w-full">
    <FaqSection />
  </div>

  {/* Feedback Section */}
  <div className="w-1/2 flex flex-col items-center font-semibold max-md:w-full pt-50">
    {/* Header */}
    <div className="flex flex-col items-center w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9482fb9f1aabb8a2cc6b1271facceeb769a403e3?placeholderIfAbsent=true&apiKey=ab2ef5d51ed843ffa372bcaec288b309"
        className="object-contain max-w-full aspect-[0.73] w-[210px]"
        alt="Feedback illustration"
      />
      <h1 className="mt-16 text-3xl text-white text-center max-md:mt-10">Any Questions?</h1>
      <p className="mt-2 text-base text-white text-center max-w-md px-4">
        You can ask anything you want to know about our services
      </p>
    </div>

    {/* Input Section */}
    <div className="w-full max-w-lg mt-10 px-4">
      <div className="flex justify-between items-start gap-4 w-full">
        <div className="flex flex-col flex-grow">
          <label htmlFor="feedback-input" className="text-sm text-white">
            Let us know your question
          </label>
          <input
            id="feedback-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your question here..."
            className="mt-3 p-2 w-full text-base bg-transparent border-b border-white text-white outline-none placeholder-white focus:border-amber-400 transition-colors"
          />
        </div>
        {inputValue && (
          <button
            onClick={handleClose}
            className="mt-3 text-2xl text-neutral-900 hover:text-amber-400 cursor-pointer transition-colors"
            aria-label="Clear input"
          >
            ×
          </button>
        )}
      </div>

      {/* Submit Button */}
      <button
        disabled={!inputValue.trim()}
        className={`mt-6 w-full py-3 rounded-lg text-lg font-bold transition-colors ${
          inputValue.trim()
            ? "bg-amber-400 text-black hover:bg-amber-500"
            : "bg-gray-500 text-gray-300 cursor-not-allowed"
        }`}
      >
        Submit Question
      </button>
    </div>
  </div>
</section>


    </div> 
  );
}


export default Home;