import React from "react";
import styles from "../../app/home.module.css";
import Image from "next/image";
import { StickyMag } from "../cursor";

const Started = () => {
  return (
    <div className="my-10 md:my-20">
      <div className="flex flex-col-reverse md:flex-row items-center bg-gray-100 mx-4 md:mx-10 p-5 md:p-8 rounded-2xl">
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-start">
          <Image
            src="/svg/startchart.svg"
            alt="bus-image"
            width={600}
            height={600}
            layout="responsive"
          />
        </div>
        <div className="w-full md:w-1/2 text-left lg:ml-20  md:text-left">
          <h2
            className={`${styles.heading} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4`}
          >
            Elevate Your Brand & Boost Sales with Tailored Digital Solutions
          </h2>
          <p className="text-gray-600 mb-6 px-0 md:px-0">
            Empower your business by creating a strong digital presence that
            drives growth. Our customizable software solutions are designed to
            optimize your product marketing and enhance lead generation,
            ensuring you stay ahead of the competition. Experience seamless
            collaboration and higher productivity with our cutting-edge tools.
          </p>
          <div className="flex justify-start">
            <a
              href="https://bit.ly/curpracode-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StickyMag>
                <button className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition">
                  Get Started Today
                </button>
              </StickyMag>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;
