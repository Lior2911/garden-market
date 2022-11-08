
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACLb6oxDWb7dXL8YRRDmoPoAZoq7CazqY",
  authDomain: "garden-market-e9ac4.firebaseapp.com",
  projectId: "garden-market-e9ac4",
  storageBucket: "garden-market-e9ac4.appspot.com",
  messagingSenderId: "509495089365",
  appId: "1:509495089365:web:857d7b7140fb932fc6ea5c",
  measurementId: "G-XM3G9DT3RM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;