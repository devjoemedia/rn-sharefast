import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVYxugzJPQu7J6rq_VmcG3zPKcJd6anAk",
  authDomain: "sharefast-e7fa2.firebaseapp.com",
  projectId: "sharefast-e7fa2",
  storageBucket: "sharefast-e7fa2.appspot.com",
  messagingSenderId: "40333533921",
  appId: "1:40333533921:web:7b3b0a315d5987a3480da0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
