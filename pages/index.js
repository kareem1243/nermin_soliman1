// ⚡️ مشروع Next.js احترافي بمستوى عالي وجذاب لصفحة متجر nermin_soliman1 // ⚡️ الجزء الأول: الهيكل الاحترافي ب Tailwind + Next.js

import { useState } from 'react'; import { ShoppingCart, Menu, Search, Instagram } from 'lucide-react';

export default function Home() { const [cartItems, setCartItems] = useState(0); const [drawerOpen, setDrawerOpen] = useState(false); const categories = ['All', 'Scanker', 'Perfume', 'Clothes'];

const addToCart = () => setCartItems(cartItems + 1);

return ( <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white"> {/* Navbar */} <header className="flex justify-between items-center px-6 py-4 shadow-lg sticky top-0 z-50 bg-black/80 backdrop-blur-lg"> <button onClick={() => setDrawerOpen(!drawerOpen)}> <Menu className="w-7 h-7 text-white" /> </button> <h1 className="text-2xl font-bold text-white tracking-wider">nermin_soliman1</h1> <div className="flex items-center space-x-4"> <button className="relative"> <ShoppingCart className="w-7 h-7 text-white" /> {cartItems > 0 && ( <span className="absolute -top-2 -right-2 bg-red-500 rounded-full px-1 text-xs animate-pulse"> {cartItems} </span> )} </button> <Search className="w-7 h-7 text-white" /> </div> </header>

{/* Drawer */}
  {drawerOpen && (
    <div className="fixed top-0 left-0 w-64 h-full bg-gray-900 text-white p-6 z-50 space-y-4 shadow-lg animate-slide-in">
      <div className="text-lg font-semibold">Account</div>
      <div className="space-y-2">
        <button className="block w-full text-left hover:text-blue-400">Log In</button>
        <button className="block w-full text-left hover:text-blue-400">Sign Up</button>
      </div>
      <div className="pt-4 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <span>Points</span>
          <span className="text-blue-400">0</span>
        </div>
      </div>
      <div className="pt-4 border-t border-gray-700">
        <a href="https://www.instagram.com/nermin_soliman1" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-pink-400">
          <Instagram className="w-5 h-5" />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  )}

  {/* Categories */}
  <div className="flex justify-center space-x-4 mt-6 flex-wrap">
    {categories.map((cat) => (
      <button
        key={cat}
        className="bg-white/10 text-white rounded-full px-5 py-2 backdrop-blur hover:bg-white/20 transition-all border border-white/20 shadow"
      >
        {cat}
      </button>
    ))}
  </div>

  {/* Products */}
  <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 mt-6">
    {[...Array(8)].map((_, idx) => (
      <div
        key={idx}
        className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform group"
      >
        <img
          src={`https://source.unsplash.com/400x400/?product,${idx}`}
          alt={`Product ${idx + 1}`}
          className="w-full h-48 object-cover group-hover:opacity-80 transition"
        />
        <div className="p-4 space-y-2">
          <h2 className="text-lg font-semibold text-white">Product {idx + 1}</h2>
          <p className="text-blue-400 font-bold">${(idx + 1) * 12}.00</p>
          <button
            onClick={addToCart}
            className="w-full bg-blue-500 hover:bg-blue-600 transition py-2 rounded text-white font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </section>
</div>

); }

/* ✅ هذا الجزء يمثل واجهة قوية جذابة وجاهزة مع ألوان Gradient وظل وتدرجات رائعة ✅ استخدمنا lucide-react لرموز حديثة جذابة ✅ المنتجات تظهر بصور حقيقية عشوائية جميلة ✅ متوافق مع الموبايل بشكل ممتاز ✅ قابل للتوسيع للخرائط وتسجيل الدخول والدفع لاحقاً

💡 إذا أردت يمكنني إرسال الجزء الثاني منفصل ليشمل صفحة المنتج المفصلة وعربة التسوق Checkout بمستوى احترافي */

// ✅ الجزء الثاني من مشروع nermin_soliman1 // يمكن رفعه مباشرة في مشروع Next.js على GitHub و Vercel // هذا الجزء مخصص لصفحة "Checkout" الاحترافية مع نظام العنوان والخصم

import { useState } from 'react';

export default function Checkout() { const [name, setName] = useState(''); const [phone, setPhone] = useState(''); const [address, setAddress] = useState(''); const [discountCode, setDiscountCode] = useState(''); const [discountApplied, setDiscountApplied] = useState(false); const [price, setPrice] = useState(150);

const handleDiscount = () => { if (discountCode === 'NERMIN10' && !discountApplied) { setPrice(price * 0.9); setDiscountApplied(true); alert('Discount applied successfully!'); } else { alert('Invalid code or already applied'); } };

const handleCheckout = () => { if (name && phone && address) { alert('Your order has been placed successfully!'); } else { alert('Please fill in all fields'); } };

return ( <div className="min-h-screen bg-gradient-to-tr from-pink-500 to-purple-700 flex flex-col justify-center items-center p-4 text-white"> <h1 className="text-2xl font-bold mb-4">Checkout</h1> <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-md space-y-4"> <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 rounded border border-gray-300" /> <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 rounded border border-gray-300" /> <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full p-2 rounded border border-gray-300" /> <div className="flex space-x-2"> <input type="text" placeholder="Discount Code" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} className="flex-1 p-2 rounded border border-gray-300" /> <button
onClick={handleDiscount}
className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
> Apply </button> </div> <div className="text-lg font-semibold">Total: ${price.toFixed(2)}</div> <button
onClick={handleCheckout}
className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
> Confirm and Pay </button> </div> </div> ); }

// 🟩 الجزء الثالث: نظام البحث الذكي + صفحة المنتج الفردية + تحسين الربط

// 1️⃣ إنشاء ملف pages/product/[id].js لعرض تفاصيل المنتج الفردي import { useRouter } from 'next/router'; import products from '../../utils/products';

export default function ProductPage() { const router = useRouter(); const { id } = router.query; const product = products.find((p) => p.id.toString() === id);

if (!product) return <div className="p-8 text-center">Product not found</div>;

return ( <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8 flex flex-col items-center"> <img src={product.image} alt={product.name} className="rounded shadow-lg w-64 h-64 object-cover" /> <h1 className="text-3xl mt-4 font-bold">{product.name}</h1> <p className="mt-2 text-xl">${product.price.toFixed(2)}</p> <p className="mt-2 max-w-md text-center text-gray-300">{product.description}</p> <button className="mt-4 bg-blue-500 px-4 py-2 rounded shadow hover:bg-blue-600 transition">Add to Cart 🛒</button> </div> ); }

// 2️⃣ إنشاء ملف utils/products.js لتخزين بيانات المنتجات للاستخدام في البحث وفي صفحة المنتجات الفردية const products = [ { id: 1, name: 'Premium Perfume', price: 99.99, description: 'Luxury fragrance with lasting scent.', image: 'https://via.placeholder.com/300x300?text=Perfume' }, { id: 2, name: 'Elegant Dress', price: 79.99, description: 'Elegant dress suitable for all occasions.', image: 'https://via.placeholder.com/300x300?text=Dress' }, { id: 3, name: 'Classic Watch', price: 149.99, description: 'Classic watch with leather strap.', image: 'https://via.placeholder.com/300x300?text=Watch' }, { id: 4, name: 'Men's Jacket', price: 129.99, description: 'Stylish jacket for men.', image: 'https://via.placeholder.com/300x300?text=Jacket' }, ];

export default products;

// 3️⃣ إضافة نظام البحث الذكي إلى pages/index.js // استبدل الجزء الخاص بعرض المنتجات في index.js بهذا الجزء:

import { useState } from 'react'; import products from '../utils/products'; import { useRouter } from 'next/router';

export default function Home() { const [query, setQuery] = useState(''); const router = useRouter();

const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()) );

return ( <div className="min-h-screen bg-black text-white p-4"> <div className="flex justify-between items-center"> <h1 className="text-2xl font-bold">nermin_soliman1</h1> <input type="text" placeholder="Search products..." value={query} onChange={(e) => setQuery(e.target.value)} className="rounded p-2 text-black" /> </div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
    {filteredProducts.map((product) => (
      <div
        key={product.id}
        onClick={() => router.push(`/product/${product.id}`)}
        className="bg-white text-black rounded p-2 shadow cursor-pointer hover:scale-105 transition"
      >
        <img src={product.image} alt={product.name} className="rounded h-40 w-full object-cover" />
        <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
      </div>
    ))}
  </div>
</div>

); }

// 🟩 الجزء الثالث: نظام البحث الذكي + صفحة المنتج الفردية + تحسين الربط

// 1️⃣ إنشاء ملف pages/product/[id].js لعرض تفاصيل المنتج الفردي import { useRouter } from 'next/router'; import products from '../../utils/products';

export default function ProductPage() { const router = useRouter(); const { id } = router.query; const product = products.find((p) => p.id.toString() === id);

if (!product) return <div className="p-8 text-center">Product not found</div>;

return ( <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8 flex flex-col items-center"> <img src={product.image} alt={product.name} className="rounded shadow-lg w-64 h-64 object-cover" /> <h1 className="text-3xl mt-4 font-bold">{product.name}</h1> <p className="mt-2 text-xl">${product.price.toFixed(2)}</p> <p className="mt-2 max-w-md text-center text-gray-300">{product.description}</p> <button className="mt-4 bg-blue-500 px-4 py-2 rounded shadow hover:bg-blue-600 transition">Add to Cart 🛒</button> </div> ); }

// 2️⃣ إنشاء ملف utils/products.js لتخزين بيانات المنتجات للاستخدام في البحث وفي صفحة المنتجات الفردية const products = [ { id: 1, name: 'Premium Perfume', price: 99.99, description: 'Luxury fragrance with lasting scent.', image: 'https://via.placeholder.com/300x300?text=Perfume' }, { id: 2, name: 'Elegant Dress', price: 79.99, description: 'Elegant dress suitable for all occasions.', image: 'https://via.placeholder.com/300x300?text=Dress' }, { id: 3, name: 'Classic Watch', price: 149.99, description: 'Classic watch with leather strap.', image: 'https://via.placeholder.com/300x300?text=Watch' }, { id: 4, name: 'Men's Jacket', price: 129.99, description: 'Stylish jacket for men.', image: 'https://via.placeholder.com/300x300?text=Jacket' }, ];

export default products;

// 3️⃣ إضافة نظام البحث الذكي إلى pages/index.js // استبدل الجزء الخاص بعرض المنتجات في index.js بهذا الجزء:

import { useState } from 'react'; import products from '../utils/products'; import { useRouter } from 'next/router';

export default function Home() { const [query, setQuery] = useState(''); const router = useRouter();

const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()) );

return ( <div className="min-h-screen bg-black text-white p-4"> <div className="flex justify-between items-center"> <h1 className="text-2xl font-bold">nermin_soliman1</h1> <input type="text" placeholder="Search products..." value={query} onChange={(e) => setQuery(e.target.value)} className="rounded p-2 text-black" /> </div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
    {filteredProducts.map((product) => (
      <div
        key={product.id}
        onClick={() => router.push(`/product/${product.id}`)}
        className="bg-white text-black rounded p-2 shadow cursor-pointer hover:scale-105 transition"
      >
        <img src={product.image} alt={product.name} className="rounded h-40 w-full object-cover" />
        <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
      </div>
    ))}
  </div>
</div>

); }

