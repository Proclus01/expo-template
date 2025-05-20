import { StyleSheet, Text, View } from 'react-native';
import SignOut from './signout';

export default function NotAuthorized() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>😕 No Access</Text>
            <Text style={styles.caption}>
                Your account doesn’t have permission to view this page.
            </Text>
            <SignOut />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
    title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
    caption: { textAlign: 'center', marginBottom: 24, color: '#666' },
});
