// src/pages/Account.jsx
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  if (!userData) {
    return <div className="p-4">Loading account...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Welcome, {userData.username}!</h1>
      <p className="mb-2">Email: {userData.email}</p>
      <p className="mb-4 text-blue-600 font-semibold">Points: {userData.points}</p>
      <button
        onClick={handleLogout}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Logout
      </button>
    </div>
  );
}
