"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

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

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function ComparisonTrends({ metric }: ComparisonTrendsProps) {
  const config = metricConfig[metric];
  return (
    <Card className="flex h-full flex-col shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {config.label} Trend
        </CardTitle>
        <CardDescription>Time Range Analysis</CardDescription>
      </CardHeader>
      <CardContent className="h-full flex-1">
        <ChartContainer config={metricConfig} className="h-full w-full">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey={metric}
              stroke={`var(--color-${metric})`}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default ComparisonTrends;
