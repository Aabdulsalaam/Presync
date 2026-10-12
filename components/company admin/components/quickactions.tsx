"use client";

import {
  BarChart3,
  Download,
  Mail,
  UserPlus,
  type LucideIcon,
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";
import type { Route } from "next";

import ExportDataModal from "./exportdatamodal";

interface QuickAction {
  name: string;
  icon: LucideIcon;
  href?: Route;
}
interface QuickActionsProps {
  onAddUser: () => void;
}

const quickActions: QuickAction[] = [
  {
    name: "Add User",
    icon: UserPlus,
  },
  {
    name: "Send Message",
    icon: Mail,
    href: "/company-dashboard/messages",
  },
  {
    name: "View Reports",
    icon: BarChart3,
    href: "/company-dashboard/overviewreport",
  },
  {
    name: "Export Data",
    icon: Download,
  },
];

export default function QuickActions({
  onAddUser,
}: QuickActionsProps) {
  const [exportModalOpen, setExportModalOpen] =
    useState(false);

  return (
    <>
      <section>
        <h2 className="text-base font-semibold">
          Quick Actions
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {quickActions.map((action) => {
            const Icon = action.icon;

            const content = (
              <>
                <span className="flex size-11 items-center justify-center rounded-lg bg-blue-50 text-[#4b6ff8] sm:size-12">
                  <Icon size={22} />
                </span>

                <span className="mt-4 text-center text-sm">
                  {action.name}
                </span>
              </>
            );

            /*
             * ADD USER
             */
            if (action.name === "Add User") {
              return (
                <button
                  key={action.name}
                  type="button"
                  onClick={onAddUser}
                  className="
                    flex
                    min-h-32
                    flex-col
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-gray-200
                    px-3
                    transition
                    hover:border-[#4b6ff8]
                    hover:bg-blue-50
                    sm:min-h-40
                  "
                >
                  {content}
                </button>
              );
            }

            /*
             * EXPORT DATA
             */
            if (action.name === "Export Data") {
              return (
                <button
                  key={action.name}
                  type="button"
                  onClick={() =>
                    setExportModalOpen(true)
                  }
                  className="
                    flex
                    min-h-32
                    flex-col
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-gray-200
                    px-3
                    transition
                    hover:border-[#4b6ff8]
                    hover:bg-blue-50
                    sm:min-h-40
                  "
                >
                  {content}
                </button>
              );
            }

            /*
             * NORMAL LINKS
             */
            return (
              <Link
                key={action.name}
                href={action.href!}
                className="
                  flex
                  min-h-32
                  flex-col
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-gray-200
                  px-3
                  transition
                  hover:border-[#4b6ff8]
                  hover:bg-blue-50
                  sm:min-h-40
                "
              >
                {content}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Export Modal */}
      <ExportDataModal
        open={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
      />
    </>
  );
}