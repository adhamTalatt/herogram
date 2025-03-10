import SideNav from "@/components/dashbaord/SideNav";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className=" flex h-screen relative flex-col md:flex-row md:overflow-hidden">
      <div className="w-20 flex-none lg:w-64 md:border-r">
        <SideNav />
      </div>
      <div className="flex-grow mt-12 md:mt-0 flex-1 w-full md:overflow-y-auto sm:p-6 md:p-12 max-w-7xl">
        <main>{children}</main>
      </div>
    </section>
  );
};

export default DashboardLayout;
