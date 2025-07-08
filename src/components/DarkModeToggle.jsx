import React from 'react';

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 text-blue-600 hover:text-blue-800 transition"
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
}
