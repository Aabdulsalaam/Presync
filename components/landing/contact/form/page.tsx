import {
  Building2,
  MessageSquare,
  Phone,
  Send,
  User,
  UserRound,
} from "lucide-react";

const contactBenefits = [
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Tailored packages for organizations of all sizes",
  },
  {
    icon: UserRound,
    title: "Dedicated Support",
    description: "Personal account manager and 24/7 assistance",
  },
  {
    icon: MessageSquare,
    title: "Custom Consultation",
    description: "Free demo and personalized implementation plan",
  },
];

export default function ContactForm() {
  return (
    <section className="bg-gradient-to-b from-[#F4F1FF] via-[#FBFAFF] to-[#F8F8FC] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
        {/* Left content */}
        <div>
          <h2 className="max-w-lg text-4xl font-bold leading-[1.05] tracking-tight text-[#0B1739] sm:text-5xl">
            Let&apos;s Optimize Your
            <br className="hidden sm:block" /> Workforce Together
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
            Connect with our sales team to discover how Presynce can transform
            your organization&apos;s attendance and time management.
          </p>

          {/* Benefits */}
          <div className="mt-9 space-y-5">
            {contactBenefits.map(
              ({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8FA23E] text-white">
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#0B1739]">
                      {title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                      {description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Contact form card */}
        <div className="rounded-[20px] border border-slate-100 bg-white px-6 py-8 shadow-[0_20px_45px_rgba(15,23,42,0.14)] sm:px-8">
          <form className="space-y-5">
            {/* Full name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-medium text-[#0B1739]"
              >
                Full Name <span className="text-blue-600">*</span>
              </label>

              <div className="relative mt-2">
                <User
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="h-11 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 text-sm text-[#0B1739] outline-none transition placeholder:text-slate-400 focus:border-[#8FA23E] focus:ring-2 focus:ring-[#8FA23E]/15"
                />
              </div>
            </div>

            {/* Work email */}
            <div>
              <label
                htmlFor="workEmail"
                className="block text-xs font-medium text-[#0B1739]"
              >
                Work Email <span className="text-blue-600">*</span>
              </label>

              <div className="relative mt-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>

                <input
                  id="workEmail"
                  name="workEmail"
                  type="email"
                  required
                  placeholder="john@company.com"
                  className="h-11 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 text-sm text-[#0B1739] outline-none transition placeholder:text-slate-400 focus:border-[#8FA23E] focus:ring-2 focus:ring-[#8FA23E]/15"
                />
              </div>
            </div>

            {/* Company name */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-xs font-medium text-[#0B1739]"
              >
                Company Name <span className="text-blue-600">*</span>
              </label>

              <div className="relative mt-2">
                <Building2
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  placeholder="Your Company"
                  className="h-11 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 text-sm text-[#0B1739] outline-none transition placeholder:text-slate-400 focus:border-[#8FA23E] focus:ring-2 focus:ring-[#8FA23E]/15"
                />
              </div>
            </div>

            {/* Phone number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-xs font-medium text-[#0B1739]"
              >
                Phone Number
              </label>

              <div className="relative mt-2">
                <Phone
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="h-11 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 text-sm text-[#0B1739] outline-none transition placeholder:text-slate-400 focus:border-[#8FA23E] focus:ring-2 focus:ring-[#8FA23E]/15"
                />
              </div>
            </div>

            {/* Number of employees */}
            <div>
              <label
                htmlFor="numberOfEmployees"
                className="block text-xs font-medium text-[#0B1739]"
              >
                Number of Employees
              </label>

              <select
                id="numberOfEmployees"
                name="numberOfEmployees"
                defaultValue=""
                className="mt-2 h-11 w-full cursor-pointer rounded-xl border border-slate-300 bg-white px-4 text-sm text-[#0B1739] outline-none transition focus:border-[#8FA23E] focus:ring-2 focus:ring-[#8FA23E]/15"
              >
                <option value="" disabled>
                  Select range
                </option>
                <option value="1-20">1–20 </option>
                <option value="21-50">21–50 </option>
                <option value="51-200">51–200 </option>
                <option value="201-500">201–500 </option>
                <option value="500+">500+ </option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-[#0B1739]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your needs..."
                className="mt-2 min-h-[105px] w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#0B1739] outline-none transition placeholder:text-slate-400 focus:border-[#8FA23E] focus:ring-2 focus:ring-[#8FA23E]/15"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#83943B] to-[#A4B54C] text-sm font-semibold text-white transition duration-300 hover:brightness-95 active:scale-[0.99]"
            >
              Send Message

              <Send
                aria-hidden="true"
                className="h-4 w-4"
                strokeWidth={1.8}
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}