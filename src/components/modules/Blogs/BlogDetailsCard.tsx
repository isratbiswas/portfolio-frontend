"use client";

import DeleteModal from "@/components/ui/DeleteModal";
import EditModal from "@/components/ui/EditModal";
import { IBlog } from "@/types";
import { useSession } from "next-auth/react";
import Image from "next/image";

const BlogDetailsCard = ({ blog }: { blog: IBlog }) => {
  const session = useSession();
  console.log(blog, blog?.title, "miru-bd");
  if (!blog) {
    return (
      <div className="py-20 text-center text-gray-500">Blog not found.</div>
    );
  }
  const formData = {
    title: blog.title,
    content: blog.content,
    thumbnail: blog.thumbnail,
  };
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
      {session.status === "authenticated" && (
        <div className="flex gap-3 mt-6">
          <EditModal data={formData} blogId={blog._id} />

          <DeleteModal blogId={blog._id} />
        </div>
      )}
    </main>
  );
};

export default BlogDetailsCard;
