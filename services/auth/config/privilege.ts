import { PRIVILEGED_ROLES } from './apiConfig';

/**
 * Returns true if the user has any of the privileged roles.
 */
export function isUserPrivileged(user: { accessLevel?: string[] } | null | undefined): boolean {
  if (!user || !user.accessLevel) return false;
  return user.accessLevel.some(role => PRIVILEGED_ROLES.includes(role));
}