import * as firebase from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDsoL9Us59ch76THMEw4JRsSXL5bRMN0Ac",
  authDomain: "solana-hack.firebaseapp.com",
  projectId: "solana-hack",
  storageBucket: "solana-hack.appspot.com",
  messagingSenderId: "1026416271659",
  appId: "1:1026416271659:web:0ec5dcf87fe2ae1e43a56e"
};

if (!firebase.getApps().length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.getApp(); // if already initialized, use that one
}


const db = getFirestore(firebase.getApp());

export default db;