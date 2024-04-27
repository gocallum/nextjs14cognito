//app/dashboard/page.tsx
'use client'

import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import withAuth from '../utils/withAuth';

const Dashboard = () => {

    return (
        <>
            <Navbar />
            <h1>Dashboard Page</h1>
            <p>Welcome to the dashboard! This page is only accessible if you are logged in.</p>
            <Footer />
            </>

    );
};

export default withAuth(Dashboard)