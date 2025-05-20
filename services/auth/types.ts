// Absolute minimal extension of Firebase's User record
import { User as FirebaseUser } from 'firebase/auth';

/**
 * Your application-specific user object.
 * Adds the accessLevel array to the official Firebase User.
 */
export interface AppUser extends FirebaseUser {
  accessLevel: string[];
}
