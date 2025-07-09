// src/components/SearchBar.jsx
import React, { useState } from 'react';

export default function SearchBar({ products }) {
  const [query, setQuery] = useState('');

  const filtered = query
    ? products.filter(p => p.name.toLowerCase().startsWith(query.toLowerCase())).slice(0, 4)
    : [];

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border rounded w-full"
      />
      {filtered.length > 0 && (
        <ul className="absolute bg-white border rounded w-full mt-1 max-h-40 overflow-y-auto z-50">
          {filtered.map(item => (
            <li key={item.id} className="p-2 hover:bg-gray-100 cursor-pointer">
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
