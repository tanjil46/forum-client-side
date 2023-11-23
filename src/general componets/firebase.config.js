// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYH7xNSP3_AZvf3d8-C18wnUDXZVZZiUw",
  authDomain: "forum-online-6d608.firebaseapp.com",
  projectId: "forum-online-6d608",
  storageBucket: "forum-online-6d608.appspot.com",
  messagingSenderId: "944204186270",
  appId: "1:944204186270:web:fedc3294b5523eabea318f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;