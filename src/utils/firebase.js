// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR0cVWgGFqSH69Q_Lh85jeLpnyQSpbmk0",
  authDomain: "netflixgpt-297.firebaseapp.com",
  projectId: "netflixgpt-297",
  storageBucket: "netflixgpt-297.firebasestorage.app",
  messagingSenderId: "542963680153",
  appId: "1:542963680153:web:9151f00f546b21baf74908",
  measurementId: "G-W375BHB39G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);