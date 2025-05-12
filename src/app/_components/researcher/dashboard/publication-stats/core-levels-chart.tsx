import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ChartCard from "@/components/chart-card";
import type { DateRange } from "react-day-picker";
import { allCoreLevels } from "@/lib/data/publications";
import { filterDataByDateRange } from "@/utils/date-filter";
import { useMemo } from "react";

interface CoreLevelsChartProps {
  dateRange: DateRange | undefined;
}

export const CoreLevelsChart: React.FC<CoreLevelsChartProps> = ({
  dateRange,
}) => {
  const filteredData = useMemo(
    () => filterDataByDateRange(allCoreLevels, dateRange),
    [dateRange]
  );

  return (
    <ChartCard title="CORE Reference Levels">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="level" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};
