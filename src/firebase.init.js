// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPce_JRiqOKNx_C3NK7JBU7JPrsALPmAY",
  authDomain: "fir-authentication-49968.firebaseapp.com",
  projectId: "fir-authentication-49968",
  storageBucket: "fir-authentication-49968.appspot.com",
  messagingSenderId: "346018924289",
  appId: "1:346018924289:web:28968bbac559fbdbdcfd00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;