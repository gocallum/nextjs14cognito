// /app/login/page.tsx
'use client'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/navigation'; // Updated import
import { useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import amplifyConfig from '../utils/aws/config';

// Configure Amplify outside of the component but after the import
Amplify.configure(amplifyConfig);

const Login = () => {
    const router = useRouter();

    return (
        <Authenticator>
            {({ signOut, user }) => {
                // Redirect if the user is authenticated
                useEffect(() => {
                    if (user) {
                        console.log("User is authenticated, redirecting to dashboard...");
                        router.push('/dashboard');
                    }
                    console.log("User is not authenticated");
                }, [user]);

                return (
                    <div>
                        <h1>Login Page</h1>
                        {user && (
                            <button onClick={signOut}>Sign Out</button>
                        )}
                    </div>
                );
            }}
        </Authenticator>
    );
};

export default Login;
