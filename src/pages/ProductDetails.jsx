// ✅ ProductDetails.jsx يعرض تفاصيل المنتج مع خيار تحديد الكمية
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const productMock = {
  id: 1,
  name: 'Face Serum',
  category: 'skin care',
  price: 200,
  image: 'https://via.placeholder.com/300',
  description: 'This is a high-quality face serum for skincare and glow.'
};

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  // في المستقبل اربطه بـ backend أو context لجلب المنتج حسب ID
  const product = productMock;

  return (
    <div className="p-4 flex flex-col items-center dark:bg-black min-h-screen">
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded mb-4" />
      <h1 className="text-2xl font-bold mb-2 dark:text-white">{product.name}</h1>
      <p className="text-blue-600 font-semibold text-lg mb-2">${product.price}</p>
      <p className="text-gray-700 dark:text-gray-300 text-center mb-4 max-w-md">{product.description}</p>

      <div className="flex items-center mb-4">
        <label className="mr-2 dark:text-white">Quantity:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border p-1 rounded w-20 text-center"
        />
      </div>

      <button
        onClick={() => navigate('/cart')}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
