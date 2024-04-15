// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-e5bec.firebaseapp.com",
  projectId: "blog-e5bec",
  storageBucket: "blog-e5bec.appspot.com",
  messagingSenderId: "58178483362",
  appId: "1:58178483362:web:126cba16c040908acd93fb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);