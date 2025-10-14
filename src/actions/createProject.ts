// "use server";
// import { revalidatePath, revalidateTag } from "next/cache";
// import { redirect } from "next/navigation";
// export const createProject = async (data: FormData) => {
//   console.log(data, "cp-4");
//   const file = (data.get("file") as File) || null;
//   const projectInfo = Object.fromEntries(data.entries());
//   console.log(projectInfo, "cp-6");
//   const modifiedData = {
//     ...projectInfo,
//     tags: projectInfo.tags
//       ?.toString()
//       ?.split(",")
//       ?.map((tag) => tag.trim()),
//     features: projectInfo.features
//       ?.toString()
//       ?.split(",")
//       ?.map((feature) => feature.trim()),
//   };
//   console.log(modifiedData, "mira");

//   let base64Image = "";

//   if (file) {
//     // Create a compressed image function
//     const compressImage = (
//       file: File,
//       maxWidth = 800,
//       maxHeight = 800,
//       quality = 0.7
//     ) => {
//       return new Promise<string>((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => {
//           const img = new Image();
//           img.src = reader.result as string;
//           img.onload = () => {
//             let { width, height } = img;

//             // Calculate new dimensions while keeping aspect ratio
//             if (width > height) {
//               if (width > maxWidth) {
//                 height = (height * maxWidth) / width;
//                 width = maxWidth;
//               }
//             } else {
//               if (height > maxHeight) {
//                 width = (width * maxHeight) / height;
//                 height = maxHeight;
//               }
//             }

//             // Draw image on canvas
//             const canvas = document.createElement("canvas");
//             canvas.width = width;
//             canvas.height = height;
//             const ctx = canvas.getContext("2d");
//             if (!ctx) return reject("Canvas not supported");
//             ctx.drawImage(img, 0, 0, width, height);

//             // Convert to base64
//             const compressedBase64 = canvas.toDataURL(file.type, quality);
//             resolve(compressedBase64);
//           };
//           img.onerror = (err) => reject(err);
//         };
//         reader.onerror = (err) => reject(err);
//       });
//     };

//     base64Image = await compressImage(file);
//   }
//   const payload = {
//     ...modifiedData,
//     file: base64Image,
//   };
//   const res = await fetch(
//     "https://portfolio-backend-navy-eight.vercel.app/api/v1/project/create-project",

//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     }
//   );
//   console.log(res, "project1");
//   const result = await res.json();
//   console.log(result, "project2");
//   if (result?.success) {
//     revalidateTag("PROJECT");
//     revalidatePath("/project");
//     redirect("/project");
//   }
//   return result;
// };

"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createProject = async (data: FormData) => {
  const file = (data.get("file") as File) || null;
  const projectInfo = Object.fromEntries(data.entries());

  const modifiedData = {
    ...projectInfo,
    tags: projectInfo.tags
      ?.toString()
      ?.split(/[\s,]+/)
      ?.map((t) => t.trim()),
    features: projectInfo.features
      ?.toString()
      ?.split(/[\s,]+/)
      ?.map((f) => f.trim()),
  };

  // let base64Image = "";
  // if (file) {
  //   const bytes = await file.arrayBuffer();
  //   const buffer = Buffer.from(bytes);
  //   base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;
  // }

  // const payload = { ...modifiedData, file: base64Image };

  const res = await fetch(
    "https://portfolio-backend-navy-eight.vercel.app/api/v1/project/create-project",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(modifiedData),
    }
  );

  const result = await res.json();
  if (result) {
    revalidateTag("PROJECT");
    revalidatePath("/project");
    redirect("/project");
  }
  return result;
};
