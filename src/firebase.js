// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBbl-6FG6v0K9Oh1Hz7lXPRC53OVyFMJw",
  authDomain: "fir-auth-14541.firebaseapp.com",
  projectId: "fir-auth-14541",
  storageBucket: "fir-auth-14541.appspot.com",
  messagingSenderId: "404427954791",
  appId: "1:404427954791:web:afbf279c50f4e368cf92c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {app , auth , provider}