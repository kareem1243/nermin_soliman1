import React, { useState } from 'react';

const allProducts = [
  { id: 1, name: "Face Wash", category: "skin care", price: 120, image: "https://source.unsplash.com/200x200/?facewash" },
  { id: 2, name: "Perfume Rose", category: "perfume", price: 300, image: "https://source.unsplash.com/200x200/?perfume" },
  { id: 3, name: "T-Shirt", category: "clothes", price: 200, image: "https://source.unsplash.com/200x200/?tshirt" },
  { id: 4, name: "Moisturizer", category: "skin care", price: 150, image: "https://source.unsplash.com/200x200/?moisturizer" },
  { id: 5, name: "Jacket", category: "clothes", price: 500, image: "https://source.unsplash.com/200x200/?jacket" },
  { id: 6, name: "Perfume Oud", category: "perfume", price: 400, image: "https://source.unsplash.com/200x200/?oud" },
  { id: 7, name: "Jeans", category: "clothes", price: 250, image: "https://source.unsplash.com/200x200/?jeans" },
  { id: 8, name: "Sunscreen", category: "skin care", price: 180, image: "https://source.unsplash.com/200x200/?sunscreen" },
];

export default function Products() {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filteredProducts = allProducts.filter(product => 
    (category === 'all' || product.category === category) &&
    product.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <div className="space-x-2">
          <button onClick={() => setCategory('all')} className="px-2 py-1 border rounded">All</button>
          <button onClick={() => setCategory('skin care')} className="px-2 py-1 border rounded">Skin Care</button>
          <button onClick={() => setCategory('clothes')} className="px-2 py-1 border rounded">Clothes</button>
          <button onClick={() => setCategory('perfume')} className="px-2 py-1 border rounded">Perfume</button>
        </div>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-2 py-1 rounded"
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded p-2 flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-24 h-24 object-cover mb-2 rounded" />
            <h3 className="font-bold">{product.name}</h3>
            <p className="text-blue-500">${product.price}</p>
            <button className="mt-2 bg-black text-white px-2 py-1 rounded">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
