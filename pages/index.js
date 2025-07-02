import { useState } from 'react';

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const categories = ['All', 'Scanker', 'Perfume', 'Clothes'];

  const addToCart = () => setCartCount(cartCount + 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center p-4 bg-black shadow">
        <button onClick={() => setDrawerOpen(!drawerOpen)} className="text-2xl">☰</button>
        <h1 className="text-xl font-bold tracking-widest">nermin_soliman1</h1>
        <div className="flex items-center space-x-4">
          <button className="relative">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 rounded-full px-1 text-xs">
                {cartCount}
              </span>
            )}
          </button>
          <button>🔍</button>
        </div>
      </header>

      {/* Drawer */}
      {drawerOpen && (
        <aside className="bg-gray-800 p-4 space-y-4 text-left">
          <div>
            <p className="font-semibold">Account</p>
            <div className="pl-4 space-y-1">
              <button className="hover:underline">Log In</button>
              <button className="hover:underline">Sign Up</button>
            </div>
          </div>
          <p>Points: 0</p>
          <hr className="border-gray-600" />
          <a href="https://www.instagram.com/nermin_soliman1" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:underline">
            <span>Instagram</span> <span>📸</span>
          </a>
        </aside>
      )}

      {/* Categories */}
      <section className="flex justify-center flex-wrap gap-2 mt-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className="bg-white text-black rounded-full px-4 py-1 font-semibold shadow hover:bg-gray-200 transition"
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Products Grid */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 mt-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
          <div
            key={id}
            className="bg-white text-black rounded-xl overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <img
              src={`https://via.placeholder.com/300x200.png?text=Product+${id}`}
              alt={`Product ${id}`}
              className="w-full h-40 object-cover"
            />
            <div className="p-2 space-y-1">
              <h2 className="font-semibold">Product {id}</h2>
              <p className="text-sm text-gray-600">$ {(id * 10).toFixed(2)}</p>
              <button
                onClick={addToCart}
                className="w-full bg-blue-600 text-white rounded py-1 mt-1 hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
