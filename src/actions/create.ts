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

  const result = await res.json();
  if (result?._id) {
    revalidateTag("BLOGS");
    revalidatePath("/blogs");
    redirect("/blogs");
  }
  return result;
};
