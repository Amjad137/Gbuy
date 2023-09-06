// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF93Zgy0iUZgqGq5Y1lWoOkAqoJ6ebOTU",
  authDomain: "gbuy-73dce.firebaseapp.com",
  projectId: "gbuy-73dce",
  storageBucket: "gbuy-73dce.appspot.com",
  messagingSenderId: "552867299017",
  appId: "1:552867299017:web:56d733cc9bdb7b7af8d718",
  measurementId: "G-70R1DCYF2E",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
