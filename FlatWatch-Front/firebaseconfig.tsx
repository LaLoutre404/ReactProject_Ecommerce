// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC3EU-P3VZiw3i93QjDbmM3y5I7WT5xnFQ",
  authDomain: "my-app-react-7a0b2.firebaseapp.com",
  projectId: "my-app-react-7a0b2",
  storageBucket: "my-app-react-7a0b2.appspot.com",
  messagingSenderId: "954957560843",
  appId: "1:954957560843:web:2717204677b0f42dfa1b0e"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseapp); 
export const db = getFirestore(firebaseapp); 
export default firebaseapp;