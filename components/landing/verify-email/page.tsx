import VerifyEmail from "./form/page";
import SidePanel from "../signin/sidepanel/page";

export default function EmailVerify() {
  return (
    <main className="min-h-screen bg-violet-50/40 px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
        <VerifyEmail />
        <SidePanel
          title="Please verify your Email Address"
          description={
            "A secure one-time password(OTP) has been sent to your registered email.\n Enter the code to verify ownership of the email address, verification ensures secure access to your attendance management account."
          }
        />
      </div>
    </main>
  );
}
