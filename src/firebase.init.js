// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPbNoobKbxRlifgDdH0TA8x8cWHCjySbk",
    authDomain: "genius-car-router-auth-node.firebaseapp.com",
    projectId: "genius-car-router-auth-node",
    storageBucket: "genius-car-router-auth-node.appspot.com",
    messagingSenderId: "1071536065006",
    appId: "1:1071536065006:web:35b055b0941986129ce6ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth