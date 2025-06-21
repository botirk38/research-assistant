"use client";

import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { DateRange } from "react-day-picker";
import { filterDataByDateRange } from "../utils";

interface UniversityOverviewData {
  metric: string;
  current: number;
  previous: number;
  date?: string;
}

interface UniversityOverviewChartProps {
  data: UniversityOverviewData[];
  dateRange?: DateRange | undefined;
  schoolFilter?: string;
  title?: string;
  description?: string;
  className?: string;
  loading?: boolean;
}

const chartConfig = {
  current: {
    label: "Current Period",
    color: "var(--chart-1)",
  },
  previous: {
    label: "Previous Period",
    color: "var(--chart-2)",
  },
};

export function UniversityOverviewChart({
  data,
  dateRange,
  schoolFilter,
  title,
  description,
  className,
  loading = false,
}: UniversityOverviewChartProps) {
  // Dynamic title/description based on schoolFilter if not provided
  const dynamicTitle =
    title ??
    (!schoolFilter || schoolFilter === "All Schools"
      ? "University Overview Metrics"
      : `${schoolFilter} Overview Metrics`);
  const dynamicDescription =
    description ??
    (!schoolFilter || schoolFilter === "All Schools"
      ? "Key performance indicators for the selected period"
      : `Key performance indicators for ${schoolFilter} in the selected period`);
  const filteredData = useMemo(() => {
    let processedData = [...data];

    // Apply date range filter
    if (dateRange) {
      processedData = filterDataByDateRange(processedData, dateRange);
    }

    // Apply school filter (if implemented in data structure)
    if (schoolFilter && schoolFilter !== "All Schools") {
      // processedData = processedData.filter(item => item.school === schoolFilter);
    }

    return processedData;
  }, [data, dateRange, schoolFilter]);

  if (loading) {
    return (
      <Card className={className}>
        <CardHeader>
          <div className="space-y-2">
            <div className="bg-muted h-4 w-3/4 animate-pulse rounded" />
            <div className="bg-muted h-3 w-1/2 animate-pulse rounded" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-muted h-64 w-full animate-pulse rounded" />
        </CardContent>
      </Card>
    );
  }

  if (!filteredData || filteredData.length === 0) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            {dynamicTitle}
          </CardTitle>
          {dynamicDescription && (
            <CardDescription>{dynamicDescription}</CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <div className="flex h-64 w-full items-center justify-center">
            <p className="text-muted-foreground text-sm">
              No overview data available for the selected criteria
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">{dynamicTitle}</CardTitle>
        {dynamicDescription && (
          <CardDescription>{dynamicDescription}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={filteredData}
              margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
              barCategoryGap="20%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
              <XAxis
                dataKey="metric"
                tick={{ fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis
                tick={{ fontSize: 11 }}
                tickLine={false}
                axisLine={false}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(value, name) => [
                      typeof value === "number"
                        ? value.toLocaleString()
                        : String(value),
                      chartConfig[name as keyof typeof chartConfig]?.label ||
                        String(name),
                    ]}
                    labelFormatter={(label) => `${label}`}
                  />
                }
              />
              <Bar
                dataKey="current"
                fill="var(--chart-1)"
                radius={[2, 2, 0, 0]}
                className="transition-all duration-200"
              />
              <Bar
                dataKey="previous"
                fill="var(--chart-2)"
                radius={[2, 2, 0, 0]}
                className="transition-all duration-200"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default UniversityOverviewChart;
