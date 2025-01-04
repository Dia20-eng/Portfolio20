
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCbesI5E3sm59YlP_zWfYaXDNfiVJxvBk",
  authDomain: "diaportfolio-1f740.firebaseapp.com",
  projectId: "diaportfolio-1f740",
  storageBucket: "diaportfolio-1f740.firebasestorage.app",
  messagingSenderId: "214390177390",
  appId: "1:214390177390:web:ee5c303dc4e39866b4707f",
  measurementId: "G-4DQ0P5MH03"
};
const app = initializeApp(firebaseConfig);
 export const db= getFirestore(app);