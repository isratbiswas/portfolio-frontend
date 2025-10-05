import About from "@/components/modules/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Israt Jahan ",
  description:
    "Learn more about Israt Jahan — a passionate Frontend Developer specializing in building beautiful, responsive, and dynamic web applications with React, Next.js, and Tailwind CSS.",
};
const AboutPage = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default AboutPage;
