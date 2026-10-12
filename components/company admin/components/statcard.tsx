import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  negative?: boolean;
}

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  negative = false,
}: StatCardProps) {
  return (
    <article className="min-w-0 rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs text-gray-600">
            {title}
          </p>

          <h3 className="mt-2 text-xl font-medium text-gray-950">
            {value}
          </h3>
        </div>

        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#4b6ff8] sm:size-11">
          <Icon size={21} />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <span
          className={`text-xs ${
            negative
              ? "text-red-500"
              : "text-green-500"
          }`}
        >
          {negative ? "↓" : "↑"} {change}
        </span>

        <span className="text-xs text-gray-400">
          Last 7 days
        </span>
      </div>
    </article>
  );
}