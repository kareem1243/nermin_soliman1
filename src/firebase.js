// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDv3hEFN0ggaaCf20RuVVYhnndfy38OBbc",
  authDomain: "nermin-soliman-store.firebaseapp.com",
  projectId: "nermin-soliman-store",
  storageBucket: "nermin-soliman-store.firebasestorage.app",
  messagingSenderId: "43639651722",
  appId: "1:43639651722:web:dfcdfd510d739a42c6dc73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

// Initialize Firestore Database
const db = getFirestore(app);

export { auth, db };
