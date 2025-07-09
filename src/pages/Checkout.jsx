// src/pages/Checkout.jsx
import React from 'react';

export default function Checkout() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <input
        type="text"
        placeholder="Address (Building, Floor, Landmark)"
        className="w-full mb-3 p-2 border rounded"
      />
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Pay Now</button>
    </div>
  );
}
