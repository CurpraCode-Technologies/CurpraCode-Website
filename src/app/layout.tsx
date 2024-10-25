import type { Metadata } from "next";
import Head from "next/head";
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
  title: "CurpraCode Technologies - Innovative Software Development Studio",
  description:
    "CurpraCode Technologies specializes in delivering cutting-edge software solutions, tailored web and mobile applications, and digital innovations to help businesses grow and succeed. From concept to deployment, we provide expertise in a wide range of development services, ensuring top-quality, user-centric digital experiences.",
  keywords:
    "Software Development, Web Development, Mobile Applications, CurpraCode Technologies, Sunderland, London, Digital Solutions, IT Services, Custom Software, App Development, Digital marketing, Open Source, Digital Agency, IT consultancy, software service, software, Software development studio, Sales lead",
  authors: [{ name: "CurpraCode Technologies Ltd" }],

  openGraph: {
    type: "website",
    url: "https://curpracode.com",
    title: "CurpraCode Technologies - Innovative Software Development Studio",
    description:
      "Delivering innovative software solutions and digital services for businesses worldwide. Our expertise in custom development helps bring your ideas to life.",
    images: [
      {
        url: "/curpra-cover.png",
        width: 1200,
        height: 630,
        alt: "CurpraCode Technologies Banner Image",
      },
    ],
    siteName: "CurpraCode Technologies",
    locale: "en_GB",
  },

  twitter: {
    card: "summary_large_image",
    site: "@curpracode_hq",
    title: "CurpraCode Technologies - Software Development Studio",
    description:
      "Expert software development and digital innovation services for businesses worldwide.",
    images: "/curpra-cover.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Curpracode Technologies Ltd",
              "url": "https://curpracode.com",
              "logo": "https://curpracode.com/curpra.png",
              "sameAs": [
                "https://www.linkedin.com/company/curpracode/",
                "https://twitter.com/curpracode_hq"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44-7717-859391",
                "contactType": "Customer Service"
              }
            }
          `}
        </script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
