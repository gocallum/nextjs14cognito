//app/dashboard/page.tsx
'use client'

import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import withAuth from '../utils/withAuth';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <main className="flex-grow container mx-auto p-4">
                <h1 className="text-3xl font-bold underline mb-4">Secure Dashboard</h1>
                <section className="mb-6">
                    <p className="mb-2">
                        The Dashboard is a secured area of our platform, accessible only to authenticated users. It&apos;s important to note that while this page is protected, it contains no direct code for managing AWS Cognito authentication.
                    </p>
                    <p className="mb-2">
                        Instead, this page is wrapped with a higher-order component called <code>withAuth</code>. This HOC handles the authentication logic, ensuring that unauthorized users cannot access the Dashboard. It&apos;s a testament to the modular design of our application—security is centralized and managed globally.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">Authentication Overview</h2>
                    <p className="mb-2">
                        When you navigate to the Dashboard, the <code>withAuth</code> HOC checks your authentication state behind the scenes. If it determines that you are not logged in, it will redirect you to the sign-in page. This seamless process relies on AWS Cognito services to verify your credentials securely.
                    </p>
                    <p className="mb-2">
                        Here&apos;s a simplified representation of what the <code>withAuth</code> HOC does:
                    </p>
                    <pre className="bg-gray-100 p-4 rounded-md mb-2">
                        <code className="block whitespace-pre-wrap text-sm text-blue-600">
{`const withAuth = (WrappedComponent) => {
    const WrapperComponent = (props) => {
        // Authenticator checks the user's session
        return (
            <Authenticator>
                {({ user }) => (
                    // WrappedComponent is rendered only if the user is authenticated
                    <WrappedComponent {...props} user={user} />
                )}
            </Authenticator>
        );
    };
    return WrapperComponent;
};`}
                        </code>
                    </pre>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default withAuth(Dashboard);
