import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADb9jPvPuhinYVzGXMii5I49r8Aw9TaNg",
  authDomain: "dmtallerapp.firebaseapp.com",
  projectId: "dmtallerapp",
  storageBucket: "dmtallerapp.appspot.com",
  messagingSenderId: "731921065206",
  appId: "1:731921065206:web:add5e9e24a9f7cabd2b8d7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export default firebaseApp;
