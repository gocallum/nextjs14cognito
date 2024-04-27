import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';

import amplifyConfig from '../utils/aws/config';
import { Amplify } from 'aws-amplify';
Amplify.configure(amplifyConfig);


const withAuth = (WrappedComponent : any ) => {
    const WrapperComponent = (props: any) => {
        return (
            <Authenticator components={WrappedComponent}>
                      {({ signOut, user }) => (
                        <WrappedComponent {...props} user={user} signOut={signOut} />
                      )}
            </Authenticator>
        );
    };

    return WrapperComponent;
};

export default withAuth;
