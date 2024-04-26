//  /app/login/page.tsx

'use client'
import { Authenticator, View, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/navigation'; // Updated import
import { useEffect, useState } from 'react';
import { Amplify } from 'aws-amplify';
import amplifyConfig from '../utils/aws/config';

const Login = () => {
    const router = useRouter();
    const currentConfig = Amplify.getConfig();
    const configString = JSON.stringify(currentConfig, null, 2);
    console.log(currentConfig);
    console.log("loading the login page");
    Amplify.configure(amplifyConfig)
      

    return (
        <Authenticator>
            {({ signOut, user }) => {  // Using render props to access context
                useEffect(() => {
                    if (user) {  // Only navigate if on the client and user is authenticated
                        router.push('/dashboard');
                    }
                }, [router, user]);

                return (
                    <div>
                        <h1>Login Page</h1>
                        {user && (
                            <button onClick={signOut}>Sign Out</button>
                        )}
                        <pre>{configString}</pre>  
                    </div>
                );
            }}
        </Authenticator>
    );
};


export default Login;
