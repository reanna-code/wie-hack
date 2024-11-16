import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged
} from "firebase/auth";
import app from "./db"

const auth = getAuth(app);

import { FirebaseError } from "firebase/app";

export const handleAuthError = (error) => {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case "auth/email-already-in-use":
        alert("Email already in use!");
        break;
      case "auth/invalid-email":
        alert("Invalid email address!");
        break;
      case "auth/weak-password":
        alert("Password should be at least 6 characters!");
        break;
      default:
        alert("Authentication error: " + error.message);
    }
  }
};


export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User created:", userCredential.user);
  } catch (error) {
    console.error("Error signing up:", error.message);
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", userCredential.user);
  } catch (error) {
    console.error("Error signing in:", error.message);
    throw error;
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out:", error.message);
    throw error;
  }
};

export const monitorAuthState = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is signed in:", user);
    } else {
      console.log("No user is signed in");
    }
  });
};