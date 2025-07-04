// 🚀 firebase.js
// ربط المشروع بـ Firebase (التسجيل - تسجيل الدخول - Firestore)

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// بيانات مشروعك في Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBDBAdBrhYYA5etcbTne5I-TQmn5r5wy-Y",
  authDomain: "nermin-shop.firebaseapp.com",
  projectId: "nermin-shop",
  storageBucket: "nermin-shop.firebasestorage.app",
  messagingSenderId: "712335960805",
  appId: "1:712335960805:web:e00dcc1cebb4449ec7420c"
};

// تهيئة التطبيق
const app = initializeApp(firebaseConfig);

// التصدير للاستخدام في أي مكان
export const auth = getAuth(app);
export const db = getFirestore(app);
