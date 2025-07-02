// 🛒 Next.js متجر احترافي منظم ملون جاهز للرفع مكان القديم // ينقل كما هو في pages/index.js فورًا

import { useState } from 'react';

export default function Home() { const [cartItems, setCartItems] = useState(0); const [drawerOpen, setDrawerOpen] = useState(false); const categories = ['All', 'Scanker', 'Perfume', 'Clothes'];

const addToCart = () => setCartItems(cartItems + 1);

return ( <div className="min-h-screen bg-black text-white"> {/* Navbar */} <div className="flex justify-between items-center p-4 bg-gray-900 shadow-md sticky top-0 z-50"> <button onClick={() => setDrawerOpen(!drawerOpen)} className="text-2xl">☰</button> <h1 className="text-xl font-bold">nermin_soliman1</h1> <div className="flex items-center space-x-4"> <button className="relative"> 🛒<span className="absolute -top-2 -right-2 bg-red-500 rounded-full px-2 text-xs">{cartItems}</span> </button> <button>🔍</button> </div> </div>

{/* Drawer */}
  {drawerOpen && (
    <div className="bg-gray-800 p-4 space-y-4 animate-slide-down">
      <div className="font-semibold">Account
        <div className="pl-4 hover:underline cursor-pointer">Log In</div>
        <div className="pl-4 hover:underline cursor-pointer">Sign In</div>
      </div>
      <div>Points: 0</div>
      <hr className="border-gray-600" />
      <a href="https://www.instagram.com/nermin_soliman1" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center space-x-2">
        <span>Instagram</span> <span>📸</span>
      </a>
    </div>
  )}

  {/* Categories */}
  <div className="flex justify-center space-x-4 mt-4 flex-wrap">
    {categories.map((cat) => (
      <div key={cat} className="bg-blue-500 text-white rounded-full px-4 py-1 cursor-pointer hover:bg-blue-600 transition">{cat}</div>
    ))}
  </div>

  {/* Products */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {[1,2,3,4,5,6,7,8].map((id) => (
      <div key={id} className="bg-gray-100 text-black rounded-lg shadow hover:scale-105 transition transform duration-200">
        <img src={`https://via.placeholder.com/200x200.png?text=Product+${id}`} alt={`Product ${id}`} className="w-full h-40 object-cover rounded-t-lg" />
        <div className="p-2">
          <div className="font-semibold">Product {id}</div>
          <div className="text-blue-600 font-bold">${(id * 10).toFixed(2)}</div>
          <button onClick={addToCart} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white w-full rounded py-1 transition">Add to Cart</button>
        </div>
      </div>
    ))}
  </div>
</div>

); }

