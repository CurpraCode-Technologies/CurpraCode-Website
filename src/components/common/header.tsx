import Image from "next/image";
import { forwardRef } from "react";
import { StickyMag } from "../cursor";
import styles from "@/app/home.module.css";

type Props = object;

export const Header = forwardRef<HTMLDivElement, Props>(function index(
  props,
  ref
) {
  return (
    <div
      className={`${styles.headbg} fixed top-0 left-0 right-0 flex justify-between items-center z-50 px-5 md:px-10 py-0 lg:py-4 text-black`}
    >
      <a href="/" className="flex items-center space-x-1">
        <Image
          aria-hidden
          src={"/logo.png"}
          alt="icon"
          width={50}
          height={50}
          className="w-8 lg:w-10"
        />
        <h3 className={`${styles.heading} text-white text-sm lg:text-lg`}>
          CurpraCode
        </h3>
      </a>

      <div className="hidden lg:block w-96 bg-gray-400/80 p-1 px-1 rounded-full shadow-md">
        <ul className="flex text-sm justify-between items-center space-x-4">
          <li className="rounded-full  px-3 py-1 hover:bg-gray-200 transition-all">
            <a href="/home">About</a>
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

      <a
        className="hidden lg:block"
        href="https://bit.ly/curpracode-call"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StickyMag>
          <button className="relative flex items-center px-3 py-1 bg-white text-black rounded-full transition-all duration-300 hover:bg-[#2151A6] hover:text-white group">
            <span className="mr-2">
              <span className="inline-block text-2xl  transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1">
                •
              </span>
            </span>
            <span className={` ${styles.heading} mr-2 text-sm`}>
              LET&apos;S TALK
            </span>
            <span className="inline-block transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1">
              →
            </span>
          </button>
        </StickyMag>
      </a>

      <div className={`!block lg:!hidden  ${styles.header}`}>
        <StickyMag>
          <div className={styles.burger}>
            <div
              ref={ref as React.Ref<HTMLDivElement>}
              className={styles.bounds}
            ></div>
          </div>
        </StickyMag>
      </div>
    </div>
  );
});
