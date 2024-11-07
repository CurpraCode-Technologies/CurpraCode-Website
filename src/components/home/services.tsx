import React from "react";
import styles from "../../app/home.module.css";
import Image from "next/image";

const ServicesComponent = () => {
  return (
    <div className="my-20">
      <div className="relative bg-gray-900 text-white mt-20 py-16 px-8 overflow-hidden">
        <div
          className={`absolute top-72 inset-0 text-9xl font-bold text-gray-300 opacity-10 whitespace-nowrap ${styles.animateScroll}`}
        >
          Boost sales and drive growth ✦ Digital solutions ✦ Full-suite services
          ✦ Custom Software Solutions
        </div>

        <div className="relative z-10 flex justify-between items-center mb-12">
          <h2
            className={`${styles.heading} lg:mx-80 text-3xl md:text-4xl lg:text-6xl font-bold text-center w-full`}
          >
            Leverage our Full-suite Services for Business Growth
          </h2>
        </div>

        <div className="relative z-10 grid md:grid-cols-3 gap-8">
          <div className="content-end p-6 rounded-lg">
            <Image
              src="/svg/productview.svg"
              alt="bus-image"
              width={500}
              height={200}
              layout="responsive"
            />
            <h3 className={`${styles.heading} text-xl font-semibold my-4`}>
              Product Development
            </h3>
            <p>
              Transform your ideas into successful products with our expert
              development services. We specialize in building scalable,
              high-performance solutions using cutting-edge technologies such as
              React, React Native, JavaScript, TypeScript, Python, AWS, Node.js,
              and Expo. From AI-powered applications to cloud-based platforms,
              we ensure your product is future-ready.
            </p>
          </div>

          <div className="content-start p-6 rounded-lg">
            <Image
              src="/svg/brandview.svg"
              alt="bus-image"
              width={400}
              height={500}
              layout="responsive"
            />
            <h3 className={`${styles.heading} text-2xl font-semibold my-4`}>
              Branding & Marketing
            </h3>
            <p>
              Build a recognizable brand that speaks to your audience. Our
              branding and marketing services are designed to elevate your
              business&apos;s online presence and drive conversions. From
              tailored marketing strategies to impactful branding, we ensure
              your company stands out.
            </p>
          </div>

          <div className="content-end p-6 rounded-lg">
            <Image
              src="/svg/businessconsultview.svg"
              alt="bus-image"
              width={500}
              height={200}
              layout="responsive"
            />
            <h3 className={`${styles.heading} text-xl font-semibold my-4`}>
              Business Consultancy
            </h3>
            <p>
              Optimize your business operations with our consultancy services.
              We provide strategic insights that help you refine processes,
              scale effectively, and drive profitability. Let us partner with
              you to make data-driven decisions that move your business forward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
