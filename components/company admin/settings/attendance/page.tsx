
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import type { Route } from "next";
import Link from "next/link";
import SettingsHeader from "../settingsheader";
import {
  Settings,
  CalendarDays,
  ShieldCheck,
  Bell,
  QrCode,
  KeyRound,
  MapPin,
  Pencil,
  Trash2,
  Plus,
  X,
  Check,
} from "lucide-react";

import DashboardSidebar from "../../components/sidebar";

type AttendanceRule = {
  enabled: boolean;
  interval: number;
};

type Shift = {
  id: number;
  name: string;
  start: string;
  end: string;
  days: string;
};

export default function AttendanceSettingsPage() {
  const [qrCode, setQrCode] = useState<AttendanceRule>({
    enabled: true,
    interval: 30,
  });

  const [otp, setOtp] = useState<AttendanceRule>({
    enabled: true,
    interval: 30,
  });

  const [gps, setGps] = useState({
    enabled: false,
    distance: 50,
  });

  const [workingDays, setWorkingDays] = useState([
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
  ]);

  const [resumptionTime, setResumptionTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [lateGracePeriod, setLateGracePeriod] = useState(10);
  const [allowOvertime, setAllowOvertime] = useState(true);

  const [shifts, setShifts] = useState<Shift[]>([
    {
      id: 1,
      name: "Night Shift",
      start: "09:00",
      end: "18:00",
      days: "Mon - Fri",
    },
  ]);

  const [editingShift, setEditingShift] = useState<number | null>(null);
  const [showAddShift, setShowAddShift] = useState(false);

  const [newShift, setNewShift] = useState({
    name: "",
    start: "09:00",
    end: "18:00",
    days: "Mon - Fri",
  });

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const toggleDay = (day: string) => {
    setWorkingDays((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  };

  const updateShift = (
    id: number,
    field: keyof Shift,
    value: string
  ) => {
    setShifts((prev) =>
      prev.map((shift) =>
        shift.id === id ? { ...shift, [field]: value } : shift
      )
    );
  };

  const deleteShift = (id: number) => {
    setShifts((prev) => prev.filter((shift) => shift.id !== id));
  };

  const addShift = () => {
    if (!newShift.name.trim()) return;

    setShifts((prev) => [
      ...prev,
      {
        ...newShift,
        id: Date.now(),
      },
    ]);

    setNewShift({
      name: "",
      start: "09:00",
      end: "18:00",
      days: "Mon - Fri",
    });

    setShowAddShift(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect your settings API/database here.
    // Current settings are maintained in component state.
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-slate-800">
      <DashboardSidebar />

      <main className="ml-20 min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
<SettingsHeader
  activeTab="attendance"
  formId="general-settings-form"
/>

        <form
          id="attendance-settings-form"
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          {/* ATTENDANCE RULES */}
          <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-2 py-2">
              <h2 className="text-[10px] font-semibold text-slate-800">
                Attendance Rules
              </h2>

              <p className="text-[8px] text-slate-400">
                Basic platform configuration
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 bg-[#f5f7ff] p-2.5 md:grid-cols-3">
              {/* QR CODE */}
              <div
                className={`rounded-lg border p-2 transition ${
                  qrCode.enabled
                    ? "border-[#4968f5] bg-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-[#eef1ff] text-[#4968f5]">
                      <QrCode size={13} />
                    </div>

                    <div>
                      <p className="text-[9px] font-medium">QR Code</p>
                      <p className="text-[7px] text-slate-400">
                        Scan to sign in
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={qrCode.enabled}
                    onClick={() =>
                      setQrCode((prev) => ({
                        ...prev,
                        enabled: !prev.enabled,
                      }))
                    }
                    className={`relative h-[9px] w-5 rounded-full transition ${
                      qrCode.enabled ? "bg-[#4968f5]" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`absolute top-[1px] h-[7px] w-[7px] rounded-full bg-white transition-all ${
                        qrCode.enabled ? "right-[1px]" : "left-[1px]"
                      }`}
                    />
                  </button>
                </div>

                <div className="my-2 border-t border-slate-100" />

                <label className="text-[7px] text-slate-500">
                  Refresh Interval
                </label>

                <div className="mt-1 flex items-center gap-1">
                  <input
                    type="number"
                    min="1"
                    disabled={!qrCode.enabled}
                    value={qrCode.interval}
                    onChange={(e) =>
                      setQrCode({
                        ...qrCode,
                        interval: Number(e.target.value),
                      })
                    }
                    className="h-4 w-[27px] rounded border border-slate-200 px-1 text-[8px] outline-none focus:border-[#4968f5] disabled:bg-slate-100"
                  />

                  <span className="text-[7px] text-slate-500">
                    seconds
                  </span>
                </div>
              </div>

              {/* OTP */}
              <div
                className={`rounded-lg border p-2 transition ${
                  otp.enabled
                    ? "border-[#4968f5] bg-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-[#eef1ff] text-[#4968f5]">
                      <KeyRound size={13} />
                    </div>

                    <div>
                      <p className="text-[9px] font-medium">OTP</p>
                      <p className="text-[7px] text-slate-400">
                        One-time Password
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={otp.enabled}
                    onClick={() =>
                      setOtp((prev) => ({
                        ...prev,
                        enabled: !prev.enabled,
                      }))
                    }
                    className={`relative h-[9px] w-5 rounded-full transition ${
                      otp.enabled ? "bg-[#4968f5]" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`absolute top-[1px] h-[7px] w-[7px] rounded-full bg-white transition-all ${
                        otp.enabled ? "right-[1px]" : "left-[1px]"
                      }`}
                    />
                  </button>
                </div>

                <div className="my-2 border-t border-slate-100" />

                <label className="text-[7px] text-slate-500">
                  Refresh Interval
                </label>

                <div className="mt-1 flex items-center gap-1">
                  <input
                    type="number"
                    min="1"
                    disabled={!otp.enabled}
                    value={otp.interval}
                    onChange={(e) =>
                      setOtp({
                        ...otp,
                        interval: Number(e.target.value),
                      })
                    }
                    className="h-4 w-[27px] rounded border border-slate-200 px-1 text-[8px] outline-none focus:border-[#4968f5] disabled:bg-slate-100"
                  />

                  <span className="text-[7px] text-slate-500">
                    seconds
                  </span>
                </div>
              </div>

              {/* GPS */}
              <div
                className={`rounded-lg border p-2 transition ${
                  gps.enabled
                    ? "border-[#4968f5] bg-white"
                    : "border-transparent bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-slate-100 text-slate-500">
                      <MapPin size={13} />
                    </div>

                    <div>
                      <p className="text-[9px] font-medium">GPS</p>
                      <p className="text-[7px] text-slate-400">
                        Location-based
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={gps.enabled}
                    onClick={() =>
                      setGps((prev) => ({
                        ...prev,
                        enabled: !prev.enabled,
                      }))
                    }
                    className={`relative h-[9px] w-5 rounded-full transition ${
                      gps.enabled ? "bg-[#4968f5]" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`absolute top-[1px] h-[7px] w-[7px] rounded-full bg-white transition-all ${
                        gps.enabled ? "right-[1px]" : "left-[1px]"
                      }`}
                    />
                  </button>
                </div>

                <div className="my-2 border-t border-slate-100" />

                <label className="text-[7px] text-slate-500">
                  Distance
                </label>

                <div className="mt-1 flex items-center gap-1">
                  <input
                    type="number"
                    min="1"
                    disabled={!gps.enabled}
                    value={gps.distance}
                    onChange={(e) =>
                      setGps({
                        ...gps,
                        distance: Number(e.target.value),
                      })
                    }
                    className="h-4 w-[27px] rounded border border-slate-200 px-1 text-[8px] outline-none focus:border-[#4968f5] disabled:bg-slate-100"
                  />

                  <span className="text-[7px] text-slate-500">
                    meters
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* WORK SCHEDULE */}
          <section className="rounded-lg border border-slate-200 bg-[#f6f8ff] p-2 shadow-sm sm:p-3">
            <h2 className="text-[9px] font-semibold uppercase text-slate-800">
              WORK SCHEDULE
            </h2>

            {/* Working Days */}
            <div className="mt-3">
              <p className="mb-2 text-[8px] text-slate-600">
                Working Days
              </p>

              <div className="flex flex-wrap gap-1.5">
                {days.map((day) => {
                  const active = workingDays.includes(day);

                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => toggleDay(day)}
                      className={`flex h-[14px] min-w-[24px] items-center justify-center rounded-sm px-2 text-[7px] font-medium transition ${
                        active
                          ? "bg-[#4968f5] text-white"
                          : "bg-[#e9e9eb] text-slate-700 hover:bg-slate-300"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Resumption and Closing Time */}
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-[9px] font-medium text-slate-700">
                  Resumption Time
                </label>

                <input
                  type="time"
                  value={resumptionTime}
                  onChange={(e) => setResumptionTime(e.target.value)}
                  className="h-[29px] w-full rounded-lg border border-slate-300 bg-transparent px-2 text-[9px] outline-none focus:border-[#4968f5]"
                />
              </div>

              <div>
                <label className="mb-1 block text-[9px] font-medium text-slate-700">
                  Closing Time
                </label>

                <input
                  type="time"
                  value={closingTime}
                  onChange={(e) => setClosingTime(e.target.value)}
                  className="h-[29px] w-full rounded-lg border border-slate-300 bg-transparent px-2 text-[9px] outline-none focus:border-[#4968f5]"
                />
              </div>
            </div>

            {/* Late Grace Period */}
            <div className="mt-3">
              <label className="block text-[7px] text-slate-500">
                Late Grace Period
              </label>

              <div className="mt-1 flex items-center gap-1">
                <input
                  type="number"
                  min="0"
                  value={lateGracePeriod}
                  onChange={(e) =>
                    setLateGracePeriod(Number(e.target.value))
                  }
                  className="h-[14px] w-[24px] rounded border border-slate-300 bg-white px-1 text-[7px] outline-none focus:border-[#4968f5]"
                />

                <span className="text-[7px] text-slate-400">
                  Minutes after work start time before marked late
                </span>
              </div>
            </div>

            {/* Overtime */}
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-[9px] font-semibold text-slate-700">
                  Allow Overtime
                </p>

                <p className="mt-1 text-[7px] text-slate-400">
                  Track hours beyond schedule end time
                </p>
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={allowOvertime}
                onClick={() => setAllowOvertime(!allowOvertime)}
                className={`relative h-[9px] w-5 rounded-full transition ${
                  allowOvertime ? "bg-[#4968f5]" : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-[1px] h-[7px] w-[7px] rounded-full bg-white transition-all ${
                    allowOvertime ? "right-[1px]" : "left-[1px]"
                  }`}
                />
              </button>
            </div>
          </section>

          {/* SHIFT TYPES */}
          <section className="rounded-lg border border-slate-200 bg-[#f6f8ff] p-2 shadow-sm sm:p-3">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-[9px] font-semibold uppercase text-slate-800">
                SHIFT TYPES
              </h2>

              <button
                type="button"
                onClick={() => setShowAddShift(true)}
                className="flex items-center gap-1 rounded-md bg-[#4968f5] px-2 py-1 text-[8px] font-medium text-white transition hover:bg-blue-700"
              >
                <Plus size={10} />
                Add Shift
              </button>
            </div>

            <div className="space-y-2">
              {shifts.map((shift) => (
                <div
                  key={shift.id}
                  className="rounded-lg border border-slate-100 bg-white p-2"
                >
                  {editingShift === shift.id ? (
                    <div className="space-y-2">
                      <input
                        value={shift.name}
                        onChange={(e) =>
                          updateShift(shift.id, "name", e.target.value)
                        }
                        placeholder="Shift name"
                        className="h-7 w-full rounded border border-slate-200 px-2 text-[9px] outline-none focus:border-[#4968f5]"
                      />

                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="time"
                          value={shift.start}
                          onChange={(e) =>
                            updateShift(shift.id, "start", e.target.value)
                          }
                          className="h-7 rounded border border-slate-200 px-2 text-[9px]"
                        />

                        <input
                          type="time"
                          value={shift.end}
                          onChange={(e) =>
                            updateShift(shift.id, "end", e.target.value)
                          }
                          className="h-7 rounded border border-slate-200 px-2 text-[9px]"
                        />
                      </div>

                      <input
                        value={shift.days}
                        onChange={(e) =>
                          updateShift(shift.id, "days", e.target.value)
                        }
                        placeholder="Working days"
                        className="h-7 w-full rounded border border-slate-200 px-2 text-[9px]"
                      />

                      <button
                        type="button"
                        onClick={() => setEditingShift(null)}
                        className="flex items-center gap-1 text-[9px] font-medium text-[#4968f5]"
                      >
                        <Check size={12} />
                        Done
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#4968f5] px-2 py-1 text-[7px] font-medium text-white">
                          {shift.name}
                        </span>

                        <span className="text-[7px] text-slate-400">
                          ◷ {shift.start} - {shift.end}
                        </span>

                        <span className="text-[7px] text-slate-400">
                          ▣ {shift.days}
                        </span>
                      </div>

                      <div className="flex items-center gap-5">
                        <button
                          type="button"
                          onClick={() => setEditingShift(shift.id)}
                          aria-label="Edit shift"
                          className="text-slate-500 transition hover:text-[#4968f5]"
                        >
                          <Pencil size={12} />
                        </button>

                        <button
                          type="button"
                          onClick={() => deleteShift(shift.id)}
                          aria-label="Delete shift"
                          className="text-red-500 transition hover:text-red-700"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {shifts.length === 0 && (
                <div className="rounded-lg border border-dashed border-slate-300 bg-white p-5 text-center">
                  <p className="text-[9px] text-slate-400">
                    No shift types added yet.
                  </p>
                </div>
              )}
            </div>

            {/* ADD SHIFT */}
            {showAddShift && (
              <div className="mt-3 rounded-lg border border-[#4968f5]/30 bg-white p-3">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-[10px] font-semibold">
                    Add New Shift
                  </h3>

                  <button
                    type="button"
                    onClick={() => setShowAddShift(false)}
                    className="text-slate-400 hover:text-red-500"
                  >
                    <X size={14} />
                  </button>
                </div>

                <div className="space-y-2">
                  <input
                    value={newShift.name}
                    onChange={(e) =>
                      setNewShift({
                        ...newShift,
                        name: e.target.value,
                      })
                    }
                    placeholder="Shift name (e.g. Morning Shift)"
                    className="h-8 w-full rounded-lg border border-slate-200 px-3 text-[9px] outline-none focus:border-[#4968f5]"
                  />

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="mb-1 block text-[8px] text-slate-500">
                        Start Time
                      </label>

                      <input
                        type="time"
                        value={newShift.start}
                        onChange={(e) =>
                          setNewShift({
                            ...newShift,
                            start: e.target.value,
                          })
                        }
                        className="h-8 w-full rounded-lg border border-slate-200 px-2 text-[9px]"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-[8px] text-slate-500">
                        End Time
                      </label>

                      <input
                        type="time"
                        value={newShift.end}
                        onChange={(e) =>
                          setNewShift({
                            ...newShift,
                            end: e.target.value,
                          })
                        }
                        className="h-8 w-full rounded-lg border border-slate-200 px-2 text-[9px]"
                      />
                    </div>
                  </div>

                  <input
                    value={newShift.days}
                    onChange={(e) =>
                      setNewShift({
                        ...newShift,
                        days: e.target.value,
                      })
                    }
                    placeholder="Working days (e.g. Mon - Fri)"
                    className="h-8 w-full rounded-lg border border-slate-200 px-3 text-[9px] outline-none focus:border-[#4968f5]"
                  />

                  <button
                    type="button"
                    onClick={addShift}
                    disabled={!newShift.name.trim()}
                    className="rounded-lg bg-[#4968f5] px-4 py-2 text-[9px] font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Add Shift
                  </button>
                </div>
              </div>
            )}
          </section>
        </form>
      </main>
    </div>
  );
}
