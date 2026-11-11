
import Link from "next/link";
import type { Route } from "next";
import {
  Settings,
  CalendarDays,
  ShieldCheck,
  Bell,
} from "lucide-react";

type SettingsTab =
  | "general"
  | "attendance"
  | "security"
  | "notification";

interface SettingsHeaderProps {
  activeTab: SettingsTab;
  formId?: string;
  title?: string;
  description?: string;
}

const tabs = [
  {
    id: "general",
    label: "General Settings",
    href: "/company-dashboard/settings",
    icon: Settings,
  },
  {
    id: "attendance",
    label: "Attendance & Schedule",
    href: "/company-dashboard/settings/attendance",
    icon: CalendarDays,
  },
  {
    id: "security",
    label: "Security",
    href: "/company-dashboard/settings/security",
    icon: ShieldCheck,
  },
  {
    id: "notification",
    label: "Notification",
    href: "/company-dashboard/settings/notification",
    icon: Bell,
  },
] as const;

export default function SettingsHeader({
  activeTab,
  formId = "settings-form",
  title = "Settings",
  description = "Manage platform-wide configurations",
}: SettingsHeaderProps) {
  return (
    <>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-[21px] font-semibold tracking-tight text-[#171923]">
            {title}
          </h1>

          <p className="mt-1 text-[10px] text-slate-400">
            {description}
          </p>
        </div>

        <button
          type="submit"
          form={formId}
          className="flex h-[38px] shrink-0 items-center gap-2 rounded-lg bg-[#4968f5] px-4 text-[10px] font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>

      {/* Settings Navigation */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex min-w-max items-center gap-5 border-b border-slate-200 sm:gap-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <Link
                key={tab.id}
                href={tab.href as Route}
                className={`flex shrink-0 items-center gap-1.5 border-b-2 pb-3 text-[10px] font-medium transition ${
                  isActive
                    ? "border-[#4968f5] text-[#4968f5]"
                    : "border-transparent text-slate-400 hover:text-[#4968f5]"
                }`}
              >
                <Icon size={13} />
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
