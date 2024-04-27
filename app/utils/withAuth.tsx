import { Authenticator } from '@aws-amplify/ui-react';
import React from 'react';
import '@aws-amplify/ui-react/styles.css';

import amplifyConfig from '../utils/aws/config';
import { Amplify } from 'aws-amplify';
import { AuthUser } from '@aws-amplify/auth';
Amplify.configure(amplifyConfig);


interface WithAuthProps {
    user?: AuthUser;  // Allow user to be undefined
    signOut?: () => void;  // Allow signOut to be undefined
}


// Use React.ComponentType to define a generic component type
const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P & WithAuthProps>): React.ComponentType<P> => {
    const WrapperComponent: React.FC<P> = (props) => {
        return (
            <Authenticator>
                {({ signOut, user }) => (
                    <WrappedComponent {...props as P & WithAuthProps} user={user} signOut={signOut} />
                )}
            </Authenticator>
        );
    };

    return WrapperComponent;
};

export default withAuth;
