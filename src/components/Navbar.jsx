// 📦 src/components/Navbar.jsx import React from "react"; import { Link } from "react-router-dom"; import { Menu, ShoppingCart, Sun } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode, toggleSidebar }) { return ( <div className="flex items-center justify-between px-4 py-3 border-b"> {/* الثلاث شرط */} <button onClick={toggleSidebar}> <Menu size={28} /> </button>

{/* اسم الصفحة */}
  <h1 className="text-xl font-bold">nermin_soliman1</h1>

  {/* السيرش والعربة */}
  <div className="flex items-center space-x-4">
    <input
      type="text"
      placeholder="Search..."
      className="border rounded px-2 py-1 text-black"
    />
    <Link to="/cart">
      <ShoppingCart size={24} />
    </Link>
    <button onClick={() => setDarkMode(!darkMode)}>
      <Sun size={24} />
    </button>
  </div>
</div>

); }

// 📦 src/components/Sidebar.jsx import React from "react"; import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, toggleSidebar }) { return ( <div className={fixed top-0 left-0 h-full w-2/3 max-w-xs bg-white dark:bg-black shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50} > <div className="flex flex-col p-4 space-y-4"> <h2 className="text-lg font-semibold">Account</h2> <hr /> <Link to="/login" className="text-blue-500" onClick={toggleSidebar}>Log In</Link> <Link to="/register" className="text-blue-500" onClick={toggleSidebar}>Sign Up</Link> <a href="https://www.instagram.com/nermin_soliman1" className="text-pink-500 mt-4" target="_blank" rel="noopener noreferrer"> Instagram </a> </div> </div> ); }

// 📦 src/pages/Home.jsx import React from "react"; import ProductCard from "../components/ProductCard";

const products = [ { id: 1, name: "Product 1", price: 100, img: "https://via.placeholder.com/150" }, { id: 2, name: "Product 2", price: 150, img: "https://via.placeholder.com/150" }, { id: 3, name: "Product 3", price: 200, img: "https://via.placeholder.com/150" }, { id: 4, name: "Product 4", price: 250, img: "https://via.placeholder.com/150" }, ];

export default function Home() { return ( <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4"> {products.map((product) => ( <ProductCard key={product.id} product={product} /> ))} </div> ); }

// 📦 src/components/ProductCard.jsx import React from "react"; import { Link } from "react-router-dom";

export default function ProductCard({ product }) { return ( <Link to={/product/${product.id}} className="border rounded p-2 hover:shadow-md"> <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded" /> <h3 className="mt-2 font-semibold">{product.name}</h3> <p className="text-blue-500 font-bold">${product.price}</p> </Link> ); }

