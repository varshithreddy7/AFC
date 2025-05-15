import React from "react";

const franchiseFeatures = [
  { label: "LOW-COST", icon: "https://c.animaapp.com/89fS0TNm/img/image-52-5@2x.png" },
  { label: "RISK-FREE", icon: "https://c.animaapp.com/89fS0TNm/img/image-52-5@2x.png" },
  { label: "BUDGET-FRIENDLY", icon: "https://c.animaapp.com/89fS0TNm/img/image-52-5@2x.png" },
  { label: "SCALABLE", icon: "https://c.animaapp.com/89fS0TNm/img/image-52-5@2x.png" },
  { label: "PROPER GUIDANCE", icon: "https://c.animaapp.com/89fS0TNm/img/image-52-5@2x.png" },
  { label: "TRUST AND QUALITY", icon: "https://c.animaapp.com/89fS0TNm/img/image-52-5@2x.png" },
];

const FeatureCard = ({ label, icon }) => (
  <div className="bg-[#ebbd28] rounded-2xl border border-black shadow-[0_4px_15px_5px_rgba(235,189,40,0.5)] p-6 flex items-center gap-6">
    <img src={icon} alt={label} className="w-16 h-16 object-cover" />
    <h3 className="text-white text-2xl font-black font-nunito">{label}</h3>
  </div>
);

export const Group = () => {
  return (
    <section className="relative py-20 px-4  text-center text-white">
      <h2 className="text-4xl font-black font-nunito mb-4">WHY OUR FRANCHISE IS BEST ?</h2>
      <div className="flex justify-center items-center gap-4 mb-8">
        <div className="h-[3px] w-40 bg-yellow-300" />
        <div className="w-5 h-5 rounded-full bg-[#ebbd28]" />
        <div className="h-[3px] w-40 bg-yellow-300" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {franchiseFeatures.map((feature, idx) => (
          <FeatureCard key={idx} label={feature.label} icon={feature.icon} />
        ))}
      </div>
    </section>
  );
};

export default Group;
