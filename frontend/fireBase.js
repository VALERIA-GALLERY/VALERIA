//!\\ Do not edit without the scrum's permission

import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVjFCyFcZiHg3SUSDeSO5DD4gPBeJr7cs",
  authDomain: "valeria-b884e.firebaseapp.com",
  projectId: "valeria-b884e",
  storageBucket: "valeria-b884e.appspot.com",
  messagingSenderId: "366287333685",
  appId: "1:366287333685:web:fb4b3fef42202adf14447c",
  measurementId: "G-92P9YPB1ZN"
};
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth();