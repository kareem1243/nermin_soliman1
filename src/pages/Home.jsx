import React from 'react';
import products from '../data/products';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded p-2 dark:bg-gray-900 bg-white">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
          <h3 className="text-lg font-bold dark:text-white">{product.name}</h3>
          <p className="text-blue-600">${product.price}</p>
          <Link to={`/product/${product.id}`} className="text-sm text-blue-500">View Details</Link>
        </div>
      ))}
    </div>
  );
}
