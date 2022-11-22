// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB8bLr-4XNTn_jg8HFAq6N1DcQECHwUwJU",
  authDomain: "devlinks-fc66b.firebaseapp.com",
  projectId: "devlinks-fc66b",
  storageBucket: "devlinks-fc66b.appspot.com",
  messagingSenderId: "892653676523",
  appId: "1:892653676523:web:cfd49146c821aba75fdbae",
  measurementId: "G-SCSF854C9E"
};


const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth };