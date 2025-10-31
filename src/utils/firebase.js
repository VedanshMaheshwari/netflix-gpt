
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0PIs7l_GgJ3H5ylAOoirtgSkz_B8Ro7s",
  authDomain: "moviegpt-297-49cf9.firebaseapp.com",
  projectId: "moviegpt-297-49cf9",
  storageBucket: "moviegpt-297-49cf9.firebasestorage.app",
  messagingSenderId: "219335597369",
  appId: "1:219335597369:web:e47ec846a73bb2ff091ce8",
  measurementId: "G-DQEVGBPBRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
    