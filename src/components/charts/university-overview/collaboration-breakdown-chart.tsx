"use client";

import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
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

interface CollaborationData {
  department: string;
  collaborationType: "Internal" | "External";
  quantity: number;
  school?: string;
  date?: string;
}

interface CollaborationBreakdownChartProps {
  data: CollaborationData[];
  dateRange?: DateRange | undefined;
  schoolFilter?: string;
  title?: string;
  description?: string;
  className?: string;
  loading?: boolean;
  maxDepartments?: number;
}

const chartConfig = {
  Internal: {
    label: "Internal Collaboration",
    color: "var(--chart-1)",
  },
  External: {
    label: "External Collaboration",
    color: "var(--chart-2)",
  },
};

export function CollaborationBreakdownChart({
  data,
  dateRange,
  schoolFilter,
  title = "Breakdown of Internal/External Institute papers (By Department)",
  description = "Quantity of papers from internal vs external collaborations by lead department",
  className,
  loading = false,
  maxDepartments = 15,
}: CollaborationBreakdownChartProps) {
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

    // Group by department and aggregate collaboration types
    type DepartmentCollab = {
      department: string;
      Internal: number;
      External: number;
      total: number;
      school?: string;
    };
    const departmentData: DepartmentCollab[] = processedData.reduce(
      (acc: DepartmentCollab[], item) => {
        const existing = acc.find((d) => d.department === item.department);
        if (existing) {
          existing[item.collaborationType] =
            (existing[item.collaborationType] ?? 0) + item.quantity;
          existing.total += item.quantity;
        } else {
          acc.push({
            department: item.department,
            Internal: item.collaborationType === "Internal" ? item.quantity : 0,
            External: item.collaborationType === "External" ? item.quantity : 0,
            total: item.quantity,
            school: item.school,
          });
        }
        return acc;
      },
      [],
    );

    // Sort by total quantity and limit results
    const sorted = departmentData
      .sort((a, b) => b.total - a.total)
      .slice(0, maxDepartments);

    // Ensure both collaboration types are present for each department
    return sorted.map((dept) => ({
      ...dept,
      Internal: dept.Internal ?? 0,
      External: dept.External ?? 0,
    }));
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
          <div className="bg-muted h-96 w-full animate-pulse rounded" />
        </CardContent>
      </Card>
    );
  }

  if (!filteredData || filteredData.length === 0) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>
          <div className="flex h-96 w-full items-center justify-center">
            <p className="text-muted-foreground text-sm">
              No collaboration data available for the selected criteria
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={filteredData}
              margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="department"
                tick={{
                  fontSize: 10,
                  textAnchor: "end",
                }}
                height={80}
                axisLine={{ stroke: "hsl(var(--border))" }}
                interval={0}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                axisLine={{ stroke: "hsl(var(--border))" }}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(
                      value: string | number | (string | number)[] | undefined,
                    ) => {
                      let displayValue = "0";
                      if (
                        typeof value === "number" ||
                        typeof value === "string"
                      ) {
                        displayValue = String(value);
                      } else if (Array.isArray(value) && value.length > 0) {
                        displayValue = String(value[0]);
                      }
                      return [displayValue, "Papers"];
                    }}
                    labelFormatter={(label: string | number) =>
                      `Department: ${label}`
                    }
                  />
                }
              />
              <Legend
                wrapperStyle={{ paddingTop: "20px" }}
                formatter={(value: string | number) =>
                  chartConfig[String(value) as keyof typeof chartConfig]
                    ?.label || String(value)
                }
              />
              <Bar
                dataKey="Internal"
                stackId="collaboration"
                fill="var(--chart-1)"
                className="transition-all duration-200 hover:opacity-80"
              />
              <Bar
                dataKey="External"
                stackId="collaboration"
                fill="var(--chart-2)"
                className="transition-all duration-200 hover:opacity-80"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default CollaborationBreakdownChart;
