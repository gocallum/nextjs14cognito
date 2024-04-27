import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';

const withAuth = (WrappedComponent : any ) => {
    const WrapperComponent = (props: any) => {
        const { user, signOut } = useAuthenticator((context) => [context.user]);
        const router = useRouter();

        useEffect(() => {
            if (!user) {
                console.log("Redirecting to login because no user is authenticated...");
                router.push('/login');
            }
        }, [user, router]);

        if (!user) {
            return <p>Loading or redirecting...</p>;
        }

        return (
            <Authenticator.Provider>
                <WrappedComponent {...props} user={user} signOut={signOut} />
            </Authenticator.Provider>
        );
    };

    return WrapperComponent;
};

export default withAuth;
