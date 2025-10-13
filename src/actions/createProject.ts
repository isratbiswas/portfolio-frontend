"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
export const createProject = async (data: FormData) => {
  console.log(data, "cp-4");
  const projectInfo = Object.fromEntries(data.entries());
  console.log(projectInfo, "cp-6");
  const modifiedData = {
    ...projectInfo,
    tags: projectInfo.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
    features: projectInfo.features
      .toString()
      .split(",")
      .map((feature) => feature.trim()),
  };
  console.log(modifiedData, "mira");

  const res = await fetch(
    "https://portfolio-backend-navy-eight.vercel.app/api/v1/project/create-project",

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedData),
    }
  );
  console.log(res, "project1");
  const result = await res.json();
  console.log(result, "project2");
  if (result) {
    revalidateTag("PROJECT");
    revalidatePath("/project");
    redirect("/project");
  }
  return result;
};
