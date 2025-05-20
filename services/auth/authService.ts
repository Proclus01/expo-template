import {
  signIn as firebaseSignIn,
  logOut as firebaseSignOut,
} from '../firebase/authService';
import { auth } from '../firebase/firebaseConfig';

import { onAuthStateChanged } from 'firebase/auth';
import { verifyToken } from './api/authentication';
import { getAccessLevel } from './api/authorization';
import { AppUser } from './types';

/* -------------------------------------------------------------------------- */
/*  PUBLIC HELPERS                                                            */
/* -------------------------------------------------------------------------- */

/** Subscribe to Firebase auth changes and enrich the user with accessLevel. */
export const subscribeToAuthChanges = (
  setUser: (u: AppUser | null) => void,
) => {
  return onAuthStateChanged(auth, async firebaseUser => {
    if (!firebaseUser) {
      setUser(null);
      return;
    }

    try {
      const token = await firebaseUser.getIdToken(true);
      const verified = await verifyToken(token);
      if (!verified) {
        setUser(null);
        return;
      }

      const accessLevel = await getAccessLevel(token);
      // Cast so TS knows we added accessLevel
      setUser({ ...(firebaseUser as any), accessLevel } as AppUser);
    } catch (err) {
      console.error('Auth subscription error:', err);
      setUser(null);
    }
  });
};

/** Thin wrappers around your firebase helpers ----------------------------- */

export const signIn = (email: string, pw: string) =>
  firebaseSignIn(email, pw);

export const signOut = () => firebaseSignOut();
