
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBCLWwZYeXowiXwXWHrxwHxdXW7CeIlfQE",
  authDomain: "tiktok---jornada-4603a.firebaseapp.com",
  projectId: "tiktok---jornada-4603a",
  storageBucket: "tiktok---jornada-4603a.appspot.com",
  messagingSenderId: "309618373987",
  appId: "1:309618373987:web:5bc9bfbea57d72ce024f56"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export default db;