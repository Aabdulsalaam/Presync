import OtpForm from "./form/page";
import SidePanel from "../signin/sidepanel/page";

export default function OtpPage() {
  return (
    <main className="min-h-screen bg-violet-50/40 px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
        <SidePanel
          title={"Check Your Email\nFor The OTP And Copy\nTo Paste Here"}
          description={
            "A one-time password has been sent to your email.\nRetrieve the OTP from your inbox. Enter it here to verify your access."
          }
        />
        <OtpForm email="example@gmail.com" />
      </div>
    </main>
  );
}
