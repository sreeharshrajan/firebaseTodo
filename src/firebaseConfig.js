import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "developer-projects-12494",
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId:process.env.MESSAGE_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default getFirestore();
