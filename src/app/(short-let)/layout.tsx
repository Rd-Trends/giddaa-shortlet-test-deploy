import TopNav from "@/components/layouts/TopNav";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopNav />
      {children}
    </div>
  );
};

export default Layout;
