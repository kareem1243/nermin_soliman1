import React from "react";

export default function Cart() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Your Cart</h1>
      <p className="dark:text-gray-300">Your selected products will appear here with quantity and total price.</p>
      <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
        Proceed to Checkout
      </button>
    </div>
  );
}
