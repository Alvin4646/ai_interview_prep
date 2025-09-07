import {initializeApp, getApps, getApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDh_Dj3qobebKQRhCn1o1kLBSYTQYxIxd8",
    authDomain: "prepwise-a6339.firebaseapp.com",
    projectId: "prepwise-a6339",
    storageBucket: "prepwise-a6339.firebasestorage.app",
    messagingSenderId: "1027288275173",
    appId: "1:1027288275173:web:183484186f19c25a4c5c0c",
    measurementId: "G-61C75TE1SW"
};

// Initialize Firebase
const app = !getApps().length ?initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);