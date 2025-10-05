import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IBlog } from "@/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "All Blogs | Next Blog",
  description:
    "Browse all blog posts on web development, Next.js, React, and more. Stay updated with the latest tutorials and articles.",
};
const BlogPage = async () => {
  // const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  // if (!baseUrl) {
  //   throw new Error("NEXT_PUBLIC_API_URL is not defined in env");
  // }
  const res = await fetch(
    "https://portfolio-backend-navy-eight.vercel.app/api/v1/blog/all-blog",
    {
      cache: "no-store",
    }
  );
  const { data: blogs } = await res.json();

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mx-auto max-w-6xl my-5">
        {blogs?.map((blog: IBlog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
