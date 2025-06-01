"use client";

import type React from "react";
import Link from "next/link";
import {
  BarChart3,
  FileText,
  Plus,
  Settings,
  Upload,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface QuickActionItem {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
}

function QuickAction({ icon, label, onClick, href }: QuickActionItem) {
  const content = (
    <>
      <div className="bg-primary/10 text-primary rounded-full p-1.5">
        {icon}
      </div>
      <span className="text-xs font-medium">{label}</span>
    </>
  );

  return (
    <Card className="hover:bg-accent border-none shadow-none transition-colors">
      <CardContent className="p-0.5">
        {href ? (
          <Button
            variant="ghost"
            className="flex h-full w-full flex-col items-center justify-center gap-1.5 p-2"
            asChild
          >
            <Link href={href}>{content}</Link>
          </Button>
        ) : (
          <Button
            variant="ghost"
            className="flex h-full w-full flex-col items-center justify-center gap-1.5 p-2"
            onClick={onClick}
          >
            {content}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

// Default items that can be used if none are provided
export const defaultQuickActions: QuickActionItem[] = [
  {
    icon: <Plus className="h-5 w-5" />,
    label: "New Project",
    onClick: () => console.log("New Project clicked"),
  },
  {
    icon: <Upload className="h-5 w-5" />,
    label: "Upload Files",
    onClick: () => console.log("Upload Files clicked"),
  },
  {
    icon: <Users className="h-5 w-5" />,
    label: "Manage Team",
    onClick: () => console.log("Manage Team clicked"),
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    label: "Analytics",
    onClick: () => console.log("Analytics clicked"),
  },
  {
    icon: <FileText className="h-5 w-5" />,
    label: "Reports",
    onClick: () => console.log("Reports clicked"),
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: "Settings",
    onClick: () => console.log("Settings clicked"),
  },
];

interface QuickActionsProps {
  title?: string;
  items?: QuickActionItem[];
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}

export function QuickActions({
  title = "Quick Actions",
  items = defaultQuickActions,
  columns = {
    mobile: 2,
    tablet: 3,
    desktop: 6,
  },
}: QuickActionsProps) {
  const gridClasses = `grid grid-cols-${columns.mobile} md:grid-cols-${columns.tablet} lg:grid-cols-${columns.desktop} gap-2`;

  return (
    <div className="space-y-4">
      {title && (
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      )}
      <div className={gridClasses}>
        {items.map((item, index) => (
          <QuickAction
            key={`${item.label}-${index}`}
            icon={item.icon}
            label={item.label}
            onClick={item.onClick}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
}
