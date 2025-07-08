import { useState } from 'react';
import products from '../data/products';

export const useSearch = () => {
  const [results, setResults] = useState([]);

  const search = (query) => {
    if (!query) {
      setResults([]);
      return;
    }
    const filtered = products.filter((item) =>
      item.name.toLowerCase().startsWith(query.toLowerCase())
    ).slice(0, 4);
    setResults(filtered);
  };

  return { results, search };
};
