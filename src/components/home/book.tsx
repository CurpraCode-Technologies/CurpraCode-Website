import React from "react";
import { StickyMag } from "../cursor";

const BookComponent = () => {
  return (
    <div className="bg-[#2151A6] text-white py-16 px-4 md:px-16 lg:px-32">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Ready to Transform Your Business with Custom Software?
        </h2>
        <p className=" md:text-xl mb-8">
          We design and develop bespoke software solutions that drive growth and
          innovation for your business. Get started today with expert guidance
          and cutting-edge technology.
        </p>
        <a
          href="https://bit.ly/curpracode-call"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StickyMag>
            <button className="bg-blue-800 rounded-full text-white text-lg font-semibold py-3 px-6 hover:bg-blue-700 transition-colors">
              Start Your Free Consultation
            </button>
          </StickyMag>
        </a>
      </div>
    </div>
  );
};

export default BookComponent;
