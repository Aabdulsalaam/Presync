
interface AuthSidePanelProps {
  title: string;
  description: string;
}

export default function SidePanel({
  title,
  description,
}: AuthSidePanelProps) {
  return (
    <div className="flex w-full flex-col justify-center rounded-3xl bg-[#4F63E8] px-6 py-8 sm:px-10 sm:py-10 lg:px-12">

      <div className="w-full">
        <h2 className="w-full text-center text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-md text-left whitespace-pre-line text-sm leading-relaxed text-indigo-100 sm:text-base">
          {description}
        </p>
      </div>

      <div className="relative mt-6 w-full max-w-2xl self-center">
        <img
          src="/signup-image.png"
          alt="Attendance dashboard"
          className="h-auto w-full rounded-lg object-contain"
        />

        <img
          src="/analytics.png"
          alt="Attendance analytics"
          className="absolute right-[-4%] top-[8%] w-[22%] object-contain"
        />
      </div>

    </div>
  );
}
