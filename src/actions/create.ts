"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
export const create = async (data: FormData) => {
  const blogInfo = Object.fromEntries(data.entries());
  const modifiedData = {
    ...blogInfo,
  };

  const res = await fetch(
    "https://portfolio-backend-navy-eight.vercel.app/api/v1/blog/create-blog",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedData),
    }
  );
  console.log(res, "blog");

  const result = await res.json();
  console.log(result, "blog");
  if (result) {
    revalidateTag("BLOGS");
    revalidatePath("/blogs");
    redirect("/blogs");
  }
  return result;
};

export const updateBlog = async (data: FormData, blogId: string) => {
  const blogInfo = Object.fromEntries(data.entries());
  const modifiedData = {
    ...blogInfo,
  };

  const res = await fetch(
    `https://portfolio-backend-navy-eight.vercel.app/api/v1/blog/${blogId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedData),
    }
  );
  console.log(res, "blog");

  const result = await res.json();
  console.log(result, "blog");
  if (result) {
    revalidateTag("BLOGS");
    revalidatePath("/blogs");
    redirect("/blogs");
  }
  return result;
};
export const deleteBlog = async (blogId: string) => {
  const res = await fetch(
    `https://portfolio-backend-navy-eight.vercel.app/api/v1/blog/${blogId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    }
  );
  console.log(res, "blog");

  const result = await res.json();
  console.log(result, "blog");
  if (result) {
    revalidateTag("BLOGS");
    revalidatePath("/blogs");
    redirect("/blogs");
  }
  return result;
};
