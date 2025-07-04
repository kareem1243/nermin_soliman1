import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu } from 'lucide-react';

export default function Navbar({ toggleSidebar, toggleDarkMode, darkMode }) {
  return (
    <div className="flex justify-between items-center p-4 border-b bg-white dark:bg-black sticky top-0 z-40">
      <button onClick={toggleSidebar}>
        <Menu className="w-6 h-6 dark:text-white" />
      </button>
      <h1 className="text-lg font-bold dark:text-white">Nermin_Soliman1</h1>
      <div className="flex items-center space-x-4">
        <Search className="w-6 h-6 dark:text-white" />
        <Link to="/cart">
          <ShoppingCart className="w-6 h-6 dark:text-white" />
        </Link>
        <button onClick={toggleDarkMode}>
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
}
