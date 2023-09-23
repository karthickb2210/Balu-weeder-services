import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAqXvbE-3hyOsAqdZq0-ARgmDxp7BGYJio",
  authDomain: "balu-weeder-services.firebaseapp.com",
  projectId: "balu-weeder-services",
  storageBucket: "balu-weeder-services.appspot.com",
  messagingSenderId: "212205994917",
  appId: "1:212205994917:web:1433589d629657194fde4c",
  measurementId: "G-D3BV3NHLM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider}