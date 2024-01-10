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
  apiKey: "AIzaSyBjKUlCDgyck8xsGL9ORWllz8GzTK2fD-8",
  authDomain: "crown-clothing-a505b.firebaseapp.com",
  projectId: "crown-clothing-a505b",
  storageBucket: "crown-clothing-a505b.appspot.com",
  messagingSenderId: "944929128501",
  appId: "1:944929128501:web:cff4fe99d61d14f506b17c"
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