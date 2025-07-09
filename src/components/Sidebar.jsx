خ// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export default function Sidebar({ open, setOpen, user }) {
  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform z-50`}>
      <div className="flex justify-between items-center p-4 border-b">
        <span className="font-bold">{user?.email || user?.phoneNumber || "Guest"}</span>
        <button onClick={() => setOpen(false)}>
          <X />
        </button>
      </div>
      <div className="flex flex-col p-4 gap-4">
        {!user && <Link to="/login" onClick={() => setOpen(false)}>Login</Link>}
        {!user && <Link to="/register" onClick={() => setOpen(false)}>Register</Link>}
        {user && <Link to="/account" onClick={() => setOpen(false)}>Account</Link>}
        <a href="https://www.instagram.com/nermin_soliman1?igsh=enR1bDVsMnV3ZWo4" target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </div>
  );
}
