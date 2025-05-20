import { useAuth } from '@/contexts/auth/AuthContext';
import { signIn } from '@/services/firebase/authService';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// UI primitives & theme
import Button from '@/components/ui/Buttons/Button';
import Input from '@/components/ui/InputBox/Input';
import { useTheme } from 'react-native-paper';

export default function SignIn() {
  /******************************************************************
   * state
   ******************************************************************/
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { colors } = useTheme();          // from your ThemeProvider
  const { user } = useAuth();             // already subscribed to auth
  const { error } = useLocalSearchParams<{ error?: string }>(); // ?error=... in URL

  /******************************************************************
   * redirect if user is already signed in
   ******************************************************************/
  useEffect(() => {
    if (user) router.replace('/home');
  }, [user]);

  /******************************************************************
   * handlers
   ******************************************************************/
  async function handleSignIn() {
    setLoading(true);
    setErrorMessage(null);
    try {
      await signIn(email, password);      // <- your Firebase call
      router.replace('/home');
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  /******************************************************************
   * render
   ******************************************************************/
  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      {/* error passed via route param */}
      {error && <Text style={styles.error}>{error}</Text>}
      {/* local auth error */}
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        width="80%"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        width="80%"
      />

      <Button
        title="Sign In"
        mode="contained"
        onPress={handleSignIn}
        loading={loading}
        disabled={loading}
      />
    </View>
  );
}

/********************************************************************
 * local styles – only layout rules unique to this screen
 ********************************************************************/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 12,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '80%',
  },
});
