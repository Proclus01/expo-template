import { useCallback, useState } from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Protected from '@/components/guards/Protected'; // ← updated
import { useAuth } from '@/contexts/auth/AuthContext';
import { useTheme } from 'react-native-paper';
import SignOut from './signout'; // your existing helper

export default function Home() {
  return (
    <Protected requirePrivilege> 
      {({ accessLevel }) => <HomeContent accessLevel={accessLevel} />}
    </Protected>
  );
}

function HomeContent({ accessLevel }: { accessLevel: string[] }) {
  const { user } = useAuth();
  const { colors } = useTheme();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  return (
    <FlatList
      data={[]}
      keyExtractor={() => 'dummy'}
      renderItem={() => null}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListHeaderComponent={
        <>
          <View style={[styles.header, { backgroundColor: colors.surface }]}>
            <Text style={styles.headerText}>
              Welcome{user?.displayName ? `, ${user.displayName}` : ''}!
            </Text>
            <Text style={styles.access}>
              Access Level: {accessLevel.join(', ') || '—'}
            </Text>
            <SignOut />
          </View>
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  header: { paddingTop: 50, paddingBottom: 10, alignItems: 'center' },
  headerText: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  access: { marginTop: 5, fontSize: 16, color: '#666' },
  translateSection: { marginTop: 20, alignItems: 'center' },
});