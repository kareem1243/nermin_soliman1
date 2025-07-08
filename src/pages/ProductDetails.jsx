import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="p-4 dark:text-white">Product not found.</p>;
  }

  return (
    <div className="p-4 dark:bg-black min-h-screen">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4 dark:text-white">{product.name}</h1>
      <p className="text-blue-600 text-lg mt-2">${product.price}</p>
      <p className="dark:text-white mt-2">Category: {product.category}</p>
      <button className="bg-black text-white mt-4 px-4 py-2 rounded hover:bg-gray-800 transition">
        Add to Cart
      </button>
    </div>
  );
}
