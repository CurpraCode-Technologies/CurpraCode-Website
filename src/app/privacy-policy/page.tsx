"use client";
import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-16 px-4 md:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
        <p className="text-gray-400 text-center mb-4">
          Effective Date: 14th October, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl text-gray-400 font-semibold mb-4">
            Introduction
          </h2>
          <p className="">
            At Curpracode Technologies, we are committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website (
            <a
              href="https://curpracode.com"
              className="text-blue-500 underline"
            >
              curpracode.com
            </a>
            ), use our applications, or engage with our services (collectively
            referred to as “Services”). Please read this policy carefully. If
            you do not agree with the terms of this policy, please do not access
            the Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-gray-400 font-semibold mb-4">
            Information We Collect
          </h2>
          <p className="">
            We may collect information about you in a variety of ways,
            including:
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li>
              <strong>Personal Information:</strong>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  Contact Information: Name, email address, phone number,
                  mailing address.
                </li>
                <li>Account Information: Username, password, preferences.</li>
                <li>
                  Payment Information: Credit card details and billing
                  information if you make purchases.
                </li>
              </ul>
            </li>
            <li className="mt-4">
              <strong>Non-Personal Information:</strong>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  Usage Data: IP address, browser type, device type, and the
                  pages you visit.
                </li>
                <li>
                  Cookies and Tracking Technologies: Information collected about
                  interactions with our Services.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-gray-400 font-semibold mb-4">
            How We Use Your Information
          </h2>
          <p className="">
            We may use the information we collect in various ways, including to:
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li>Provide, operate, and maintain our Services.</li>
            <li>Improve, personalize, and expand our Services.</li>
            <li>Understand and analyze how you use our Services.</li>
            <li>Process your transactions and send you related information.</li>
            <li>Communicate with you directly or through our partners.</li>
            <li>
              Send you marketing and promotional communications (you can opt-out
              anytime).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-gray-400 font-semibold mb-4">
            Sharing Your Information
          </h2>
          <p className="">
            We do not sell your personal information to third parties. However,
            we may share your information in the following circumstances:
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li>
              <strong>With Service Providers:</strong> Third-party vendors,
              service providers, contractors, or agents who perform services on
              our behalf.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> Disclosure required by law or
              in response to valid requests by public authorities.
            </li>
            <li>
              <strong>Business Transfers:</strong> Your information may be
              transferred as part of a business asset during mergers,
              acquisitions, or sales.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-gray-400 font-semibold mb-4">
            Data Security
          </h2>
          <p className="">
            We implement reasonable security measures to help protect your
            personal information. However, no method of transmission over the
            Internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-gray-400 font-semibold mb-4">
            Your Rights
          </h2>
          <p className="">
            Depending on your jurisdiction, you may have rights regarding your
            personal information, including access, correction, deletion, and
            objection to processing. To exercise these rights, please contact
            us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl  text-gray-400 font-semibold mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the updated policy on this page with a
            new effective date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-gray-400 font-semibold mb-4">
            Contact Us
          </h2>
          <p className="">
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <address className="not-italic mt-4">
            <p>CurpraCode Technologies:</p>
            <p>38, Norfolk Street, Sunderland, UK</p>
            <p>
              Email:{" "}
              <a
                href="mailto:hello@curpracode.com"
                className="text-blue-500 underline"
              >
                hello@curpracode.com
              </a>
            </p>
          </address>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
