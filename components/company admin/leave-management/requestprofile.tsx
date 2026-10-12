
import { useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  Clock3,
  Mail,
  Pencil,
  Phone,
  RotateCcw,
  X,
} from "lucide-react";
import type {
  LeaveRequest,
  LeaveStatus,
} from "./type";
import LeaveBalanceCard from "./balanceCard";

type Props = {
  request: LeaveRequest;
  onBack: () => void;
  onStatusChange: (id: string, status: LeaveStatus) => void;
};

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function LeaveRequestProfile({
  request,
  onBack,
  onStatusChange,
}: Props) {
  const [reason, setReason] = useState(request.reason);
  const [editing, setEditing] = useState(false);
  const [savedReason, setSavedReason] = useState(request.reason);

  const isPending = request.status === "Pending";

  function saveChanges() {
    setSavedReason(reason);
    setEditing(false);
  }

  function cancelChanges() {
    setReason(savedReason);
    setEditing(false);
  }

  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <button
          onClick={onBack}
          aria-label="Back to leave requests"
          className="rounded-md p-2 text-slate-500 hover:bg-indigo-100"
        >
          <ArrowLeft size={17} />
        </button>

        <div>
          <h1 className="text-lg font-bold text-slate-900">
            Leave Request Details
          </h1>
          <p className="mt-1 text-[11px] text-slate-500">
            Review employee leave and approval details
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_270px]">
        {/* Main column */}
        <div className="min-w-0 space-y-4">
          {/* Employee card */}
          <section className="rounded-lg border border-slate-100 bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700">
                  {request.initials}
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    {request.employeeName}
                  </h2>
                  <p className="mt-1 text-[10px] text-slate-500">
                    {request.role}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    {request.department} · {request.employeeId}
                  </p>
                </div>
              </div>

              <span
                className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${
                  request.status === "Approved"
                    ? "bg-emerald-100 text-emerald-700"
                    : request.status === "Rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-amber-100 text-amber-700"
                }`}
              >
                {request.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <p className="text-[9px] text-slate-400">
                  Leave Type
                </p>
                <p className="mt-1 text-[11px] font-medium text-slate-700">
                  {request.leaveType}
                </p>
              </div>

              <div>
                <p className="text-[9px] text-slate-400">
                  Duration
                </p>
                <p className="mt-1 text-[11px] font-medium text-slate-700">
                  {request.days} days
                </p>
              </div>

              <div>
                <p className="text-[9px] text-slate-400">
                  Start Date
                </p>
                <p className="mt-1 text-[11px] font-medium text-slate-700">
                  {formatDate(request.startDate)}
                </p>
              </div>

              <div>
                <p className="text-[9px] text-slate-400">
                  End Date
                </p>
                <p className="mt-1 text-[11px] font-medium text-slate-700">
                  {formatDate(request.endDate)}
                </p>
              </div>
            </div>
          </section>

          {/* Leave reason */}
          <section className="rounded-lg border border-blue-100 bg-blue-50 p-4">
            <div className="mb-2 flex items-center justify-between gap-2">
              <h3 className="text-xs font-semibold text-slate-800">
                Requested Leave
              </h3>

              <button
                onClick={() => setEditing(!editing)}
                className="inline-flex items-center gap-1 text-[10px] font-medium text-blue-700 hover:text-blue-900"
              >
                <Pencil size={11} />
                {editing ? "Stop editing" : "Edit reason"}
              </button>
            </div>

            {editing ? (
              <textarea
                value={reason}
                onChange={(event) => setReason(event.target.value)}
                rows={3}
                className="w-full rounded-md border border-blue-200 bg-white p-3 text-xs leading-5 outline-none focus:ring-2 focus:ring-blue-200"
              />
            ) : (
              <p className="text-[11px] leading-5 text-slate-600">
                {savedReason}
              </p>
            )}

            <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-500">
              <CalendarDays size={12} />
              {formatDate(request.startDate)} –{" "}
              {formatDate(request.endDate)}
            </div>

            <div className="mt-2 flex items-center gap-2 text-[10px] text-slate-500">
              <Clock3 size={12} />
              {request.days} days requested
            </div>
          </section>

          {/* Operational impact */}
          <section className="rounded-lg border border-slate-100 bg-white p-4">
            <h3 className="mb-2 text-xs font-semibold text-slate-800">
              Operational Impact
            </h3>
            <p className="text-[11px] leading-5 text-slate-600">
              {request.operationalImpact}
            </p>
            <div className="mt-3 flex items-start gap-2 text-[10px] text-slate-500">
              <Phone size={12} className="mt-0.5 shrink-0" />
              Emergency contact: {request.emergencyContact}{" "}
              ({request.emergencyPhone})
            </div>
          </section>

          {/* Responsibilities */}
          <section className="rounded-lg border border-slate-100 bg-white p-4">
            <h3 className="mb-3 text-xs font-semibold text-slate-800">
              Pending Responsibilities
            </h3>

            <p className="mb-3 text-[10px] leading-5 text-slate-500">
              {request.pendingResponsibilities}
            </p>

            {request.responsibilities.length > 0 ? (
              <div className="space-y-3">
                {request.responsibilities.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="flex items-start gap-3 rounded-md border border-slate-100 p-3"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-indigo-600">
                      <Check size={13} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-medium text-slate-800">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[10px] leading-4 text-slate-500">
                        {item.description}
                      </p>
                      <p className="mt-1 text-[9px] text-slate-400">
                        Due {formatDate(item.dueDate)}
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-amber-50 px-2 py-1 text-[9px] text-amber-700">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="rounded-md bg-slate-50 p-3 text-[10px] text-slate-400">
                No individual responsibilities have been recorded.
              </p>
            )}
          </section>

          {/* Leave history */}
          <section className="rounded-lg border border-slate-100 bg-white p-4">
            <h3 className="mb-3 text-xs font-semibold text-slate-800">
              Annual Leave Trajectory
            </h3>

            {request.history.length > 0 ? (
              <div className="space-y-3">
                {request.history.map((item, index) => (
                  <div
                    key={`${item.type}-${index}`}
                    className="flex items-center gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                  >
                    <div className="flex h-8 w-8 shrink-0 flex-col items-center justify-center rounded-md bg-slate-50 text-slate-500">
                      <CalendarDays size={13} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-medium text-slate-800">
                        {item.type}
                      </p>
                      <p className="mt-1 text-[10px] text-slate-400">
                        {item.dates}
                      </p>
                    </div>

                    <span className="text-[10px] text-slate-500">
                      {item.days} days
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[10px] text-slate-400">
                No previous leave history available.
              </p>
            )}
          </section>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-end gap-2 pb-2">
            {editing && (
              <>
                <button
                  onClick={cancelChanges}
                  className="rounded-md border border-slate-200 bg-white px-3 py-2 text-[10px] font-medium text-slate-600 hover:bg-slate-50"
                >
                  Cancel Edit
                </button>

                <button
                  onClick={saveChanges}
                  className="rounded-md border border-slate-200 bg-white px-3 py-2 text-[10px] font-medium text-slate-700 hover:bg-slate-50"
                >
                  Save Changes
                </button>
              </>
            )}

            {!editing && isPending && (
              <>
                <button
                  onClick={() =>
                    onStatusChange(request.id, "Rejected")
                  }
                  className="inline-flex items-center gap-1.5 rounded-md border border-red-200 bg-white px-3 py-2 text-[10px] font-medium text-red-600 hover:bg-red-50"
                >
                  <X size={12} />
                  Reject Request
                </button>

                <button
                  onClick={() =>
                    onStatusChange(request.id, "Approved")
                  }
                  className="inline-flex items-center gap-1.5 rounded-md bg-[#4f6bff] px-3 py-2 text-[10px] font-medium text-white hover:bg-[#3c55e8]"
                >
                  <Check size={12} />
                  Approve Leave
                </button>
              </>
            )}

            {!isPending && !editing && (
              <button
                onClick={() =>
                  onStatusChange(request.id, "Pending")
                }
                className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-2 text-[10px] font-medium text-slate-600 hover:bg-slate-50"
              >
                <RotateCcw size={12} />
                Reopen Request
              </button>
            )}
          </div>
        </div>

        {/* Right sidebar */}
        <aside className="space-y-3">
          <div className="rounded-lg border border-slate-100 bg-white p-4">
            <h3 className="mb-3 text-xs font-semibold text-slate-800">
              Leave Balance Overview
            </h3>

            <div className="space-y-3">
              <LeaveBalanceCard
                title="Annual Leave"
                used={request.annualLeaveUsed}
                allowance={request.annualLeaveAllowance}
                color="blue"
              />

              <LeaveBalanceCard
                title="Medical Leave"
                used={request.medicalLeaveUsed}
                allowance={request.medicalLeaveAllowance}
                color="green"
              />
            </div>
          </div>

          <div className="rounded-lg border border-slate-100 bg-white p-4">
            <h3 className="mb-2 text-xs font-semibold text-slate-800">
              Quick Notes
            </h3>
            <p className="text-[10px] leading-5 text-slate-500">
              Review staffing coverage, outstanding tasks, and leave
              balances before making a decision.
            </p>

            <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-500">
              <Mail size={12} />
              {request.emergencyContact}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
