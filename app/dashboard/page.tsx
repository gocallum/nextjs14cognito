'use client'

import withAuth from '../utils/withAuth';
import { signOut } from '@aws-amplify/auth';

import { Amplify } from 'aws-amplify';
import amplifyConfig from '../utils/aws/config';

// Configure Amplify outside of the component but after the import
Amplify.configure(amplifyConfig);



const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <button onClick={() => signOut}>Sign out</button>
        </div>
    );
};

export default withAuth(Dashboard);