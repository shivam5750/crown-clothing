// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth, 
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider
} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDid_QezNBnVxhUFgqGO8-klcGVTVW2lNI",
  authDomain: "crown-clothing-b82c8.firebaseapp.com",
  projectId: "crown-clothing-b82c8",
  storageBucket: "crown-clothing-b82c8.appspot.com",
  messagingSenderId: "549755615951",
  appId: "1:549755615951:web:0aecadb618982159d2d5ba"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt : 'select_account'
}
)

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);