import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Skin Care', 'Clothes', 'Perfume'];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    { id: 1, name: 'Perfume Rose', category: 'Perfume', price: '$30' },
    { id: 2, name: 'Skin Cleanser', category: 'Skin Care', price: '$25' },
    { id: 3, name: 'T-shirt', category: 'Clothes', price: '$15' },
    { id: 4, name: 'Jeans', category: 'Clothes', price: '$40' },
    { id: 5, name: 'Face Cream', category: 'Skin Care', price: '$35' },
    { id: 6, name: 'Perfume Oud', category: 'Perfume', price: '$50' },
    { id: 7, name: 'Jacket', category: 'Clothes', price: '$60' },
    { id: 8, name: 'Sunscreen', category: 'Skin Care', price: '$20' },
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded ${selectedCategory === cat ? 'bg-black text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="border p-2 rounded dark:bg-gray-800 dark:border-gray-700 hover:shadow"
          >
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-blue-500">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
