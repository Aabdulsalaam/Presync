import Link from "next/link";
import Logo from "../../../shared/footer/logo";

export default function SignInForm() {
  return (
    <div className="flex flex-col justify-center px-6 py-14 sm:px-16 sm:py-20">
      <Logo />

      <h1 className="mt-8 text-xl font-semibold leading-snug text-slate-900 sm:text-2xl">
        Track Your Attendance Effortlessly With{" "}
        <span className="text-indigo-500">Presynce</span>
      </h1>

      <form className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
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

        <p className="text-sm text-slate-600">
          Do not have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-indigo-500 hover:text-indigo-600"
          >
            Sign up
          </Link>
        </p>
        <Link href="/company-dashboard">
          <button
            type="submit"
            className="w-full rounded-lg bg-[#4F63E8] py-3 mt-8 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Sign in
          </button>
        </Link>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-700">
            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-400"
            />
            Remember me
          </label>
          <Link
            href="/forgot-password"
            className="font-medium text-indigo-500 hover:text-indigo-600"
          >
            Forgot password?
          </Link>
        </div>
      </form>
    </div>
  );
}
