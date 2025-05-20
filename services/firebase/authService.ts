// ~/services/firebase/authService.ts

import { signInWithEmailAndPassword, signOut, UserCredential } from "firebase/auth";
import { auth } from "./firebaseConfig";

/**
 * Sign in a user using email and password.
 * @param email - User's email address
 * @param password - User's password
 * @returns Promise resolving to Firebase UserCredential
 */
export const signIn = async (email: string, password: string): Promise<UserCredential> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error: any) {
    console.error("Login failed:", error.message);
    throw error;
  }
};

/**
 * Log out the currently signed-in user.
 * @returns Promise<void>
 */
export const logOut = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error: any) {
    console.error("Logout failed:", error.message);
    throw error;
  }
};
