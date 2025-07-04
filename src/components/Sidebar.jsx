import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose, user }) {
  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform z-50`}>
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold dark:text-white">{user ? user.name : "Guest"}</h2>
        <button onClick={onClose} className="text-2xl dark:text-white">&times;</button>
      </div>
      <div className="flex flex-col p-4 space-y-4">
        <Link to="/login" onClick={onClose} className="text-blue-500 hover:underline">Login</Link>
        <Link to="/register" onClick={onClose} className="text-blue-500 hover:underline">Register</Link>
        <Link to="/cart" onClick={onClose} className="text-blue-500 hover:underline">Cart</Link>
        <Link to="/checkout" onClick={onClose} className="text-blue-500 hover:underline">Checkout</Link>
      </div>
    </div>
  );
}
