import Sidebar from "@/components/ui/sidebar";
import React from "react";

const DashBoardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-dvh flex gap-4">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashBoardLayout;
