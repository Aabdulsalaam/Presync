import FeatureCard from "./featurecard";
import { features } from "./data";

export default function WhatWeDo() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg sm:text-xl font-bold text-black">
            What We Do
          </p>

          <h2
            className="
              mt-4
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-semibold
              leading-tight
              text-[#1E2D66]
            "
          >
            Everything you need to manage
            <br className="hidden sm:block" />
            attendance effortlessly
          </h2>
        </div>

        {/* Feature Cards */}
       <div
  className="
    mt-12
    grid
    grid-cols-1
    gap-6
    md:grid-cols-2
    lg:gap-8
    xl:grid-cols-3
  "
>
  {features.map((feature) => (
    <FeatureCard
      key={feature.title}
      {...feature}
    />
  ))}
</div>
      </div>
    </section>
  );
}