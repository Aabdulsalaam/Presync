import { Quote, Star } from "lucide-react";
import { testimonials } from "../testimonials";

export default function TestimonialsSection() {
  return (
    <section className="bg-[#FAFAFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0B1739] sm:text-4xl">
            Client Success Stories
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
            Hear from organizations that have transformed their workforce
            management with Presynce
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map(
            ({
              quote,
              result,
              resultClassName,
              initials,
              avatarClassName,
              name,
              role,
              company,
            }) => (
              <article
                key={name}
                className="
                  group
                  flex
                  flex-col
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-6
                  py-7
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  sm:px-7
                "
              >
                {/* Five-star rating */}
                <div
                  className="flex items-center gap-1"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      aria-hidden="true"
                      className="h-5 w-5 fill-[#FFC107] text-[#FFC107]"
                    />
                  ))}
                </div>

                {/* Quote icon */}
                <Quote
                  aria-hidden="true"
                  className="mt-3 h-8 w-8 fill-[#E7E5FF] text-[#E7E5FF]"
                />

                {/* Testimonial */}
                <blockquote className="mt-3 flex-1 text-sm leading-6 text-[#0B1739]">
                  “{quote}”
                </blockquote>

                {/* Result badge */}
                <div className="mt-5">
                  <span
                    className={`
                      inline-flex
                      rounded-full
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      text-white
                      ${resultClassName}
                    `}
                  >
                    {result}
                  </span>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-slate-200" />

                {/* Client information */}
                <div className="flex items-center gap-4">
                  <div
                    className={`
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      text-sm
                      font-semibold
                      text-white
                      ${avatarClassName}
                    `}
                  >
                    {initials}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#0B1739]">
                      {name}
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-500">
                      {role}
                    </p>

                    <p className="text-xs font-medium text-[#2563EB]">
                      {company}
                    </p>
                  </div>
                </div>
              </article>
            )
          )}
        </div>

        {/* Trust message */}
        <div className="mt-14 text-center">
          <p className="text-sm font-semibold text-[#0B1739]">
            Trusted by 500+ organizations worldwide
          </p>

          <p className="mt-2 text-xs text-slate-500 sm:text-sm">
            Join thousands of satisfied customers transforming their workforce
            management
          </p>
        </div>
      </div>
    </section>
  );
}