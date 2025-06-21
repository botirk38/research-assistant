import { Badge } from "@/components/ui/badge";

interface DashboardHeaderProps {
  title?: string;
  subtitle?: string;
  roleBadge?: string;
}

export function DashboardHeader({
  title = "Research Performance Dashboard",
  subtitle = "University-wide research metrics and analytics",
  roleBadge = "Research Admin",
}: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground text-xl">{subtitle}</p>
      </div>
      <Badge variant="outline" className="px-4 py-2 text-lg">
        {roleBadge}
      </Badge>
    </div>
  );
}

export default DashboardHeader;
