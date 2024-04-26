// /app/utils/withAuth.tsx
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';
import { useEffect, ReactNode } from 'react';
import '@aws-amplify/ui-react/styles.css';


const withAuth = (WrappedComponent: any) => {
    return function WrapperComponent(props: any) {
        return (
            <Authenticator>
                {({ user, signOut }) => {
                    const router = useRouter();

                    useEffect(() => {
                        // Only redirect if the user is not present and the component is on the client
                        if (!user) {
                            router.push('/login');
                        }
                    }, [router, user]);

                    // Return an empty fragment or minimal component if user is not authenticated
                    if (!user) {
                        return <>Loading or redirecting...</>;  // Or return a small loading spinner, etc.
                    }

                    return <WrappedComponent {...props} signOut={signOut} />;
                }}
            </Authenticator>
        );
    };
};

export default withAuth;
