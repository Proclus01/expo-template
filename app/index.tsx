import { useAuth } from '@/contexts/auth/AuthContext';
import { Redirect } from 'expo-router';

export default function Index() {
  const { user, loading } = useAuth();
  if (loading) return null;          // splash handled elsewhere
  return <Redirect href={user ? '/home' : '/signin'} />;
}