interface AttendanceSummaryProps {
  present: number;
  absent: number;
  total: number;
}

export function AttendanceSummary({ present, absent, total }: AttendanceSummaryProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Attendance summary</h2>
        <span className="text-sm text-slate-500">Updated today</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-4 text-center">
          <p className="text-sm font-medium text-slate-500">Present</p>
          <p className="mt-2 text-3xl font-semibold text-emerald-600">{present}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4 text-center">
          <p className="text-sm font-medium text-slate-500">Absent</p>
          <p className="mt-2 text-3xl font-semibold text-rose-600">{absent}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4 text-center">
          <p className="text-sm font-medium text-slate-500">Total</p>
          <p className="mt-2 text-3xl font-semibold text-slate-900">{total}</p>
        </div>
      </div>
    </div>
  );
}
