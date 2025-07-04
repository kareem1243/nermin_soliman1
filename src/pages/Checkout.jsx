import React from "react";

export default function Checkout() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Checkout</h1>
      <input
        type="text"
        placeholder="Full Address"
        className="w-full mb-3 p-2 border rounded"
      />
      <textarea
        placeholder="Additional Notes (Building, Floor, Landmark)"
        className="w-full mb-3 p-2 border rounded"
      />
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition w-full">
        Pay Now
      </button>
    </div>
  );
}
