// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import Account from './pages/Account';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export default function App() {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (!userSnap.exists()) {
          await setDoc(userRef, {
            email: currentUser.email || "",
            phone: currentUser.phoneNumber || "",
            points: 0,
          });
        }
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className={darkMode ? "dark bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <Navbar setSidebarOpen={setSidebarOpen} darkMode={darkMode} setDarkMode={setDarkMode} user={user} />
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart user={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout user={user} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/account" element={<Account user={user} />} />
      </Routes>
    </div>
  );
}
