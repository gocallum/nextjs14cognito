# Next.js 14 with AWS Cognito Integration

This project demonstrates how to integrate AWS Cognito with Next.js 14, leveraging the new App Router instead of the traditional page-based router. This approach does not utilize the Amplify CLI but instead manually configures AWS Amplify to work with an existing user pool in AWS Cognito.

## Project Structure

- `/app/login/page.tsx`: This is the login page that handles user authentication.
- `/app/dashboard`: A secure page that users see after logging in.
- `/app/page.tsx`: Utilizes common components such as `navbar.tsx` and `footer.tsx`.

## Configuration

Before running the application, you must set up and configure AWS Cognito:

1. Create a User Pool in AWS Cognito.
2. Store the necessary configuration details in `/app/util/aws/config.ts`. This file should include your User Pool ID and Client ID among other settings.

## Running the Project

To start the development server, use one of the following commands:

```bash
npm run dev
```

Open http://localhost:3000 to view your project in the browser. The application will reload if you make edits to the source files.

## Amplify Configuration
The project manually configures Amplify as opposed to using the Amplify CLI. The configuration for Amplify is specified in /app/util/aws/config.ts, ensuring AWS services are properly integrated.

## Core Design
The application's core design revolves around secure authentication and session management using AWS Cognito. The /app/login/page.tsx serves as the entry point for authentication, while /app/dashboard is a protected route that only authenticated users can access.

### TODO
Navbar Integration: Connect the navbar with Amplify authentication links to allow for dynamic user interface changes based on authentication state.
