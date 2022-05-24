// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// const firebaseConfig = {
//     apiKey: "AIzaSyDz7HFG-VJrc7hhRWnK8Yx3f8Wj832wktQ",
//     authDomain: "manufacture-tools.firebaseapp.com",
//     projectId: "manufacture-tools",
//     storageBucket: "manufacture-tools.appspot.com",
//     messagingSenderId: "675359450845",
//     appId: "1:675359450845:web:89327c2953705944c95d34"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


