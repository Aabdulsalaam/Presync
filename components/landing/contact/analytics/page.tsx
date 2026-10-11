import { Sparkles, Users, ArrowRight } from "lucide-react";

export default function WorkforceAnalyticsSection() {
  return (
    <section className="bg-white px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto max-w-7xl rounded-3xl bg-[#4C5A21] px-6 py-14 sm:px-16 sm:py-20">
        <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-[1.3fr_1fr]">
          {/* Copy */}
          <div>
            <div className="flex items-center gap-2 text-sm text-lime-200">
              <Sparkles className="h-4 w-4" strokeWidth={2} />
              <span>Analytics and Reporting</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Workforce Analytics
            </h2>
            <h3 className="mt-1 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Smart Attendance &amp; Record Management
            </h3>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-lime-50/80 sm:text-base">
              Automate attendance tracking, centralize employee records, and
              gain actionable insights — all from a single, reliable system
              built for modern teams.
            </p>

            <button
              type="button"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#4C5A21] transition hover:bg-lime-50"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>

          {/* Stat cards */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-white px-7 py-6 shadow-sm">
              <p className="text-4xl font-bold text-slate-900 sm:text-5xl">
                90%
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Process Efficiency
              </p>
              <div className="mt-4 flex -space-x-2">
                <span className="h-7 w-7 rounded-full border-2 border-white bg-violet-400" />
                <span className="h-7 w-7 rounded-full border-2 border-white bg-green-400" />
                <span className="h-7 w-7 rounded-full border-2 border-white bg-blue-400" />
                <span className="h-7 w-7 rounded-full border-2 border-white bg-lime-300" />
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-lime-100 text-xs font-semibold text-slate-600">
                  +
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white px-7 py-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Users className="h-4 w-4" strokeWidth={2} />
                <span>Active Teams</span>
              </div>
              <p className="mt-1 text-4xl font-bold text-slate-900 sm:text-5xl">
                500+
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
