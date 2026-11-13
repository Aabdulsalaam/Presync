
"use client";

import { useMemo, useState } from "react";
import DashboardSidebar from "../../components/sidebar";
import CategoryDetailsHeader from "../overviewheader";
import { CalendarDays, Download } from "lucide-react";

type AttendanceRecord = {
  id: number;
  date: string;
  name: string;
  initials: string;
  checkIn: string;
  checkOut: string;
  status: "Present" | "Late" | "Absent";
  avatarColor: string;
};

const attendanceRecords: AttendanceRecord[] = [
  {
    id: 1,
    date: "2024-11-25",
    name: "Sarah Johnson",
    initials: "SJ",
    checkIn: "08:55 AM",
    checkOut: "05:30 PM",
    status: "Present",
    avatarColor: "bg-blue-600",
  },
  {
    id: 2,
    date: "2024-11-25",
    name: "Michael Chen",
    initials: "MC",
    checkIn: "08:55 AM",
    checkOut: "05:30 PM",
    status: "Present",
    avatarColor: "bg-purple-600",
  },
  {
    id: 3,
    date: "2024-11-25",
    name: "Aisha Bello",
    initials: "AB",
    checkIn: "09:42 AM",
    checkOut: "05:30 PM",
    status: "Late",
    avatarColor: "bg-green-700",
  },
  {
    id: 4,
    date: "2024-11-25",
    name: "David Okonkwo",
    initials: "DO",
    checkIn: "—",
    checkOut: "—",
    status: "Absent",
    avatarColor: "bg-red-600",
  },
  {
    id: 5,
    date: "2024-11-24",
    name: "Grace Nwosu",
    initials: "GN",
    checkIn: "08:55 AM",
    checkOut: "05:30 PM",
    status: "Present",
    avatarColor: "bg-amber-600",
  },
  {
    id: 6,
    date: "2024-11-24",
    name: "Emeka Osei",
    initials: "EO",
    checkIn: "08:55 AM",
    checkOut: "05:30 PM",
    status: "Present",
    avatarColor: "bg-cyan-700",
  },
];

export default function AttendanceHistoryPage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filteredRecords = useMemo(() => {
    return attendanceRecords.filter((record) => {
      const matchesStartDate =
        !startDate || record.date >= startDate;

      const matchesEndDate =
        !endDate || record.date <= endDate;

      return matchesStartDate && matchesEndDate;
    });
  }, [startDate, endDate]);

  const exportCSV = () => {
    const headers = [
      "Date",
      "User",
      "Check In",
      "Check Out",
      "Status",
    ];

    const rows = filteredRecords.map((record) => [
      record.date,
      record.name,
      record.checkIn,
      record.checkOut,
      record.status,
    ]);

    const csvContent = [
      headers,
      ...rows,
    ]
      .map((row) =>
        row
          .map((value) => `"${String(value).replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "category-attendance-history.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  const statusStyles = {
    Present: "bg-green-100 text-green-700",
    Late: "bg-amber-100 text-amber-700",
    Absent: "bg-red-100 text-red-600",
  };

  return (
    <div className="ml-24 flex min-h-screen bg-[#F8FAFC]">
      <DashboardSidebar />

      <main className="min-w-0 flex-1 px-4 py-5 md:px-6 lg:px-7">
        <div className="mx-auto max-w-[1500px]">
          <CategoryDetailsHeader />

          {/* Filters and export */}
          <div className="mt-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <CalendarDays
                  size={13}
                  className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  aria-label="Start date"
                  className="h-9 w-[120px] rounded-lg border border-gray-200 bg-white pl-8 pr-2 text-[11px] text-gray-600 outline-none focus:border-blue-500"
                />
              </div>

              <span className="text-[11px] text-gray-400">to</span>

              <div className="relative">
                <CalendarDays
                  size={13}
                  className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="date"
                  value={endDate}
                  min={startDate || undefined}
                  onChange={(e) => setEndDate(e.target.value)}
                  aria-label="End date"
                  className="h-9 w-[120px] rounded-lg border border-gray-200 bg-white pl-8 pr-2 text-[11px] text-gray-600 outline-none focus:border-blue-500"
                />
              </div>

              {(startDate || endDate) && (
                <button
                  type="button"
                  onClick={() => {
                    setStartDate("");
                    setEndDate("");
                  }}
                  className="text-xs text-blue-600 hover:underline"
                >
                  Clear
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={exportCSV}
              className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 text-xs font-medium text-gray-600 transition hover:bg-gray-50"
            >
              <Download size={13} />
              Export CSV
            </button>
          </div>

          {/* Attendance table */}
          <div className="mt-3 overflow-hidden rounded-xl border border-gray-100 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-gray-100 bg-[#FAFBFC]">
                    <th className="px-3 py-3 text-[10px] font-semibold text-gray-500">
                      Date
                    </th>
                    <th className="px-3 py-3 text-[10px] font-semibold text-gray-500">
                      User
                    </th>
                    <th className="px-3 py-3 text-[10px] font-semibold text-gray-500">
                      Check In
                    </th>
                    <th className="px-3 py-3 text-[10px] font-semibold text-gray-500">
                      Check Out
                    </th>
                    <th className="px-3 py-3 text-[10px] font-semibold text-gray-500">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredRecords.length > 0 ? (
                    filteredRecords.map((record) => (
                      <tr
                        key={record.id}
                        className="border-b border-gray-50 last:border-0 hover:bg-gray-50/70"
                      >
                        <td className="whitespace-nowrap px-3 py-2.5 text-[10px] text-gray-500">
                          {record.date}
                        </td>

                        <td className="px-3 py-2.5">
                          <div className="flex items-center gap-1.5">
                            <div
                              className={`flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full text-[8px] font-medium text-white ${record.avatarColor}`}
                            >
                              {record.initials}
                            </div>

                            <span className="whitespace-nowrap text-[10px] font-medium text-gray-700">
                              {record.name}
                            </span>
                          </div>
                        </td>

                        <td className="whitespace-nowrap px-3 py-2.5 text-[10px] text-gray-500">
                          {record.checkIn}
                        </td>

                        <td className="whitespace-nowrap px-3 py-2.5 text-[10px] text-gray-500">
                          {record.checkOut}
                        </td>

                        <td className="px-3 py-2.5">
                          <span
                            className={`inline-flex rounded-full px-2 py-0.5 text-[9px] font-medium ${statusStyles[record.status]}`}
                          >
                            {record.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={5}
                        className="px-4 py-12 text-center text-xs text-gray-400"
                      >
                        No attendance records found for this date range.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
