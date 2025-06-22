"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

type ContactCardProps = {
  title: string;
  phone: string;
  email: string;
  image: string;
};

const ContactCard: React.FC<ContactCardProps> = ({ title, phone, email, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="w-[375px] bg-black text-white p-6 rounded shadow-[0_4px_15px_5px_rgba(235,189,40,0.5)] text-center"
  >
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Image
        width={92}
        height={92}
        className="mx-auto mb-4 object-cover"
        src={image}
        alt="Location"
      />
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="text-[32px] font-extrabold tracking-[4px] mb-2"
    >
      {title}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className="text-xl font-semibold tracking-[2px] leading-10"
    >
      📞 Call {phone}
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
      className="text-base font-semibold tracking-[2px] leading-10 mt-2"
    >
      ✉ {email}
    </motion.p>
  </motion.div>
);

export const Contact: React.FC = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true });

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
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center py-20"
    >
      <div className="flex flex-wrap justify-center gap-12 max-w-7xl" id="contact">
        {contacts.map((contact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ContactCard {...contact} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;