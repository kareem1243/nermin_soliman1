import React from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart, Sun, Moon } from "lucide-react";

export default function Navbar({ setIsSidebarOpen, setDarkMode, darkMode }) {
  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white dark:bg-gray-900">
      <button onClick={() => setIsSidebarOpen(true)}>
        <Menu className="w-6 h-6" />
      </button>
      <h1 className="font-bold text-lg">nermin_soliman1</h1>
      <div className="flex items-center gap-4">
        <Link to="/cart">
          <ShoppingCart className="w-6 h-6" />
        </Link>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>
    </nav>
  );
}
