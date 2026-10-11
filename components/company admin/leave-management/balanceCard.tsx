
type Props = {
  title: string;
  used: number;
  allowance: number;
  color: "blue" | "green";
};

export default function LeaveBalanceCard({
  title,
  used,
  allowance,
  color,
}: Props) {
  const remaining = Math.max(allowance - used, 0);
  const percentage =
    allowance > 0
      ? Math.min((used / allowance) * 100, 100)
      : 0;

  const barColor =
    color === "blue" ? "bg-blue-500" : "bg-emerald-500";

  return (
    <div className="rounded-lg border border-slate-100 bg-white p-3">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[10px] font-medium text-slate-700">
          {title}
        </p>
        <p className="whitespace-nowrap text-[10px] text-slate-500">
          {remaining} days left
        </p>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full ${barColor}`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-2 flex justify-between text-[9px] text-slate-400">
        <span>{used} used</span>
        <span>{allowance} days allowance</span>
      </div>
    </div>
  );
}
