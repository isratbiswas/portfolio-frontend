"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Metadata } from "next";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 px-4 sm:px-8 md:px-16 py-12">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I’m <span className="text-green-600">Israt Jahan</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium mb-3">
            A Passionate Frontend Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            I love creating beautiful, responsive, and user-friendly web
            interfaces. I specialize in building full-stack applications using
            modern tools like React, Next.js, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/about.jpg"
            alt="Israt Jahan"
            width={280}
            height={280}
            className="rounded-full border-4 border-green-500 shadow-lg object-cover"
          />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="mt-16">
        <h3 className="text-2xl font-semibold mb-6">Tech Stack & Skills 💻</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "MongoDB",
            "Git & GitHub",
          ].map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="text-sm border-green-500 text-green-600 dark:text-green-400"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Journey Section */}
      <section className="mt-16">
        <h3 className="text-2xl font-semibold mb-6">My Journey 🚀</h3>
        <div className="space-y-6">
          {[
            {
              year: "2023",
              title: "Started Learning Web Development",
              desc: "Began with HTML, CSS, and JavaScript to build the foundation of web technologies.",
            },
            {
              year: "2024",
              title: "Dove into React & Next.js",
              desc: "Created multiple projects using React, learned component-based architecture, and started focusing on UI/UX.",
            },
            {
              year: "2025",
              title: "Exploring Backend & Full-Stack",
              desc: "Built RESTful APIs with Node.js, Express, and MongoDB — currently working on full-stack applications.",
            },
          ].map((item) => (
            <Card key={item.year} className="hover:shadow-md transition-all">
              <CardContent className="p-6">
                <p className="text-green-600 font-semibold">{item.year}</p>
                <h4 className="text-lg font-bold mt-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-20 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Let’s build something together 🌿
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          I’m open to collaborations, internships, and new opportunities.
        </p>
        <a
          href="mailto:isratbiswas28@gmail.com"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition-all"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
}
