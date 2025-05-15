"use client";

import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { allCoreLevels } from "@/lib/data/publications";
import ChartCard from "@/components/chart-card";
import { filterDataByDateRange } from "@/utils/date-filter";
import type { DateRange } from "react-day-picker";

const chartConfig = {
  mobile: { label: "Mobile", color: "var(--chart-1)" },
  desktop: { label: "Desktop", color: "var(--chart-2)" },
};

export function CoreLevelsChart({ dateRange }: { dateRange?: DateRange }) {
  const filteredData = filterDataByDateRange(allCoreLevels, dateRange);
  return (
    <ChartCard title="Core Levels">
      <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
        {filteredData.length > 0 ? (
          <BarChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="level"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tick={{ fontSize: 12 }}
            />
            <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="count"
              radius={[6, 6, 0, 0]}
              fill="oklch(0.6 0.118 184.704)"
            />
          </BarChart>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-muted-foreground">
              No core levels data available for the selected time period
            </p>
          </div>
        )}
      </ChartContainer>
    </ChartCard>
  );
}
