import PlanCard from "./plancard";
import { plans } from "./data";

export default function Pricing() {
  return (
    <section className="w-full py-16 lg:py-24 px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2D66]">
            Simple, Transparent Pricing
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#6B7280] leading-7">
            Choose the plan that fits your organization's needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard
              key={plan.title}
              {...plan}
            />
          ))}
        </div>

      </div>
    </section>
  );
}