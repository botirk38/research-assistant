"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import ChartCard from "@/components/chart-card";
import type { DateRange } from "react-day-picker";
import { allPublicationsOverTime } from "@/lib/data/publications";
import { filterDataByDateRange } from "@/utils/date-filter";
import { useMemo } from "react";

interface PublicationsOverTimeChartProps {
  dateRange: DateRange | undefined;
}

const chartConfig = {
  count: {
    label: "Publications",
    color: "hsl(var(--chart-3))", // 👈 theme-aware color
  },
};

export const PublicationsOverTimeChart: React.FC<
  PublicationsOverTimeChartProps
> = ({ dateRange }) => {
  const filteredData = useMemo(
    () => filterDataByDateRange(allPublicationsOverTime, dateRange),
    [dateRange],
  );

  return (
    <ChartCard title="Publications Over Time">
      <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
        {filteredData.length > 0 ? (
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.922 0 0)" />
            <XAxis
              dataKey="year"
              tick={{
                fontSize: 12,
                fill: "hsl(var(--color-muted-foreground))",
              }}
              axisLine={{ stroke: "oklch(0.922 0 0)" }}
              tickLine={false}
            />
            <YAxis
              tick={{
                fontSize: 12,
                fill: "hsl(var(--color-muted-foreground))",
              }}
              axisLine={{ stroke: "oklch(0.922 0 0)" }}
              tickLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="count"
              stroke="oklch(0.398 0.07 227.392)"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-muted-foreground">
              No publication data available for the selected time period
            </p>
          </div>
        )}
      </ChartContainer>
    </ChartCard>
  );
};
