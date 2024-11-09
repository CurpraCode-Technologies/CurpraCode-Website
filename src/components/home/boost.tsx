import React from "react";
import styles from "./homecomp.module.css";
import Image from "next/image";

const BoostComponent = () => {
  return (
    <div className="my-20">
      <div className="bg-gray-900 text-white py-16 px-5 md:px-10 space-y-8">
        <h1
          className={`${styles.heading} text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-12`}
        >
          Boost Your Business with Cutting-Edge Software Solutions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Cards */}
          <div className="space-y-6">
            <div className="space-y-12 ">
              <div className="bg-white p-6 rounded-2xl text-gray-800 ">
                <p className="text-md text-gray-500 font-semibold">
                  Total Cashback
                </p>
                <p className="text-5xl font-bold">£5,097</p>
                <p className="text-sm text-[#27CB4C] mb-2">5.4%</p>
                <Image
                  src="/svg/combinecircle.svg"
                  alt="circle-image"
                  width={100}
                  height={100}
                />
                <div className="mt-4 bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-black h-2 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>

              <div className="bg-[#E7C5F8] p-6 rounded-2xl text-gray-800 ">
                <p className="text-5xl font-bold">£500</p>
                <div>
                  <p className="text-sm text-black mb-6">
                    Spend this month{" "}
                    <span className="bg-white rounded-full  p-1 text-xs text-black font-semibold mt-1">
                      15.4%
                    </span>
                  </p>
                </div>
                <div className="flex justify-between items-center px-6 py-2 mt-6 rounded-full border-2 border-black">
                  <button className="text-black font-bold">
                    All spent summary
                  </button>
                  <Image
                    src="/svg/chevron-arrow.svg"
                    alt="circle-image"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-gray-800 col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Sales Progress</h3>
            <div>
              <div> </div>
            </div>
            <div className="h-96 flex items-center justify-center text-gray-500">
              <div>
                <Image
                  src="/svg/linechart.svg"
                  alt="circle-image"
                  width={600}
                  height={430}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-52 bg-gray-900 text-white">
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 flex-shrink-0">
                <Image
                  src="/svg/starcircle.svg"
                  alt="custom-solution-icon"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Custom Solutions for Every Business
                </h3>
                <p className="mt-3 text-gray-300">
                  Our team delivers tailored software that meets the specific
                  needs of your business, ensuring smooth operations and
                  seamless growth. No more one-size-fits-all. Get software that
                  works for you.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 flex-shrink-0">
                <Image
                  src="/svg/resize.svg"
                  alt="scalable-icon"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Easy to Scale, Easy to Maintain
                </h3>
                <p className="mt-3 text-gray-300">
                  We build scalable solutions that grow with your business.
                  Whether you’re a startup or an enterprise, our software is
                  designed to adapt and stay future-proof, ensuring minimal
                  maintenance and maximum efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12 ">
            <div className="bg-[#FFE6B5] p-6 rounded-2xl text-gray-800 ">
              <p className="text-md text-gray-500 font-semibold">
                Total Cashback
              </p>
              <p className="text-5xl font-bold">£5,097</p>
              <p className="text-sm text-[#27CB4C] mb-2">5.4%</p>
              <Image
                src="/svg/cobinecirclewhite.svg"
                alt="circle-image"
                width={100}
                height={100}
              />
              <div className="mt-4 bg-white h-2 rounded-full">
                <div
                  className="bg-black h-2 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>

            <div className="bg-[#B5FFDB] p-6 rounded-2xl text-gray-800 ">
              <p className="text-5xl font-bold">£500</p>
              <div>
                <p className="text-sm text-black mb-6">
                  Spend this month{" "}
                  <span className="bg-white rounded-full  p-1 text-xs text-black font-semibold mt-1">
                    15.4%
                  </span>
                </p>
              </div>
              <div className="flex justify-between items-center px-6 py-2 mt-6 rounded-full border-2 border-black">
                <button className="text-black font-bold">
                  All spent summary
                </button>
                <Image
                  src="/svg/chevron-arrow.svg"
                  alt="circle-image"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoostComponent;
