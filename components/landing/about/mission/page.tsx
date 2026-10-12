import { Eye, Target } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="bg-white px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Vision Card */}
        <div
          className="
            rounded-[24px]
            bg-[linear-gradient(120deg,#F0ECFF_0%,#DDE4FF_100%)]
            px-7
            py-10
            sm:px-10
            lg:px-12
            lg:py-12
          "
        >
          {/* Vision Icon */}
          <div
            className="
              mb-7
              flex
              h-[72px]
              w-[72px]
              items-center
              justify-center
              rounded-[17px]
              bg-[linear-gradient(135deg,#4C71FE_0%,#A38AEA_100%)]
            "
          >
            <Eye
              className="h-8 w-8 text-white"
              strokeWidth={2.5}
            />
          </div>

          <h2 className="text-3xl font-bold text-[#111127] sm:text-4xl">
            Our Vision
          </h2>

          <p className="mt-7 text-lg leading-[1.8] text-[#111127]">
            To revolutionize workforce management by creating intelligent,
            intuitive systems that empower organizations to build more
            productive, engaged, and accountable teams across every industry
            worldwide.
          </p>
        </div>

        {/* Mission Card */}
        <div
          className="
            rounded-[24px]
            bg-[linear-gradient(120deg,#DDE4FF_0%,#F0ECFF_100%)]
            px-7
            py-10
            sm:px-10
            lg:px-12
            lg:py-12
          "
        >
          {/* Mission Icon */}
          <div
            className="
              mb-7
              flex
              h-[72px]
              w-[72px]
              items-center
              justify-center
              rounded-[17px]
              bg-[linear-gradient(135deg,#A38AEA_0%,#4C71FE_100%)]
            "
          >
            <Target
              className="h-8 w-8 text-white"
              strokeWidth={2.5}
            />
          </div>

          <h2 className="text-3xl font-bold text-[#111127] sm:text-4xl">
            Our Mission
          </h2>

          <p className="mt-7 text-lg leading-[1.8] text-[#111127]">
            We build reliable, cutting-edge attendance and time tracking
            solutions that streamline operations, enhance transparency, and
            foster a culture of accountability—helping businesses thrive in an
            ever-evolving workplace.
          </p>
        </div>
      </div>
    </section>
  );
}