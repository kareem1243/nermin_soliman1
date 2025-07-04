import { useState } from 'react';

export default function useSearch(products) {
  const [results, setResults] = useState([]);

  const search = (query) => {
    if (!query) {
      setResults([]);
      return;
    }
    const filtered = products.filter((p) =>
      p.name.toLowerCase().startsWith(query.toLowerCase())
    ).slice(0, 4);
    setResults(filtered);
  };

  return { results, search };
}
