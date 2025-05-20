import Button from '@/components/ui/Buttons/Button';
import { logOut } from '@/services/firebase/authService';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function SignOut() {
  const [loading, setLoading] = useState(false);

  async function handle() {
    setLoading(true);
    try {
      await logOut();              // ← Firebase sign-out
      router.replace('/signin');   // ← Go back to the sign-in screen
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading
        ? <ActivityIndicator size="large" />
        : <Button title="Sign out" onPress={handle} />}
    </View>
  );
}