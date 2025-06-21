import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Users, FileText, Settings, BarChart2 } from "lucide-react";
import Link from "next/link";

export function ResearchAdminSidebar() {
  const pathname = usePathname();

  // Define sidebar menu items for the research admin role
  const menuItems = [
    {
      label: "Dashboard",
      icon: <Home className="h-4 w-4" />,
      href: "/research-admin",
      active: pathname === "/research-admin",
    },
    {
      label: "Researchers",
      icon: <Users className="h-4 w-4" />,
      href: "/research-admin/researchers",
      active: pathname.startsWith("/research-admin/researchers"),
    },
    {
      label: "Submissions",
      icon: <FileText className="h-4 w-4" />,
      href: "/research-admin/submissions",
      active: pathname.startsWith("/research-admin/submissions"),
    },
    {
      label: "Reports",
      icon: <BarChart2 className="h-4 w-4" />,
      href: "/research-admin/reports",
      active: pathname.startsWith("/research-admin/reports"),
    },
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4" />,
      href: "/research-admin/settings",
      active: pathname.startsWith("/research-admin/settings"),
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <span className="text-lg font-bold tracking-tight">Research Admin</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem
                key={item.label}
                className={cn(
                  "flex items-center gap-2",
                  item.active && "bg-muted text-primary",
                )}
              >
                <Link
                  href={item.href}
                  className="flex h-full w-full items-center gap-2"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarSeparator />
      </SidebarContent>
      <SidebarFooter>
        <span className="text-muted-foreground text-xs">
          &copy; {new Date().getFullYear()} Research Admin
        </span>
      </SidebarFooter>
    </Sidebar>
  );
}

export default ResearchAdminSidebar;
