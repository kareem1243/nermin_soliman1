import React from 'react';

export default function DarkModeToggle() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button onClick={toggleDarkMode} className="dark:text-white text-lg">
      🌙
    </button>
  );
}
