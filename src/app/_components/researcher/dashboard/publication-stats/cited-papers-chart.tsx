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

// Helper to generate HSL color strings
const getRandomHSLColor = () => {
  const hue = Math.floor(Math.random() * 360); // Full hue spectrum
  const saturation = 65 + Math.random() * 15; // 65–80%
  const lightness = 50 + Math.random() * 10; // 50–60%
  return `hsl(${hue}, ${saturation.toFixed(1)}%, ${lightness.toFixed(1)}%)`;
};

export const CitedPapersChart: React.FC<CitedPapersChartProps> = ({
  dateRange,
}) => {
  const filteredData = useMemo(() => {
    return filterDataByDateRange(allCitationSources, dateRange).slice(0, 2);
  }, [dateRange]);

  const chartConfig = useMemo(() => {
    const config: Record<string, { label: string; color: string }> = {};
    allCitationSources.forEach((item) => {
      config[item.name] = {
        label: item.name,
        color: getRandomHSLColor(),
      };
    });
    return config;
  }, []);

  return (
    <ChartCard title="Most Cited Papers">
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
