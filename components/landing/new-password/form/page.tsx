import Link from "next/link";
import Logo from "../../../shared/footer/logo";

export default function ChangePassword() {
  return (
    <div className="flex flex-col justify-center px-6 py-14 sm:px-16 sm:py-20">
      <Logo />

      <h1 className="mt-8 text-xl font-semibold leading-snug text-slate-900 sm:text-2xl">
       Change Password
      </h1>
      <p>Please enter new password</p>

      <form className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-700"
          >
            New Password
          </label>
          <input
            id="password"
            type="password"
            className="mt-2 w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 text-sm text-slate-900 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-700"
          >
            Confirm New Password
          </label>
          <input
            id="password"
            type="password"
            className="mt-8 w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 text-sm text-slate-900 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
        </div>
        <Link href="/signin">
        <button
          type="submit"
          className="w-full rounded-lg bg-[#4F63E8] mt-8 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Confirm
        </button>
        </Link>
      </form>
    </div>
  );
}
