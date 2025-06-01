"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import ChartCard from "@/components/chart-card";
import { impactDimensions } from "@/lib/data/publications";

const chartConfig = {
  value: {
    label: "Impact",
    color: "#38bdf8", // 💡 Tailwind sky-400 (light blue)
  },
};

const ResearchImpactCard: React.FC = () => {
  const hasData = impactDimensions && impactDimensions.length > 0;

  return (
    <ChartCard
      title="Research Impact"
      description="Visualize the impact of your research across various dimensions for the selected time period"
    >
      <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
        {hasData ? (
          <RadarChart data={impactDimensions}>
            <PolarGrid stroke="#e5e7eb" /> {/* Tailwind gray-200 */}
            <PolarAngleAxis
              dataKey="category"
              tick={{ fontSize: 12, fill: "#6b7280" }} // gray-500
            />
            <PolarRadiusAxis
              angle={40}
              domain={[0, 100]}
              axisLine={{ stroke: "#e5e7eb" }}
              tick={{ fontSize: 10, fill: "#9ca3af" }} // gray-400
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Radar
              name="Impact"
              dataKey="value"
              stroke="#38bdf8"
              fill="#38bdf8"
              fillOpacity={0.6}
            />
          </RadarChart>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-muted-foreground">
              No research impact data available
            </p>
          </div>
        )}
      </ChartContainer>
    </ChartCard>
  );
};

export default ResearchImpactCard;
