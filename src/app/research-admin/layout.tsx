import { SidebarProvider } from "@/components/ui/sidebar";
import ResearchAdminSidebar from "./_components/research-admin-sidebar";

export default function ResearchAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="bg-background flex min-h-screen w-full">
        <aside className="bg-card hidden border-r md:flex md:w-64">
          <ResearchAdminSidebar />
        </aside>
        <main className="flex min-w-0 flex-1 flex-col p-10">{children}</main>
      </div>
    </SidebarProvider>
  );
}
