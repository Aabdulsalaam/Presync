"use client";

export type AttendanceStatus =
  | "On-Time"
  | "Late"
  | "Absent"
  | "Active";

export interface AttendanceRecord {
  id: number;
  name: string;
  date: string;
  clockIn: string;
  status: AttendanceStatus;
  totalHours: string;
  branch: string;
}

interface AttendanceTableProps {
  data: AttendanceRecord[];
}

function StatusBadge({ status }: { status: AttendanceStatus }) {
  const styles: Record<AttendanceStatus, string> = {
    "On-Time": "bg-[#55db5d] text-white",
    Late: "bg-[#ffb1b1] text-white",
    Absent: "bg-[#ff5b5b] text-white",
    Active: "bg-[#55db5d] text-white",
  };

  return (
    <span
      className={`inline-flex min-w-[42px] items-center justify-center rounded-full px-2 py-[3px] text-[7px] font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default function AttendanceTable({
  data,
}: AttendanceTableProps) {
  return (
    <div className="mt-[13px] overflow-hidden rounded-md border border-[#edf0f5] bg-white">
      {/* Header */}
      <div className="grid grid-cols-[1.5fr_1.2fr_1.2fr_1.5fr_0.8fr] items-center bg-[#eef1ff] px-[12px] py-[8px]">
        <span className="text-[7px] font-medium text-[#343945]">
          Name
        </span>

        <span className="text-[7px] font-medium text-[#343945]">
          Date
        </span>

        <span className="text-[7px] font-medium text-[#343945]">
          Clock-in
        </span>

        <span className="text-[7px] font-medium text-[#343945]">
          Status
        </span>

        <span className="text-[7px] font-medium text-[#343945]">
          Total Hours
        </span>
      </div>

      {/* Rows */}
      {data.length > 0 ? (
        data.map((row) => (
          <div
            key={row.id}
            className="grid h-[50px] grid-cols-[1.5fr_1.2fr_1.2fr_1.5fr_0.8fr] items-center border-t border-[#f0f1f5] px-[12px]"
          >
            <span className="text-[8px] font-medium text-[#20242c]">
              {row.name}
            </span>

            <span className="text-[8px] text-[#858b97]">
              {row.date}
            </span>

            <span className="text-[8px] text-[#22262e]">
              {row.clockIn}
            </span>

            <div>
              <StatusBadge status={row.status} />
            </div>

            <span className="text-[8px] text-[#858b97]">
              {row.totalHours}
            </span>
          </div>
        ))
      ) : (
        <div className="flex h-[120px] items-center justify-center">
          <p className="text-[10px] text-[#858b97]">
            No attendance records found
          </p>
        </div>
      )}
    </div>
  );
}