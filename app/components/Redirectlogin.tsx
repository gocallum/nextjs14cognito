import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoginComponent from "./LoginComponent";


/* const RedirectLogin = (WrappedComponent : any) => {
    return (props : any) => {
        const { user, signOut } = useAuthenticator((context) => [context.user]);
        const router = useRouter();

        useEffect(() => {
            if (!user) {
                console.log("No user found, redirecting to login...");
                router.push('/login');
            }
        }, [user]);

        if (!user) {
            return <p>Loading or redirecting...</p>; // Show loading or redirect message
        }

        return <WrappedComponent {...props} user={user} signOut={signOut} />;
    };
};

export default RedirectLogin; */


const RedirectLogin = () => {
    const { route } = useAuthenticator(context => [context.route]);

    return route === 'authenticated' ? <LoginComponent /> : <Authenticator />;

    
};

export default RedirectLogin;