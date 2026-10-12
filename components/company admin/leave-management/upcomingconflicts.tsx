
import { AlertTriangle, CalendarDays } from "lucide-react";
import type { LeaveConflict } from "./type";

export default function UpcomingConflicts({
  conflicts,
}: {
  conflicts: LeaveConflict[];
}) {
  return (
    <section className="mt-6">
      <div className="mb-3 flex items-center gap-2">
        <CalendarDays size={13} className="text-slate-500" />
        <h2 className="text-xs font-semibold text-slate-800">
          Upcoming Conflicts & Alerts
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {conflicts.map((conflict) => {
          const high = conflict.severity === "High";

          return (
            <article
              key={conflict.id}
              className={`rounded-lg border bg-white p-3 ${
                high ? "border-red-200" : "border-blue-200"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                  <div
                    className={`rounded-md p-1.5 ${
                      high
                        ? "bg-red-50 text-red-600"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    <AlertTriangle size={14} />
                  </div>

                  <h3 className="text-[11px] font-semibold text-slate-800">
                    {conflict.title}
                  </h3>
                </div>

                <span
                  className={`shrink-0 text-[8px] font-semibold ${
                    high ? "text-red-600" : "text-blue-600"
                  }`}
                >
                  {high ? "HIGH RISK" : "REVIEW REQUIRED"}
                </span>
              </div>

              <p className="mt-3 text-[10px] leading-5 text-slate-500">
                {conflict.description}
              </p>

              <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-2">
                <span className="text-[9px] text-slate-400">
                  {conflict.dates}
                </span>
                <span className="text-[9px] font-medium text-slate-600">
                  {conflict.department}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
