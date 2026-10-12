import DashboardOverview from "../components/overview";
import DashboardSidebar from "../components/sidebar";

export default function DashboardPage() {
  return (
    <>
      <DashboardSidebar />

      <DashboardOverview />
    </>
  );
}