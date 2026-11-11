
"use client";

import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { Route } from "next";
import {
  Upload,
  Settings,
  CalendarDays,
  ShieldCheck,
  Bell,
} from "lucide-react";
import Link from "next/link";
import SettingsHeader from "../settingsheader";
import DashboardSidebar from "../../components/sidebar";

export default function GeneralSettingsPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [logo, setLogo] = useState<string | null>(null);

  const [form, setForm] = useState({
    organizationName: "",
    address: "",
    website: "",
    email: "",
    timezone: "Africa/Lagos",
    dateFormat: "",
    timeFormat: "12",
  });

  const update = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect your settings API/database here.
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-slate-800">
      <DashboardSidebar />

      <main className="ml-20 min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        
<SettingsHeader
  activeTab="general"
  formId="general-settings-form"
/>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4 px-4 py-3"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-[54px] w-[54px] items-center justify-center overflow-hidden rounded-full border border-slate-200">
              {logo ? (
                <img
                  src={logo}
                  alt="Company logo"
                  className="h-full w-full object-contain"
                />
              ) : (
                <Upload size={19} />
              )}
            </div>

            <div>
              <p className="text-[10px] font-medium">MAQO CORPS</p>

              <p className="text-[8px] text-slate-400">
                Recommended size 400 x 400px, JPG or PNG
              </p>

              <div className="mt-1 flex gap-2 text-[9px]">
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="text-[#4968f5]"
                >
                  Upload
                </button>

                <span className="text-slate-300">|</span>

                <button
                  type="button"
                  onClick={() => {
                    setLogo(null);
                    if (fileRef.current) fileRef.current.value = "";
                  }}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>

              <input
                ref={fileRef}
                type="file"
                accept="image/png,image/jpeg"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  if (file.size > 5 * 1024 * 1024) {
                    alert("Maximum image size is 5MB");
                    e.target.value = "";
                    return;
                  }

                  const reader = new FileReader();

                  reader.onloadend = () =>
                    setLogo(reader.result as string);

                  reader.readAsDataURL(file);
                }}
              />
            </div>
          </div>

          {/* Organization */}
          <div>
            <label className="mb-1 block text-[9px] font-medium">
              Organization Name
            </label>

            <input
              name="organizationName"
              value={form.organizationName}
              onChange={update}
              className="h-[35px] w-full rounded-lg border border-slate-300 px-3 text-[10px] outline-none focus:border-[#4968f5]"
            />
          </div>

          {/* Address */}
          <div>
            <label className="mb-1 block text-[9px]">
              Address
            </label>

            <select
              name="address"
              value={form.address}
              onChange={update}
              className="h-[35px] w-full rounded-lg border border-slate-300 bg-white px-3 text-[9px] text-slate-500"
            >
              <option value="">Select option</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Ibadan">Ibadan</option>
              <option value="Ilorin">Ilorin</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Website */}
          <div>
            <label className="mb-1 block text-[9px] font-medium">
              Website Link
            </label>

            <input
              type="url"
              name="website"
              value={form.website}
              onChange={update}
              className="h-[35px] w-full rounded-lg border border-slate-300 px-3 text-[10px] outline-none focus:border-[#4968f5]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-[9px] font-medium">
              Contact Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              className="h-[35px] w-full rounded-lg border border-slate-300 px-3 text-[10px] outline-none focus:border-[#4968f5]"
            />
          </div>

          {/* Timezone and date format */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-[9px] font-medium">
                Time Zone
              </label>

              <select
                name="timezone"
                value={form.timezone}
                onChange={update}
                className="h-[35px] w-full rounded-lg border border-slate-300 bg-white px-3 text-[9px]"
              >
                <option value="Africa/Lagos">
                  Lagos (GMT +01:00)
                </option>

                <option value="Africa/Accra">
                  Accra (GMT +00:00)
                </option>

                <option value="Africa/Nairobi">
                  Nairobi (GMT +03:00)
                </option>

                <option value="Europe/London">
                  London
                </option>

                <option value="America/New_York">
                  New York
                </option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-[9px] font-medium">
                Date Format
              </label>

              <select
                name="dateFormat"
                value={form.dateFormat}
                onChange={update}
                className="h-[35px] w-full rounded-lg border border-slate-300 bg-white px-3 text-[9px]"
              >
                <option value="">Select option</option>
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>
          </div>

          {/* Time format */}
          <div className="pt-1">
            <label className="mb-2 block text-[9px] font-medium">
              Default Time Format
            </label>

            <div className="flex gap-8">
              <label className="flex items-center gap-1.5 text-[9px] text-[#4968f5]">
                <input
                  type="radio"
                  name="timeFormat"
                  value="12"
                  checked={form.timeFormat === "12"}
                  onChange={update}
                  className="accent-[#4968f5]"
                />
                12 Hours
              </label>

              <label className="flex items-center gap-1.5 text-[9px] text-slate-400">
                <input
                  type="radio"
                  name="timeFormat"
                  value="24"
                  checked={form.timeFormat === "24"}
                  onChange={update}
                  className="accent-[#4968f5]"
                />
                24 Hours
              </label>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
