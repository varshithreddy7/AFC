import React from 'react';
import Image from 'next/image';

const Cards: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black overflow-auto">
      {/* Main Grid Container */}
      <div className="min-h-screen w-full flex flex-col gap-6 p-2">
        
        {/* First Row - Single Full Width Image */}
        <div className="flex-1 w-full min-h-[180px]">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&h=400&fit=crop"
            alt="Restaurant outdoor seating"
            className="w-full h-full object-cover"
            width={1400}
            height={400}
          />
        </div>

        {/* Second Row - Two Images with Different Widths */}
        <div className="flex-1 w-full flex gap-6 min-h-[180px]">
          <div className="w-2/3 h-full">
            <Image
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=400&fit=crop"
              alt="Chef in kitchen"
              className="w-full h-full object-cover"
              width={800}
              height={400}
            />
          </div>
          <div className="w-1/3 h-full">
            <Image
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop"
              alt="Gourmet burger"
              className="w-full h-full object-cover"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* Third Row - Single Full Width Image */}
        <div className="flex-1 w-full min-h-[180px]">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&h=400&fit=crop"
            alt="Wine dining scene"
            className="w-full h-full object-cover"
            width={1400}
            height={400}
          />
        </div>

        {/* Fourth Row - Two Images with Different Widths (Reversed) */}
        <div className="flex-1 w-full flex gap-6 min-h-[180px]">
          <div className="w-1/3 h-full">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop"
              alt="Food plating"
              className="w-full h-full object-cover"
              width={400}
              height={400}
            />
          </div>
          <div className="w-2/3 h-full">
            <Image
              src="https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&h=400&fit=crop"
              alt="Family dining"
              className="w-full h-full object-cover"
              width={800}
              height={400}
            />
          </div>
        </div>

        {/* Fifth Row - Single Full Width Image */}
        <div className="flex-1 w-full min-h-[180px]">
          <Image
            src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=1400&h=400&fit=crop"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
            width={1400}
            height={400}
          />
        </div>

      </div>
    </div>
  );
};

export default Cards;