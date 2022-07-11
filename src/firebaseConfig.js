// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkKdDmznXSLKKfbSkJTBcejkooUuGocgw",
  authDomain: "blog-app-d2ab6.firebaseapp.com",
  projectId: "blog-app-d2ab6",
  storageBucket: "blog-app-d2ab6.appspot.com",
  messagingSenderId: "1050525771574",
  appId: "1:1050525771574:web:92ff3b56ddd94ec070b597"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider()