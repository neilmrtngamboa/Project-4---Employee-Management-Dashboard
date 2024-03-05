// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqpCuTn9UfeAiy5vvi9XdNdX2E_ePcERA",
  authDomain: "employee-dashboard-management.firebaseapp.com",
  projectId: "employee-dashboard-management",
  storageBucket: "employee-dashboard-management.appspot.com",
  messagingSenderId: "757593365722",
  appId: "1:757593365722:web:cd964f2ad0738dfdce59e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;