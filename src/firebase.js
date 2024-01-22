// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaY-Pl7JP0o-SGSZ0KwLO8y0nf6-px5aY",
  authDomain: "my-next-portfolio-43f6f.firebaseapp.com",
  projectId: "my-next-portfolio-43f6f",
  storageBucket: "my-next-portfolio-43f6f.appspot.com",
  messagingSenderId: "113343605153",
  appId: "1:113343605153:web:ea5db9f309aaf636e5c3e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
