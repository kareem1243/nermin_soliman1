// 🚀 Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="flex justify-between items-center p-4 sticky top-0 shadow bg-opacity-80 backdrop-blur z-50">
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun className="text-white" /> : <Moon className="text-black" />}
      </button>

      <Link to="/" className="font-bold tracking-widest text-lg">nermin_soliman1</Link>

      <div className="flex items-center space-x-4">
        <Link to="/cart">
          <ShoppingCart className={darkMode ? "text-white" : "text-black"} />
        </Link>
        <Search className={darkMode ? "text-white" : "text-black"} />
      </div>
    </header>
  );
}
