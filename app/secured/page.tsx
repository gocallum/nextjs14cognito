'use client'
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import {
  Authenticator,
  View,
  Button,
  useAuthenticator,
} from '@aws-amplify/ui-react';


import amplifyConfig from '../utils/aws/config';
import { Navbar } from '../components/navbar';

Amplify.configure(amplifyConfig);

export default function App() {
  const components = {
    SignIn: {
      Footer() {
        const { toForgotPassword } = useAuthenticator();
        return (
          <View textAlign="center">
            <Button fontWeight="normal" onClick={toForgotPassword} size="small">
              Forgot Password???
            </Button>
          </View>
        );
      },
    },
  };

  return (
    <Authenticator components={components}>
        
      {({ signOut, user }) => (
        
        <main>
            <Navbar />

          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}