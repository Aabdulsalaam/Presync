import FeatureItem from "./featureItem";
import { Plan } from "./type";

interface PlanCardProps extends Plan {}

export default function PlanCard({
  title,
  description,
  price,
  period,
  buttonText,
  primary,
  features,
}: PlanCardProps) {
  return (
    <div
      className={`
        relative
        w-full
        rounded-[15px]
        border
        p-6
        lg:p-8
        transition-all
        duration-300
        hover:shadow-lg
        ${
          primary
            ? "scale-100 border-[#AABE58] bg-[linear-gradient(118.335deg,#4C71FE_3.459%,#A38AEA_100%)] lg:scale-105"
            : "border-2 border-gray-300 bg-white hover:border-[#A38AEA]"
        }
      `}
    >
      {/* Most Popular Badge */}
      {primary && (
        <div
          className="
            absolute
            -top-5
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            rounded-full
            bg-[#AABE58]
            px-4
            py-1
            text-sm
            font-semibold
            text-white
            shadow-md
          "
        >
          Most Popular
        </div>
      )}

      <div className="flex h-full flex-col">
        {/* Header */}
        <div>
          <h3
            className={`text-2xl font-bold ${
              primary ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h3>

          <p
            className={`mt-3 text-base ${
              primary ? "text-white" : "text-black"
            }`}
          >
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="mt-8">
          {price === "Custom" ? (
            <h2
              className={`text-4xl font-bold ${
                primary ? "text-white" : "text-black"
              }`}
            >
              {price}
            </h2>
          ) : (
            <h2
              className={`text-4xl font-bold ${
                primary ? "text-white" : "text-black"
              }`}
            >
              {price}

              <span
                className={`ml-1 text-base font-normal ${
                  primary ? "text-white" : "text-gray-900"
                }`}
              >
                {period}
              </span>
            </h2>
          )}
        </div>

        {/* Features */}
        <div className="mt-8 flex flex-col gap-5">
          {features.map((feature) => (
            <FeatureItem
              key={feature.text}
              {...feature}
            />
          ))}
        </div>

        {/* Button */}
        <button
          className={`
            mt-6
            w-full
            rounded-xl
            py-3
            text-base
            font-medium
            transition-colors
            duration-300
            ${
              primary
                ? "bg-white text-[#4C71FE] hover:bg-blue-100"
                : "bg-[#4C71FE] text-white hover:bg-blue-400"
            }
          `}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}