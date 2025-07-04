import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <img src={`https://via.placeholder.com/300?text=Product+${id}`} alt={`Product ${id}`} className="w-full max-w-sm mx-auto rounded mb-4" />
      <h1 className="text-2xl font-bold mb-2 dark:text-white">Product {id}</h1>
      <p className="mb-2 dark:text-gray-300">This is a detailed description for Product {id}.</p>
      <p className="text-blue-600 font-bold mb-4">$25</p>
      <div className="flex gap-2 items-center mb-4">
        <label>Quantity:</label>
        <input type="number" defaultValue={1} min={1} className="w-20 p-1 border rounded" />
      </div>
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Add to Cart</button>
    </div>
  );
}
