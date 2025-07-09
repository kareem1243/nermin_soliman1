// src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: "1", name: "Face Cleanser", price: 200, category: "Skincare", img: "https://via.placeholder.com/150" },
  { id: "2", name: "T-Shirt", price: 350, category: "Clothes", img: "https://via.placeholder.com/150" },
  { id: "3", name: "Perfume", price: 500, category: "Perfume", img: "https://via.placeholder.com/150" },
  { id: "4", name: "Moisturizer", price: 250, category: "Skincare", img: "https://via.placeholder.com/150" },
  { id: "5", name: "Jeans", price: 450, category: "Clothes", img: "https://via.placeholder.com/150" },
  { id: "6", name: "Body Spray", price: 150, category: "Perfume", img: "https://via.placeholder.com/150" },
  { id: "7", name: "Sunscreen", price: 300, category: "Skincare", img: "https://via.placeholder.com/150" },
  { id: "8", name: "Dress", price: 550, category: "Clothes", img: "https://via.placeholder.com/150" },
];

export default function Home() {
  const [filter, setFilter] = useState("All");

  const filteredProducts = filter === "All" ? products : products.filter(p => p.category === filter);

  return (
    <div className="p-4">
      <div className="flex justify-center gap-4 mb-6">
        {["All", "Skincare", "Clothes", "Perfume"].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded ${filter === cat ? "bg-black text-white" : "bg-gray-200"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="border rounded p-2 hover:shadow transition">
            <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-blue-600 font-bold">{product.price} EGP</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
