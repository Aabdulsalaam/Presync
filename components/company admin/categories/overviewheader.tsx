
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ChevronRight,
  Pencil,
  Link2,
  Archive,
  Trash2,
} from "lucide-react";

type Props = {
  categoryName?: string;
  categoryType?: string;
  description?: string;
};

const tabs = [
  {
    label: "Overview",
    href: "/company-dashboard/categories/overview",
  },
  {
    label: "Assigned Users",
    href: "/company-dashboard/categories/assignedusers",
  },
  {
    label: "Analytics",
    href: "/company-dashboard/categories/analytics",
  },
  {
    label: "Linked Categories",
    href: "/company-dashboard/categories/linked-categories",
  },
  {
    label: "Attendance History",
    href: "/company-dashboard/categories/attendance-history",
  },
] as const;

export default function CategoryDetailsHeader({
  categoryName = "Engineering",
  categoryType = "Department",
  description = "Core software engineering and development teams responsible for product delivery.",
}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const [name, setName] = useState(categoryName);
  const [editedName, setEditedName] = useState(categoryName);
  const [status, setStatus] = useState("Active");
  const [showEditModal, setShowEditModal] = useState(false);

  // CHECK ACTIVE TAB
  const isActive = (href: (typeof tabs)[number]["href"]) => {
    return pathname === href;
  };

  // EDIT CATEGORY
  const handleEdit = () => {
    if (!editedName.trim()) return;

    setName(editedName.trim());
    setShowEditModal(false);
  };

  // DELETE CATEGORY
  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (confirmed) {
      alert("Connect category deletion to your backend.");
    }
  };

  return (
    <>
      <div className="bg-[#F9FAFB]">
        {/* BREADCRUMB */}
        <div className="mb-3 flex items-center gap-1.5 text-[10px] text-[#8A94A6]">
          <Link
            href="/company-dashboard/categories"
            className="transition hover:text-[#155DFC]"
          >
            Categories
          </Link>

          <ChevronRight size={11} />

          <span className="font-medium text-slate-700">
            {name}
          </span>
        </div>

        {/* CATEGORY HEADER */}
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-start gap-2">
            <Link
              href="/company-dashboard/categories"
              className="mt-1 rounded-full p-1 text-slate-500 hover:bg-slate-100"
            >
              <ArrowLeft size={15} />
            </Link>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-[20px] font-semibold text-[#171923]">
                  {name}
                </h1>

                <span className="rounded-full bg-[#DBEAFE] px-2 py-1 text-[8px] font-medium text-[#155DFC]">
                  {categoryType}
                </span>

                <span
                  className={`rounded-full px-2 py-1 text-[8px] font-medium ${
                    status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {status}
                </span>
              </div>

              <p className="mt-1 text-[9px] text-[#6A7282]">
                {description}
              </p>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setEditedName(name);
                setShowEditModal(true);
              }}
              className="flex h-7 items-center gap-1 rounded-md border border-slate-200 bg-white px-2 text-[9px] hover:bg-slate-50"
            >
              <Pencil size={10} />
              Edit
            </button>

            <button
              type="button"
              onClick={() =>
                router.push(
                  "/company-dashboard/categories/assignedusers"
                )
              }
              className="flex h-7 items-center gap-1 rounded-md border border-slate-200 bg-white px-2 text-[9px] hover:bg-slate-50"
            >
              <Link2 size={10} />
              Link
            </button>

            <button
              type="button"
              onClick={() =>
                setStatus((prev) =>
                  prev === "Active" ? "Archived" : "Active"
                )
              }
              className="flex h-7 items-center gap-1 rounded-md border border-orange-200 bg-orange-50 px-2 text-[9px] text-orange-600 hover:bg-orange-100"
            >
              <Archive size={10} />
              {status === "Active" ? "Archive" : "Restore"}
            </button>

            <button
              type="button"
              onClick={handleDelete}
              className="flex h-7 items-center gap-1 rounded-md border border-red-200 bg-red-50 px-2 text-[9px] text-red-600 hover:bg-red-100"
            >
              <Trash2 size={10} />
              Delete
            </button>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <div className="mt-2 overflow-x-auto border-b border-slate-200">
          <div className="flex min-w-max items-center gap-5">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`border-b-2 px-1 py-3 text-[9px] transition ${
                  isActive(tab.href)
                    ? "border-[#155DFC] font-medium text-[#155DFC]"
                    : "border-transparent text-slate-500 hover:text-[#155DFC]"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* EDIT CATEGORY MODAL */}
      {showEditModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl">
            <h2 className="mb-4 text-[15px] font-semibold">
              Edit Category
            </h2>

            <label className="mb-2 block text-[10px] font-medium">
              Category Name
            </label>

            <input
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="h-10 w-full rounded-lg border border-slate-200 px-3 text-[11px] outline-none focus:border-[#155DFC]"
            />

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowEditModal(false)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-[10px]"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleEdit}
                className="rounded-lg bg-[#155DFC] px-4 py-2 text-[10px] text-white"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
