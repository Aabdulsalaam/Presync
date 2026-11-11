
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  ShieldCheck,
  LockKeyhole,
  Monitor,
  Laptop,
  Smartphone,
  LogOut,
  Check,
  X,
} from "lucide-react";

import DashboardSidebar from "../../components/sidebar";
import SettingsHeader from "../settingsheader";

type Session = {
  id: number;
  device: string;
  description: string;
  type: "desktop" | "laptop" | "mobile";
};

export default function SecuritySettingsPage() {
  const [twoFactor, setTwoFactor] = useState(true);

  const [passwordExpiry, setPasswordExpiry] = useState("");
  const [minPasswordLength, setMinPasswordLength] = useState("8");

  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [sessions, setSessions] = useState<Session[]>([
    {
      id: 1,
      device: "Chrome on Windows",
      description: "Manage your active sessions across devices",
      type: "desktop",
    },
    {
      id: 2,
      device: "Samsung S22",
      description: "Manage your active sessions across devices",
      type: "mobile",
    },
  ]);

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect security settings to your backend here.
  };

  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill in all password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    if (newPassword.length < Number(minPasswordLength)) {
      alert(
        `Password must contain at least ${minPasswordLength} characters.`
      );
      return;
    }

    // Connect your password update API here.

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setShowPasswordForm(false);
  };

  const logoutSession = (id: number) => {
    setSessions((prev) => prev.filter((session) => session.id !== id));
  };

  const getDeviceIcon = (type: Session["type"]) => {
    switch (type) {
      case "desktop":
        return <Monitor size={12} />;

      case "laptop":
        return <Laptop size={12} />;

      case "mobile":
        return <Smartphone size={12} />;

      default:
        return <Monitor size={12} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-slate-800">
      <DashboardSidebar />

      <main className="ml-20 min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        {/* Reusable Settings Header */}
        <SettingsHeader
          activeTab="security"
          formId="security-settings-form"
          title="Settings"
          description="Manage platform-wide configurations"
        />

        <form
          id="security-settings-form"
          onSubmit={handleSave}
          className="space-y-3"
        >
          {/* SECURITY SETTINGS INTRO */}
          <div className="mb-5 px-3">
            <h2 className="text-[10px] font-semibold text-slate-800">
              Security Settings
            </h2>

            <p className="text-[7px] text-slate-500">
              Manage platform-wide protection and access protocols for all accounts
            </p>
          </div>

          {/* TWO FACTOR AUTHENTICATION */}
          <section className="px-3 py-1">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={15}
                  className="shrink-0 text-slate-700"
                />

                <div>
                  <h3 className="text-[9px] font-medium text-slate-700">
                    Two-Factor Authentication
                  </h3>

                  <p className="text-[7px] text-slate-500">
                    Add an extra layer of security to your account by requiring a verification code in addition to password
                  </p>
                </div>
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={twoFactor}
                aria-label="Toggle two-factor authentication"
                onClick={() => setTwoFactor(!twoFactor)}
                className={`relative h-[10px] w-5 shrink-0 rounded-full transition ${
                  twoFactor ? "bg-[#4968f5]" : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-[1px] h-2 w-2 rounded-full bg-white transition-all ${
                    twoFactor ? "right-[1px]" : "left-[1px]"
                  }`}
                />
              </button>
            </div>
          </section>

          {/* CHANGE PASSWORD */}
          <section className="rounded-lg border border-slate-200 bg-white px-3 py-3">
            <div className="flex items-center justify-between gap-3 px-2">
              <div className="flex items-center gap-2">
                <LockKeyhole
                  size={13}
                  className="shrink-0 text-slate-700"
                />

                <div>
                  <h3 className="text-[9px] font-medium text-slate-600">
                    Change Password
                  </h3>

                  <p className="mt-1 text-[7px] text-slate-500">
                    Update your password regularly to keep your account secure.
                  </p>

                  <p className="mt-1 text-[6px] text-slate-400">
                    Last changed 24 hours ago
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowPasswordForm(!showPasswordForm)}
                className="flex h-[30px] shrink-0 items-center justify-center rounded-lg bg-[#4968f5] px-4 text-[8px] font-semibold text-white transition hover:bg-blue-700"
              >
                {showPasswordForm ? "Cancel" : "Change Password"}
              </button>
            </div>

            {/* Password Change Fields */}
            {showPasswordForm && (
              <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
                <div>
                  <label className="mb-1 block text-[8px] font-medium">
                    Current Password
                  </label>

                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter current password"
                    className="h-[34px] w-full rounded-lg border border-slate-200 px-3 text-[9px] outline-none focus:border-[#4968f5]"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[8px] font-medium">
                    New Password
                  </label>

                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="h-[34px] w-full rounded-lg border border-slate-200 px-3 text-[9px] outline-none focus:border-[#4968f5]"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[8px] font-medium">
                    Confirm New Password
                  </label>

                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    className="h-[34px] w-full rounded-lg border border-slate-200 px-3 text-[9px] outline-none focus:border-[#4968f5]"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handlePasswordChange}
                    className="flex h-[30px] items-center gap-2 rounded-lg bg-[#4968f5] px-4 text-[8px] font-semibold text-white hover:bg-blue-700"
                  >
                    <Check size={11} />
                    Update Password
                  </button>
                </div>
              </div>
            )}

            {/* Password Expiry */}
            <div className="mt-5 space-y-3">
              <div>
                <select
                  value={passwordExpiry}
                  onChange={(e) => setPasswordExpiry(e.target.value)}
                  className="h-[31px] w-full appearance-none rounded-lg border border-slate-300 bg-white px-3 text-[9px] text-slate-600 outline-none focus:border-[#4968f5]"
                  aria-label="Password expiry period"
                >
                  <option value="">Password expiry period</option>
                  <option value="30">Every 30 days</option>
                  <option value="60">Every 60 days</option>
                  <option value="90">Every 90 days</option>
                  <option value="180">Every 180 days</option>
                  <option value="never">Never expires</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-[8px] font-medium text-slate-800">
                  Minimum Password Length
                </label>

                <select
                  value={minPasswordLength}
                  onChange={(e) => setMinPasswordLength(e.target.value)}
                  className="h-[31px] w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 text-[9px] text-slate-500 outline-none focus:border-[#4968f5]"
                >
                  <option value="8">8</option>
                  <option value="10">10</option>
                  <option value="12">12</option>
                  <option value="14">14</option>
                  <option value="16">16</option>
                </select>
              </div>
            </div>
          </section>

          {/* ACTIVE SESSIONS */}
          <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f5f7ff] text-slate-700">
                <Monitor size={12} />
              </div>

              <div>
                <h3 className="text-[9px] font-medium text-slate-600">
                  Active Sessions
                </h3>

                <p className="text-[7px] text-slate-400">
                  Manage your active sessions across devices
                </p>
              </div>
            </div>

            {sessions.map((session) => (
              <div
                key={session.id}
                className="flex min-h-[53px] items-center justify-between gap-3 border-b border-slate-100 px-3 last:border-b-0"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f5f7ff] text-slate-700">
                    {getDeviceIcon(session.type)}
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-medium text-slate-600">
                      {session.device}
                    </p>

                    <p className="mt-1 text-[7px] text-slate-400">
                      {session.description}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => logoutSession(session.id)}
                  className="shrink-0 px-2 text-[8px] font-medium text-red-500 transition hover:text-red-700"
                >
                  Logout
                </button>
              </div>
            ))}

            {sessions.length === 0 && (
              <div className="px-3 py-6 text-center">
                <p className="text-[9px] text-slate-400">
                  No active sessions available.
                </p>
              </div>
            )}
          </section>
        </form>
      </main>
    </div>
  );
}
