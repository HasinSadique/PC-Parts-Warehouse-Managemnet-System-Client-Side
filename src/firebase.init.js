// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAX1f-7A062IIuc1UShI7eV3dqV6EjWyls",
    authDomain: "pc-warehouse-management-site.firebaseapp.com",
    projectId: "pc-warehouse-management-site",
    storageBucket: "pc-warehouse-management-site.appspot.com",
    messagingSenderId: "84692563118",
    appId: "1:84692563118:web:ed9f0b4ac671ab1aada93f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;