import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from "firebase/app";
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
    apiKey: "AIzaSyBSqKvmTnIHTq0ThAvAkjGMApIbnqJcbB0",
    authDomain: "first-project-d066b.firebaseapp.com",
    projectId: "first-project-d066b",
    storageBucket: "first-project-d066b.appspot.com",
    messagingSenderId: "848365338448",
    appId: "1:848365338448:web:0ca5bf58d25dcc6195b655"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render( 
    < App / > ,
    document.getElementById('root')
);