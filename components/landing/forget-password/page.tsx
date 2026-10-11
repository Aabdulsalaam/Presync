import ForgotPassword from "./form/page";
import SidePanel from "../signin/sidepanel/page";

export default function ForgotPass() {
  return (
    <main className="min-h-screen bg-violet-50/40 px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
        <SidePanel
          title="Reset your Presynce Password for Account access"
          description={
            "Securely reset your password to regain access to your account. Choose a strong password to keep your information protected. You'll be signed in and really to continue in just a moment."
          }
        />
        <ForgotPassword/>
        
      </div>
    </main>
  );
}
