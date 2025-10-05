import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="py-10 flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-green-600">Israt Jahan</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-6">
        A Frontend Developer passionate about crafting clean, modern, and
        responsive web experiences using React and Next.js.
      </p>
      <div className="space-x-4">
        <Link
          href="/project"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
