// src/App.jsx import React, { useState } from 'react'; import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import Navbar from './components/Navbar'; import Sidebar from './components/Sidebar'; import Home from './pages/Home'; import Cart from './pages/Cart'; import Login from './pages/Login'; import Register from './pages/Register'; import Checkout from './pages/Checkout'; import ProductDetails from './pages/ProductDetails';

export default function App() { const [darkMode, setDarkMode] = useState(false); const [sidebarOpen, setSidebarOpen] = useState(false);

return ( <div className={darkMode ? 'bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}> <Router> <Navbar setSidebarOpen={setSidebarOpen} darkMode={darkMode} setDarkMode={setDarkMode} /> <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} /> <Routes> <Route path='/' element={<Home />} /> <Route path='/cart' element={<Cart />} /> <Route path='/login' element={<Login />} /> <Route path='/register' element={<Register />} /> <Route path='/checkout' element={<Checkout />} /> <Route path='/product/:id' element={<ProductDetails />} /> </Routes> </Router> </div> ); }

