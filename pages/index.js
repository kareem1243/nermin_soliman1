// 🚀 مشروع متجر Nermin Shop - الأساسيات // باستخدام React + Tailwind + Firebase بشكل مبسط ومنظم

import React, { useState, useEffect } from 'react'; import { initializeApp } from 'firebase/app'; import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'; import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'; import { Moon, Sun, ShoppingCart, Search } from 'lucide-react';

const firebaseConfig = { apiKey: "AIzaSyBDBAdBrhYYA5etcbTne5I-TQmn5r5wy-Y", authDomain: "nermin-shop.firebaseapp.com", projectId: "nermin-shop", storageBucket: "nermin-shop.firebasestorage.app", messagingSenderId: "712335960805", appId: "1:712335960805:web:e00dcc1cebb4449ec7420c" };

const app = initializeApp(firebaseConfig); const auth = getAuth(app); const db = getFirestore(app);

export default function NerminShop() { const [darkMode, setDarkMode] = useState(true); const [searchQuery, setSearchQuery] = useState(''); const [cartItems, setCartItems] = useState([]); const [user, setUser] = useState(null); const [products, setProducts] = useState([]);

useEffect(() => { onAuthStateChanged(auth, (user) => { setUser(user); }); }, []);

const toggleTheme = () => setDarkMode(!darkMode);

const handleSearch = (e) => setSearchQuery(e.target.value);

const addToCart = (product) => { setCartItems([...cartItems, product]); };

const fetchProducts = async () => { const querySnapshot = await getDocs(collection(db, 'products')); const fetchedProducts = []; querySnapshot.forEach((doc) => { fetchedProducts.push({ id: doc.id, ...doc.data() }); }); setProducts(fetchedProducts); };

useEffect(() => { fetchProducts(); }, []);

return ( <div className={darkMode ? 'bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}> {/* Navbar */} <header className="flex justify-between items-center p-4 shadow sticky top-0 bg-opacity-80 backdrop-blur z-50"> <button onClick={toggleTheme}> {darkMode ? <Sun className="text-white" /> : <Moon className="text-black" />} </button> <h1 className="font-bold tracking-widest">nermin_soliman1</h1> <div className="flex items-center space-x-4"> <div className="relative"> <Search className={darkMode ? 'text-white' : 'text-black'} /> <input
type="text"
placeholder="Search..."
value={searchQuery}
onChange={handleSearch}
className="absolute top-0 left-8 bg-transparent border-b focus:outline-none"
/> </div> <div className="relative"> <ShoppingCart className={darkMode ? 'text-white' : 'text-black'} /> {cartItems.length > 0 && ( <span className="absolute -top-1 -right-2 bg-red-500 rounded-full px-1 text-xs"> {cartItems.length} </span> )} </div> </div> </header>

{/* Products */}
  <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
    {products
      .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .map((product) => (
        <div key={product.id} className="bg-white text-black rounded-lg shadow overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
          <div className="p-2">
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">EGP {product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white w-full mt-2 rounded py-1 hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
  </section>
</div>

); }

