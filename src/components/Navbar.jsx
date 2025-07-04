import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-700">
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <X /> : <Menu />}
      </button>
      <Link to="/" className="text-xl font-bold">nermin_soliman1</Link>
      <div className="flex items-center gap-4">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun /> : <Moon />}
        </button>
        <Link to="/cart">
          <ShoppingCart />
        </Link>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-2/3 bg-white dark:bg-gray-900 h-screen p-4 shadow-lg flex flex-col gap-4 z-50">
          <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/register" onClick={() => setIsOpen(false)}>Register</Link>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
        </div>
      )}
    </nav>
  );
}
