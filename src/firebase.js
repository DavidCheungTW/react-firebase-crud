// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDCSEuEoXk2dcyCBPcGIsm6hrS_OHfr97E",
  authDomain: "fir-realtime-database-aaf4c.firebaseapp.com",
  projectId: "fir-realtime-database-aaf4c",
  storageBucket: "fir-realtime-database-aaf4c.appspot.com",
  messagingSenderId: "451511025317",
  appId: "1:451511025317:web:b607e1ec3b1a868ab7574c",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
