// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB56bKKftzjb6vD2EfAkUb1Wf1FjcUnkcU",
  authDomain: "undrgrnd-d099b.firebaseapp.com",
  projectId: "undrgrnd-d099b",
  storageBucket: "undrgrnd-d099b.appspot.com",
  messagingSenderId: "372468333540",
  appId: "1:372468333540:web:b05a6f1b6aaaa58465e5f1",
  measurementId: "G-R4CG7YCY6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Intialize Firestore
export const db = getFirestore(app);
export const fbauth = getAuth(app)