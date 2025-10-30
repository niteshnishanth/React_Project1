// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase config (replace with your own)
const firebaseConfig = {
  apiKey: "AIzaSyAjr4icpjJAWDWHxgDXH4QM3t85rbgZb98",
  authDomain: "my-react-project-b4805.firebaseapp.com",
  projectId: "my-react-project-b4805",
  storageBucket: "my-react-project-b4805.firebasestorage.app",
  messagingSenderId: "426930395441",
  appId: "1:426930395441:web:f82df0e5437acdd8dd3810",
  measurementId: "G-B5HTV4V74E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth and provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
