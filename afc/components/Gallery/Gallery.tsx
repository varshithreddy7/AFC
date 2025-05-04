import React from "react";

const Gallery: React.FC = () => {
  return (
    <div className="bg-[#00000003] flex flex-row justify-center w-full">
      <div className="bg-[#00000003] w-[1440px] relative">
        <div className="absolute w-[1440px] h-[942px] top-0 left-0 rounded-[3px_3px_0px_0px] overflow-hidden bg-[url(https://c.animaapp.com/HEE7tW43/img/grab--n--go-model.png)] bg-cover bg-[50%_50%]" />

        <img
          className="absolute w-[740px] h-[1109px] top-[969px] left-[31px] object-cover"
          alt="Image"
          src="https://c.animaapp.com/HEE7tW43/img/image-81.png"
        />

        <img
          className="absolute w-[628px] h-[419px] top-[969px] left-[792px] object-cover"
          alt="Image"
          src="https://c.animaapp.com/HEE7tW43/img/image-82.png"
        />

        <img
          className="absolute w-[740px] h-[510px] top-[2094px] left-[31px]"
          alt="Image"
          src="https://c.animaapp.com/HEE7tW43/img/image-83.png"
        />

        <img
          className="absolute w-[621px] h-[932px] top-[1417px] left-[796px] object-cover"
          alt="Image"
          src="https://c.animaapp.com/HEE7tW43/img/image-84.png"
        />

        <img
          className="absolute w-[625px] h-[809px] top-[2376px] left-[796px] object-cover"
          alt="Image"
          src="https://c.animaapp.com/HEE7tW43/img/image-85.png"
        />

        <img
          className="absolute w-[740px] h-[570px] top-[2615px] left-[31px]"
          alt="Image"
          src="https://c.animaapp.com/HEE7tW43/img/image-86.png"
        />

        <img
          className="absolute w-[1390px] h-[834px] top-[3196px] left-[31px]"
          alt="Image"
          src="https://c.animaapp.com/HEE7tW43/img/image-87.png"
        />

        {/* Spacer to push footer below all absolute elements */}
        <div className="h-[4100px]" />
      </div>
    </div>
  );
};

export default Gallery;
