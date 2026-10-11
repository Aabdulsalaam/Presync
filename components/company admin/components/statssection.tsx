import {
  Clock3,
  Users,
} from "lucide-react";

import StatCard from "./statcard";

export default function StatsSection() {
  return (
    <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
      <StatCard
        title="Total Users"
        value="248"
        change="+12"
        icon={Users}
      />

      <StatCard
        title="Present Today"
        value="231"
        change="93.1%"
        icon={Users}
      />

      <StatCard
        title="Absent Today"
        value="17"
        change="6.9%"
        icon={Users}
      />

      <StatCard
        title="Avg. Check-in Time"
        value="8:30 AM"
        change="3%"
        icon={Clock3}
        negative
      />
    </section>
  );
}