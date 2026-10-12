interface AuthSidePanelProps {
  title: string;
  description: string;
}

export default function SidePanel({
  title,
  description,
}: AuthSidePanelProps) {
  return (
    <div className="flex flex-col items-center justify-start rounded-3xl bg-[#4F63E8] px-8 py-14 text-center sm:px-14 sm:py-16">
      <h2 className=" text-3xl text-left font-bold leading-tight text-white sm:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-md  text-left whitespace-pre-line text-sm leading-relaxed text-indigo-100 sm:text-base">
        {description}
      </p>

      <div className="relative mt-8 w-full max-w-2xl bg-white p-2">
  {/* Main attendance image */}
  <img
    src="/signup-image.png"
    alt="Attendance dashboard"
    className="w-full object-contain"
  />

  {/* Analytics card */}
  <img
    src="/analytics.png"
    alt="Attendance analytics"
    className="
      absolute
      right-[-6%]
      top-[8%]
      w-[22%]
      object-contain
    "
  />
</div>
    </div>
  );
}