import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export default function Sidebar({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-800 p-4 shadow-lg z-50">
      <button onClick={() => setIsOpen(false)} className="mb-4">
        <X className="w-6 h-6" />
      </button>
      <ul className="space-y-4">
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
        <li><Link to="/register" onClick={() => setIsOpen(false)}>Register</Link></li>
        <li><a href="https://www.instagram.com/nermin_soliman1" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </div>
  );
}
