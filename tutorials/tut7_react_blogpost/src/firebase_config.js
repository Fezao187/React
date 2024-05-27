// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaUwGILqQ6lgC8wSMUSoi-bfoYvjXYSsk",
    authDomain: "blogpost-2877b.firebaseapp.com",
    projectId: "blogpost-2877b",
    storageBucket: "blogpost-2877b.appspot.com",
    messagingSenderId: "633827608541",
    appId: "1:633827608541:web:5c6da46d636827f7509834"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
