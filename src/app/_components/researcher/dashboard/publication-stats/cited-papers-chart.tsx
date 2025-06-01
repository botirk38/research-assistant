"use client";

import { PieChart, Pie, Cell } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import ChartCard from "@/components/chart-card";
import type { DateRange } from "react-day-picker";
import { allCitationSources } from "@/lib/data/publications";
import { filterDataByDateRange } from "@/utils/date-filter";
import { useMemo } from "react";

interface CitedPapersChartProps {
  dateRange: DateRange | undefined;
}

// Fixed colors for consistent visualization
const fixedColors = [
  "#8b5cf6", // purple
  "#06b6d4", // cyan
  "#10b981", // green
  "#f59e0b", // amber
  "#ef4444", // red
  "#8b5cf6", // purple (repeat)
  "#06b6d4", // cyan (repeat)
  "#10b981", // green (repeat)
  "#f59e0b", // amber (repeat)
  "#ef4444", // red (repeat)
  "#6366f1", // indigo
  "#ec4899", // pink
];

function getRandomHSLColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
}

export const CitedPapersChart: React.FC<CitedPapersChartProps> = ({
  dateRange,
}) => {
  const filteredData = useMemo(() => {
    return filterDataByDateRange(allCitationSources, dateRange).slice(0, 2);
  }, [dateRange]);

  const chartConfig = useMemo(() => {
    const config: Record<string, { label: string; color: string }> = {};
    allCitationSources.forEach((item, index) => {
      config[item.name] = {
        label: item.name,
        color: fixedColors[index % fixedColors.length] ?? getRandomHSLColor(),
      };
    });
    return config;
  }, []);

  return (
    <ChartCard
      title="Most Cited Papers"
      description="Distribution of your most highly cited research papers over the selected time period"
    >
      <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
        {filteredData.length > 0 ? (
          <PieChart>
            <Pie
              data={filteredData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
              isAnimationActive
            >
              {filteredData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={chartConfig[entry.name]?.color ?? getRandomHSLColor()}
                  className="origin-center transition-transform duration-200 hover:scale-105"
                />
              ))}
            </Pie>
            <ChartLegend content={<ChartLegendContent />} />
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-muted-foreground">
              No citation data available for the selected time period
            </p>
          </div>
        )}
      </ChartContainer>
    </ChartCard>
  );
};
