import SignUpForm from "./form/page";
import SidePanel from "../signin/sidepanel/page";

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-violet-50/40 px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
        <SignUpForm />
        <SidePanel
          title="Let's get you Signed up Now"
          description={
            "Create your account in just a few steps.\nWe'll guide you through the signup process to get you up and running in no time\nNo technical skills required just accurate, stress-free management system."
          }
        />
      </div>
    </main>
  );
}
