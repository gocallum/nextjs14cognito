// /app/login/page.tsx
'use client'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import amplifyConfig from '../utils/aws/config';
import LoginComponent from '../components/LoginComponent';

// Configure Amplify outside of the component but after the import
Amplify.configure(amplifyConfig);


const Login = () => {
    const router = useRouter();
    console.log("loading the login page");

    return (
        <Authenticator>
            <h1>Login Page</h1>
            <LoginComponent/>
        </Authenticator>
    );
};

export default Login;
