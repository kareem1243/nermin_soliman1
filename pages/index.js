import { useState } from 'react';
import AccountDrawer from '../components/AccountDrawer';
import CartDrawer from '../components/CartDrawer';
import CategoryTabs from '../components/CategoryTabs';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const products = [
    { id: 1, name: 'Scanker A', price: 50, category: 'Scanker', img: 'https://via.placeholder.com/300x300/0f0/fff?text=Scanker+A' },
    { id: 2, name: 'Perfume B', price: 80, category: 'Perfume', img: 'https://via.placeholder.com/300x300/f00/fff?text=Perfume+B' },
    { id: 3, name: 'T-Shirt', price: 30, category: 'Clothes', img: 'https://via.placeholder.com/300x300/00f/fff?text=T-Shirt' },
    { id: 4, name: 'Dress', price: 120, category: 'Clothes', img: 'https://via.placeholder.com/300x300/ff0/000?text=Dress' },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Navbar */}
      <div className="flex justify-between items-center p-4 bg-black">
        <button onClick={() => setDrawerOpen(true)} className="text-2xl">☰</button>
        <h1 className="text-xl font-bold">nermin_soliman1</h1>
        <div className="flex space-x-3 items-center">
          <button onClick={() => setCartOpen(true)} className="relative text-2xl">
            🛒
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 rounded-full px-1 text-xs">
                {cartItems.length}
              </span>
            )}
          </button>
          <button className="text-2xl">🔍</button>
        </div>
      </div>

      {/* Drawers */}
      <AccountDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cartItems={cartItems} />

      {/* Category Tabs */}
      <CategoryTabs active={activeCategory} setActive={setActiveCategory} />

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {products.filter(p => activeCategory === 'All' || p.category === activeCategory)
          .map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
      </div>
    </div>
  );
}
