import { IBlog } from "@/types";
import Image from "next/image";
import React from "react";

const BlogDetailsCard = ({ blog }: { blog: IBlog }) => {
  console.log(blog, blog?.title, "miru-bd");
  if (!blog) {
    return (
      <div className="py-20 text-center text-gray-500">Blog not found.</div>
    );
  }
  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-semibold mb-7">{blog?.title}</h1>
      {blog.thumbnail && (
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            className="rounded-lg object-cover shadow-md"
          />
        </div>
      )}

      <article className="prose prose-lg max-w-none">
        <p>{blog.content}</p>
      </article>
    </main>
  );
};

export default BlogDetailsCard;
