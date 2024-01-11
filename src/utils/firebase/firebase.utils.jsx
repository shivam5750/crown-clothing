// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

import { 
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt : 'select_account'
}
)

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInwithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

//DB
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additonalvalue = {}) => {
  if (!userAuth) return;
  
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdat = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdat,
        ...additonalvalue,
      });
    } catch (error) {
      console("Error while adding user to DB", error.message);
    }
  }

  return userDocRef;
}

export const  signInUsingEmailAndPasswordAuth = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const  signInUsingEmailAndPasswordAuthen = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await  signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);