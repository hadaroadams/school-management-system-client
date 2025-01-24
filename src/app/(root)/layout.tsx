import AppSidebar from "@/components/AppSidebar";
import Header from "@/components/Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import React from "react";

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full relative">
        <div>
          <Header />
          <div className="px-6 py-4">{children}</div>
        </div>
      </main>
    </SidebarProvider>
  );
};

export default Rootlayout;
