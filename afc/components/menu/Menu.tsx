"use client";

import React, { useState } from "react";

// Dummy data for categories and items
const categories = [
  { name: "Milk Shakes", id: "milk-shakes" },
  { name: "Combos", id: "combos" },
  { name: "Fries", id: "fries" },
  { name: "Mojitos", id: "mojitos" },
  { name: "Deserts", id: "deserts" },
  { name: "Pizza", id: "pizza" },
];

const itemsData = {
  "milk-shakes": [
    { name: "Chocolate Shake", price: "$5", description: "Rich chocolate flavor" },
    { name: "Vanilla Shake", price: "$4", description: "Creamy vanilla flavor" },
  ],
  combos: [
    { name: "Burger Combo", price: "$10", description: "Burger, fries, and drink" },
    { name: "Pizza Combo", price: "$12", description: "Pizza, fries, and drink" },
  ],
  fries: [
    { name: "Classic Fries", price: "$3", description: "Golden crispy fries" },
    { name: "Spicy Fries", price: "$3.5", description: "Fries with a spicy kick" },
  ],
  mojitos: [
    { name: "Mint Mojito", price: "$4", description: "Refreshing mint mojito" },
    { name: "Lime Mojito", price: "$4.5", description: "Tart lime mojito" },
  ],
  deserts: [
    { name: "Chocolate Cake", price: "$6", description: "Rich and moist chocolate cake" },
    { name: "Ice Cream Sundae", price: "$5", description: "Creamy ice cream with toppings" },
  ],
  pizza: [
    { name: "Margherita", price: "$8", description: "Classic tomato and mozzarella" },
    { name: "Pepperoni", price: "$9", description: "Topped with pepperoni slices" },
  ],
};

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("milk-shakes");

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="flex w-full h-screen">
      {/* Sidebar */}
      <div className="w-[250px] bg-[#141414] text-white p-4">
        <h2 className="text-3xl font-bold mb-8">Menu</h2>
        {categories.map((category) => (
          <div
            key={category.id}
            className={`cursor-pointer text-xl mb-4 ${
              selectedCategory === category.id ? "text-[#ebbd28]" : "text-white"
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </div>
        ))}
      </div>

      {/* Right Side: Item Cards */}
      <div className="flex-1 overflow-auto p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">{categories.find((cat) => cat.id === selectedCategory).name}</h2>
        <div className="grid grid-cols-3 gap-6">
          {itemsData[selectedCategory].map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
            >
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-lg text-gray-600">{item.description}</p>
              <p className="text-lg font-semibold text-[#ebbd28]">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
