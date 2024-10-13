'use client'
import Image from "next/image";
import styles from "./home.module.css"
import { useRef } from "react";
import { Sticky } from "@/components/cursor";

export default function Home() {
  const stickyElement = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {/* header component */}

      <div className={styles.gradientBackground}>
        <div ref={stickyElement}>
          <Sticky stickyElement={stickyElement} />
        </div>
        <div className="fixed top-0 left-0 right-0 flex justify-between items-center z-10 mx-10 py-10 text-black">
          {/* logo */}
          <a href="/" className="flex items-center space-x-2">
            <Image
              aria-hidden
              src={"/curpra.png"}
              alt="icon"
              width={40}
              height={40}
            />
            <h3>CurpraCode</h3>
          </a>

          {/* navlinks in a backkground*/}

          <div className="w-96 bg-gray-400/80 p-1 px-1 rounded-full shadow-md">
            <ul className="flex text-sm justify-between items-center space-x-4">
              <li className="rounded-full  px-3 py-1 hover:bg-gray-200 transition-all">
                <a href="">About</a>
              </li>
              <li className="rounded-full px-3 py-1 hover:bg-gray-200 transition-all">
                <a href="">Services</a>
              </li>
              <li className="rounded-full px-3 py-1 hover:bg-gray-200 transition-all">
                <a href="">Courses</a>
              </li>
              <li className="rounded-full px-3 py-1 hover:bg-gray-200 transition-all">
                <a href="">Community</a>
              </li>

            </ul>
          </div>

          <button className="relative flex items-center px-3 py-1 bg-white text-black rounded-full transition-all duration-300 hover:bg-blue-700 hover:text-white group">
            <span className="mr-2">
              <span className="inline-block text-2xl  transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1">
                •
              </span>
            </span>
            <span className="mr-2 text-sm">LET TALK</span>
            <span className="inline-block transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1">
              →
            </span>
          </button>

        </div>

        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen mt-72 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> {/* Updated: Added mt-20 for margin-top */}
          <div className="relative mt-56 content-center flex flex-col justify-center items-center">
            {/* Animated Business Icon */}
            <div className="absolute left-10 top-1/4 animate-bounce-slow flex flex-col items-start">
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.92098 2.29927C6.93571 1.53286 5.5 2.23498 5.5 3.48325V20.492C5.5 21.9142 7.2945 22.538 8.17661 21.4224L12.3676 16.1222C12.6806 15.7264 13.1574 15.4956 13.6619 15.4956H20.5143C21.9425 15.4956 22.5626 13.6885 21.4353 12.8116L7.92098 2.29927Z" fill="#ffffff" />
              </svg>
              <div className="bg-purple-200 text-black text-xs px-3 py-1 rounded-full shadow-lg">
                <span>Business</span>
              </div>
            </div>


            <div className="absolute right-10 top-1/4 animate-bounce-r-slow flex flex-col-reverse items-end">
              <div className="bg-yellow-200 text-black text-xs px-3 py-1 rounded-full shadow-lg mr-2">
                <span>Software</span>
              </div>
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: 'scaleX(-1)' }}
              >
                <path d="M7.92098 2.29927C6.93571 1.53286 5.5 2.23498 5.5 3.48325V20.492C5.5 21.9142 7.2945 22.538 8.17661 21.4224L12.3676 16.1222C12.6806 15.7264 13.1574 15.4956 13.6619 15.4956H20.5143C21.9425 15.4956 22.5626 13.6885 21.4353 12.8116L7.92098 2.29927Z" fill="#000" />
              </svg>
            </div>


            {/* Hero Content */}
            <div className="text-center px-5">
              <div className="mb-6">
                <img src="/path-to-your-envelope-image.png" alt="Envelope Icon" className="mx-auto w-32 h-32" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Custom Software Solution
              </h1>
              <p className="text-black text-md max-w-lg mx-auto">
                Starting a business and going digital can be tough, but we simplify it with seamless digital solutions that connect you to your customers.
              </p>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 top-80 flex items-center space-x-2">
              <span className="text-yellow-500 text-lg">⭐</span>
              <p className="text-gray-200 text-sm">
                <span className="text-lg font-bold"> 4.8 </span>   from Google Reviews
              </p>
            </div>
          </div>
          {/* <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              <li className="mb-2">
                Get started by editing{" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  src/app/page.tsx
                </code>
                .
              </li>
              <li>Save and see your changes instantly.</li>
            </ol>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus error dicta explicabo perspiciatis mollitia, unde repellat! Aspernatur ea earum quos eligendi id, tempore magni. Officia quis ratione rerum quidem in?</p>
            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="https://nextjs.org/icons/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
                Deploy now
              </a>
              <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read our docs
              </a>
            </div>
          </main> */}
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="https://nextjs.org/icons/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Learn
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="https://nextjs.org/icons/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Examples
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="https://nextjs.org/icons/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Go to nextjs.org →
            </a>
          </footer>
        </div>
      </div>

    </>

  );
}
