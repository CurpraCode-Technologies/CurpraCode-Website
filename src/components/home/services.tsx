import React from "react";
import styles from "../../app/home.module.css";

const ServicesComponent = () => {
  return (
    <div className="relative bg-gray-900 text-white py-16 px-8 overflow-hidden">
      {/* Moving Background Text */}
      <div
        className={`absolute top-20 inset-0 text-9xl font-bold text-gray-300 opacity-10 whitespace-nowrap ${styles.animateScroll}`}
      >
        Boost sales and drive growth ✦ Digital solutions ✦ Full-suite services ✦
        Custom Software Solutions
      </div>

      <div className="relative z-10 flex justify-between items-center mb-12">
        <h2
          className={`${styles.heading} lg:mx-80 text-6xl font-bold text-center w-full`}
        >
          Leverage our Full-suite Services for Business Growth
        </h2>
        <button className="bg-transparent border border-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
          See all →
        </button>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8">
        {/* Product Development */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <img
            src="/images/product-development.jpg" // Replace with actual image URL
            alt="Product Development"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Product Development</h3>
          <p className="text-gray-400">
            Transform your ideas into successful products with our expert
            development services. We specialize in building scalable,
            high-performance solutions using cutting-edge technologies such as
            React, React Native, JavaScript, TypeScript, Python, AWS, Node.js,
            and Expo. From AI-powered applications to cloud-based platforms, we
            ensure your product is future-ready.
          </p>
        </div>

        {/* Branding & Marketing */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <img
            src="/images/branding-marketing.jpg" // Replace with actual image URL
            alt="Branding & Marketing"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Branding & Marketing</h3>
          <p className="text-gray-400">
            Build a recognizable brand that speaks to your audience. Our
            branding and marketing services are designed to elevate your
            business&apos;s online presence and drive conversions. From tailored
            marketing strategies to impactful branding, we ensure your company
            stands out.
          </p>
        </div>

        {/* Business Consultancy */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <img
            src="/images/business-consultancy.jpg" // Replace with actual image URL
            alt="Business Consultancy"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Business Consultancy</h3>
          <p className="text-gray-400">
            Optimize your business operations with our consultancy services. We
            provide strategic insights that help you refine processes, scale
            effectively, and drive profitability. Let us partner with you to
            make data-driven decisions that move your business forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
