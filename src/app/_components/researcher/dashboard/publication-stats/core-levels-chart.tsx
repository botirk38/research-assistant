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

const chartConfig = {
  mobile: { label: "Mobile", color: "var(--chart-1)" },
  desktop: { label: "Desktop", color: "var(--chart-2)" },
};

export function CoreLevelsChart() {
  return (
    <ChartCard title="Core Levels">
      <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
        <BarChart data={allCoreLevels}>
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
      </ChartContainer>
    </ChartCard>
  );
}
