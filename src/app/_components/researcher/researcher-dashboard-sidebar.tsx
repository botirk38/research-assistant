"use client";

import { Avatar } from "@/components/ui/avatar";
import { Home, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

const navItems = [
  { icon: Home, label: "Dashboard", active: false, href: "/researcher" },
  {
    icon: Settings,
    label: "Settings",
    active: false,
    href: "/researcher/settings",
  },
];

export function ResearcherDashboardSidebar() {
  const { open: openDesktop, openMobile } = useSidebar();
  const open = openDesktop || openMobile;

  return (
    <Sidebar className="bg-sidebar text-sidebar-foreground">
      <SidebarContent>
        {/* Logo area */}
        <div className="border-sidebar-border flex h-16 items-center border-b px-4">
          {open ? (
            <div className="flex items-center">
              <div className="bg-sidebar-primary font-display text-sidebar-primary-foreground flex h-10 w-10 items-center justify-center rounded-lg font-bold">
                RP
              </div>
              <Link
                className="font-display text-sidebar-foreground ml-3 font-semibold"
                href="/researcher"
              >
                ResearchAssistant
              </Link>
            </div>
          ) : (
            <div className="bg-sidebar-primary font-display text-sidebar-primary-foreground mx-auto flex h-10 w-10 items-center justify-center rounded-lg font-bold">
              RP
            </div>
          )}
        </div>

        {/* User profile */}
        <div
          className={`border-sidebar-border border-b px-4 py-4 ${
            !open && "flex justify-center"
          }`}
        >
          {open ? (
            <div className="flex items-center">
              <Avatar className="border-sidebar-primary/20 h-10 w-10 border-2">
                <div className="bg-sidebar-accent text-sidebar-accent-foreground flex h-full w-full items-center justify-center font-medium">
                  JD
                </div>
              </Avatar>
              <div className="ml-3">
                <div className="text-sidebar-foreground font-medium">
                  Dr. Jane Doe
                </div>
                <div className="text-sidebar-foreground/70 text-xs">
                  Computer Science, MIT
                </div>
              </div>
            </div>
          ) : (
            <Avatar className="border-sidebar-primary/20 h-10 w-10 border-2">
              <div className="bg-sidebar-accent text-sidebar-accent-foreground flex h-full w-full items-center justify-center font-medium">
                JD
              </div>
            </Avatar>
          )}
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild isActive={item.active}>
                    <a
                      href={item.href}
                      className="hover:text-sidebar-primary transition-colors duration-200"
                    >
                      <item.icon
                        className={`h-5 w-5 ${
                          item.active
                            ? "text-sidebar-primary"
                            : "text-sidebar-foreground/70"
                        }`}
                      />
                      {open && <span className="ml-3">{item.label}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu className="flex-row items-center justify-between">
              <SidebarMenuItem>
                <Avatar className="border-sidebar-primary/20 h-10 w-10 border-2">
                  <div className="bg-sidebar-accent text-sidebar-accent-foreground flex h-full w-full items-center justify-center font-medium">
                    JD
                  </div>
                </Avatar>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <ModeToggle />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
