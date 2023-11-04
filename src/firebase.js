// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import firebaseConfig from "./config/firebase_config.json";

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
