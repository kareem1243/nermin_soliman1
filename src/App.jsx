import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className={darkMode ? 'dark bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <Router>
        <Navbar 
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
          toggleCart={() => setIsCartOpen(!isCartOpen)} 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} darkMode={darkMode} setDarkMode={setDarkMode} />
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}
