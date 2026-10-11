import Link from "next/link";
import Logo from "../../../shared/footer/logo";

export default function ForgotPassword() {
  return (
    <div className="flex flex-col justify-center px-6 py-14 sm:px-16 sm:py-20">
      <Logo />

      <h1 className="mt-8 text-xl font-semibold leading-snug text-slate-900 sm:text-2xl">
        Forgot Password
      </h1>
      <p>No Worries, we will send you an OTP for reset</p>

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
        <Link href="/otp">
        <button
          type="submit"
          className="w-full rounded-lg bg-[#4F63E8] mt-8 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Send OTP
        </button>
        </Link>
        <Link href="/signin">
          <button
            type="submit"
            className="w-full rounded-lg bg-[#C2C4C8] mt-8  py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Back
          </button>
        </Link>
      </form>
    </div>
  );
}
