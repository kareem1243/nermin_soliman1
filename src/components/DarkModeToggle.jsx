import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-600" />}
    </button>
  );
}
