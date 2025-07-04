// ✅ Products.jsx جاهز بفئات، صور، وأسعار منظمة
import React, { useState } from 'react';

const productsData = [
  { id: 1, name: 'Face Serum', category: 'skin care', price: 200, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Jeans', category: 'clothes', price: 300, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Perfume A', category: 'perfume', price: 500, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Moisturizer', category: 'skin care', price: 180, image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'T-shirt', category: 'clothes', price: 150, image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Perfume B', category: 'perfume', price: 450, image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Cleanser', category: 'skin care', price: 220, image: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Jacket', category: 'clothes', price: 400, image: 'https://via.placeholder.com/150' },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center dark:text-white">Products</h1>

      <div className="flex justify-center space-x-2 mb-6">
        <button
          className={`px-3 py-1 rounded ${selectedCategory === 'all' ? 'bg-black text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        <button
          className={`px-3 py-1 rounded ${selectedCategory === 'skin care' ? 'bg-black text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedCategory('skin care')}
        >
          Skin Care
        </button>
        <button
          className={`px-3 py-1 rounded ${selectedCategory === 'clothes' ? 'bg-black text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedCategory('clothes')}
        >
          Clothes
        </button>
        <button
          className={`px-3 py-1 rounded ${selectedCategory === 'perfume' ? 'bg-black text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedCategory('perfume')}
        >
          Perfume
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded p-2 dark:bg-gray-800">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded mb-2" />
            <h2 className="font-bold dark:text-white">{product.name}</h2>
            <p className="text-blue-600 font-semibold">${product.price}</p>
            <button className="mt-2 w-full bg-black text-white py-1 rounded hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
