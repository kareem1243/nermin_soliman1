import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const user = { name: "Kareem" }; // لاحقًا نستبدلها بالـ Auth

  return (
    <div className={darkMode ? "dark bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <Router>
        <Navbar
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          toggleDarkMode={() => setDarkMode(!darkMode)}
          darkMode={darkMode}
        />
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}
