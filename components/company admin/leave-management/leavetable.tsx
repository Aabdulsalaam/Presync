
import { CalendarDays, Mail, Phone } from "lucide-react";
import type { LeaveRequest } from "./type";

type Props = {
  requests: LeaveRequest[];
  onSelect: (request: LeaveRequest) => void;
};

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function LeaveRequestsTable({
  requests,
  onSelect,
}: Props) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-100 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px] text-left">
          <thead className="bg-[#f0f2ff] text-[10px] text-slate-600">
            <tr>
              <th className="px-3 py-3 font-medium">Employee & Role</th>
              <th className="px-3 py-3 font-medium">Leave Details</th>
              <th className="px-3 py-3 font-medium">Operational Impact</th>
              <th className="px-3 py-3 font-medium">
                Pending Responsibilities
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {requests.map((request) => (
              <tr
                key={request.id}
                tabIndex={0}
                onClick={() => onSelect(request)}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    onSelect(request);
                  }
                }}
                className="cursor-pointer align-top text-[10px] text-slate-600 transition hover:bg-indigo-50/60 focus:bg-indigo-50"
              >
                <td className="px-3 py-4">
                  <div className="flex items-start gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-indigo-100 text-[10px] font-semibold text-indigo-700">
                      {request.initials}
                    </div>

                    <div className="min-w-0">
                      <p className="font-semibold text-slate-800">
                        {request.employeeName}
                      </p>
                      <p className="mt-1 text-[9px] text-slate-400">
                        {request.role}
                      </p>
                      <p className="mt-1 text-[9px] text-slate-400">
                        {request.department}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-3 py-4">
                  <span
                    className={`inline-block rounded px-1.5 py-1 text-[9px] font-medium ${
                      request.leaveType === "Sick Leave"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {request.leaveType}
                  </span>

                  <div className="mt-2 flex items-center gap-1">
                    <CalendarDays size={11} />
                    {formatDate(request.startDate)}
                  </div>

                  <p className="mt-1 text-[9px] text-slate-400">
                    to {formatDate(request.endDate)}
                  </p>

                  <p className="mt-1 font-medium text-slate-700">
                    {request.days} days
                  </p>
                </td>

                <td className="max-w-[200px] px-3 py-4">
                  <p className="line-clamp-3 leading-5">
                    {request.operationalImpact}
                  </p>
                </td>

                <td className="max-w-[200px] px-3 py-4">
                  <p className="line-clamp-3 leading-5">
                    {request.pendingResponsibilities}
                  </p>

                  <div className="mt-2 flex items-center gap-1 text-[9px] text-indigo-600">
                    <Mail size={10} />
                    View request details
                  </div>
                </td>
              </tr>
            ))}

            {requests.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-12 text-center text-xs text-slate-400"
                >
                  No leave requests match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
