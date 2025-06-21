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

interface DepartmentREFData {
  department: string;
  refScore: string;
  quantity: number;
  school?: string;
  date?: string;
}

interface DepartmentREFBreakdownChartProps {
  data: DepartmentREFData[];
  dateRange?: DateRange | undefined;
  schoolFilter?: string;
  title?: string;
  description?: string;
  className?: string;
  loading?: boolean;
  maxDepartments?: number;
}

const chartConfig = {
  "4*": {
    label: "4* - World Leading",
    color: "var(--chart-1)",
  },
  "3*": {
    label: "3* - Internationally Excellent",
    color: "var(--chart-2)",
  },
  "2*": {
    label: "2* - Internationally Recognised",
    color: "var(--chart-3)",
  },
  "1*": {
    label: "1* - Nationally Recognised",
    color: "var(--chart-4)",
  },
  Unclassified: {
    label: "Unclassified",
    color: "var(--chart-5)",
  },
};

export function DepartmentREFBreakdownChart({
  data,
  dateRange,
  schoolFilter,
  title = "Department-wise Breakdown (REF)",
  description = "Distribution of REF scores for publications by department",
  className,
  loading = false,
  maxDepartments = 15,
}: DepartmentREFBreakdownChartProps) {
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

    // Group by department and aggregate REF scores
    type DepartmentAgg = {
      department: string;
      [key: string]: string | number | undefined;
      total: number;
      school?: string;
    };
    const departmentData: DepartmentAgg[] = processedData.reduce(
      (acc: DepartmentAgg[], item) => {
        const existing = acc.find((d) => d.department === item.department);
        if (existing) {
          existing[item.refScore] =
            (typeof existing[item.refScore] === "number"
              ? (existing[item.refScore] as number)
              : 0) + item.quantity;
          existing.total += item.quantity;
        } else {
          acc.push({
            department: item.department,
            [item.refScore]: item.quantity,
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
      .sort((a, b) =>
        typeof b.total === "number" && typeof a.total === "number"
          ? b.total - a.total
          : 0,
      )
      .slice(0, maxDepartments);

    // Ensure all REF score categories are present for each department
    return sorted.map((dept) => ({
      ...dept,
      "4*": typeof dept["4*"] === "number" ? dept["4*"] : 0,
      "3*": typeof dept["3*"] === "number" ? dept["3*"] : 0,
      "2*": typeof dept["2*"] === "number" ? dept["2*"] : 0,
      "1*": typeof dept["1*"] === "number" ? dept["1*"] : 0,
      Unclassified:
        typeof dept.Unclassified === "number" ? dept.Unclassified : 0,
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
              No department REF data available for the selected criteria
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
                      name: string | number | undefined,
                    ): [string, string] => {
                      let displayValue = "0";
                      if (
                        typeof value === "number" ||
                        typeof value === "string"
                      ) {
                        displayValue = String(value);
                      } else if (Array.isArray(value) && value.length > 0) {
                        displayValue = String(value[0]);
                      }
                      const displayName = name ? String(name) : "";
                      return [
                        `${displayValue} publications`,
                        chartConfig[displayName as keyof typeof chartConfig]
                          ?.label || displayName,
                      ];
                    }}
                    labelFormatter={(label: string) => `Department: ${label}`}
                  />
                }
              />
              <Legend
                wrapperStyle={{ paddingTop: "20px" }}
                formatter={(value: string | number) =>
                  chartConfig[value as keyof typeof chartConfig]?.label ||
                  String(value)
                }
              />
              <Bar
                dataKey="4*"
                stackId="ref"
                fill="var(--chart-1)"
                className="transition-all duration-200 hover:opacity-80"
              />
              <Bar
                dataKey="3*"
                stackId="ref"
                fill="var(--chart-2)"
                className="transition-all duration-200 hover:opacity-80"
              />
              <Bar
                dataKey="2*"
                stackId="ref"
                fill="var(--chart-3)"
                className="transition-all duration-200 hover:opacity-80"
              />
              <Bar
                dataKey="1*"
                stackId="ref"
                fill="var(--chart-4)"
                className="transition-all duration-200 hover:opacity-80"
              />
              <Bar
                dataKey="Unclassified"
                stackId="ref"
                fill="var(--chart-5)"
                className="transition-all duration-200 hover:opacity-80"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default DepartmentREFBreakdownChart;
