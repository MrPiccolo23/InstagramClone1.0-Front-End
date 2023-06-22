import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA5hjl_kyTZHyxm0hY9wIgVYO0ZIE-jb_0",
    authDomain: "instaclone-95f44.firebaseapp.com",
    projectId: "instaclone-95f44",
    storageBucket: "instaclone-95f44.appspot.com",
    messagingSenderId: "798887854619",
    appId: "1:798887854619:web:da2564c4796f01edfceebe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the auth service
const auth = getAuth(app);

const storage = getStorage(app);

export { app, auth, storage };
