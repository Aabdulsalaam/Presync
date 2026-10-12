import { Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <section
      className="
        flex
        flex-col
        gap-5
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      {/* Page Title */}

      <div>
        <h1 className="text-2xl font-semibold text-gray-950 sm:text-3xl">
          Overview
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Company-wide attendance metrics and insights
        </p>
      </div>

      {/* Search */}

      <div className="relative w-full sm:w-72 lg:w-80">
        <Search
          size={19}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-500
          "
        />

        <input
          type="search"
          aria-label="Search dashboard"
          placeholder="Search"
          className="
            h-12
            w-full
            rounded-xl
            border
            border-gray-300
            bg-white
            pl-11
            pr-4
            text-sm
            outline-none
            transition
            placeholder:text-gray-400
            focus:border-[#4b6ff8]
            focus:ring-4
            focus:ring-blue-100
          "
        />
      </div>
    </section>
  );
}