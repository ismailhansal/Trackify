// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_JFB8Bvc9Q6di-awKO5FvI5i714rbCgQ",
    authDomain: "expenses-tracker-coception.firebaseapp.com",
    projectId: "expenses-tracker-coception",
    storageBucket: "expenses-tracker-coception.appspot.com",
    messagingSenderId: "283389700749",
    appId: "1:283389700749:web:e9f150c833607291d050c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);