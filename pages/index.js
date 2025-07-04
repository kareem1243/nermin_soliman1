// 🚀 مشروع متجر Nermin Shop - الإصدار النظيف والقوي
// باستخدام React + Tailwind + Firebase بشكل منظم ومحمي

import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";
import {
  Moon,
  Sun,
  ShoppingCart,
  Search,
} from "lucide-react";

// إعداد Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBDBAdBrhYYA5etcbTne5I-TQmn5r5wy-Y",
  authDomain: "nermin-shop.firebaseapp.com",
  projectId: "nermin-shop",
  storageBucket: "nermin-shop.appspot.com",
  messagingSenderId: "712335960805",
  appId: "1:712335960805:web:e00dcc1cebb4449ec7420c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default function NerminShop() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const fetchedProducts = [];
      querySnapshot.forEach((doc) => {
        fetchedProducts.push({ id: doc.id, ...doc.data() });
      });
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Navbar */}
      <header className="flex justify-between items-center p-4 shadow sticky top-0 z-50 bg-opacity-80 backdrop-blur">
        <button onClick={toggleTheme}>
          {darkMode ? (
            <Sun className="text-white" />
          ) : (
            <Moon className="text-black" />
          )}
        </button>

        <h1 className="font-bold tracking-widest text-lg">
          nermin_soliman1
        </h1>

        <div className="flex items-center space-x-4">
          <button>
            <Search
              className={darkMode ? "text-white" : "text-black"}
            />
          </button>
          <div className="relative">
            <ShoppingCart
              className={darkMode ? "text-white" : "text-black"}
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Search Input */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-2 rounded border focus:outline-none focus:ring focus:border-blue-400 text-black"
        />
      </div>

      {/* Products Grid */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {products
          .filter((p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((product) => (
            <div
              key={product.id}
              className="bg-white text-black rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <h2 className="font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-600">
                  EGP {product.price}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 text-white w-full mt-2 rounded py-1 hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}
