import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white flex justify-between items-center p-4">
      <h1 className="text-xl">nermin_soliman1</h1>
      <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">☰</button>
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-gray-800 p-4 rounded shadow">
          <Link to="/login" className="block py-1">Log In</Link>
          <Link to="/register" className="block py-1">Register</Link>
          <Link to="/" className="block py-1">Home</Link>
        </div>
      )}
    </div>
  );
}
