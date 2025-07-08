import React, { useState } from 'react';

export default function Checkout() {
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [message, setMessage] = useState('');

  const handlePayment = () => {
    if (!address) {
      setMessage('❌ Please enter your address.');
      return;
    }
    setMessage('✅ Order placed successfully.');
  };

  return (
    <div className="p-4 dark:bg-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Checkout</h1>
      <input
        type="text"
        placeholder="Address Details"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />
      <textarea
        placeholder="Additional Notes (e.g., building, floor, landmark)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      ></textarea>
      <button
        onClick={handlePayment}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Pay Now
      </button>
      {message && <p className="mt-2 dark:text-white">{message}</p>}
    </div>
  );
}
