import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-black shadow">
      {/* ☰ Sidebar trigger */}
      <Link to="/menu" className="text-2xl font-bold dark:text-white">☰</Link>

      {/* 🛍️ Site Name */}
      <Link to="/" className="text-xl font-bold dark:text-white">Nermin Shop</Link>

      {/* 🔍 Search + Cart */}
      <div className="flex items-center gap-4">
        <Link to="/cart" className="dark:text-white">🛒</Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
