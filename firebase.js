import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyVr2ARYbkPR8oMDSgE3AQkS9Cxq7-HMQ",
  authDomain: "appcripto-8e35e.firebaseapp.com",
  projectId: "appcripto-8e35e",
  storageBucket: "appcripto-8e35e.appspot.com",
  messagingSenderId: "476413670934",
  appId: "1:476413670934:web:49db631777b1b802f3e737"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)