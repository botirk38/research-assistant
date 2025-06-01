import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import type { ReactNode } from "react";

interface BaseCardProps {
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
  onSettingsClick?: () => void;
  showSettings?: boolean;
}

export const BaseCard: React.FC<BaseCardProps> = ({
  title,
  subtitle,
  children,
  onSettingsClick,
  showSettings = true,
}) => {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle>{title}</CardTitle>
          {subtitle && <CardDescription>{subtitle}</CardDescription>}
        </div>
        {showSettings && (
          <Button
            variant="outline"
            size="sm"
            className="rounded-full p-2"
            onClick={onSettingsClick}
          >
            <Settings className="h-4 w-4" />
          </Button>
        )}
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
};

interface BaseCardItemProps {
  children: ReactNode;
  className?: string;
}

export const BaseCardItem: React.FC<BaseCardItemProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`border-border hover:bg-accent rounded-lg border p-3 ${className}`}
    >
      {children}
    </div>
  );
};
