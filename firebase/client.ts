// Import the functions you need from the SDKs you need
import { initializeApp , getApp, getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXzyiZPTxGWAiBLIXNtjt6UIdzmSCBewI",
  authDomain: "interprep-6aac9.firebaseapp.com",
  projectId: "interprep-6aac9",
  storageBucket: "interprep-6aac9.firebasestorage.app",
  messagingSenderId: "417426902421",
  appId: "1:417426902421:web:629030cacb224b4443fa9c",
  measurementId: "G-S5R1HLYFN3"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);