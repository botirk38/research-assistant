import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ChartCard from "@/components/chart-card";
import type { DateRange } from "react-day-picker";
import { allCitationSources, pieColors } from "@/lib/data/publications";
import { filterDataByDateRange } from "@/utils/date-filter";
import { useMemo } from "react";

interface CitedPapersChartProps {
  dateRange: DateRange | undefined;
}

export const CitedPapersChart: React.FC<CitedPapersChartProps> = ({
  dateRange,
}) => {
  const filteredData = useMemo(
    () => filterDataByDateRange(allCitationSources, dateRange).slice(0,3),
    [dateRange]
  );

  return (
    <ChartCard title="Most Cited Papers">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={filteredData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={60}
            label
          >
            {filteredData.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={pieColors[index % pieColors.length]}
              />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};
