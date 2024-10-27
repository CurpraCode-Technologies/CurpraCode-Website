import type { Metadata } from "next";
import Head from "next/head";
import localFont from "next/font/local";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
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
    window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1}));
    window.amplitude.init('5343c3c43b56130910dc1eac947446b', {"autocapture":{"elementInteractions":true}});
  `}
        </script>

        <script type="text/javascript">
          {`!function(){"use strict";!function(e,t){var r=e.amplitude||{_q:[],_iq:{}};if(r.invoked)e.console&&console.error&&console.error("Amplitude snippet has been loaded.");else{var n=function(e,t){e.prototype[t]=function(){return this._q.push({name:t,args:Array.prototype.slice.call(arguments,0)}),this}},s=function(e,t,r){return function(n){e._q.push({name:t,args:Array.prototype.slice.call(r,0),resolve:n})}},o=function(e,t,r){e[t]=function(){if(r)return{promise:new Promise(s(e,t,Array.prototype.slice.call(arguments)))}}},i=function(e){for(var t=0;t<m.length;t++)o(e,m[t],!1);for(var r=0;r<y.length;r++)o(e,y[r],!0)};r.invoked=!0;var a=t.createElement("script");a.type="text/javascript",a.crossOrigin="anonymous",a.src="https://cdn.amplitude.com/libs/plugin-ga-events-forwarder-browser-0.3.4-min.js.gz",a.onload=function(){e.gaEventsForwarder&&e.gaEventsForwarder.plugin&&e.amplitude.add(e.gaEventsForwarder.plugin())};var c=t.createElement("script");c.type="text/javascript",c.integrity="sha384-pY2pkwHaLM/6UIseFHVU3hOKr6oAvhLcdYkoRZyaMDWLjpM6B7nTxtOdE823WAOQ",c.crossOrigin="anonymous",c.async=!0,c.src="https://cdn.amplitude.com/libs/analytics-browser-2.11.0-min.js.gz",c.onload=function(){e.amplitude.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};var u=t.getElementsByTagName("script")[0];u.parentNode.insertBefore(a,u),u.parentNode.insertBefore(c,u);for(var p=function(){return this._q=[],this},d=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove","getUserProperties"],l=0;l<d.length;l++)n(p,d[l]);r.Identify=p;for(var g=function(){return this._q=[],this},v=["getEventProperties","setProductId","setQuantity","setPrice","setRevenue","setRevenueType","setEventProperties"],f=0;f<v.length;f++)n(g,v[f]);r.Revenue=g;var m=["getDeviceId","setDeviceId","getSessionId","setSessionId","getUserId","setUserId","setOptOut","setTransport","reset","extendSession"],y=["init","add","remove","track","logEvent","identify","groupIdentify","setGroup","revenue","flush"];i(r),r.createInstance=function(e){return r._iq[e]={_q:[]},i(r._iq[e]),r._iq[e]},e.amplitude=r}}(window,document)}();

  amplitude.init('5343c3c43b56130910dc1eac947446b');`}
        </script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SJYW7J6Z3W"
        ></script>
        <script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SJYW7J6Z3W');`}
        </script>
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
        className={`${stacionRegular.variable} ${productSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
