// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDv3hEFN0ggaaCf20RuVVYhnndfy38OBbc",
  authDomain: "nermin-soliman-store.firebaseapp.com",
  projectId: "nermin-soliman-store",
  storageBucket: "nermin-soliman-store.appspot.com",
  messagingSenderId: "43639651722",
  appId: "1:43639651722:web:dfcdfd510d739a42c6dc73"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
