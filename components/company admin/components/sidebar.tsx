
"use client";

import {
  BarChart3,
  CalendarDays,
  ClipboardCheck,
  Folder,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type MenuItem = {
  name: string;
  icon: LucideIcon;
  href: Route;
};

const menuItems: MenuItem[] = [
  {
    name: "Overview",
    icon: LayoutDashboard,
    href: "/company-dashboard",
  },
  {
    name: "Attendance",
    icon: ClipboardCheck,
    href: "/company-dashboard/attendance",
  },
  {
    name: "User Management",
    icon: Users,
    href: "/company-dashboard/userManagement",
  },
  {
    name: "Leave Requests",
    icon: CalendarDays,
    href: "/company-dashboard/leaveManagement",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    href: "/company-dashboard/analytics",
  },
  {
    name: "Messages",
    icon: MessageSquare,
    href: "/company-dashboard/messages",
  },
  {
    name: "Categories",
    icon: Folder,
    href: "/company-dashboard/categories",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/company-dashboard/settings",
  },
];

export default function DashboardSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const pathname = usePathname();

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`fixed bottom-4 left-5 top-4 z-50 flex flex-col overflow-hidden rounded-r-2xl bg-[#4b6ff8] text-white transition-all duration-300 ease-in-out ${
        isExpanded ? "w-[280px]" : "w-[70px]"
      }`}
    >
      {/* Logo and company information */}

      <div
        className={`flex h-[90px] shrink-0 items-start ${
          isExpanded
            ? "gap-4 px-5 pt-5"
            : "justify-center pt-5"
        }`}
      >
        <div className="flex size-9 shrink-0 items-center justify-center">
          <span className="size-7 bg-[#d9ff35]" />
        </div>

        {isExpanded && (
          <div>
            <h2 className="text-sm font-medium">
              Company Admin
            </h2>

            <p className="mt-2 text-xs text-white/80">
              Attendance Management
            </p>
          </div>
        )}
      </div>

      {/* Divider */}

      <div className="mx-5 shrink-0 border-t border-white/40" />

      {/* Navigation */}

      <nav
        className={`mt-3 flex min-h-0 flex-1 flex-col overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
          isExpanded
            ? "px-4"
            : "items-center px-1"
        }`}
      >
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            item.href === "/company-dashboard"
              ? pathname === item.href
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              title={!isExpanded ? item.name : undefined}
              className={`group flex h-14 shrink-0 items-center rounded-lg transition-all duration-200 ${
                isExpanded
                  ? "w-full gap-5 px-4"
                  : "w-12 justify-center"
              } ${
                isActive
                  ? "bg-white/15"
                  : "hover:bg-white/10"
              }`}
            >
              <Icon
                size={21}
                strokeWidth={1.7}
                className="shrink-0"
              />

              {isExpanded && (
                <span className="whitespace-nowrap text-sm">
                  {item.name}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User information */}

      <div
        className={`shrink-0 py-5 ${
          isExpanded
            ? "px-5"
            : "flex justify-center"
        }`}
      >
        {isExpanded && (
          <div className="mb-4 border-t border-white/50" />
        )}

        <div
          className={`flex items-center ${
            isExpanded
              ? "gap-3"
              : "justify-center"
          }`}
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-xs font-medium text-[#4b6ff8]">
            AD
          </div>

          {isExpanded && (
            <div>
              <h3 className="text-sm">
                Admin User
              </h3>

              <p className="text-xs text-white/70">
                admin@company.com
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
