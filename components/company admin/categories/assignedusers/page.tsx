
"use client";

import { useMemo, useState } from "react";
import DashboardSidebar from "../../components/sidebar";
import CategoryDetailsHeader from "../overviewheader";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

type AssignedUser = {
  id: number;
  initials: string;
  name: string;
  email: string;
  jobTitle: string;
  status: "Present" | "Late" | "Absent";
  team: string;
  role: string;
  avatarColor: string;
};

const users: AssignedUser[] = [
  {
    id: 1,
    initials: "SJ",
    name: "Sarah Johnson",
    email: "sarah.j@company.com",
    jobTitle: "Senior Engineer",
    status: "Present",
    team: "Backend Team",
    role: "Senior Engineer",
    avatarColor: "#526BFF",
  },
  {
    id: 2,
    initials: "MC",
    name: "Michael Chen",
    email: "michael.chen@company.com",
    jobTitle: "Engineering Manager",
    status: "Present",
    team: "Frontend Team",
    role: "Manager",
    avatarColor: "#A100E8",
  },
  {
    id: 3,
    initials: "AB",
    name: "Aisha Bello",
    email: "aisha.bello@company.com",
    jobTitle: "Software Engineer",
    status: "Late",
    team: "Backend Team",
    role: "Senior Engineer",
    avatarColor: "#008A50",
  },
  {
    id: 4,
    initials: "DO",
    name: "David Okonkwo",
    email: "david.o@company.com",
    jobTitle: "Product Analyst",
    status: "Absent",
    team: "Frontend Team",
    role: "Analyst",
    avatarColor: "#DC2626",
  },
  {
    id: 5,
    initials: "GN",
    name: "Grace Nwosu",
    email: "grace.n@company.com",
    jobTitle: "UX Designer",
    status: "Present",
    team: "Frontend Team",
    role: "Senior Engineer",
    avatarColor: "#B77900",
  },
  {
    id: 6,
    initials: "EO",
    name: "Emeka Osei",
    email: "emeka.o@company.com",
    jobTitle: "Frontend Developer",
    status: "Present",
    team: "Frontend Team",
    role: "Developer",
    avatarColor: "#087E9B",
  },
  {
    id: 7,
    initials: "FO",
    name: "Fatima Okafor",
    email: "fatima.o@company.com",
    jobTitle: "QA Engineer",
    status: "Present",
    team: "Backend Team",
    role: "Tester",
    avatarColor: "#9333EA",
  },
  {
    id: 8,
    initials: "TO",
    name: "Tunde Oladipo",
    email: "tunde.o@company.com",
    jobTitle: "Software Developer",
    status: "Late",
    team: "Backend Team",
    role: "Developer",
    avatarColor: "#DB6B18",
  },
];

const statusStyles = {
  Present: "bg-[#DCFCE7] text-[#008236]",
  Late: "bg-[#FEF3C7] text-[#B7791F]",
  Absent: "bg-[#FEE2E2] text-[#DC2626]",
};

export default function AssignedUsersPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 6;

  const filteredUsers = useMemo(() => {
    const query = search.toLowerCase().trim();

    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.jobTitle.toLowerCase().includes(query) ||
        user.team.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query)
    );
  }, [search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredUsers.length / rowsPerPage)
  );

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#171923]">
      <DashboardSidebar />

      <main className="ml-24 min-h-screen px-4 py-5 sm:px-6 lg:px-8">
        {/* REUSABLE CATEGORY HEADER */}
        <CategoryDetailsHeader />

        {/* ASSIGNED USERS CONTENT */}
        <section className="mt-4 overflow-hidden rounded-xl border border-slate-100 bg-white">
          {/* SEARCH */}
          <div className="border-b border-slate-100 p-3">
            <div className="relative w-full sm:max-w-[280px]">
              <Search
                size={12}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#98A2B3]"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search users..."
                className="h-8 w-full rounded-md border border-[#E5E7EB] bg-white pl-8 pr-3 text-[10px] outline-none placeholder:text-[#98A2B3] focus:border-[#155DFC]"
              />
            </div>
          </div>

          {/* USERS TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px] border-collapse">
              <thead>
                <tr className="bg-[#F9FAFB]">
                  {[
                    "User",
                    "Email",
                    "Job Title",
                    "Status",
                    "Team",
                    "Role",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="px-3 py-3 text-left text-[9px] font-medium text-[#667085]"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {paginatedUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-[#F0F1F3] last:border-0 hover:bg-[#FAFBFF]"
                  >
                    {/* USER */}
                    <td className="px-3 py-2.5">
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <div
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[7px] font-semibold text-white"
                          style={{
                            backgroundColor: user.avatarColor,
                          }}
                        >
                          {user.initials}
                        </div>

                        <span className="text-[9px] font-medium text-[#344054]">
                          {user.name}
                        </span>
                      </div>
                    </td>

                    {/* EMAIL */}
                    <td className="px-3 py-2.5 text-[9px] text-[#667085]">
                      {user.email}
                    </td>

                    {/* JOB TITLE */}
                    <td className="px-3 py-2.5 text-[9px] text-[#667085]">
                      {user.jobTitle}
                    </td>

                    {/* STATUS */}
                    <td className="px-3 py-2.5">
                      <span
                        className={`rounded-full px-2 py-1 text-[8px] font-medium ${
                          statusStyles[user.status]
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>

                    {/* TEAM */}
                    <td className="px-3 py-2.5 text-[9px] text-[#667085]">
                      {user.team}
                    </td>

                    {/* ROLE */}
                    <td className="px-3 py-2.5 text-[9px] text-[#667085]">
                      {user.role}
                    </td>
                  </tr>
                ))}

                {paginatedUsers.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="py-10 text-center text-[10px] text-[#98A2B3]"
                    >
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* TABLE FOOTER */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-3 py-3">
            <p className="text-[9px] text-[#98A2B3]">
              Showing{" "}
              {filteredUsers.length === 0
                ? 0
                : (currentPage - 1) * rowsPerPage + 1}
              {" - "}
              {Math.min(
                currentPage * rowsPerPage,
                filteredUsers.length
              )}{" "}
              of {filteredUsers.length}
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage((prev) => Math.max(1, prev - 1))
                }
                className="text-[#667085] transition hover:text-[#155DFC] disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Previous page"
              >
                <ChevronLeft size={13} />
              </button>

              <span className="text-[9px] text-[#667085]">
                {currentPage} / {totalPages}
              </span>

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(totalPages, prev + 1)
                  )
                }
                className="text-[#667085] transition hover:text-[#155DFC] disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Next page"
              >
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
