import { FieldValues } from "react-hook-form";

// export const login = async (data: FieldValues) => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   // ✅ Read the response body ONLY ONCE
//   const result = await res.json().catch(() => null);

//   if (!res.ok) {
//     const errorMsg = result?.message || "Login failed";
//     throw new Error(errorMsg);
//   }

//   return result;
// };

export const login = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res?.ok) {
    console.error("Login Failed", await res.text());
  }
  return await res.json();
};
