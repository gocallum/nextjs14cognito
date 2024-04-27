import { Navbar } from "./components/navbar";
import {Footer} from "./components/footer";
import Link from "next/link";
import WelcomeName from "./components/WelcomeName";
//this is a home page using Next JS 14 and Tailwind CSS 2.2
// on this homepage, I want to have a nav bar (tailwind css compoent) section which has an app name called Callum's AWS Cognito App

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
        <Link href="/dashboard" className="text-blue-600 underline hover:text-blue-800"> Click here to see secure link</Link>

      </main>
      <Footer />
    </div>
  );
}