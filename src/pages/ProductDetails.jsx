// src/pages/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Details (ID: {id})</h1>
      <p className="text-gray-600">تفاصيل المنتج تظهر هنا لاحقًا بعد الربط مع قاعدة البيانات أو وضع بيانات المنتج بشكل ديناميكي.</p>
    </div>
  );
}
