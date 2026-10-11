import DashboardSidebar from "../components/sidebar";
import MessagesPanel from "./newmessage/messagepanel";

export default function Messages() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#eef0f9] p-3">
      <div className="flex h-full w-full overflow-hidden rounded-3xl bg-white shadow-sm">
        <DashboardSidebar />
        <MessagesPanel />
      </div>
    </div>
  );
}