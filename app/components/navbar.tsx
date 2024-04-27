

// components/Navbar.tsx

'use client'
import Link from 'next/link';
import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import WelcomeName from './WelcomeName';
import NavLinks from './NavLinks';


interface NavItemProps {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => (
  <Link href={href} className="mx-4 text-white hover:text-gray-300">
    {label}
  </Link>
);

/** in the navbar, I want to create a component which will use the useAuthenticator 
 * and get the state 
 * 
 * if the user is signed in, I want to show the sign out Amplify 
 * if the user is not signed in, I want to show the sign in and sign up menu links which point  
 * 
*/


export const Navbar = () => {
  return (
    <Authenticator.Provider>
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <h1 className="text-xl text-white">Callum AWS Cognito App</h1>
          <WelcomeName />
        </div>
        <NavLinks />
      </div>
    </nav>
    </Authenticator.Provider>
  );
};
