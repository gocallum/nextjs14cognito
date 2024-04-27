'use client'
import { useAuthenticator } from '@aws-amplify/ui-react';
import Link from 'next/link';

// if the user is logged in, then, we have the signOut link 
// if the user! then we have the sign up and sign in links


const NavLinks = () => {
    const { user, signOut } = useAuthenticator((context) => [context.user]);

    return (
        <div>
            {user ? (
                <button onClick={signOut}>Sign Out</button>
            ) : (
                <>
                    <Link href="/signup" className="mx-4 text-white hover:text-gray-300">
                        Sign Up
                    </Link>
                    <Link href="/login" className="mx-4 text-white hover:text-gray-300">
                                    Sign In
                    </Link>
            
                </>
            )}
        </div>

    )
};
export default NavLinks;