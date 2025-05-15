import React from "react";

type ContactCardProps = {
  title: string;
  phone: string;
  email: string;
  image: string;
};

const ContactCard: React.FC<ContactCardProps> = ({ title, phone, email, image }) => (
  <div className="w-[375px] bg-black text-white p-6 rounded shadow-[0_4px_15px_5px_rgba(235,189,40,0.5)] text-center">
    <img
      className="w-[92px] h-[92px] mx-auto mb-4 object-cover"
      src={image}
      alt="Location"
    />
    <h2 className="text-[32px] font-extrabold tracking-[4px] mb-2">{title}</h2>
    <p className="text-xl font-semibold tracking-[2px] leading-10">📞 Call {phone}</p>
    <p className="text-base font-semibold tracking-[2px] leading-10 mt-2">✉ {email}</p>
  </div>
);

export const Contact: React.FC = () => {
  const contacts: ContactCardProps[] = [
    {
      title: "SHAMSHABAD",
      phone: "+91 7995373004",
      email: "afcindiaofficial@gmail.com",
      image: "https://c.animaapp.com/89fS0TNm/img/image-58-2@2x.png",
    },
    {
      title: "HYDERABAD",
      phone: "+91 9876543210",
      email: "hyderabad@afcindia.com",
      image: "https://c.animaapp.com/89fS0TNm/img/image-58-2@2x.png",
    },
    {
      title: "SECUNDERABAD",
      phone: "+91 9123456789",
      email: "secunderabad@afcindia.com",
      image: "https://c.animaapp.com/89fS0TNm/img/image-58-2@2x.png",
    },
  ];

  return (
    <div className="w-full flex justify-center py-20 ">
      <div className="flex flex-wrap justify-center gap-12 max-w-7xl  ">
        {contacts.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
