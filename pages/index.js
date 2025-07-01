import { useState } from 'react';

const products = [
  { id: 1, name: "Vitamin C Serum", category: "Skincare", price: 250, image: "https://via.placeholder.com/150", stock: 10 },
  { id: 2, name: "Dior Sauvage", category: "Perfume", price: 1800, image: "https://via.placeholder.com/150", stock: 5 },
  { id: 3, name: "Black Dress", category: "Clothes", price: 500, image: "https://via.placeholder.com/150", stock: 8 },
  { id: 4, name: "Men's T-Shirt", category: "Clothes", price: 300, image: "https://via.placeholder.com/150", stock: 15 },
  { id: 5, name: "Kids Hoodie", category: "Clothes", price: 350, image: "https://via.placeholder.com/150", stock: 12 },
];

export default function Home() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredProducts = products.filter(product => 
    (filter === 'All' || product.category === filter) &&
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-black fixed top-0 left-0 w-full z-10">
        <div className="text-xl font-bold">nermin_soliman1</div>
        <div className="flex space-x-4">
          <button onClick={() => alert('Account / Points / Instagram')}>
            <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
          <div className="relative">
            <button onClick={() => alert('Cart')}>
              <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4"/></svg>
            </button>
            <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full px-1">{cart.length}</span>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16"></div>

      {/* Search */}
      <div className="p-4">
        <input 
          type="text" 
          placeholder="Search products..." 
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="flex space-x-2 p-4">
        {["All", "Skincare", "Perfume", "Clothes"].map(cat => (
          <button
            key={cat}
            className={`px-3 py-1 rounded-full border ${filter === cat ? "bg-white text-black" : "bg-black text-white border-white"}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-gray-900 p-2 rounded">
            <img src={product.image} alt={product.name} className="w-full rounded" />
            <div className="mt-2 font-bold">{product.name}</div>
            <div>${product.price}</div>
            <div>Stock: {product.stock > 0 ? product.stock : "Sold Out"}</div>
            <button 
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-600 text-white px-2 py-1 rounded w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
    }
