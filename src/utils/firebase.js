import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUdJ_pqMAOPzlsoAdsl1KAF_jaNe7MXUY",
  authDomain: "netflix-clone-27d37.firebaseapp.com",
  projectId: "netflix-clone-27d37",
  storageBucket: "netflix-clone-27d37.appspot.com",
  messagingSenderId: "967623231166",
  appId: "1:967623231166:web:632d700e42a53df1b840ef",
  measurementId: "G-S19H2LX2KN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
