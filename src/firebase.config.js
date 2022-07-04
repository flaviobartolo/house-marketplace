// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4zTrDF3ieNquThBcTHem0vI2YVKApffA",
  authDomain: "house-marketplace-app-83fd8.firebaseapp.com",
  projectId: "house-marketplace-app-83fd8",
  storageBucket: "house-marketplace-app-83fd8.appspot.com",
  messagingSenderId: "176097935192",
  appId: "1:176097935192:web:2b5956fc7ab99e17776f2d"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()