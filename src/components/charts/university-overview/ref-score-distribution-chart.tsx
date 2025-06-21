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

interface REFScoreDistributionData {
  refScore: string;
  quantity: number;
  date?: string;
}

interface REFScoreDistributionChartProps {
  data: REFScoreDistributionData[];
  dateRange?: DateRange | undefined;
  schoolFilter?: string;
  title?: string;
  description?: string;
  className?: string;
  loading?: boolean;
}

const chartConfig = {
  quantity: {
    label: "Quantity of Publications",
    color: "var(--chart-1)",
  },
};

export function REFScoreDistributionChart({
  data,
  dateRange,
  schoolFilter,
  title = "University Wide Overview - REF (Quantity in Each REF Score)",
  description = "Distribution of research outputs across different REF scores",
  className,
  loading = false,
}: REFScoreDistributionChartProps) {
  const filteredData = useMemo(() => {
    let processedData = [...data];

    // Apply date range filter
    if (dateRange) {
      processedData = filterDataByDateRange(processedData, dateRange);
    }

    // Apply school filter (this would be implemented based on your data structure)
    if (schoolFilter && schoolFilter !== "All Schools") {
      // Note: You'll need to add school information to your data structure
      // processedData = processedData.filter(item => item.school === schoolFilter);
    }

    // Aggregate by REF score
    const aggregated = processedData.reduce((acc, item) => {
      const existing = acc.find((a) => a.refScore === item.refScore);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        acc.push({ refScore: item.refScore, quantity: item.quantity });
      }
      return acc;
    }, [] as REFScoreDistributionData[]);

    // Sort by REF score order (4*, 3*, 2*, 1*, Unclassified)
    const scoreOrder = ["4*", "3*", "2*", "1*", "Unclassified"];
    return aggregated.sort((a, b) => {
      const aIndex = scoreOrder.indexOf(a.refScore);
      const bIndex = scoreOrder.indexOf(b.refScore);
      return aIndex - bIndex;
    });
  }, [data, dateRange, schoolFilter]);

  if (loading) {
    return (
      <Card className={className}>
        <CardHeader className="pb-4">
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
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>
          <div className="flex h-64 w-full items-center justify-center">
            <p className="text-muted-foreground text-sm">
              No REF score data available for the selected criteria
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
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={filteredData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
              <XAxis
                dataKey="refScore"
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
                    labelFormatter={(label) => `REF Score: ${label}`}
                  />
                }
              />
              <Bar
                dataKey="quantity"
                fill="var(--chart-1)"
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

export default REFScoreDistributionChart;
