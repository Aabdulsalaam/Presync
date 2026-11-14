
"use client";

import DashboardSidebar from "../../components/sidebar";
import CategoryDetailsHeader from "../overviewheader";

import {
  Users,
  TrendingUp,
  UserX,
  CalendarCheck,
} from "lucide-react";

export default function CategoryDetailsPage() {
  const statistics = [
    {
      title: "Total Members",
      value: "50",
      icon: Users,
      color: "#155DFC",
      background: "#DBEAFE",
    },
    {
      title: "Present Today",
      value: "43",
      icon: TrendingUp,
      color: "#008236",
      background: "#DCFCE7",
    },
    {
      title: "Absent Today",
      value: "4",
      icon: UserX,
      color: "#DC2626",
      background: "#FEE2E2",
    },
    {
      title: "Attendance Rate",
      value: "86%",
      icon: CalendarCheck,
      color: "#155DFC",
      background: "#DBEAFE",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#171923]">
      <DashboardSidebar />

      <main className="ml-24 min-h-screen px-4 py-5 sm:px-6 lg:px-8">
        <CategoryDetailsHeader />

        {/* OVERVIEW CONTENT */}
        <div className="space-y-3 pt-4">
          {/* STATISTICS CARDS */}
          <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
            {statistics.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="rounded-xl border border-slate-100 bg-white p-3"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="flex h-7 w-7 items-center justify-center rounded-lg"
                      style={{
                        color: stat.color,
                        backgroundColor: stat.background,
                      }}
                    >
                      <Icon size={13} />
                    </div>

                    <span className="text-[9px] text-[#8A94A6]">
                      {stat.title}
                    </span>
                  </div>

                  <p className="mt-2 text-[17px] font-medium text-[#171923]">
                    {stat.value}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CATEGORY DETAILS */}
          <section className="rounded-xl border border-slate-100 bg-white p-4 sm:p-5">
            <h2 className="mb-4 text-[11px] font-medium">
              Category Details
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {/* LEFT COLUMN */}
              <div className="space-y-3">
                <div>
                  <p className="text-[8px] text-[#9CA3AF]">
                    Category Type
                  </p>
                  <p className="mt-1 text-[9px] font-medium">
                    Department
                  </p>
                </div>

                <div>
                  <p className="text-[8px] text-[#9CA3AF]">
                    Created Date
                  </p>
                  <p className="mt-1 text-[9px] font-medium">
                    15 Jan 2023
                  </p>
                </div>

                <div>
                  <p className="text-[8px] text-[#9CA3AF]">
                    Total Users
                  </p>
                  <p className="mt-1 text-[9px] font-medium">
                    50 users
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-3">
                <div>
                  <p className="text-[8px] text-[#9CA3AF]">
                    Status
                  </p>
                  <p className="mt-1 text-[9px] font-medium">
                    Active
                  </p>
                </div>

                <div>
                  <p className="text-[8px] text-[#9CA3AF]">
                    Last Updated
                  </p>
                  <p className="mt-1 text-[9px] font-medium">
                    20 Nov 2024
                  </p>
                </div>

                <div>
                  <p className="text-[8px] text-[#9CA3AF]">
                    Linked Categories
                  </p>
                  <p className="mt-1 text-[9px] font-medium">
                    4 linked
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
