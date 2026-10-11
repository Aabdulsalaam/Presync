import SignInForm from "./form/page";
import SidePanel from "./sidepanel/page";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-violet-50/40 px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
        <SignInForm />
        <SidePanel
          title="Sign in to Your Account"
          description={
            "Log in using your registered email and password.\nStay on top of attendance tracking, reporting, and compliance,\nEverything you need is waiting in your dashboard."
          }
        />
      </div>
    </main>
  );
}
