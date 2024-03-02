// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.ENV_VITE_APP_APIKEY,
  authDomain: process.env.ENV_VITE_APP_AUTHDOMAIN,
  projectId: process.env.ENV_VITE_APP_PROJECT_ID,
  storageBucket: process.env.ENV_VITE_APP_SROAGE_BUCKET,
  messagingSenderId: process.env.ENV_VITE_APP_MESSAGING_SENDER_ID_,
  appId: process.env.ENV_VITE_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);