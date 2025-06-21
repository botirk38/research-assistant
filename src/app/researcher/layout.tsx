import { SidebarProvider } from "@/components/ui/sidebar";
import { ResearcherDashboardSidebar } from "./_components/researcher-dashboard-sidebar";

export default function ResearcherDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <ResearcherDashboardSidebar />
        <main className="w-full flex-1 p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
