import React from "react";
import styles from "../../app/home.module.css";

const Started = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 mx-10 p-8 rounded-2xl shadow-lg">
      {/* Chart Section */}
      <div className="bg-purple-200 p-6 rounded-lg md:w-1/2 w-full md:mr-8 mb-6 md:mb-0">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Sales</h3>
          <select className="bg-transparent text-gray-800 border-none outline-none">
            <option>Monthly</option>
            {/* Add more options if needed */}
          </select>
        </div>
        {/* Placeholder for the chart */}
        <div className="w-full h-24 mb-4">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <polyline
              points="0,80 30,50 60,70 90,30 120,50 150,30"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
            <polyline
              points="0,70 30,40 60,60 90,20 120,40 150,20"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        {/* User list */}
        <div className="text-gray-800">
          <p className="font-semibold mb-2">USER</p>
          <ul>
            <li className="flex items-center mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 mr-2"
                checked
                readOnly
              />
              <span className="font-semibold">Sanusi Abubakar</span>
              <span className="text-gray-600 ml-2">sanusi@company.com</span>
            </li>
            <li className="flex items-center mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 mr-2"
              />
              <span className="font-semibold">Marselio Fedri</span>
              <span className="text-gray-600 ml-2">Fedri@company.com</span>
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 mr-2"
              />
              <span className="font-semibold">Jordi Amat</span>
              <span className="text-gray-600 ml-2">Amat@company.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2
          className={`${styles.heading} text-5xl font-bold text-gray-800 mb-4`}
        >
          Elevate Your Brand & Boost Sales with Tailored Digital Solutions
        </h2>
        <p className="text-gray-600 mb-6">
          Empower your business by creating a strong digital presence that
          drives growth. Our customizable software solutions are designed to
          optimize your product marketing and enhance lead generation, ensuring
          you stay ahead of the competition. Experience seamless collaboration
          and higher productivity with our cutting-edge tools.
        </p>
        <button className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition">
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default Started;
