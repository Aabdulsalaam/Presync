
import DashboardSidebar from "../components/sidebar";
import LeaveManagement from "./leavemanagement";

export default function LeavePage() {
  return (
    <div className="min-h-screen bg-[#f5f6ff]">
      <DashboardSidebar />

      <main className="ml-24 min-h-screen min-w-0 p-4 sm:p-6 lg:p-8">
        <LeaveManagement />
      </main>
    </div>
  );
}
