import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa3IE4SDdtKODCgRloizHh481LmfF0ODg",
  authDomain: "iti-firebase-94124.firebaseapp.com",
  projectId: "iti-firebase-94124",
  storageBucket: "iti-firebase-94124.appspot.com", // <-- FIXED HERE
  messagingSenderId: "291343203662",
  appId: "1:291343203662:web:b826d74aef9e59ec6e721f",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Export initialized auth instance
const auth = getAuth(app)

const db = getFirestore(app);

export { app, auth, db }
