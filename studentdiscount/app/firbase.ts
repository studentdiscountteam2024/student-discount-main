import { initializeApp } from "firebase/app";
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2unKInlssiP4y0CuDUtfalrA9JNl5ED4",
  authDomain: "student-discount-786.firebaseapp.com",
  projectId: "student-discount-786",
  storageBucket: "student-discount-786.firebasestorage.app",
  messagingSenderId: "990520237892",
  appId: "1:990520237892:web:eea60cad2c02d19e1bc111",
  measurementId: "G-M7GX67EQXV",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
};
