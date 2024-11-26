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
  apiKey: "AIzaSyB2OL_2vwyUutOks7zZ-LskdaxDjT2XENM",
  authDomain: "busybuy-72847.firebaseapp.com",
  projectId: "busybuy-72847",
  storageBucket: "busybuy-72847.firebasestorage.app",
  messagingSenderId: "780161505516",
  appId: "1:780161505516:web:8ee5c50393e0cc0ab12dc9",
  measurementId: "G-W2BM8BK87D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
const auth = getAuth(app);

// export default db;
export {app,auth};