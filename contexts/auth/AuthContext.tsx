import { subscribeToAuthChanges } from '@/services/auth/authService';
import { AppUser } from '@/services/auth/types';
import { createContext, useContext, useEffect, useState } from 'react';

type AuthShape = { user: AppUser | null; loading: boolean };
const AuthContext = createContext<AuthShape | null>(null);

/** Call once at the top of the app (in app/_layout.tsx) */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = subscribeToAuthChanges(u => {
      setUser(u);
      setLoading(false);
    });
    return unsub;            // clean up on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

/** Typed convenience hook */
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must sit inside <AuthProvider>');
  return ctx;
};
