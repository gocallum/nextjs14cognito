'use client'
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import {
  Authenticator,
} from '@aws-amplify/ui-react';

import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

import amplifyConfig from '../utils/aws/config';
Amplify.configure(amplifyConfig);

export default function App() {
 
  return (
    <Authenticator >
        
      {({ signOut, user }) => (
        
        <main>
            <Navbar />

          <h1>Hello {user?.username}</h1>         
          <Footer />
        </main>
      )}
    </Authenticator>
  );
}