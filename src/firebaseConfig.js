import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkAsKDysooKHd9MmIpSTkzgUWzps8PQhs",
  authDomain: "developer-projects-12494.firebaseapp.com",
  projectId: "developer-projects-12494",
  storageBucket: "developer-projects-12494.appspot.com",
  messagingSenderId: "155357169625",
  appId: "1:155357169625:web:f3ba45d008371d16bb7bc8",
  measurementId: "G-R7WMEMRQ42",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default getFirestore();


