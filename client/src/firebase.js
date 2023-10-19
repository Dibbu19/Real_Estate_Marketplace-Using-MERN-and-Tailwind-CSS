// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-marketplace.firebaseapp.com",
  projectId: "mern-estate-marketplace",
  storageBucket: "mern-estate-marketplace.appspot.com",
  messagingSenderId: "149807415156",
  appId: "1:149807415156:web:687c2cf20660c0e2193621",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
