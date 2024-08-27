import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPCQTRnXVS7dmPYiLoItjOflmRHHMF9Bo",
  authDomain: "appcripto-692ea.firebaseapp.com",
  projectId: "appcripto-692ea",
  storageBucket: "appcripto-692ea.appspot.com",
  messagingSenderId: "157124654883",
  appId: "1:157124654883:web:3e0c44ea248f5e84223e96"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)