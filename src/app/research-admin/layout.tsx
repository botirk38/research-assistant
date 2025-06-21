import ResearchAdminSidebar from "./_components/research-admin-sidebar";

export default function ResearchAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background flex min-h-screen">
      <aside className="bg-card hidden border-r md:flex md:w-64">
        <ResearchAdminSidebar />
      </aside>
      <main className="flex min-w-0 flex-1 flex-col">{children}</main>
    </div>
  );
}
