import React from 'react';

export default function Checkout() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Checkout</h1>
      <input
        type="text"
        placeholder="Address Details"
        className="w-full mb-3 p-2 border rounded"
      />
      <textarea
        placeholder="Additional Notes (e.g., building, floor, landmark)"
        className="w-full mb-3 p-2 border rounded"
      ></textarea>
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Pay Now</button>
    </div>
  );
}
