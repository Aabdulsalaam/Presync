"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  Users,
  UserCheck,
  Send,
} from "lucide-react";
import {
  audiences,
  employees,
  departmentOrder,
  leadershipRecipients,
  AudienceId,
  Recipient,
} from "./receipients";

const audienceIcons: Record<AudienceId, typeof Building2> = {
  "higher-ups": Building2,
  "all-employees": Users,
  "selected-employees": UserCheck,
};

type View = "compose" | "choose-employees";

export default function SendMessagePage() {
  const [selectedAudienceId, setSelectedAudienceId] =
    useState<AudienceId>("higher-ups");
  const [view, setView] = useState<View>("compose");
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState<Set<string>>(
    new Set()
  );
  const [message, setMessage] = useState("");

  function handleAudienceSelect(id: AudienceId) {
    setSelectedAudienceId(id);
    if (id === "higher-ups") {
      setView("compose");
    } else if (id === "all-employees") {
      setSelectedEmployeeIds(new Set(employees.map((e) => e.id)));
      setView("choose-employees");
    } else {
      setView("choose-employees");
    }
  }

  function toggleEmployee(id: string) {
    setSelectedEmployeeIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function handleProceed() {
    const isEveryEmployeeSelected = selectedEmployeeIds.size === employees.length;
    setSelectedAudienceId(isEveryEmployeeSelected ? "all-employees" : "selected-employees");
    setView("compose");
  }

  const recipients: Recipient[] =
    selectedAudienceId === "higher-ups"
      ? leadershipRecipients
      : employees.filter((e) => selectedEmployeeIds.has(e.id));

  const sendingLabel =
    selectedAudienceId === "higher-ups"
      ? "Sending to 3 executives"
      : `Sending to ${recipients.length} employee${
          recipients.length === 1 ? "" : "s"
        }`;

  const audienceDescription = (audienceId: AudienceId) => {
    if (audienceId === "selected-employees" && selectedEmployeeIds.size > 0) {
      return `${selectedEmployeeIds.size} selected`;
    }
    return audiences.find((a) => a.id === audienceId)!.description;
  };

  return (
    <div className="min-h-screen bg-[#f4f5fb] px-8 py-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex items-center gap-4">
            <Link href="/company-dashboard/messages">
          <button
            type="button"
            aria-label="Go back"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-50"
          >
            <ArrowLeft size={18} />
          </button>
          </Link>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Send Message
            </h1>
            <p className="mt-0.5 text-sm text-gray-500">
              Communicate with your team members
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200" />

        {/* Content grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
          {/* Select Recipients (always visible) */}
          <div className="h-fit rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-900">
              Select Recipients
            </h2>

            <div className="mt-4 flex flex-col gap-3">
              {audiences.map((audience) => {
                const Icon = audienceIcons[audience.id];
                const isSelected = audience.id === selectedAudienceId;
                return (
                  <button
                    key={audience.id}
                    type="button"
                    onClick={() => handleAudienceSelect(audience.id)}
                    className={`flex items-start gap-2 rounded-xl border p-3 text-left transition-colors ${
                      isSelected
                        ? "border-indigo-300 bg-indigo-50/60"
                        : "border-gray-200 bg-white hover:bg-gray-50"
                    }`}
                  >
                    <span
                      className={`mt-1 flex h-3 w-3 flex-none items-center justify-center rounded-full border ${
                        isSelected ? "border-gray-900" : "border-gray-300"
                      }`}
                    >
                      {isSelected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                      )}
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center gap-1.5 text-sm font-medium text-gray-900">
                        <Icon size={14} className="text-indigo-500" />
                        {audience.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-gray-500">
                        {audienceDescription(audience.id)}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right column: either the employee picker or the composer */}
          {view === "choose-employees" ? (
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-gray-900">
                  Choose Employees
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedEmployeeIds(
                        new Set(employees.map((e) => e.id))
                      )
                    }
                    className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
                  >
                    Select All
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedEmployeeIds(new Set())}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
                  >
                    Clear
                  </button>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-6">
                {departmentOrder.map((department) => {
                  const departmentEmployees = employees.filter(
                    (e) => e.department === department
                  );
                  if (departmentEmployees.length === 0) return null;

                  return (
                    <div key={department}>
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                        {department}
                      </p>
                      <div className="flex flex-col gap-2">
                        {departmentEmployees.map((employee) => {
                          const checked = selectedEmployeeIds.has(employee.id);
                          return (
                            <label
                              key={employee.id}
                              className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-gray-50"
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => toggleEmployee(employee.id)}
                                className="h-4 w-4 flex-none rounded border-gray-300 text-indigo-600 focus:ring-indigo-400"
                              />
                              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-600">
                                {employee.initials}
                              </span>
                              <span>
                                <span className="block text-sm font-medium text-gray-900">
                                  {employee.name}
                                </span>
                                <span className="block text-xs text-gray-500">
                                  {employee.role}
                                </span>
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={handleProceed}
                disabled={selectedEmployeeIds.size === 0}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send size={15} />
                Proceed with selected employees
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold text-gray-900">
                  Compose Message
                </h2>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  rows={5}
                  className="mt-4 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700 placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />

                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-500">{sendingLabel}</p>
                  <button
                    type="button"
                    disabled={message.trim() === "" || recipients.length === 0}
                    className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Send size={15} />
                    Send Message
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold text-gray-900">
                  {selectedAudienceId === "higher-ups"
                    ? "Leadership"
                    : selectedAudienceId === "all-employees"
                    ? "All Employee"
                    : "Selected Employees"}{" "}
                  Recipients
                </h2>

                {selectedAudienceId === "all-employees" ? (
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {departmentOrder.map((department) => {
                      const count = employees.filter(
                        (e) => e.department === department
                      ).length;
                      if (count === 0) return null;
                      return (
                        <div
                          key={department}
                          className="rounded-xl bg-gray-50 px-4 py-3"
                        >
                          <p className="text-sm font-medium text-gray-900">
                            {department}
                          </p>
                          <p className="mt-0.5 text-xs text-gray-500">
                            {count} employee{count === 1 ? "" : "s"}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="mt-4 flex flex-col gap-2">
                    {recipients.length > 0 ? (
                      recipients.map((recipient) => (
                        <div
                          key={recipient.id}
                          className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3"
                        >
                          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
                            {recipient.initials}
                          </span>
                          <span>
                            <span className="block text-sm font-medium text-gray-900">
                              {recipient.name}
                            </span>
                            <span className="block text-xs text-gray-500">
                              {recipient.role}
                            </span>
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="py-4 text-center text-sm text-gray-400">
                        No employees selected yet.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}