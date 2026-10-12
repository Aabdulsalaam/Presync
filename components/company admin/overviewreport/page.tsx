"use client";

import {
  BarChart3,
  CheckSquare,
  Clock3,
  TimerOff,
} from "lucide-react";
import { useMemo, useState } from "react";

import AttendanceFilters, {
  DateRange,
  StatusFilter,
} from "./filters";

import AttendanceTable, {
  AttendanceRecord,
} from "./table";

import DashboardSidebar from "../components/sidebar";
import StatCard from "./stats";

const attendanceData: AttendanceRecord[] = [
  {
    id: 1,
    name: "Bola Ahmed Tinubu",
    date: "24th Oct, 2025",
    clockIn: "08:00 AM",
    status: "On-Time",
    totalHours: "80H",
    branch: "Lagos",
  },
  {
    id: 2,
    name: "Bola Ahmed Tinubu",
    date: "23rd Oct, 2025",
    clockIn: "08:12 AM",
    status: "Late",
    totalHours: "80H",
    branch: "Lagos",
  },
  {
    id: 3,
    name: "Bola Ahmed Tinubu",
    date: "22nd Oct, 2025",
    clockIn: "-- : -- : --",
    status: "Absent",
    totalHours: "80H",
    branch: "Abuja",
  },
  {
    id: 4,
    name: "Bola Ahmed Tinubu",
    date: "21st Oct, 2025",
    clockIn: "08:00 AM",
    status: "Active",
    totalHours: "80H",
    branch: "Ilorin",
  },
  {
    id: 5,
    name: "Bola Ahmed Tinubu",
    date: "20th Oct, 2025",
    clockIn: "08:15 AM",
    status: "Late",
    totalHours: "80H",
    branch: "Lagos",
  },
  {
    id: 6,
    name: "Bola Ahmed Tinubu",
    date: "19th Oct, 2025",
    clockIn: "08:00 AM",
    status: "Active",
    totalHours: "80H",
    branch: "Abuja",
  },
  {
    id: 7,
    name: "Bola Ahmed Tinubu",
    date: "18th Oct, 2025",
    clockIn: "-- : -- : --",
    status: "Absent",
    totalHours: "80H",
    branch: "Ilorin",
  },
];

export default function AttendanceReportPage() {
  const [dateRange, setDateRange] =
    useState<DateRange>("Last 30 Days");

  const [branch, setBranch] =
    useState("All Branches");

  const [status, setStatus] =
    useState<StatusFilter>("All");

  /*
   * Filter the attendance records.
   *
   * This runs whenever:
   * - dateRange changes
   * - branch changes
   * - status changes
   */
  const filteredData = useMemo(() => {
    return attendanceData.filter((record) => {
      // Branch filter
      const branchMatches =
        branch === "All Branches" ||
        record.branch === branch;

      // Status filter
      const statusMatches =
        status === "All" ||
        record.status === status;

     
      const dateMatches = true;

      return (
        branchMatches &&
        statusMatches &&
        dateMatches
      );
    });
  }, [branch, status, dateRange]);

  return (
    <main className="min-h-screen bg-[#fafbff] text-[#171a21]">
      <DashboardSidebar />

      <section className="ml-[64px] min-h-screen px-[46px] py-[25px]">
        {/* Header */}
        <header>
          <h1 className="text-[20px] font-semibold tracking-[-0.5px]">
            Attendance Report
          </h1>

          <p className="mt-1 text-[8px] text-[#737985]">
            Detailed breakdown of staff punctuality and total work hours
          </p>
        </header>

        {/* Statistics */}
        <div className="mt-[21px] grid grid-cols-4 gap-[16px]">
          <StatCard
            title="Total Reports"
            value="340"
            description={
              <>
                <span className="font-medium text-[#52c95a]">
                  ↑ 3.5%
                </span>{" "}
                vs Last month
              </>
            }
            icon={
              <BarChart3
                size={16}
                strokeWidth={1.6}
              />
            }
          />

          <StatCard
            title="Total Attendance"
            value="95%"
            description={
              <>
                <span className="font-medium text-[#52c95a]">
                  ↑ 3.5%
                </span>{" "}
                vs Last month
              </>
            }
            icon={
              <CheckSquare
                size={16}
                strokeWidth={1.6}
              />
            }
          />

          <StatCard
            title="Total Lateness"
            value="22"
            description="Lateness tracked"
            icon={
              <TimerOff
                size={16}
                strokeWidth={1.6}
              />
            }
          />

          <StatCard
            title="Total Working Hours"
            value="1,420"
            description="Total Working Hours"
            icon={
              <Clock3
                size={16}
                strokeWidth={1.6}
              />
            }
          />
        </div>

        {/* Filters */}
        <AttendanceFilters
          dateRange={dateRange}
          branch={branch}
          status={status}
          onDateChange={setDateRange}
          onBranchChange={setBranch}
          onStatusChange={setStatus}
        />

        {/* Results count */}
        <div className="mt-3 flex justify-end">
          <p className="text-[8px] text-[#858b97]">
            Showing {filteredData.length} records
          </p>
        </div>

        {/* Table */}
        <AttendanceTable data={filteredData} />
      </section>
    </main>
  );
}