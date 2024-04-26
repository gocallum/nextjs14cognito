// components/Navbar.tsx
import Link from 'next/link';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';


interface NavItemProps {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => (
  <Link href={href} className="mx-4 text-white hover:text-gray-300">
    {label}
  </Link>
);

// I want the signout link to come from amplify signOut function

export const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <h1 className="text-xl text-white">Callum AWS Cognito App</h1>
          <p className="text-sm text-white">Welcome to my AWS Cognito App</p>
        </div>
        <div>
          <NavItem href="/signup" label="Sign Up" />
          <NavItem href="/login" label="Sign In" />
          <NavItem href='/signOut' label="Sign Out" />          

        </div>
      </div>
    </nav>
  );
};
