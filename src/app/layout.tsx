import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Curpracode Technologies - Innovative Software Development Studio",
  description: "Curpracode Technologies specializes in delivering cutting-edge software solutions, tailored web and mobile applications, and digital innovations to help businesses grow and succeed. From concept to deployment, we provide expertise in a wide range of development services, ensuring top-quality, user-centric digital experiences.",
  keywords: "Software Development, Web Development, Mobile Applications, CurpraCode Technologies, Digital Solutions, IT Services, Custom Software, App Development, Digital marketing, Open Source, Digital Agency, IT consultancy, software service, software, Software development studio, Sales lead",
  authors: [{ name: "CurpraCode Technologies Ltd" }],
  // Open Graph Metadata
  openGraph: {
    type: "website",
    url: "https://curpracode.com", // Your website URL
    title: "CurpraCode Technologies - Innovative Software Development Studio",
    description: "Delivering innovative software solutions and digital services for businesses worldwide. Our expertise in custom development helps bring your ideas to life.",
    images: [
      {
        url: "/images/curpracode-banner.jpg", // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: "CurpraCode Technologies Banner Image",
      },
    ],
    siteName: "CurpraCode Technologies",
  },
  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    site: "@curpracode", // Your Twitter username
    title: "CurpraCode Technologies - Software Development Studio",
    description: "Expert software development and digital innovation services for businesses worldwide.",
    images: [
      {
        url: "/images/curpracode-banner.jpg", // Same as the Open Graph image
        alt: "Curpracode Technologies Banner Image",
      },
    ],
  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
