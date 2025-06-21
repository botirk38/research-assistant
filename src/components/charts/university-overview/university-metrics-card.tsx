"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
            <div className="h-4 w-32 bg-muted animate-pulse rounded" />
            <div className="h-3 w-24 bg-muted animate-pulse rounded" />
          </div>
          {icon && <div className="h-4 w-4 bg-muted animate-pulse rounded" />}
        </CardHeader>
        <CardContent>
          <div className="h-8 w-20 bg-muted animate-pulse rounded mb-2" />
          <div className="h-3 w-16 bg-muted animate-pulse rounded" />
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
        {icon && <div className="h-4 w-4 text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {formatChartValue(value, formatType)}
        </div>
        {trend && (
          <div className={cn(
            "flex items-center text-xs mt-1",
            trend.isPositive && "text-green-600",
            trend.isNegative && "text-red-600",
            !trend.isPositive && !trend.isNegative && "text-muted-foreground"
          )}>
            {trend.isPositive && <TrendingUp className="h-3 w-3 mr-1" />}
            {trend.isNegative && <TrendingDown className="h-3 w-3 mr-1" />}
            {!trend.isPositive && !trend.isNegative && <Minus className="h-3 w-3 mr-1" />}
            <span>
              {trend.isPositive && "+"}
              {Math.abs(trend.percentageChange).toFixed(1)}% from previous period
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default UniversityMetricsCard;
