"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jan",
    publications: 65,
    ref: 40,
    interdisciplinary: 24,
    collaborations: 30,
  },
  {
    month: "Feb",
    publications: 59,
    ref: 38,
    interdisciplinary: 22,
    collaborations: 28,
  },
  {
    month: "Mar",
    publications: 80,
    ref: 45,
    interdisciplinary: 35,
    collaborations: 40,
  },
  {
    month: "Apr",
    publications: 81,
    ref: 50,
    interdisciplinary: 31,
    collaborations: 38,
  },
  {
    month: "May",
    publications: 56,
    ref: 39,
    interdisciplinary: 17,
    collaborations: 25,
  },
  {
    month: "Jun",
    publications: 55,
    ref: 37,
    interdisciplinary: 18,
    collaborations: 22,
  },
  {
    month: "Jul",
    publications: 40,
    ref: 30,
    interdisciplinary: 10,
    collaborations: 15,
  },
];

const metricConfig = {
  publications: { label: "Publications", color: "var(--chart-1)" },
  ref: { label: "REF Scores", color: "var(--chart-2)" },
  interdisciplinary: { label: "Interdisciplinary", color: "var(--chart-3)" },
  collaborations: { label: "Collaborations", color: "var(--chart-4)" },
};

interface ComparisonTrendsProps {
  metric: keyof typeof metricConfig;
}

export function ComparisonTrends({ metric }: ComparisonTrendsProps) {
  const config = metricConfig[metric];
  return (
    <div>
      <div className="mb-4 flex flex-col space-y-1.5">
        <h3 className="text-foreground leading-none font-semibold tracking-tight">
          {config.label} Trend
        </h3>
        <p className="text-muted-foreground text-sm">Time Range Analysis</p>
      </div>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey={metric}
              stroke={config.color}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ComparisonTrends;
