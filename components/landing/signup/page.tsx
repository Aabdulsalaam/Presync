
import SignUpForm from "./form/page";
import SidePanel from "../signin/sidepanel/page";

export default function SignUpPage() {
  return (
    <main className="min-h-screen w-full bg-violet-50/40 p-3 sm:p-5 lg:p-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-5 lg:min-h-[calc(100vh-3rem)] lg:grid-cols-2">

        {/* Sign Up Form */}
        <section className="flex items-center justify-center">
          <SignUpForm />
        </section>

        {/* Blue Side Panel */}
        <section className="flex items-center justify-center">
          <SidePanel
            title="Let's get you Signed up Now"
            description={
              "Create your account in just a few steps.\nWe'll guide you through the signup process to get you up and running in no time.\nNo technical skills required, just accurate, stress-free management system."
            }
          />
        </section>

      </div>
    </main>
  );
}
