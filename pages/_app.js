// 🚀 Nermin Shop App.jsx - مبسط ومنظم
import React, { useState } from 'react';
import Home from './pages/Home';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <header className="flex justify-between items-center p-4 shadow">
        <h1 className="font-bold text-xl">nermin_soliman1</h1>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
      </header>

      <main>
        <Home />
      </main>

      <footer className="text-center p-4 text-sm text-gray-400">
        © 2025 Nermin Shop. All rights reserved.
      </footer>
    </div>
  );
          }
