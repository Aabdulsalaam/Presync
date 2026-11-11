
import SignInForm from "./form/page";
import SidePanel from "../signin/sidepanel/page";

export default function SignInPage() {
  return (
    <main className="min-h-screen w-full bg-violet-50/40 p-3 sm:p-5 lg:p-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-5 lg:min-h-[calc(100vh-3rem)] lg:grid-cols-2">

        {/* Sign In Form */}
        <section className="flex items-center justify-center">
          <SignInForm />
        </section>

        {/* Blue Side Panel */}
        <section className="flex items-center justify-center">
          <SidePanel
            title="Welcome Back"
            description="Manage your attendance effortlessly with Presynce."
          />
        </section>

      </div>
    </main>
  );
}
