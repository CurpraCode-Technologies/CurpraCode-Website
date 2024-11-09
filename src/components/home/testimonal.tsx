import React from "react";
import Image from "next/image";
import styles from "./homecomp.module.css";

const testimonials = [
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
  {
    name: "Joseph McFall",
    role: "Web developer @themesberg",
    message:
      "This is a very complex and beautiful set of elements. Under the hood, it comes with the best things from 2 different worlds: Figma and Tailwind.",
    image: "/svg/avatar.svg",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4 md:px-10">
      <h2
        className={`${styles.heading} text-3xl md:text-4xl font-bold text-center mb-4`}
      >
        Our Clients Acknowledge The Value We Deliver
      </h2>
      <p className="text-center text-md md:text-lg mb-12">
        Acknowledge by Our Clients: The Superior Value and Expertise We offer in
        Every Engagement
      </p>

      <div className="overflow-hidden relative">
        <div
          className={`flex space-x-2 md:space-x-4 mt-4 ${styles.animateScroll}`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-600 rounded-2xl px-6 py-14 w-90 min-w-[390px]"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-100">
                &quot;{testimonial.message}&quot;
              </p>
            </div>
          ))}
        </div>
        <div className={`flex md:space-x-4 mt-4 ${styles.animateScroll}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-600 rounded-2xl px-6 py-14 w-90 min-w-[390px]"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-100">
                &quot;{testimonial.message}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <Image
          src="/svg/leftarrow.svg"
          alt="arrow left"
          width={40}
          height={40}
        />
        <Image
          src="/svg/rightarrow.svg"
          alt="arrow left"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default TestimonialCarousel;
