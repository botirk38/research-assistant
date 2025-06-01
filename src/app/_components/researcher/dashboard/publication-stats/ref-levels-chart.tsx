"use client";

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Cell } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { allRefLevels } from "@/lib/data/publications";
import ChartCard from "@/components/chart-card";
import { filterDataByDateRange } from "@/utils/date-filter";
import type { DateRange } from "react-day-picker";

const chartConfig = {
  "1*": { label: "1*", color: "#8b5cf6" },
  "2*": { label: "2*", color: "#06b6d4" },
  "3*": { label: "3*", color: "#10b981" },
  "4*": { label: "4*", color: "#f59e0b" },
  U: { label: "Unclassified", color: "#6b7280" },
};
const getColorForLevel = (level: string) => {
  return (
    chartConfig[level as keyof typeof chartConfig]?.color ||
    "hsl(var(--chart-1))"
  );
};

export function REFLevelsChart({ dateRange }: { dateRange?: DateRange }) {
  const filteredData = filterDataByDateRange(allRefLevels, dateRange);
  return (
    <ChartCard
      title="REF Levels"
      description="Research Excellence Framework quality ratings for your publications for the selected time period"
    >
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

            <Bar dataKey="count" radius={[6, 6, 0, 0]}>
              {filteredData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getColorForLevel(entry.level)}
                />
              ))}
            </Bar>
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
