import { useAuth } from '@/contexts/auth/AuthContext';
import { isUserPrivileged } from '@/services/auth/config/privilege';
import { router, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

type ProtectedProps = {
    children: (p: { accessLevel: string[] }) => React.ReactNode;
    /** If true, user must hold one of PRIVILEGED_ROLES to enter */
    requirePrivilege?: boolean;
};

/**
 * Reusable auth/role gate.
 *
 *   <Protected requirePrivilege>{…}</Protected>
 *   <Protected>{…}</Protected>              // auth-only
 */
export default function Protected({
    children,
    requirePrivilege = false,
}: ProtectedProps) {
    const { user, loading } = useAuth();
    const segments = useSegments(); // e.g. ['(auth)', 'admin', 'dashboard']

    /* Kick unauthenticated visitors to /signin */
    useEffect(() => {
        if (!loading && !user) {
            const attempted = '/' + segments.join('/');
            router.replace({ pathname: '/signin', params: { next: attempted } });
        }
    }, [loading, user, segments]);

    /* Kick authenticated but under-privileged users */
    useEffect(() => {
        if (!loading && user && requirePrivilege && !isUserPrivileged(user)) {
            router.replace('/not-authorized');
        }
    }, [loading, user, requirePrivilege]);

    /* Show spinner while deciding */
    if (loading || !user) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    /* Allowed → render subtree */
    return <>{children({ accessLevel: user.accessLevel })}</>;
}
