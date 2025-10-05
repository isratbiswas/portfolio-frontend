export const getBlogById = async (blogId: string) => {
  const res = await fetch(
    `https://portfolio-backend-navy-eight.vercel.app/api/v1/blog/${blogId}`
  );
  return await res.json();
};
