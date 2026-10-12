import ChangePassword from "./form/page";
import SidePanel from "../signin/sidepanel/page";

export default function PasswordChange() {
  return (
    <main className="min-h-screen bg-violet-50/40 px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
        <SidePanel
          title="Create a new Password"
          description={
            "Your identity has been verified sucessfully, \n Enter and confirm a new password to secure your account. \n You will be redirected to signin page once the update is complete. "
          }
        />
        <ChangePassword/>
        
      </div>
    </main>
  );
}
