// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdTet-M4K0ELRbehuhWS6lFY1Y1VAs8vI",
  authDomain: "car-doctor-a8124.firebaseapp.com",
  projectId: "car-doctor-a8124",
  storageBucket: "car-doctor-a8124.appspot.com",
  messagingSenderId: "237362573527",
  appId: "1:237362573527:web:68c213f027870648a28092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;