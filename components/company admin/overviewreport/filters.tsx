"use client";

import { ChevronDown } from "lucide-react";

export type DateRange =
  | "Last 7 Days"
  | "Last 30 Days"
  | "Last 90 Days";

export type StatusFilter =
  | "All"
  | "On-Time"
  | "Late"
  | "Absent";

interface AttendanceFiltersProps {
  dateRange: DateRange;
  branch: string;
  status: StatusFilter;

  onDateChange: (value: DateRange) => void;
  onBranchChange: (value: string) => void;
  onStatusChange: (value: StatusFilter) => void;
}

const dateOptions: DateRange[] = [
  "Last 7 Days",
  "Last 30 Days",
  "Last 90 Days",
];

const branchOptions = [
  "All Branches",
  "Lagos",
  "Abuja",
  "Ilorin",
];

const statusOptions: StatusFilter[] = [
  "All",
  "On-Time",
  "Late",
  "Absent",
];

export default function AttendanceFilters({
  dateRange,
  branch,
  status,
  onDateChange,
  onBranchChange,
  onStatusChange,
}: AttendanceFiltersProps) {
  return (
    <div className="mt-[27px] flex h-[49px] items-center gap-5 rounded-md border border-[#f0f1f6] bg-white px-3">
      {/* Date */}
      <div className="relative">
        <select
          value={dateRange}
          onChange={(e) =>
            onDateChange(e.target.value as DateRange)
          }
          className="h-[34px] w-[135px] appearance-none rounded-md border border-[#edf0f5] bg-white px-3 pr-8 text-[9px] text-[#343944] outline-none"
        >
          {dateOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={12}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#555c68]"
        />
      </div>

      {/* Branch */}
      <div className="relative">
        <select
          value={branch}
          onChange={(e) => onBranchChange(e.target.value)}
          className="h-[34px] w-[135px] appearance-none rounded-md border border-[#edf0f5] bg-white px-3 pr-8 text-[9px] text-[#343944] outline-none"
        >
          {branchOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={12}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#555c68]"
        />
      </div>

      {/* Status */}
      <div className="flex items-center gap-1">
        {statusOptions.map((option) => (
          <button
            key={option}
            onClick={() => onStatusChange(option)}
            className={`h-[20px] rounded-full px-3 text-[7px] font-medium transition ${
              status === option
                ? "bg-[#4d6cff] text-white"
                : "bg-[#e7ebff] text-[#52618e] hover:bg-[#dce2ff]"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}