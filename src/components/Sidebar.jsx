import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow p-4 z-50">
      <h2 className="text-xl font-bold mb-4 dark:text-white">Menu</h2>
      <ul className="flex flex-col gap-3">
        <Link to="/" className="dark:text-white">🏠 Home</Link>
        <Link to="/login" className="dark:text-white">🔑 Login</Link>
        <Link to="/register" className="dark:text-white">📝 Register</Link>
        <Link to="/cart" className="dark:text-white">🛒 Cart</Link>
      </ul>
    </div>
  );
}
