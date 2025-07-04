import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Face Cream", price: "$20", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Lipstick", price: "$15", image: "https://via.placeholder.com/150" },
  { id: 3, name: "T-Shirt", price: "$25", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Perfume", price: "$40", image: "https://via.placeholder.com/150" },
];

export default function Home() {
  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="border rounded p-2 hover:shadow">
          <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded mb-2" />
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-blue-600">{product.price}</p>
        </Link>
      ))}
    </div>
  );
}
