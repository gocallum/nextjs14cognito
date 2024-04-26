'use client'

import withAuth from '../utils/withAuth';
import { signOut } from '@aws-amplify/auth';


const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <button onClick={() => signOut}>Sign out</button>
        </div>
    );
};

export default withAuth(Dashboard);