'use client'
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LoginComponent = () => {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    const router = useRouter();

        // Use useEffect to handle redirection
        useEffect(() => {
            if (user) {
                console.log("User is authenticated, redirecting to dashboard...");
                router.push('/dashboard'); // Redirect to dashboard if user is authenticated
            }
        }, [user]); // Depend on user and router to re-run effect when they change
    
    return (
        <div>
            <h1>Login Page</h1>
            {!user && (
                <p>Please log in or sign up.</p> // Show this message only if there's no user
            )}
        </div>

    )
};
export default LoginComponent;