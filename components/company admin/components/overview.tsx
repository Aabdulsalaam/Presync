"use client";

import { useState } from "react";

import AddUserModal from "./add-usermodal";
import DashboardHeader from "./dashboard-header";
import DepartmentAttendance from "./department-attendance";
import QuickActions from "./quickactions";
import RecentActivity from "./recentactivity";
import StatsSection from "./statssection";

export default function DashboardOverview() {
  const [isAddUserModalOpen, setIsAddUserModalOpen] =
    useState(false);

  return (
    <>
      <main
        className="
          min-h-screen
          bg-white
          px-4
          py-6
          sm:px-6
          lg:px-10
          lg:py-8
          lg:pl-[125px]
          pl-[100px]
          
        "
      >
        <DashboardHeader />


        <StatsSection />
        <QuickActions
          onAddUser={() => {
            setIsAddUserModalOpen(true);
          }}
        />

        <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-8">
          <RecentActivity />

          <DepartmentAttendance />
        </section>
      </main>

      <AddUserModal
        isOpen={isAddUserModalOpen}
        onClose={() => {
          setIsAddUserModalOpen(false);
        }}
      />
    </>
  );
}