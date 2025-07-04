import React, { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const products = ["Face Cream", "Lipstick", "T-Shirt", "Perfume", "Moisturizer", "Jeans", "Shampoo", "Serum"];

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      setSuggestions(products.filter(p => p.toLowerCase().startsWith(value.toLowerCase())).slice(0, 4));
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search products..."
        className="w-full p-2 border rounded"
      />
      {suggestions.length > 0 && (
        <ul className="bg-white dark:bg-gray-800 mt-2 p-2 rounded shadow">
          {suggestions.map((s, idx) => (
            <li key={idx} className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
                           }
