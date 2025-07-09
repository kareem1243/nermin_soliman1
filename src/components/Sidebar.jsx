// src/components/Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaSignInAlt, FaUserPlus, FaInstagram, FaMoon, FaSun } from 'react-icons/fa';

export default function Sidebar({ isDarkMode, toggleDarkMode, closeSidebar }) {
  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg z-50 p-4 overflow-y-auto">
      <button
        onClick={closeSidebar}
        className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white mb-4"
      >
        ✕ Close
      </button>

      <ul className="space-y-4">
        <li>
          <Link
            to="/"
            onClick={closeSidebar}
            className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition"
          >
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            onClick={closeSidebar}
            className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition"
          >
            <FaShoppingCart /> Cart
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            onClick={closeSidebar}
            className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition"
          >
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            onClick={closeSidebar}
            className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition"
          >
            <FaUserPlus /> Register
          </Link>
        </li>
      </ul>

      <hr className="my-4 border-gray-300 dark:border-gray-600" />

      <a
        href="https://www.instagram.com/nermin_soliman1?igsh=enR1bDVsMnV3ZWo4"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center text-pink-500 hover:text-pink-600 transition gap-2"
      >
        <FaInstagram size={20} />
        Instagram
      </a>

      <hr className="my-4 border-gray-300 dark:border-gray-600" />

      <button
        onClick={toggleDarkMode}
        className="mt-4 w-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition flex items-center justify-center gap-2"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}
