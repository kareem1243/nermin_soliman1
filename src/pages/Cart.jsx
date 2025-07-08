import React, { useState } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Skin Care A", price: 120, quantity: 1 },
    { id: 2, name: "Perfume X", price: 200, quantity: 2 },
  ]);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4 dark:bg-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="dark:text-white">Cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="border p-2 rounded mb-2 dark:bg-gray-800">
            <h3 className="dark:text-white">{item.name}</h3>
            <p className="text-blue-600">Price: ${item.price}</p>
            <p className="text-blue-600">Quantity: {item.quantity}</p>
          </div>
        ))
      )}
      <p className="mt-4 font-bold dark:text-white">Total: ${totalPrice}</p>
    </div>
  );
}
