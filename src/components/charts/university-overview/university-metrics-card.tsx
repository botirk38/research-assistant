"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatChartValue } from "../utils";

interface UniversityMetricsCardProps {
  title: string;
  description?: string;
  value: number;
  previousValue?: number;
  icon?: React.ReactNode;
  formatType?: "number" | "currency" | "percentage";
  className?: string;
  loading?: boolean;
}

export function UniversityMetricsCard({
  title,
  description,
  value,
  previousValue,
  icon,
  formatType = "number",
  className,
  loading = false,
}: UniversityMetricsCardProps) {
  const calculateTrend = () => {
    if (previousValue === undefined || previousValue === 0) return null;

    const change = value - previousValue;
    const percentageChange = (change / previousValue) * 100;

    return {
      change,
      percentageChange,
      isPositive: change > 0,
      isNegative: change < 0,
    };
  };

  const trend = calculateTrend();

  if (loading) {
    return (
      <Card className={cn("w-full", className)}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="space-y-2">
            <div className="bg-muted h-4 w-32 animate-pulse rounded" />
            <div className="bg-muted h-3 w-24 animate-pulse rounded" />
          </div>
          {icon && <div className="bg-muted h-4 w-4 animate-pulse rounded" />}
        </CardHeader>
        <CardContent>
          <div className="bg-muted mb-2 h-8 w-20 animate-pulse rounded" />
          <div className="bg-muted h-3 w-16 animate-pulse rounded" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {description && (
            <CardDescription className="text-xs">{description}</CardDescription>
          )}
        </div>
        {icon && <div className="text-muted-foreground h-4 w-4">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {formatChartValue(value, formatType)}
        </div>
        {trend && (
          <div
            className={cn(
              "mt-1 flex items-center text-xs",
              trend.isPositive && "text-green-600",
              trend.isNegative && "text-red-600",
              !trend.isPositive && !trend.isNegative && "text-muted-foreground",
            )}
          >
            {trend.isPositive && <TrendingUp className="mr-1 h-3 w-3" />}
            {trend.isNegative && <TrendingDown className="mr-1 h-3 w-3" />}
            {!trend.isPositive && !trend.isNegative && (
              <Minus className="mr-1 h-3 w-3" />
            )}
            <span>
              {trend.isPositive && "+"}
              {Math.abs(trend.percentageChange).toFixed(1)}% from previous
              period
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default UniversityMetricsCard;
