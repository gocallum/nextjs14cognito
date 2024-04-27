import React, { useEffect, useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useAuthenticator } from '@aws-amplify/ui-react';


import { Amplify } from 'aws-amplify';
import amplifyConfig from '../utils/aws/config';
Amplify.configure(amplifyConfig);

const customSignUpFields = [
    {
        label: 'Username',
        key: 'username',
        required: true,
        type: 'username',
        placeholder: 'Enter your Username',
        displayOrder: 1,
    },
    {
        label: 'Password',
        key: 'password',
        required: true,
        type: 'Password',
        placeholder: 'Enter your Password',
        displayOrder: 2,
    },
    {
        label: 'Confirm Password',
        key: 'ConfirmPassword',
        required: true,
        type: 'Password',
        placeholder: 'Please Confirm your Password',
        displayOrder:3,
    },
    {
        label: 'Family Name',
        key: 'family_name',
        required: true,
        type: 'text',
        placeholder: 'Enter your family name',
        displayOrder: 4,
    },
    {
        label: 'Given Name',
        key: 'given_name',
        required: true,
        type: 'given_name',
        placeholder: 'Enter your first name',
        displayOrder: 5,
    },

    // ... add any other custom fields
];


const NavLinks = () => {
    const [showAuthenticator, setShowAuthenticator] = useState(false);
    const { user, signOut } = useAuthenticator((context) => [context.user]);

    useEffect(() => {
        if (user) {
            setShowAuthenticator(false);
        }
    }, [user]);


    return (
        <>
            {user ? (
                <button onClick={signOut} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Sign Out
                </button>

            ) : (
                <button onClick={() => setShowAuthenticator(true)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Sign In
                </button>
            )}



            {showAuthenticator && (
                <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex justify-end p-2">
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setShowAuthenticator(false)}>
                                    Close
                                </button>
                            </div>

                            <div className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                                {/* The Authenticator component */}
                                <Authenticator
                                    components={{
                                        SignUp: {
                                            FormFields() {
                                                return (
                                                    <>
                                                        {customSignUpFields.map((field) => (
                                                            // Replace this with your form field component if you have one,
                                                            // or just use a basic input as an example
                                                            <input
                                                                key={field.key}
                                                                type={field.type}
                                                                name={field.key}
                                                                placeholder={field.placeholder}
                                                                required={field.required}
                                                            // Add any other props you need to pass to your input
                                                            />
                                                        ))}
                                                    </>
                                                );
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavLinks;
