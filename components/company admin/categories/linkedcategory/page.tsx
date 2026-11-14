
"use client";

import { useRouter } from "next/navigation";
import DashboardSidebar from "../../components/sidebar";
import CategoryDetailsHeader from "../overviewheader";
import { ChevronRight } from "lucide-react";

type LinkedItem = {
  name: string;
  users: number;
  color: string;
  dot: string;
  background: string;
  border: string;
};

const linkedRoles: LinkedItem[] = [
  {
    name: "Manager",
    users: 18,
    color: "text-blue-700",
    dot: "bg-blue-600",
    background: "bg-blue-100",
    border: "border-blue-200",
    
  },
  {
    name: "Senior Engineer",
    users: 24,
    color: "text-purple-700",
    dot: "bg-purple-600",
    background: "bg-purple-100",
    border: "border-purple-200",
    
  },
];

const linkedTeams: LinkedItem[] = [
  {
    name: "Backend Team",
    users: 22,
    color: "text-cyan-700",
    dot: "bg-cyan-600",
    background: "bg-cyan-100",
    border: "border-cyan-200",
   
  },
];

const linkedLocations: LinkedItem[] = [
  {
    name: "Lagos Office",
    users: 75,
    color: "text-green-700",
    dot: "bg-green-600",
    background: "bg-green-100",
    border: "border-green-200",
   
  },
];

function LinkedCategoryGroup({
  title,
  items,
  
}: {
  title: string;
  items: LinkedItem[];
}) {
  return (
    <section className="mb-4">
      <h3 className="mb-2 text-[12px] font-medium text-gray-600">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item.name}
            type="button"
            className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-[11px] transition hover:brightness-95 ${item.background} ${item.border} ${item.color}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${item.dot}`} />

            <span className="font-medium">{item.name}</span>

            <span className="text-[10px] opacity-70">
              · {item.users} users
            </span>

            <ChevronRight size={12} />
          </button>
        ))}
      </div>
    </section>
  );
}

export default function LinkedCategoriesPage() {
  
  return (
    <div className="ml-24 flex min-h-screen bg-[#F8FAFC]">
      <DashboardSidebar />

      <main className="min-w-0 flex-1 px-4 py-5 md:px-6 lg:px-7">
        <div className="mx-auto max-w-[1500px]">
          <CategoryDetailsHeader />

          <div className="px-1 pt-5">
            <LinkedCategoryGroup
              title="Linked Roles"
              items={linkedRoles}
            />

            <LinkedCategoryGroup
              title="Linked Teams"
              items={linkedTeams} 
            />

            <LinkedCategoryGroup
              title="Linked Locations"
              items={linkedLocations}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
