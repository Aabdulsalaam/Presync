import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  description: ReactNode;
  icon: ReactNode;
}

export default function StatCard({
  title,
  value,
  description,
  icon,
}: StatCardProps) {
  return (
    <div className="flex h-[70px] items-center justify-between rounded-md border border-[#edf0f6] bg-white px-4 shadow-[0_1px_4px_rgba(20,30,60,0.02)]">
      <div>
        <p className="text-[8px] font-medium text-[#30343d]">
          {title}
        </p>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-[17px] font-semibold tracking-[-0.4px] text-[#151922]">
            {value}
          </span>

          <span className="text-[8px] text-[#858b99]">
            {description}
          </span>
        </div>
      </div>

      <div className="flex h-[29px] w-[29px] items-center justify-center rounded-md bg-[#f0f3ff] text-[#5874ff]">
        {icon}
      </div>
    </div>
  );
}