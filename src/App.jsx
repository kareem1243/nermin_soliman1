// ✅ مشروع متجر شامل بكل طلباتك بتفاصيل جاهزة // ✅ يحتوي على: Sidebar متحرك نصف الشاشة، Login/SignUp بنظام النقاط، 4 فئات، عرض 8 منتجات، صفحة تفاصيل المنتج، Dark/Light mode، عربة التسوق، بحث ذكي مع اقتراحات، تخزين بيانات المستخدم في LocalStorage كبداية

import React, { useState, useEffect } from 'react'; import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; import { Sidebar } from './components/Sidebar'; import { Navbar } from './components/Navbar'; import { Products } from './pages/Products'; import { ProductDetails } from './pages/ProductDetails'; import { Cart } from './pages/Cart'; import { Login } from './pages/Login'; import { SignUp } from './pages/SignUp'; import { Checkout } from './pages/Checkout'; import { UserContext } from './context/UserContext';

export default function App() { const [darkMode, setDarkMode] = useState(true); const [sidebarOpen, setSidebarOpen] = useState(false); const [cartItems, setCartItems] = useState([]); const [user, setUser] = useState(null);

useEffect(() => { const storedUser = localStorage.getItem('user'); if (storedUser) setUser(JSON.parse(storedUser)); }, []);

const toggleSidebar = () => setSidebarOpen(!sidebarOpen); const toggleTheme = () => setDarkMode(!darkMode);

const addToCart = (product) => { setCartItems((prev) => [...prev, product]); };

return ( <UserContext.Provider value={{ user, setUser }}> <div className={darkMode ? 'bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}> <Router> <Navbar toggleSidebar={toggleSidebar} cartCount={cartItems.length} toggleTheme={toggleTheme} /> <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} /> <Routes> <Route path='/' element={<Products addToCart={addToCart} />} /> <Route path='/product/:id' element={<ProductDetails addToCart={addToCart} />} /> <Route path='/cart' element={<Cart cartItems={cartItems} />} /> <Route path='/login' element={<Login />} /> <Route path='/signup' element={<SignUp />} /> <Route path='/checkout' element={<Checkout cartItems={cartItems} />} /> </Routes> </Router> </div> </UserContext.Provider> ); }

