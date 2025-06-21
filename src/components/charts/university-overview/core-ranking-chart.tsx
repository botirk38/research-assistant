"use client";

import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { DateRange } from "react-day-picker";
import { filterDataByDateRange, getChartColor } from "../utils";

interface CORERankings {
  coreRanking: string;
  quantity: number;
  school?: string;
  date?: string;
}

interface CORErankingChartProps {
  data: CORErankings[];
  dateRange?: DateRange | undefined;
  schoolFilter?: string;
  title?: string;
  description?: string;
  className?: string;
  loading?: boolean;
}

const chartConfig = {
  "A*": {
    label: "A* - Flagship",
    color: "var(--chart-1)",
  },
  A: {
    label: "A - Excellent",
    color: "var(--chart-2)",
  },
  B: {
    label: "B - Good",
    color: "var(--chart-3)",
  },
  C: {
    label: "C - Satisfactory",
    color: "var(--chart-4)",
  },
  Unranked: {
    label: "Unranked",
    color: "var(--chart-5)",
  },
};

export function COREankingChart({
  data,
  dateRange,
  schoolFilter,
  title = "Research Publications by Conference/Journal Rankings (CORE)",
  description = "Distribution of publications based on CORE ranking of venues",
  className,
  loading = false,
}: COREankingChartProps) {
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

    // Aggregate by CORE ranking
    const aggregated = processedData.reduce((acc, item) => {
      const existing = acc.find((a) => a.coreRanking === item.coreRanking);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        acc.push({
          coreRanking: item.coreRanking,
          quantity: item.quantity,
          school: item.school,
        });
      }
      return acc;
    }, [] as COREankings[]);

    // Sort by CORE ranking order (A*, A, B, C, Unranked)
    const rankingOrder = ["A*", "A", "B", "C", "Unranked"];
    return aggregated.sort((a, b) => {
      const aIndex = rankingOrder.indexOf(a.coreRanking);
      const bIndex = rankingOrder.indexOf(b.coreRanking);
      return aIndex - bIndex;
    });
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
          <div className="bg-muted h-80 w-full animate-pulse rounded" />
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
          <div className="flex h-80 w-full items-center justify-center">
            <p className="text-muted-foreground text-sm">
              No CORE ranking data available for the selected criteria
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={filteredData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
              <XAxis
                dataKey="coreRanking"
                tick={{ fontSize: 11 }}
                tickLine={false}
                axisLine={false}
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
                      `${value} publications`,
                      "Publications",
                    ]}
                    labelFormatter={(label) => `CORE Ranking: ${label}`}
                  />
                }
              />
              <Bar
                dataKey="quantity"
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

export default COREankingChart;
