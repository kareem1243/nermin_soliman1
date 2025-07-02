import { useState } from 'react';

export default function Home() {
  const [cartItems, setCartItems] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const categories = ['All', 'Scanker', 'Perfume', 'Clothes'];

  const addToCart = () => setCartItems(cartItems + 1);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <div className="flex justify-between items-center p-4">
        <button onClick={() => setDrawerOpen(!drawerOpen)} className="text-2xl">☰</button>
        <h1 className="text-xl">nermin_soliman1</h1>
        <div className="flex items-center space-x-4">
          <button className="relative">
            🛒<span className="absolute top-0 right-0 bg-red-500 rounded-full px-1 text-xs">{cartItems}</span>
          </button>
          <button>🔍</button>
        </div>
      </div>

      {/* Drawer */}
      {drawerOpen && (
        <div className="bg-gray-800 p-4 space-y-4">
          <div>Account
            <div className="pl-4">Log In</div>
            <div className="pl-4">Sign In</div>
          </div>
          <div>Points: 0</div>
          <hr className="border-gray-600" />
          <a href="https://www.instagram.com/nermin_soliman1" target="_blank" rel="noopener noreferrer">
            Instagram 📸
          </a>
        </div>
      )}

      {/* Categories */}
      <div className="flex justify-center space-x-4 mt-4">
        {categories.map((cat) => (
          <div key={cat} className="bg-white text-black rounded-full px-4 py-1 cursor-pointer">{cat}</div>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {[1,2,3,4,5,6,7,8].map((id) => (
          <div key={id} className="bg-white text-black p-2 rounded shadow">
            <img src={`https://via.placeholder.com/150?text=Product+${id}`} alt={`Product ${id}`} className="w-full h-32 object-cover rounded" />
            <div className="mt-2">Product {id}</div>
            <div>$ {(id * 10).toFixed(2)}</div>
            <button onClick={addToCart} className="mt-2 bg-blue-500 text-white w-full rounded py-1">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
