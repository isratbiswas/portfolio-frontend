import { authOptions } from "@/helpers/authOptions";
import { getUserSession } from "@/helpers/getUserSession";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await getUserSession();
  console.log(session);
  if (!session) {
    redirect("/login"); // redirect if not logged in
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6 w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome, {session?.user?.name}!
      </h1>
      <p className="text-lg text-gray-600 italic text-center">
        {session?.user?.email}
      </p>
    </div>
  );
};

export default DashboardPage;
