import { coreValues } from "../corevalues";

export default function CoreValuesSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0B1739] sm:text-4xl">
            Our Core Values
          </h2>

          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            The principles that guide everything we do
          </p>
        </div>

        {/* Core value cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {coreValues.map(
            ({
              icon: Icon,
              title,
              description,
              iconWrapperClassName,
              hoverClassName,
            }) => (
              <div
                key={title}
                className={`
                  group
                  rounded-[18px]
                  border
                  border-slate-200
                  bg-white
                  px-7
                  py-8
                  text-left
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                  sm:px-8
                  ${hoverClassName}
                `}
              >
                {/* Icon box */}
                <div
                  className={`
                    flex
                    h-[60px]
                    w-[60px]
                    items-center
                    justify-center
                    rounded-xl
                    shadow-md
                    transition-transform
                    duration-300
                    group-hover:-rotate-6
                    ${iconWrapperClassName}
                  `}
                >
                  <Icon
                    aria-hidden="true"
                    className="h-8 w-8 text-white"
                    strokeWidth={2}
                  />
                </div>

                {/* Card content */}
                <h3 className="mt-5 text-xl font-semibold text-[#0B1739] sm:text-2xl">
                  {title}
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}