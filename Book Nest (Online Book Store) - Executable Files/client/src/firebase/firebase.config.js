// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ5EIbx2QhNWc4JUhX22MFH1iiriss3gQ",
  authDomain: "mern-book-inventory-c2b9c.firebaseapp.com",
  projectId: "mern-book-inventory-c2b9c",
  storageBucket: "mern-book-inventory-c2b9c.appspot.com",
  messagingSenderId: "988707737096",
  appId: "1:988707737096:web:d56f74a08ad48c9fe64bbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

