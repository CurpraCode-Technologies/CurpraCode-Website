import React from "react";

const ToolComponent = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8 space-y-8">
      {/* Title Section */}
      <h2 className="text-4xl font-bold text-center mb-8">
        Industry Standard Tools and Technologies We Use
      </h2>

      {/* Tools and Technologies Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {/* Each Tool */}
        <div className="flex flex-col items-center space-y-2">
          <div className="bg-black p-3 rounded-full">
            <img
              src="/path/to/firebase-icon.png"
              alt="Firebase"
              className="h-8 w-8"
            />
          </div>
          <p className="text-sm">Firebase</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="bg-black p-3 rounded-full">
            <img src="/path/to/aws-icon.png" alt="AWS" className="h-8 w-8" />
          </div>
          <p className="text-sm">AWS</p>
        </div>
        {/* Repeat similar blocks for other technologies */}
      </div>

      {/* Statistics Section */}
      <div className="flex justify-center space-x-4 mt-12">
        <div className="bg-blue-700 text-white rounded-full p-6 flex items-center justify-center">
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 7 7 13 7 13s7-6 7-13c0-3.87-3.13-7-7-7zm0 9c-1.11 0-2-.89-2-2s.89-2 2-2 2 .89 2 2-.89 2-2 2z" />
          </svg>
        </div>
        <div className="bg-blue-700 text-white px-6 py-4 rounded-full text-center">
          <p className="text-3xl font-bold">22</p>
          <p className="text-sm">
            Technology stacks we leverage for creating your digital solutions
          </p>
        </div>
        <div className="bg-blue-700 text-white rounded-full p-6 flex items-center justify-center">
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-2.83-.47-5.12-2.76-5.59-5.59H5v-2h1.41C6.88 9.66 9.17 7.37 12 6.93V5h2v1.93c2.83.47 5.12 2.76 5.59 5.59H19v2h-1.41c-.47 2.83-2.76 5.12-5.59 5.59V19h-2v1.93z" />
          </svg>
        </div>
        <div className="bg-blue-700 text-white px-6 py-4 rounded-full text-center">
          <p className="text-3xl font-bold">110+</p>
          <p className="text-sm">
            Technology stacks we leverage for creating your digital solutions
          </p>
        </div>
        <div className="bg-blue-700 text-white rounded-full p-6 flex items-center justify-center">
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </div>
        <div className="bg-blue-700 text-white px-6 py-4 rounded-full text-center">
          <p className="text-3xl font-bold">100%</p>
          <p className="text-sm">
            Expertise across all boards and use of digital tools
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToolComponent;
