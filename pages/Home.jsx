// src/pages/Home.jsx

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([
    { id: 1, name: "Perfume 1", price: 150, image: "https://via.placeholder.com/300x200.png?text=Perfume+1" },
    { id: 2, name: "Perfume 2", price: 180, image: "https://via.placeholder.com/300x200.png?text=Perfume+2" },
    { id: 3, name: "Clothes 1", price: 250, image: "https://via.placeholder.com/300x200.png?text=Clothes+1" },
    { id: 4, name: "Clothes 2", price: 300, image: "https://via.placeholder.com/300x200.png?text=Clothes+2" },
  ]);

  const addToCart = () => setCartCount(cartCount + 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center p-4 bg-black shadow">
        <h1 className="text-xl font-bold tracking-widest">nermin_soliman1</h1>
        <div className="relative">
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 rounded-full px-1 text-xs">
              {cartCount}
            </span>
          )}
        </div>
      </header>

      {/* Products Grid */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white text-black rounded-lg shadow overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <div className="p-2">
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">EGP {product.price}</p>
              <button
                onClick={addToCart}
                className="bg-blue-600 text-white w-full mt-2 rounded py-1 hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
