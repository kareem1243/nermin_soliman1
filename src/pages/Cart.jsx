// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <div>
                {item.name} x {item.quantity}
              </div>
              <div className="text-blue-600 font-semibold">{item.price * item.quantity} EGP</div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 font-bold ml-2"
              >
                X
              </button>
            </div>
          ))}
          <p className="mt-4 font-bold text-lg">Total: {total} EGP</p>
        </div>
      )}
    </div>
  );
}
