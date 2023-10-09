// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJfrI2b_9omG2XjsubTBQKFB6k2ivdcHU",
  authDomain: "social-event-project.firebaseapp.com",
  projectId: "social-event-project",
  storageBucket: "social-event-project.appspot.com",
  messagingSenderId: "57056516227",
  appId: "1:57056516227:web:1de3c996d6e9b48d7523b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth