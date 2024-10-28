import type { Metadata } from "next";
import Head from "next/head";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const stacionRegular = localFont({
  src: "./fonts/Stacion Regular.otf",
  variable: "--font-stacion-regular",
  weight: "100 900",
});
const productSans = localFont({
  src: "./fonts/ProductSans-Regular.ttf",
  variable: "--font-product-sans",
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
  robots: "all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SJYW7J6Z3W"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SJYW7J6Z3W');
          `}
        </script>

        {/* Amplitude Analytics */}
        <script
          src="https://cdn.amplitude.com/libs/analytics-browser-2.11.1-min.js.gz"
          async
        ></script>
        <script
          src="https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.8.0-min.js.gz"
          async
        ></script>
        <script>
          {`
            window.amplitude.add(window.sessionReplay.plugin({ sampleRate: 1 }));
            window.amplitude.init('5343c3c43b56130910dc1eac947446b', {
              autocapture: { elementInteractions: true },
            });
          `}
        </script>

        {/* Schema Markup */}
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
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script>
      </Head>
      <body
        className={`${stacionRegular.variable} ${productSans.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-SJYW7J6Z3W" />
    </html>
  );
}
