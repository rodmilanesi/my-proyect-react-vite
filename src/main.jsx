import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { CustomProvider } from "./context/cartContext";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQIp8gqBYS063RPCT6QU1C6eo1odJ-IJE",
  authDomain: "proyecto-react-ram.firebaseapp.com",
  projectId: "proyecto-react-ram",
  storageBucket: "proyecto-react-ram.appspot.com",
  messagingSenderId: "704488274867",
  appId: "1:704488274867:web:2b83ee54ead5c2048aa9c6",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider>
      <App />
    </CustomProvider>
  </React.StrictMode>
);
