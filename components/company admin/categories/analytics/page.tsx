
"use client";

import DashboardSidebar from "../../components/sidebar";
import CategoryDetailsHeader from "../overviewheader";

const weeklyTrend = [
  { day: "Mon", present: 43, late: 3, absent: 4 },
  { day: "Tue", present: 45, late: 2, absent: 3 },
  { day: "Wed", present: 41, late: 4, absent: 5 },
  { day: "Thu", present: 47, late: 3, absent: 2 },
  { day: "Fri", present: 44, late: 2, absent: 3 },
];

const weeklyRates = [7, 6, 8, 7, 7.5, 6.5];

function AttendanceTrendChart() {
  const width = 500;
  const height = 155;
  const left = 42;
  const right = 490;
  const top = 10;
  const bottom = 125;

  const x = (index: number) =>
    left + (index * (right - left)) / (weeklyTrend.length - 1);

  const y = (value: number) =>
    bottom - (value / 60) * (bottom - top);

  const makeLine = (key: "present" | "late" | "absent") =>
    weeklyTrend
      .map((item, index) => `${index === 0 ? "M" : "L"} ${x(index)} ${y(item[key])}`)
      .join(" ");

  const presentLine = makeLine("present");
  const lateLine = makeLine("late");
  const absentLine = makeLine("absent");

  const areaPath = `${presentLine} L ${x(weeklyTrend.length - 1)} ${bottom} L ${x(0)} ${bottom} Z`;

  return (
    <section className="min-w-0 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-sm font-semibold text-gray-800">
        Attendance Trend (This Week)
      </h3>

      <div className="w-full overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height + 30}`}
          className="h-auto w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="presentGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#315BFA" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#315BFA" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {[0, 15, 30, 45, 60].map((value) => (
            <g key={value}>
              <line
                x1={left}
                y1={y(value)}
                x2={right}
                y2={y(value)}
                stroke="#E8EBF1"
                strokeDasharray="2 3"
              />
              <text
                x="12"
                y={y(value) + 4}
                fontSize="10"
                fill="#9CA3AF"
              >
                {value}
              </text>
            </g>
          ))}

          <path d={areaPath} fill="url(#presentGradient)" />

          <path
            d={presentLine}
            fill="none"
            stroke="#315BFA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d={lateLine}
            fill="none"
            stroke="#D97706"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d={absentLine}
            fill="none"
            stroke="#EF4444"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {weeklyTrend.map((item, index) => (
            <text
              key={item.day}
              x={x(index)}
              y="147"
              textAnchor="middle"
              fontSize="10"
              fill="#9CA3AF"
            >
              {item.day}
            </text>
          ))}
        </svg>
      </div>
    </section>
  );
}

function WeeklyAttendanceChart() {
  const width = 500;
  const height = 155;
  const left = 42;
  const right = 490;
  const top = 10;
  const bottom = 125;

  const chartMax = 10;
  const chartMin = 0;
  const barWidth = 54;
  const gap = (right - left - weeklyRates.length * barWidth) /
    (weeklyRates.length - 1);

  return (
    <section className="min-w-0 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-sm font-semibold text-gray-800">
        Weekly Attendance Rate
      </h3>

      <div className="w-full overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height + 30}`}
          className="h-auto w-full"
          preserveAspectRatio="none"
        >
          {[0, 2, 4, 6, 8, 10].map((value) => {
            const position =
              bottom - ((value - chartMin) / (chartMax - chartMin)) *
              (bottom - top);

            return (
              <g key={value}>
                <line
                  x1={left}
                  y1={position}
                  x2={right}
                  y2={position}
                  stroke="#E8EBF1"
                  strokeDasharray="2 3"
                />
                <text
                  x="12"
                  y={position + 4}
                  fontSize="10"
                  fill="#9CA3AF"
                >
                  {value}
                </text>
              </g>
            );
          })}

          {weeklyRates.map((rate, index) => {
            const barHeight = (rate / chartMax) * (bottom - top);
            const barX = left + index * (barWidth + gap);

            return (
              <g key={index}>
                <rect
                  x={barX}
                  y={bottom - barHeight}
                  width={barWidth}
                  height={barHeight}
                  rx="3"
                  fill="#1748E8"
                />

                <text
                  x={barX + barWidth / 2}
                  y="145"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#9CA3AF"
                >
                  W
                </text>

                <text
                  x={barX + barWidth / 2}
                  y="157"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#9CA3AF"
                >
                  {index + 1}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}

export default function CategoryAnalyticsPage() {
  const stats = [
    {
      title: "Total Members",
      value: "50",
      color: "text-[#315BFA]",
    },
    {
      title: "Present Today",
      value: "43",
      color: "text-green-600",
    },
    {
      title: "Absent Today",
      value: "4",
      color: "text-red-500",
    },
    {
      title: "Late Arrivals",
      value: "3",
      color: "text-amber-600",
    },
    {
      title: "Attendance Rate",
      value: "86%",
      color: "text-[#315BFA]",
    },
  ];

  return (
    <div className="ml-24 flex min-h-screen bg-[#F8FAFC]">
      <DashboardSidebar />

      <main className="min-w-0 flex-1 px-4 py-5 md:px-6 lg:px-7">
        <div className="mx-auto max-w-[1500px]">
          <CategoryDetailsHeader />

          {/* Statistics */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="flex min-h-[75px] flex-col items-center justify-center rounded-xl border border-gray-100 bg-white px-2 py-3 shadow-sm"
              >
                <p className="text-center text-[11px] text-gray-400">
                  {stat.title}
                </p>

                <h2 className={`mt-1 text-xl font-medium ${stat.color}`}>
                  {stat.value}
                </h2>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="mt-4 grid grid-cols-1 gap-3 xl:grid-cols-2">
            <AttendanceTrendChart />
            <WeeklyAttendanceChart />
          </div>
        </div>
      </main>
    </div>
  );
}
