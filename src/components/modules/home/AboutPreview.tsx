import Link from "next/link";
import React from "react";

const AboutPreview = () => {
  return (
    <section id="about" className="py-4 text-center px-6  ">
      <h1 className="text-3xl font-bold mb-6 text-green-600">About Me</h1>
      <p className="max-w-2xl mx-auto text-gray-700 mb-6">
        I'm a passionate Frontend Developer who enjoys building beautiful and
        functional web apps. I focus on performance, accessibility, and clean
        design to create experiences users love
      </p>
      <Link
        href="/about"
        className="text-green-600 font-semibold hover:underline"
      >
        Learn More →
      </Link>
    </section>
  );
};

export default AboutPreview;
