// ✅ Products.jsx - عرض المنتجات والربط مع صفحة التفاصيل
import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Face Serum',
    category: 'skin care',
    price: 200,
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    name: 'T-Shirt',
    category: 'clothes',
    price: 150,
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    name: 'Perfume',
    category: 'perfume',
    price: 300,
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 4,
    name: 'Moisturizer',
    category: 'skin care',
    price: 180,
    image: 'https://via.placeholder.com/300',
  },
];

export default function Products() {
  const navigate = useNavigate();

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 dark:bg-black min-h-screen">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded p-2 cursor-pointer hover:shadow transition dark:bg-gray-900"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded mb-2"
          />
          <h2 className="font-bold dark:text-white">{product.name}</h2>
          <p className="text-blue-600 font-semibold">${product.price}</p>
        </div>
      ))}
    </div>
  );
            }
