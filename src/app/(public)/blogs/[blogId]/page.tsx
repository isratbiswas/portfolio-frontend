import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { getBlogById } from "@/services/PostServices";
import { IBlog } from "@/types";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch(
    "https://portfolio-backend-navy-eight.vercel.app/api/v1/blog/all-blog"
  );
  const { data: blogs } = await res.json();

  console.log(blogs, "nagib");
  return blogs.map((blog: IBlog) => ({
    blogId: String(blog._id),
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const blogs = await getBlogById(blogId);
  const blog = blogs.data;
  console.log(blogs, "aliii");
  console.log(blog.title, "rafi");

  return {
    title: blog?.title,
    description: blog?.content,
  };
};

const BlogDetailPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const blogs = await getBlogById(blogId);
  const blog = blogs.data;
  console.log(blogs, "aliii");
  console.log(blog.title, "rafi");
  return (
    <div>
      <div className="py-10 px-4 max-w-7xl mx-auto">
        <BlogDetailsCard blog={blog} />
      </div>
    </div>
  );
};

export default BlogDetailPage;
