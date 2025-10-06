import LoginForm from "@/components/modules/Auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "portfolio | Login ",
  description: "Login is very usefull for website sefety.",
};
export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
