import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ChartCard from "@/components/chart-card";
import type { DateRange } from "react-day-picker";
import { allPublicationsOverTime } from "@/lib/data/publications";
import { filterDataByDateRange } from "@/utils/date-filter";
import { useMemo } from "react";

interface PublicationsOverTimeChartProps {
  dateRange: DateRange | undefined;
}

export const PublicationsOverTimeChart: React.FC<PublicationsOverTimeChartProps> = ({
  dateRange,
}) => {
  const filteredData = useMemo(
    () => filterDataByDateRange(allPublicationsOverTime, dateRange),
    [dateRange]
  );

  return (
    <ChartCard title="Publications Over Time">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};
