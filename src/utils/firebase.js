// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYJe_8OIFHhbhlHPFONdI0kg5_CXrKlnI",
  authDomain: "netflixgpt-f7605.firebaseapp.com",
  projectId: "netflixgpt-f7605",
  storageBucket: "netflixgpt-f7605.appspot.com",
  messagingSenderId: "872252444281",
  appId: "1:872252444281:web:70d434f4bf3d65c595cea8",
  measurementId: "G-7DXX58YD5N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();