import React, { useState } from 'react';
import { validatePassword, validateUsername } from '../utils/auth';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (!validateUsername(username)) {
      setMessage('❌ Username must be at least 3 characters.');
      return;
    }
    if (!validatePassword(password)) {
      setMessage('❌ Password must contain letters and numbers.');
      return;
    }
    setMessage('✅ Logged in successfully.');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-black">
      <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 dark:text-white text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Login
        </button>
        {message && <p className="text-center mt-2 dark:text-white">{message}</p>}
      </div>
    </div>
  );
}
