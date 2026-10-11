"use client";

import { X, FileDown, CircleHelp } from "lucide-react";
import { useState } from "react";

interface ExportDataModalProps {
  open: boolean;
  onClose: () => void;
}

type DateRange =
  | "all"
  | "12-months"
  | "30-days"
  | "custom";

export default function ExportDataModal({
  open,
  onClose,
}: ExportDataModalProps) {
  const [subscriptionHistory, setSubscriptionHistory] =
    useState(true);

  const [attendanceRecords, setAttendanceRecords] =
    useState(true);

  const [dateRange, setDateRange] =
    useState<DateRange>("all");

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/20
        px-4
      "
      onClick={onClose}
    >
      
      <div
        className="
          relative
          w-full
          max-w-[430px]
          rounded-lg
          border
          border-gray-200
          bg-white
          p-5
          shadow-xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-sm font-semibold text-gray-900">
              Export Company Data
            </h2>

            <p className="mt-1 text-[10px] text-gray-500">
              Generate a comprehensive PDF report for MAOQ
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              flex
              size-6
              items-center
              justify-center
              rounded
              text-gray-500
              transition
              hover:bg-gray-100
              hover:text-gray-800
            "
          >
            <X size={14} />
          </button>
        </div>

      
        <div className="mt-5 space-y-2">
          <CheckboxCard
            checked={subscriptionHistory}
            onChange={setSubscriptionHistory}
            title="Subscription History"
            description="All subscription and payment details"
          />

          <CheckboxCard
            checked={attendanceRecords}
            onChange={setAttendanceRecords}
            title="Attendance Records"
            description="Full attendance history and clock-in/out logs"
          />
        </div>

        
        <div className="mt-5">
          <p className="mb-2 text-[9px] font-medium text-gray-700">
            Date Range
          </p>

          <div className="space-y-2">
            <DateOption
              value="all"
              selected={dateRange}
              onChange={setDateRange}
              title="All Time"
              description="Since Mar 8, 2025"
            />

            <DateOption
              value="12-months"
              selected={dateRange}
              onChange={setDateRange}
              title="Last 12 Months"
              description="Most recent year"
            />

            <DateOption
              value="30-days"
              selected={dateRange}
              onChange={setDateRange}
              title="Last 30 Days"
              description="Most recent month"
            />

            <DateOption
              value="custom"
              selected={dateRange}
              onChange={setDateRange}
              title="Custom Range"
              description="Select specific dates"
            />
          </div>
        </div>

       
        <div className="mt-4 rounded-md border border-[#69a4ff] bg-[#f8fbff] p-3">
          <div className="flex items-start gap-2">
            <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#4b6ff8]">
              <FileDown size={11} />
            </div>

            <div>
              <p className="text-[9px] font-medium text-gray-800">
                Export Preview
              </p>

              <p className="mt-1 text-[8px] leading-3 text-gray-500">
                Your PDF will include company, employees,
                invoices, attendance, and time period:{" "}
                {getDateLabel(dateRange)}
              </p>
            </div>
          </div>
        </div>

       
        <div className="mt-5 flex items-center justify-between">
          <p className="text-[8px] text-gray-400">
            The PDF will be generated and downloaded automatically
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="
                rounded-md
                border
                border-gray-200
                px-4
                py-2
                text-[9px]
                font-medium
                text-gray-600
                transition
                hover:bg-gray-50
              "
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={() => {
                // PDF generation will go here
                console.log({
                  subscriptionHistory,
                  attendanceRecords,
                  dateRange,
                });
              }}
              className="
                flex
                items-center
                gap-1.5
                rounded-md
                bg-[#4b6ff8]
                px-4
                py-2
                text-[9px]
                font-medium
                text-white
                transition
                hover:bg-[#3d5de5]
              "
            >
              <FileDown size={11} />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



interface CheckboxCardProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  title: string;
  description: string;
}

function CheckboxCard({
  checked,
  onChange,
  title,
  description,
}: CheckboxCardProps) {
  return (
    <label
      className="
        flex
        cursor-pointer
        items-start
        gap-2
        rounded-md
        border
        border-gray-200
        p-3
        transition
        hover:border-blue-200
      "
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="
          mt-0.5
          size-3
          accent-[#4b6ff8]
        "
      />

      <div>
        <p className="text-[9px] font-medium text-gray-800">
          {title}
        </p>

        <p className="mt-0.5 text-[8px] text-gray-400">
          {description}
        </p>
      </div>
    </label>
  );
}



interface DateOptionProps {
  value: DateRange;
  selected: DateRange;
  onChange: (value: DateRange) => void;
  title: string;
  description: string;
}

function DateOption({
  value,
  selected,
  onChange,
  title,
  description,
}: DateOptionProps) {
  const isSelected = selected === value;

  return (
    <label
      className={`
        flex
        cursor-pointer
        items-start
        gap-2
        rounded-md
        border
        p-3
        transition
        ${
          isSelected
            ? "border-[#69a4ff] bg-[#f8fbff]"
            : "border-gray-200 hover:border-blue-200"
        }
      `}
    >
      <input
        type="radio"
        name="date-range"
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
        className="
          mt-0.5
          size-3
          accent-[#4b6ff8]
        "
      />

      <div>
        <p className="text-[9px] font-medium text-gray-800">
          {title}
        </p>

        <p className="mt-0.5 text-[8px] text-gray-400">
          {description}
        </p>
      </div>
    </label>
  );
}

function getDateLabel(dateRange: DateRange) {
  switch (dateRange) {
    case "12-months":
      return "Last 12 Months";

    case "30-days":
      return "Last 30 Days";

    case "custom":
      return "Custom Range";

    default:
      return "All Time";
  }
}