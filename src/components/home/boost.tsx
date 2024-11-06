import React from "react";

const BoostComponent = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8 space-y-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-12">
        Boost Your Business with Cutting-Edge Software Solutions
      </h1>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Cards */}
        <div className="space-y-6">
          {/* Cashback Card */}
          <div className="bg-purple-200 p-6 rounded-lg text-gray-800">
            <p className="text-lg font-semibold">Total Cashback</p>
            <p className="text-3xl font-bold">£1,348</p>
            <p className="text-sm text-gray-500">5.4%</p>
            <div className="mt-4 bg-gray-300 h-2 rounded-full">
              <div className="bg-purple-600 h-2 rounded-full w-1/2"></div>
            </div>
          </div>

          {/* Spend This Month Card */}
          <div className="bg-purple-100 p-6 rounded-lg text-gray-800">
            <p className="text-lg font-semibold">£348</p>
            <p className="text-sm text-gray-500">Spend this month</p>
            <p className="text-sm text-purple-600 font-semibold">5.4%</p>
            <button className="mt-4 text-purple-600 underline">
              All spent summary
            </button>
          </div>
        </div>

        {/* Center Column - Sales Progress Graph */}
        <div className="bg-white rounded-lg p-6 text-gray-800 col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold mb-4">Sales Progress</h3>
          {/* Replace with actual graph component */}
          <div className="h-56 flex items-center justify-center text-gray-500">
            <p>[Graph Placeholder]</p>
          </div>
        </div>

        {/* Right Column - Cards */}
        <div className="space-y-6">
          {/* Another Cashback Card */}
          <div className="bg-yellow-100 p-6 rounded-lg text-gray-800">
            <p className="text-lg font-semibold">Total Cashback</p>
            <p className="text-3xl font-bold">£5,097</p>
            <p className="text-sm text-gray-500">5.4%</p>
            <div className="mt-4 bg-gray-300 h-2 rounded-full">
              <div className="bg-yellow-500 h-2 rounded-full w-2/3"></div>
            </div>
          </div>

          {/* Another Spend This Month Card */}
          <div className="bg-green-100 p-6 rounded-lg text-gray-800">
            <p className="text-lg font-semibold">£500</p>
            <p className="text-sm text-gray-500">Spend this month</p>
            <p className="text-sm text-green-600 font-semibold">15.4%</p>
            <button className="mt-4 text-green-600 underline">
              All spent summary
            </button>
          </div>
        </div>
      </div>

      {/* Descriptive Sections */}
      <div className="space-y-8 mt-12">
        {/* Custom Solutions Section */}
        <div className="flex items-start space-x-4">
          <span className="text-2xl">⤵️</span>
          <div>
            <h3 className="text-xl font-bold">
              Custom Solutions for Every Business
            </h3>
            <p className="text-gray-400 mt-2">
              Our team delivers tailored software that meets the specific needs
              of your business, ensuring smooth operations and seamless growth.
              No more one-size-fits-all. Get software that works for you.
            </p>
          </div>
        </div>

        {/* Easy to Scale Section */}
        <div className="flex items-start space-x-4">
          <span className="text-2xl">↩️</span>
          <div>
            <h3 className="text-xl font-bold">
              Easy to Scale, Easy to Maintain
            </h3>
            <p className="text-gray-400 mt-2">
              We build scalable solutions that grow with your business. Whether
              you’re a startup or an enterprise, our software is designed to
              adapt and stay future-proof, ensuring minimal maintenance and
              maximum efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoostComponent;
