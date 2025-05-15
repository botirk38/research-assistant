import ResearchImpactCard from "./research-impact-card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import ChartCard from "@/components/chart-card";
import { filterDataByDateRange } from "@/utils/date-filter";
import type { DateRange } from "react-day-picker";
import { fullResearchAreas } from "@/lib/data/publications";

const chartConfig = {
  value: {
    label: "Impact",
    color: "oklch(0.828 0.189 84.429)",
  },
};

// Helper to generate HSL color strings
const getRandomHSLColor = () => {
  const hue = Math.floor(Math.random() * 360); // Full hue spectrum
  const saturation = 65 + Math.random() * 15; // 65–80%
  const lightness = 50 + Math.random() * 10; // 50–60%
  return `hsl(${hue}, ${saturation.toFixed(1)}%, ${lightness.toFixed(1)}%)`;
};

const ResearchProfileCard: React.FC<{ dateRange: DateRange | undefined }> = ({
  dateRange,
}) => {
  const filteredData = filterDataByDateRange(fullResearchAreas, dateRange);

  return (
    <ChartCard title="Research Areas">
      <ChartContainer config={chartConfig} className="min-h-[256px] w-full">
        {filteredData.length > 0 ? (
          <BarChart
            layout="vertical"
            data={filteredData}
            margin={{ top: 0, right: 0, left: 40, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.922 0 0)" />
            <XAxis
              type="number"
              tick={{ fontSize: 12, fill: "" }}
              axisLine={{ stroke: "oklch(0.922 0 0)" }}
              tickLine={false}
            />
            <YAxis
              type="category"
              dataKey="label"
              tick={{
                fontSize: 12,
                fill: "hsl(var(--color-muted-foreground))",
              }}
              axisLine={{ stroke: "oklch(0.922 0 0)" }}
              tickLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="value" barSize={20} radius={[6, 6, 6, 6]}>
              {filteredData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={getRandomHSLColor()} />
              ))}
            </Bar>
          </BarChart>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-muted-foreground">
              No research areas data available for the selected time period
            </p>
          </div>
        )}
      </ChartContainer>
    </ChartCard>
  );
};

// ResearchProfileSection Component
const ResearchProfileSection: React.FC<{
  dateRange: DateRange | undefined;
}> = ({ dateRange }) => (
  <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
    <ResearchProfileCard dateRange={dateRange} />
    <ResearchImpactCard />
  </div>
);

export default ResearchProfileSection;
