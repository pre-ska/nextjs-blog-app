// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextjs-blog-lamadev.firebaseapp.com",
  projectId: "nextjs-blog-lamadev",
  storageBucket: "nextjs-blog-lamadev.appspot.com",
  messagingSenderId: "293897669413",
  appId: "1:293897669413:web:7e035c3f41d555bd3128cc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
