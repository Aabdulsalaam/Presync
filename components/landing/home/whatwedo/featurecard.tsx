import { Feature } from "./type";

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  hoverClassName,
}: Feature) {
  return (
    <article
      className={`
        h-full
        rounded-2xl
        border
        border-[#E5E7EB]
        bg-white
        p-6
        sm:p-7
        lg:p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        ${hoverClassName}
      `}
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          transition-transform
          duration-300
          group-hover:-rotate-3
          sm:h-14
          sm:w-14
        "
        style={{
          background:
            "linear-gradient(108.625deg, #4C71FE 3.459%, #A38AEA 100%)",
        }}
      >
        <Icon />
      </div>

      <h3
        className="
          mt-6
          text-xl
          font-semibold
          leading-tight
          text-[#1A1A2E]
          sm:text-2xl
          lg:text-[28px]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-4
          text-sm
          leading-7
          text-[#6B7280]
          sm:text-base
        "
      >
        {description}
      </p>
    </article>
  );
}