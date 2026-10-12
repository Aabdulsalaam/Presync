
import type { UserField } from "./types";

export default function UserInfoPanel({
  items,
}: {
  items: UserField[];
}) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-4 rounded-lg bg-[#e8e8e8] p-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label} className="min-w-0">
          <p className="text-[9px] text-slate-500">
            {item.label}
          </p>

          <p className="mt-0.5 break-words text-[10px] font-medium text-slate-700">
            {item.value || "—"}
          </p>
        </div>
      ))}
    </div>
  );
}
