// import React from "react";

// const Gallery: React.FC = () => {
//   return (
//     <div className="bg-[#00000003] flex flex-row justify-center w-full mt-33">
//       <div className="bg-[#00000003] w-screen relative">
//         <div className="relative w-full h-[80vh]  rounded-[3px_3px_0px_0px] overflow-hidden bg-[url(https://c.animaapp.com/HEE7tW43/img/grab--n--go-model.png)] object-fit bg-[50%_50%]" />
//         {/* Sub-banner Label */}
//         <div className=" absolute top-[70vh] md:top-[510px] bg-black rounded-t-[15px] text-center py-6 px-6">
//           <h2 className="text-[#ebbd28] text-5xl tracking-[2px] font-serif">GAllERY</h2>
//         </div>
//         <div className="min-h-screen w-full bg-black overflow-auto">
//       {/* Main Grid Container */}
//       <div className="min-h-screen w-full flex flex-col md:gap-2 gap-1">
        
      
//         <div className="flex-1 w-full f-full mt-10 ">
//           <img
//             src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&h=400&fit=crop"
//             alt="Restaurant outdoor seating"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Second Row - Two Images with Different Widths */}
//         <div className="flex-1 w-full flex gap-6 md:min-h-[180px] h-full mt-[-30] md:mt-2">
//           <div className="w-2/3 h-full">
//             <img
//               src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=400&fit=crop"
//               alt="Chef in kitchen"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="w-1/3 h-full">
//             <img
//               src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop"
//               alt="Gourmet burger"
//               className="w-full h-full object-fit"
//             />
//           </div>
//         </div>

//         {/* Third Row - Single Full Width Image */}
//         <div className="flex-1 w-full md:min-h-[180px] h-full mt-[-30] md:mb-1 md:mt-0 md:mb-0">
//           <img
//             src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&h=400&fit=crop"
//             alt="Wine dining scene"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Fourth Row - Two Images with Different Widths (Reversed) */}
//         <div className="flex-1 w-full flex gap-6 min-h-[180px] mb-14 mt-[-30] md:mt-0 md:mb-0">
//           <div className="w-1/3 h-full">
//             <img
//               src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop"
//               alt="Food plating"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="w-2/3 h-full">
//             <img
//               src="https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&h=400&fit=crop"
//               alt="Family dining"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Fifth Row - Single Full Width Image */}
//         <div className="flex-1 w-full min-h-[180px] mt-[-90] mb-[70] md:mb-1 md:mt-0 md:mb-0">
//           <img
//             src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=1400&h=400&fit=crop"
//             alt="Restaurant interior"
//             className="w-full h-full object-cover"
//           />
//         </div>

//       </div>
//     </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;


import React from "react";
import Image from "next/image";

const Gallery: React.FC = () => {
  return (
    <div className="bg-[#00000003] flex justify-center w-full mt-32">
      <div className="w-screen relative bg-[#00000003]">
        {/* Hero Image */}
        <div className="relative w-full h-[80vh] overflow-hidden rounded-t-md">
          <Image
            src="https://c.animaapp.com/HEE7tW43/img/grab--n--go-model.png"
            alt="Main Banner"
            className="w-full h-full object-cover"
            fill
            priority
          />
        </div>

        {/* Sub-banner Label */}
        <div className="absolute top-[70vh] bg-black rounded-t-[15px] text-center py-6 px-6 w-auto">
          <h2 className="text-[#ebbd28] text-4xl md:text-5xl tracking-wider font-serif">
            GALLERY
          </h2>
        </div>

        {/* Gallery Content */}
        <div className="min-h-screen w-full bg-black px-4 py-10">
          <div className="flex flex-col gap-6">

            {/* Row 1 - Full Width */}
            <div className="relative w-full h-[200px] md:h-[250px]">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&h=400&fit=crop"
                alt="Outdoor"
                className="w-full h-full object-cover rounded-md"
                fill
              />
            </div>

            {/* Row 2 - Two Images Side by Side */}
            <div className="w-full flex flex-row gap-4 h-[200px] md:h-[250px]">
              <div className="relative w-2/3 h-full">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=400&fit=crop"
                  alt="Chef"
                  className="w-full h-full object-cover rounded-md"
                  fill
                />
              </div>
              <div className="relative w-1/3 h-full">
                <Image
                  src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop"
                  alt="Burger"
                  className="w-full h-full object-cover rounded-md"
                  fill
                />
              </div>
            </div>

            {/* Row 3 - Full Width */}
            <div className="relative w-full h-[200px] md:h-[250px]">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&h=400&fit=crop"
                alt="Wine"
                className="w-full h-full object-cover rounded-md"
                fill
              />
            </div>

            {/* Row 4 - Two Images Side by Side (Reversed) */}
            <div className="w-full flex flex-row gap-4 h-[200px] md:h-[250px]">
              <div className="relative w-1/3 h-full">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop"
                  alt="Plating"
                  className="w-full h-full object-cover rounded-md"
                  fill
                />
              </div>
              <div className="relative w-2/3 h-full">
                <Image
                  src="https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&h=400&fit=crop"
                  alt="Family"
                  className="w-full h-full object-cover rounded-md"
                  fill
                />
              </div>
            </div>

            {/* Row 5 - Full Width */}
            <div className="relative w-full h-[200px] md:h-[250px]">
              <Image
                src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=1400&h=400&fit=crop"
                alt="Interior"
                className="w-full h-full object-cover rounded-md"
                fill
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
