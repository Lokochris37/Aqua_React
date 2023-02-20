// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuylqhnQfoGqlCMv93OSDaZZ2iLnmFPXc",
  authDomain: "aqua-937f8.firebaseapp.com",
  projectId: "aqua-937f8",
  storageBucket: "aqua-937f8.appspot.com",
  messagingSenderId: "369351717501",
  appId: "1:369351717501:web:b30e22bc49761125d97714",
  measurementId: "G-482ZXYVPT6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

