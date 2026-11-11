
"use client";

import DashboardSidebar from "../sidebar";
import { CalendarDays, ChevronDown, Download } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ReactNode } from "react";

// Weekly attendance data
const attendanceData = [
  { day: "MON", present: 250, late: 75, absent: 4 },
  { day: "TUE", present: 175, late: 12, absent: 3 },
  { day: "WED", present: 220, late: 8, absent: 3 },
  { day: "THUR", present: 130, late: 35, absent: 5 },
  { day: "FRI", present: 95, late: 38, absent: 4 },
  { day: "SAT", present: 5, late: 65, absent: 2 },
  { day: "SUN", present: 18, late: 8, absent: 2 },
];

// Check-in time distribution
const checkInData = [
  { time: "7:00-8:00", count: 35 },
  { time: "8:00-9:00", count: 140 },
  { time: "9:00-10:00", count: 22 },
  { time: "10:00-11:00", count: 105 },
  { time: "11:00+", count: 20 },
];

// Leave type distribution
const leaveData = [
  { name: "Vacation", value: 45, color: "#8875f5" },
  { name: "Sick Leave", value: 30, color: "#ff918b" },
  { name: "Personal", value: 19, color: "#32bfd5" },
  { name: "Others", value: 9, color: "#ffad45" },
];

// Department performance
const departmentData = [
  { department: "Engineering", present: 100, early: 100 },
  { department: "Marketing", present: 100, early: 40 },
  { department: "Sales", present: 100, early: 63 },
  { department: "HR", present: 100, early: 40 },
  { department: "Finance", present: 100, early: 10 },
  { department: "Operations", present: 100, early: 70 },
];

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-2 text-[11px] font-medium leading-none text-slate-800">
      {children}
    </h2>
  );
}

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-md border border-slate-100 bg-white px-3 py-2 text-[10px] shadow-lg">
      <p className="mb-1 font-semibold text-slate-700">{label}</p>

      {payload.map((item: any) => (
        <p key={item.dataKey} style={{ color: item.color }}>
          {item.name}: {item.value}
        </p>
      ))}
    </div>
  );
}

export default function AnalyticsPage() {
  // Export attendance report
  const exportReport = () => {
    const rows = [
      ["Day", "Present", "Late", "Absent"],
      ...attendanceData.map((d) => [
        d.day,
        d.present,
        d.late,
        d.absent,
      ]),
    ];

    const csv = rows.map((row) => row.join(",")).join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "attendance-analytics.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen w-full bg-[#f8f9ff] text-slate-800">

      {/* Existing Dashboard Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <main className="ml-28 min-h-screen min-w-0 px-3 py-4 sm:px-5 lg:px-6">

        {/* Header */}
        <header className="mb-5 flex items-start justify-between gap-3">
          <div>
            <h1 className="text-[21px] font-semibold leading-tight tracking-[-0.04em] text-[#171923]">
              Analytics
            </h1>

            <p className="mt-1 text-[9px] text-slate-500">
              Attendance trends, punctuality, and insights
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 pt-1">
            <button className="flex h-[30px] items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 text-[9px] font-medium text-slate-700 shadow-sm">
              <CalendarDays size={11} />
              Last 7 Days
              <ChevronDown size={10} className="text-slate-400" />
            </button>

            <button
              onClick={exportReport}
              className="flex h-[30px] items-center gap-1.5 rounded-md bg-[#2860ed] px-2.5 text-[9px] font-medium text-white shadow-sm transition hover:bg-blue-700"
            >
              <Download size={11} />
              Export Report
            </button>
          </div>
        </header>

        {/* Weekly Attendance Trend */}
        <section className="mb-5">
          <SectionTitle>
            Weekly Attendance Trend
          </SectionTitle>

          <div className="h-[210px] w-full bg-white px-2 pb-1 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={attendanceData}
                margin={{
                  top: 20,
                  right: 5,
                  left: 2,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient
                    id="presentFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#9382ff" stopOpacity={0.34} />
                    <stop offset="100%" stopColor="#9382ff" stopOpacity={0.04} />
                  </linearGradient>

                  <linearGradient
                    id="lateFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#ff9993" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#ff9993" stopOpacity={0.04} />
                  </linearGradient>

                  <linearGradient
                    id="absentFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#45c4dc" stopOpacity={0.22} />
                    <stop offset="100%" stopColor="#45c4dc" stopOpacity={0.02} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  stroke="#e9ebf2"
                  strokeDasharray="2 3"
                  vertical
                />

                <XAxis
                  dataKey="day"
                  tick={{ fontSize: 8, fill: "#737987" }}
                  axisLine={{ stroke: "#dfe2eb" }}
                  tickLine={false}
                />

                <YAxis
                  domain={[0, 300]}
                  ticks={[0, 60, 120, 180, 240, 300]}
                  tick={{ fontSize: 8, fill: "#737987" }}
                  axisLine={false}
                  tickLine={false}
                  width={27}
                />

                <Tooltip content={<ChartTooltip />} />

                <Legend
                  verticalAlign="top"
                  align="center"
                  iconType="diamond"
                  iconSize={5}
                  wrapperStyle={{
                    fontSize: "8px",
                    paddingBottom: 8,
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="present"
                  name="Present"
                  stroke="#9382ff"
                  strokeWidth={1.5}
                  fill="url(#presentFill)"
                  dot={{
                    r: 2,
                    fill: "#fff",
                    stroke: "#9382ff",
                    strokeWidth: 1.3,
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="late"
                  name="Late"
                  stroke="#ff9993"
                  strokeWidth={1.4}
                  fill="url(#lateFill)"
                  dot={{
                    r: 2,
                    fill: "#fff",
                    stroke: "#ff9993",
                    strokeWidth: 1.2,
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="absent"
                  name="Absent"
                  stroke="#45c4dc"
                  strokeWidth={1.2}
                  fill="url(#absentFill)"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Check-in and Leave Distribution */}
        <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">

          {/* Check-in Time Distribution */}
          <section className="min-w-0">
            <SectionTitle>
              Check-in Time Distribution
            </SectionTitle>

            <div className="h-[190px] bg-white px-2 pb-2 pt-3">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={checkInData}
                  margin={{
                    top: 2,
                    right: 4,
                    left: 1,
                    bottom: 8,
                  }}
                  barCategoryGap="22%"
                >
                  <CartesianGrid
                    stroke="#e9ebf2"
                    strokeDasharray="2 3"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="time"
                    tick={{ fontSize: 7, fill: "#737987" }}
                    axisLine={{ stroke: "#dfe2eb" }}
                    tickLine={false}
                  />

                  <YAxis
                    domain={[0, 200]}
                    ticks={[0, 40, 80, 120, 160, 200]}
                    tick={{ fontSize: 8, fill: "#737987" }}
                    axisLine={false}
                    tickLine={false}
                    width={26}
                  />

                  <Tooltip content={<ChartTooltip />} />

                  <Bar
                    dataKey="count"
                    name="Employees"
                    fill="#a18fff"
                    radius={[10, 10, 0, 0]}
                    maxBarSize={42}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Leave Type Distribution */}
          <section className="min-w-0">
            <SectionTitle>
              Leave Type Distribution
            </SectionTitle>

            <div className="h-[190px] bg-white px-1 pb-1 pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart
                  margin={{
                    top: 10,
                    right: 12,
                    bottom: 5,
                    left: 12,
                  }}
                >
                  <Pie
                    data={leaveData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="57%"
                    outerRadius="46%"
                    stroke="none"
                    labelLine={{
                      strokeWidth: 1,
                      stroke: "#cbd0dc",
                    }}
                    label={({
                      name,
                      value,
                      x,
                      y,
                      textAnchor,
                    }: any) => (
                      <text
                        x={x}
                        y={y}
                        textAnchor={textAnchor}
                        fill="#6b7280"
                        fontSize={8}
                      >
                        <tspan>{name}</tspan>
                        <tspan x={x} dy={9} fill="#9aa0ac">
                          {value}%
                        </tspan>
                      </text>
                    )}
                  >
                    {leaveData.map((entry) => (
                      <Cell
                        key={entry.name}
                        fill={entry.color}
                      />
                    ))}
                  </Pie>

                  <Tooltip formatter={(value) => `${value}%`} />

                  <Legend
                    verticalAlign="top"
                    align="center"
                    iconType="circle"
                    iconSize={6}
                    wrapperStyle={{ fontSize: "8px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        {/* Department Performance Comparison */}
        <section className="mb-5">
          <SectionTitle>
            Department Performance Comparison
          </SectionTitle>

          <div className="h-[175px] bg-white px-2 pb-2 pt-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={departmentData}
                margin={{
                  top: 2,
                  right: 2,
                  left: 1,
                  bottom: 5,
                }}
                barCategoryGap="16%"
                barGap={2}
              >
                <CartesianGrid
                  stroke="#e9ebf2"
                  strokeDasharray="2 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="department"
                  tick={{ fontSize: 7, fill: "#737987" }}
                  axisLine={{ stroke: "#dfe2eb" }}
                  tickLine={false}
                />

                <YAxis
                  domain={[0, 100]}
                  ticks={[0, 20, 40, 60, 80, 100]}
                  tick={{ fontSize: 8, fill: "#737987" }}
                  axisLine={false}
                  tickLine={false}
                  width={25}
                />

                <Tooltip content={<ChartTooltip />} />

                <Legend
                  verticalAlign="bottom"
                  iconType="square"
                  iconSize={6}
                  wrapperStyle={{
                    fontSize: "8px",
                    paddingTop: 4,
                  }}
                />

                <Bar
                  dataKey="present"
                  name="Present"
                  fill="#9a88f7"
                  maxBarSize={35}
                />

                <Bar
                  dataKey="early"
                  name="Early"
                  fill="#ff9993"
                  maxBarSize={35}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Insight Cards */}
        <section className="grid grid-cols-1 gap-2 sm:grid-cols-3">

          <div className="min-h-[58px] rounded-md border border-[#d6e6ff] bg-[#edf5ff] px-3 py-3">
            <h3 className="text-[9px] font-medium text-[#4771c9]">
              Best Performing
            </h3>

            <p className="mt-1 text-[8px] leading-relaxed text-[#4771c9]">
              HR Department with 95% attendance rate
            </p>
          </div>

          <div className="min-h-[58px] rounded-md border border-[#ffd1c6] bg-[#ffebe5] px-3 py-3">
            <h3 className="text-[9px] font-medium text-[#d56b55]">
              Needs Attention
            </h3>

            <p className="mt-1 text-[8px] leading-relaxed text-[#d56b55]">
              Finance Department - punctuality below target
            </p>
          </div>

          <div className="min-h-[58px] rounded-md border border-[#c9f2c9] bg-[#e0f9df] px-3 py-3">
            <h3 className="text-[9px] font-medium text-[#47964c]">
              Peak Hours
            </h3>

            <p className="mt-1 text-[8px] leading-relaxed text-[#47964c]">
              Most check-ins between 8:00-9:00 AM
            </p>
          </div>

        </section>

      </main>
    </div>
  );
}
