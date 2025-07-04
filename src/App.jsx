// App.jsx (في src) import React, { useState } from 'react'; import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import Navbar from './components/Navbar'; import Home from './pages/Home'; import Cart from './pages/Cart'; import Login from './pages/Login'; import Register from './pages/Register'; import Checkout from './pages/Checkout';

export default function App() { const [darkMode, setDarkMode] = useState(true);

return ( <div className={darkMode ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}> <Router> <Navbar darkMode={darkMode} setDarkMode={setDarkMode} /> <Routes> <Route path="/" element={<Home />} /> <Route path="/cart" element={<Cart />} /> <Route path="/login" element={<Login />} /> <Route path="/register" element={<Register />} /> <Route path="/checkout" element={<Checkout />} /> </Routes> </Router> </div> ); }

// Navbar.jsx (في src/components) import React, { useState } from 'react'; import { Link } from 'react-router-dom'; import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) { const [menuOpen, setMenuOpen] = useState(false);

return ( <nav className="flex justify-between items-center p-4 border-b border-gray-600"> <h1 className="text-xl font-bold text-center w-full">nermin_soliman1</h1> <div className="absolute left-4"> <button onClick={() => setMenuOpen(!menuOpen)}> {menuOpen ? <X size={28} /> : <Menu size={28} />} </button> </div> <div className="absolute right-4 flex items-center gap-4"> <input
type="text"
placeholder="Search..."
className="px-2 py-1 rounded text-black"
/> <Link to="/cart"> <ShoppingCart size={28} /> </Link> </div> {menuOpen && ( <div className="absolute top-16 left-4 bg-gray-800 p-4 rounded shadow-lg flex flex-col gap-2 z-50"> <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link> <Link to="/register" onClick={() => setMenuOpen(false)}>Sign Up</Link> <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link> </div> )} </nav> ); }

// Home.jsx (في src/pages) import React from 'react'; import ProductCard from '../components/ProductCard';

export default function Home() { const products = [ { id: 1, name: 'Product 1', price: '$20', image: 'https://via.placeholder.com/150' }, { id: 2, name: 'Product 2', price: '$30', image: 'https://via.placeholder.com/150' }, { id: 3, name: 'Product 3', price: '$40', image: 'https://via.placeholder.com/150' }, ];

return ( <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4"> {products.map((product) => ( <ProductCard key={product.id} product={product} /> ))} </div> ); }

// ProductCard.jsx (في src/components) import React from 'react';

export default function ProductCard({ product }) { return ( <div className="bg-gray-800 rounded p-4 flex flex-col items-center"> <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-2 rounded" /> <h2 className="text-lg font-semibold mb-1">{product.name}</h2> <p className="text-green-400 font-bold">{product.price}</p> </div> ); }

// Cart.jsx (في src/pages) export default function Cart() { return <div className="p-4">🛒 This is the Cart page.</div>; }

// Login.jsx (في src/pages) export default function Login() { return <div className="p-4">🔑 This is the Login page.</div>; }

// Register.jsx (في src/pages) export default function Register() { return <div className="p-4">📝 This is the Register page.</div>; }

// Checkout.jsx (في src/pages) export default function Checkout() { return <div className="p-4">💳 This is the Checkout page.</div>; }

