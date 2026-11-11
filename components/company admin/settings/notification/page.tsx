
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  ClipboardCheck,
  Megaphone,
  Mail,
  Smartphone,
  MessageSquare,
} from "lucide-react";

import DashboardSidebar from "../../components/sidebar";
import SettingsHeader from "../settingsheader";

interface ToggleProps {
  enabled: boolean;
  onChange: () => void;
  label: string;
}

function Toggle({ enabled, onChange, label }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      aria-label={label}
      onClick={onChange}
      className={`relative h-[10px] w-5 shrink-0 rounded-full transition-colors ${
        enabled ? "bg-[#4968f5]" : "bg-slate-300"
      }`}
    >
      <span
        className={`absolute top-[1px] h-2 w-2 rounded-full bg-white transition-all ${
          enabled ? "right-[1px]" : "left-[1px]"
        }`}
      />
    </button>
  );
}

export default function NotificationSettingsPage() {
  // Alert settings
  const [attendanceAlerts, setAttendanceAlerts] = useState(true);
  const [systemAnnouncement, setSystemAnnouncement] = useState(true);

  // Notification channels
  const [emailNotification, setEmailNotification] = useState(true);
  const [inAppNotification, setInAppNotification] = useState(true);
  const [smsNotification, setSmsNotification] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect notification preferences to your backend/database here.
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-slate-800">
      <DashboardSidebar />

      <main className="ml-20 min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        {/* Reusable Settings Header */}
        <SettingsHeader
          activeTab="notification"
          formId="notification-settings-form"
          title="Settings"
          description="Manage platform-wide configurations"
        />

        <form
          id="notification-settings-form"
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          {/* ALERTS SECTION */}
          <section className="rounded-xl border border-slate-300 bg-white px-3 py-2.5">
            <h2 className="mb-2 text-[12px] font-semibold text-slate-700">
              Alerts
            </h2>

            {/* Attendance Alerts */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-2">
                <ClipboardCheck
                  size={12}
                  className="mt-0.5 shrink-0 text-slate-600"
                />

                <div>
                  <p className="text-[9px] font-medium text-slate-600">
                    Attendance Alerts
                  </p>

                  <div className="mt-1 space-y-0.5 text-[7px] text-slate-500">
                    <p>• Late Arrivals</p>
                    <p>• Absences</p>
                  </div>
                </div>
              </div>

              <Toggle
                label="Attendance Alerts"
                enabled={attendanceAlerts}
                onChange={() =>
                  setAttendanceAlerts(!attendanceAlerts)
                }
              />
            </div>

            {/* System Announcement */}
            <div className="mt-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Megaphone
                  size={12}
                  className="shrink-0 text-slate-600"
                />

                <p className="text-[9px] font-medium text-slate-600">
                  System Announcement
                </p>
              </div>

              <Toggle
                label="System Announcement"
                enabled={systemAnnouncement}
                onChange={() =>
                  setSystemAnnouncement(!systemAnnouncement)
                }
              />
            </div>
          </section>

          {/* CHANNELS SECTION */}
          <section className="rounded-xl border border-slate-200 bg-white px-3 py-2.5">
            <h2 className="mb-2 text-[12px] font-semibold text-slate-700">
              Channels
            </h2>

            {/* Email Notification */}
            <div className="flex items-center justify-between gap-4 py-1">
              <div className="flex items-center gap-2">
                <Mail
                  size={12}
                  className="shrink-0 text-slate-600"
                />

                <p className="text-[9px] font-medium text-slate-600">
                  Email Notification
                </p>
              </div>

              <Toggle
                label="Email Notification"
                enabled={emailNotification}
                onChange={() =>
                  setEmailNotification(!emailNotification)
                }
              />
            </div>

            {/* In-App Notification */}
            <div className="flex items-center justify-between gap-4 py-1">
              <div className="flex items-center gap-2">
                <Smartphone
                  size={12}
                  className="shrink-0 text-slate-600"
                />

                <p className="text-[9px] font-medium text-slate-600">
                  In-App Notification
                </p>
              </div>

              <Toggle
                label="In-App Notification"
                enabled={inAppNotification}
                onChange={() =>
                  setInAppNotification(!inAppNotification)
                }
              />
            </div>

            {/* SMS Notification */}
            <div className="flex items-center justify-between gap-4 py-1">
              <div className="flex items-center gap-2">
                <MessageSquare
                  size={12}
                  className="shrink-0 text-slate-600"
                />

                <p className="text-[9px] font-medium text-slate-600">
                  SMS Notification
                </p>
              </div>

              <Toggle
                label="SMS Notification"
                enabled={smsNotification}
                onChange={() =>
                  setSmsNotification(!smsNotification)
                }
              />
            </div>
          </section>
        </form>
      </main>
    </div>
  );
}
