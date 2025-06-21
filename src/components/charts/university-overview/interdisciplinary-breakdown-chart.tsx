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
import { filterDataByDateRange, sortChartData } from "../utils";

interface InterdisciplinaryData {
  department: string;
  quantity: number;
  school?: string;
  date?: string;
}

interface InterdisciplinaryBreakdownChartProps {
  data: InterdisciplinaryData[];
  dateRange?: DateRange | undefined;
  schoolFilter?: string;
  title?: string;
  description?: string;
  className?: string;
  loading?: boolean;
  maxDepartments?: number;
}

const chartConfig = {
  quantity: {
    label: "Interdisciplinary Papers",
    color: "var(--chart-3)",
  },
};

export function InterdisciplinaryBreakdownChart({
  data,
  dateRange,
  schoolFilter,
  title = "Breakdown of Interdisciplinary papers (By Department)",
  description = "Quantity of interdisciplinary research papers by participating departments",
  className,
  loading = false,
  maxDepartments = 10,
}: InterdisciplinaryBreakdownChartProps) {
  const filteredData = useMemo(() => {
    let processedData = [...data];

    // Apply date range filter
    if (dateRange) {
      processedData = filterDataByDateRange(processedData, dateRange);
    }

    // Apply school filter
    if (schoolFilter && schoolFilter !== "All Schools") {
      processedData = processedData.filter(
        (item) => item.school === schoolFilter,
      );
    }

    // Aggregate by department
    const aggregated = processedData.reduce((acc, item) => {
      const existing = acc.find((a) => a.department === item.department);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        acc.push({
          department: item.department,
          quantity: item.quantity,
          school: item.school,
        });
      }
      return acc;
    }, [] as InterdisciplinaryData[]);

    // Sort by quantity (descending) and limit results
    const sorted = sortChartData(aggregated, "quantity", "desc");
    return sorted.slice(0, maxDepartments);
  }, [data, dateRange, schoolFilter, maxDepartments]);

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
          <div className="bg-muted h-80 w-full animate-pulse rounded" />
        </CardContent>
      </Card>
    );
  }

  if (!filteredData || filteredData.length === 0) {
    return (
      <Card className={className}>
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>
          <div className="flex h-80 w-full items-center justify-center">
            <p className="text-muted-foreground text-sm">
              No interdisciplinary data available for the selected criteria
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={filteredData}
              margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
              <XAxis
                dataKey="department"
                tick={{ fontSize: 10 }}
                tickLine={false}
                axisLine={false}
                angle={-45}
                textAnchor="end"
                height={80}
                interval={0}
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
                      `${value} papers`,
                      "Interdisciplinary Papers",
                    ]}
                    labelFormatter={(label) => `Department: ${label}`}
                  />
                }
              />
              <Bar
                dataKey="quantity"
                fill="var(--chart-3)"
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

export default InterdisciplinaryBreakdownChart;
