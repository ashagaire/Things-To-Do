// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB70Y-MqNpzuTkfNs-85rtR0dkq0Vm8j0A",
  authDomain: "things-to-do-394b5.firebaseapp.com",
  projectId: "things-to-do-394b5",
  storageBucket: "things-to-do-394b5.appspot.com",
  messagingSenderId: "557207991702",
  appId: "1:557207991702:web:96287486a9f2d3ad7ad9b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const todosCollection = collection(db, "todos")