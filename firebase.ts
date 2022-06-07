// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBATdXNbXuAZjh-_M20r2MLIRwOXQ8O0-U',
  authDomain: 'next-netflix-clone-4ae85.firebaseapp.com',
  projectId: 'next-netflix-clone-4ae85',
  storageBucket: 'next-netflix-clone-4ae85.appspot.com',
  messagingSenderId: '418366388830',
  appId: '1:418366388830:web:7fba7062230ced026792cf',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
