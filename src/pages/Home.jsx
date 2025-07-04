import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 dark:bg-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to Nermin Soliman Shop</h1>
      <Link to="/products" className="bg-black text-white px-4 py-2 rounded">View Products</Link>
    </div>
  );
}
