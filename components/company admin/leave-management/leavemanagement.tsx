
"use client";

import { useMemo, useState } from "react";
import { CalendarDays, ChevronDown, Plus, Search } from "lucide-react";
import { leaveRequests, upcomingConflicts } from "./data";
import type { LeaveRequest, LeaveStatus } from "./type";
import LeaveRequestsTable from "./leavetable";
import LeaveRequestProfile from "./requestprofile";
import UpcomingConflicts from "./upcomingconflicts";

export default function LeaveManagement() {
  const [requests, setRequests] = useState(leaveRequests);
  const [selectedRequest, setSelectedRequest] =
    useState<LeaveRequest | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const filteredRequests = useMemo(() => {
    const query = search.trim().toLowerCase();

    return requests.filter((request) => {
      const matchesSearch = [
        request.employeeName,
        request.employeeId,
        request.department,
        request.role,
        request.leaveType,
      ].some((value) => value.toLowerCase().includes(query));

      const matchesStatus =
        statusFilter === "All" || request.status === statusFilter;

      const matchesType =
        typeFilter === "All" || request.leaveType === typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [requests, search, statusFilter, typeFilter]);

  function updateStatus(id: string, status: LeaveStatus) {
    setRequests((previous) =>
      previous.map((request) =>
        request.id === id ? { ...request, status } : request
      )
    );

    setSelectedRequest((previous) =>
      previous?.id === id ? { ...previous, status } : previous
    );
  }

  if (selectedRequest) {
    return (
      <LeaveRequestProfile
        request={selectedRequest}
        onBack={() => setSelectedRequest(null)}
        onStatusChange={updateStatus}
      />
    );
  }

  const pendingCount = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  return (
    <>
      {/* Heading */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-bold tracking-tight text-slate-900">
            Leave Requests Management
          </h1>
          <p className="mt-1 text-[11px] text-slate-500">
            Review, approve, and manage leave requests while maintaining
            operational capacity.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
          <CalendarDays size={15} className="text-slate-500" />
          <div>
            <p className="text-[9px] text-slate-500">
              Pending Requests
            </p>
            <p className="text-sm font-semibold text-slate-800">
              {pendingCount}
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <div className="relative min-w-[180px] flex-1 sm:max-w-xs">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search employees..."
            aria-label="Search leave requests"
            className="h-9 w-full rounded-md border border-slate-200 bg-white pl-9 pr-3 text-xs outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div className="relative">
          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            aria-label="Filter by status"
            className="h-9 appearance-none rounded-md border border-slate-200 bg-white py-2 pl-3 pr-8 text-[10px] text-slate-600 outline-none focus:border-indigo-400"
          >
            <option value="All">All statuses</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
          <ChevronDown
            size={12}
            className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
          />
        </div>

        <div className="relative">
          <select
            value={typeFilter}
            onChange={(event) => setTypeFilter(event.target.value)}
            aria-label="Filter by leave type"
            className="h-9 appearance-none rounded-md border border-slate-200 bg-white py-2 pl-3 pr-8 text-[10px] text-slate-600 outline-none focus:border-indigo-400"
          >
            <option value="All">All leave types</option>
            <option value="Annual Leave">Annual Leave</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Maternity Leave">Maternity Leave</option>
          </select>
          <ChevronDown
            size={12}
            className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
          />
        </div>
      </div>

      {/* Requests table */}
      <LeaveRequestsTable
        requests={filteredRequests}
        onSelect={setSelectedRequest}
      />

      <p className="mt-3 text-[10px] text-slate-400">
        Showing {filteredRequests.length} of {requests.length} requests
      </p>

      {/* Upcoming conflicts */}
      <UpcomingConflicts conflicts={upcomingConflicts} />
    </>
  );
}
