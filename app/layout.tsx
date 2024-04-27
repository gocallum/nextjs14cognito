// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Callum's AWS Cognito App",
  description: "This app is the shows how to use AWS Cognito with Next JS 14 ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("loading the layout page");
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
