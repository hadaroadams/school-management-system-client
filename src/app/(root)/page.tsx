import { DashboardHeader } from "@/components/DashboardHeader";
import { Notification } from "@/components/Notification";
import TotalSection from "@/components/TotalSection";
import WelcomeHeader from "@/components/WelcomeHeader";
import React from "react";

const Dashboard = () => {
  return (
    <main>
      <DashboardHeader />
      <Notification />
      <WelcomeHeader />
      <TotalSection />
    </main>
  );
};

export default Dashboard;
