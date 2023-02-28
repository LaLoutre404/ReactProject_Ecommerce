// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHVIffYDLMqX2ycBcCOF-QZkZTJqPEQ6g",
  authDomain: "my-ts-app-496bf.firebaseapp.com",
  projectId: "my-ts-app-496bf",
  storageBucket: "my-ts-app-496bf.appspot.com",
  messagingSenderId: "611936717106",
  appId: "1:611936717106:web:55179caa5b50484fa9af2b"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseapp); 
export const db = getFirestore(firebaseapp); 
export default firebaseapp;