import { Navbar } from "./components/navbar";
import {Footer} from "./components/footer";
import Link from "next/link";

//this is a home page using Next JS 14 and Tailwind CSS 2.2
// on this homepage, I want to have a nav bar (tailwind css compoent) section which has an app name called Callum's AWS Cognito App
// and a subtitle saying "Welcome to my AWS Cognito App"
// and a menu saying "Sign Up" which will take the user to the sign up page
// and a menu saying "Sign In" which will take the user to the sign in page
// and a menu saying "Sign Out" which will sign the user out
// and in the middle of the page, I want to a few links to the other pages of the app
// and footer which has the text "© 20214 Callum Bir. All rights reserved." 


/* import { Authenticator } from "@aws-amplify/ui-react";
import type { AppProps } from "next/app";
 */
//AWS_COGNITO_REGION='us-east-1'
//AWS_COGNITO_POOL_ID='us-east-1_0IZsUv8HN'
//AWS_COGNITO_APP_CLIENT_ID='358bfgi6ffmblbitgs6a0ooi1m'


/* Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: '358bfgi6ffmblbitgs6a0ooi1m',
      userPoolId: 'us-east-1_0IZsUv8HN',
      }
    }
  }
);
 */

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-lg font-bold">How AWS Cognito Works</h2>
        <p>
          AWS Cognito provides authentication, authorization, and user management for your web and mobile apps.
          Users can sign up and sign in to access your application, and you can manage permissions using policies.
          Here how you can integrate AWS Cognito with a custom sign-up and sign-in page using Next.js and Tailwind CSS.
        </p>
        <h2 className="text-lg font-bold">Click on Secure Page Below</h2>
        <p>
          These links below are secure pages that require authentication to access.
        </p>
        <Link href="/dashboard"> Click here to see secure link</Link>

      </main>
      <Footer />
    </div>

  );
}