import Logo from "../../../shared/footer/logo";
import Link from "next/link";

export default function SignUpForm() {
  return (
    <div className="flex flex-col justify-center px-6 py-14 sm:px-16 sm:py-20">
      <Logo />

      <h1 className="mt-8 text-xl font-semibold leading-snug text-slate-900 sm:text-2xl">
        Lets get you all set up so you can start creating your first
        onboarding experience
      </h1>

      <form className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="industry"
            className="block text-sm font-medium text-slate-700"
          >
            Industry
          </label>
          <select
            id="industry"
            defaultValue=""
            className="mt-2 w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 text-sm text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          >
            <option value="" disabled>
              Select Industry
            </option>
            <option value="education">Education</option>
            <option value="healthcare">Healthcare</option>
            <option value="corporate">Corporate</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-slate-700"
          >
            Company name
          </label>
          <input
            id="companyName"
            type="text"
            className="mt-2 w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 text-sm text-slate-900 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="mt-2 w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 text-sm text-slate-900 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-slate-700"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="mt-2 w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 text-sm text-slate-900 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
          <p className="mt-2 text-xs text-indigo-400">
            Min. of 6 characters including a letter and a character
          </p>
        </div>

        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-400"
          />
          I accept presynce&apos;s Terms and Conditions
        </label>
<Link href="/verify-email">
        <button
          type="submit"
          className="w-full rounded-lg bg-[#4F63E8] py-3  mt-8 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Sign up
        </button>
        </Link>
      </form>
    </div>
  );
}