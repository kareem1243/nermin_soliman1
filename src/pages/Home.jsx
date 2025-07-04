import React from 'react';

export default function Home() {
  const products = [
    { id: 1, name: "منتج 1", price: "100 EGP" },
    { id: 2, name: "منتج 2", price: "150 EGP" },
    { id: 3, name: "منتج 3", price: "200 EGP" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">المنتجات المتاحة</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-100 p-4 rounded shadow text-black">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p>{product.price}</p>
            <button className="mt-2 bg-black text-white px-3 py-1 rounded">أضف إلى السلة</button>
          </div>
        ))}
      </div>
    </div>
  );
}
