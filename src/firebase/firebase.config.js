// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf1LSK1CwYRx8Z-iAhWTfewTSeQhWKu7k",
  authDomain: "dragon-news-b64cc.firebaseapp.com",
  projectId: "dragon-news-b64cc",
  storageBucket: "dragon-news-b64cc.firebasestorage.app",
  messagingSenderId: "545802411280",
  appId: "1:545802411280:web:c7059f21455111be491995"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app