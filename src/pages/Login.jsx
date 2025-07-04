import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-black">
      <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 dark:text-white text-center">Login</h2>
        <input
          type="text"
          placeholder="Username or Email"
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
        />
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition mb-4">Login</button>
        <hr className="my-4" />
        <a
          href="https://www.instagram.com/nermin_soliman1"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-blue-600"
        >
          Visit Instagram
        </a>
      </div>
    </div>
  );
}
