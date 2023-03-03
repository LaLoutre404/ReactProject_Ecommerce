// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCh_BAFnDXVmUsYJyfenDMQPLqo2Ds4llM",
  authDomain: "hhp1-88c1e.firebaseapp.com",
  projectId: "hhp1-88c1e",
  storageBucket: "hhp1-88c1e.appspot.com",
  messagingSenderId: "671437016234",
  appId: "1:671437016234:web:5cdff4b288301d8064d4d3"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseapp); 
export const db = getFirestore(firebaseapp); 
export default firebaseapp; 
