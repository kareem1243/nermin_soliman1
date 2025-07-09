// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart, Sun, Moon } from 'lucide-react';

export default function Navbar({ setSidebarOpen, darkMode, setDarkMode, user }) {
  return (
    <div className="flex justify-between items-center p-4 shadow bg-white dark:bg-gray-900 sticky top-0 z-50">
      <button onClick={() => setSidebarOpen(true)}>
        <Menu />
      </button>
      <h1 className="text-xl font-bold">nermin_soliman1</h1>
      <div className="flex items-center gap-4">
        <Link to="/cart">
          <ShoppingCart />
        </Link>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
}
