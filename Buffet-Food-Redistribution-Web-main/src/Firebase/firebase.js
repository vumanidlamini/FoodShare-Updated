import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfHelMaXGr9NK8myehf4O9Tb2McjMnPmE",
    authDomain: "foodsharenetwork-71af6.firebaseapp.com",
    projectId: "foodsharenetwork-71af6",
    storageBucket: "foodsharenetwork-71af6.firebasestorage.app",
    messagingSenderId: "664260915949",
    appId: "1:664260915949:web:e2ac17824e5ce7bb0052e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);