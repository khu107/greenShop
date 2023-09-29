import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAAmVtM6SCrMygP4Ps3hmP-aFdnTZyJ7s",
  authDomain: "tangn-e1800.firebaseapp.com",
  projectId: "tangn-e1800",
  storageBucket: "tangn-e1800.appspot.com",
  messagingSenderId: "206816547526",
  appId: "1:206816547526:web:c4eafdd1f208b4172a7dc7",
  measurementId: "G-B27FXP55HD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { signInWithGoogle };
