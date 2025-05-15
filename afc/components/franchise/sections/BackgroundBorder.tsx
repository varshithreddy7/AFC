import React from "react";

type CardProps = {
  image: string;
  title: string;
  points: string[];
  cta: string;
};

const Card: React.FC<CardProps> = ({ image, title, points, cta }) => (
  <div className="relative w-[360px] h-auto bg-[#58554a] rounded border border-solid border-[#00000020] shadow-[12px_12px_30px_#ebbd2880] overflow-hidden mb-10">
    {/* Top Image */}
    <div
      className="w-full h-[228px] bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    />

    {/* Content Block */}
    <div className="p-6">
      <div className="text-white text-center text-2xl font-bold mb-4">
        {title}
      </div>

      <div className="h-0.5 bg-[#e69c00] mb-4 mx-auto w-[80%]" />

      <div className="text-white space-y-2 text-sm leading-relaxed text-center">
        {points.map((point, index) => (
          <p key={index}>{point}</p>
        ))}
      </div>

      <div className="mt-6">
        <div className="bg-[#ebbd28] text-black font-extrabold text-center py-3 rounded-[30px] border border-black text-sm">
          {cta}
        </div>
      </div>
    </div>
  </div>
);

export const BackgroundBorder: React.FC = () => {
  const cardData: CardProps[] = [
    {
      image: "https://c.animaapp.com/89fS0TNm/img/grab--n--go-model-2@2x.png",
      title: 'Grab "N" Go',
      points: [
        "Quick Service AFC",
        "Area 250 to 350 sq.ft",
        "Ideal for High-Street, Townships, IT Parks, Metros etc.",
        "Team Size of 2+1",
      ],
      cta: "Investment Starting with 6 Lakhs",
    },
    {
      image: "https://c.animaapp.com/89fS0TNm/img/grab--n--go-model-2@2x.png",
      title: "Kiosk Model",
      points: [
        "Compact Self-Serve Unit",
        "Area 100 to 150 sq.ft",
        "Perfect for Malls, Airports, and Food Courts",
        "Team Size of 1+1",
      ],
      cta: "Investment Starting with 4 Lakhs",
    },
    {
      image: "https://c.animaapp.com/89fS0TNm/img/grab--n--go-model-2@2x.png",
      title: "Dine-In Model",
      points: [
        "Full-Service Restaurant",
        "Area 600 to 800 sq.ft",
        "Great for Standalone Locations and Townships",
        "Team Size of 5+",
      ],
      cta: "Investment Starting with 12 Lakhs",
    },
  ];

  return (
    <section className="text-center text-white ">

      <h2 className="text-4xl font-black font-nunito mb-4">OUR FRANCHISE MODEL</h2>
      <div className="flex justify-center items-center gap-4 mb-8">
        <div className="h-[3px] w-40 bg-yellow-300" />
        <div className="w-5 h-5 rounded-full bg-[#ebbd28]" />
        <div className="h-[3px] w-40 bg-yellow-300" />
      </div>
      <div className="flex flex-wrap gap-24 justify-center">

        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};
