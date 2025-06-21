"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { quartile: "Q1", percentage: 42 },
  { quartile: "Q2", percentage: 28 },
  { quartile: "Q3", percentage: 18 },
  { quartile: "Q4", percentage: 12 },
];

const chartConfig = {
  percentage: {
    label: "Percentage",
    color: "var(--chart-1)",
  },
};

export function ResearcherQualityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground leading-none font-semibold tracking-tight">
          Researcher Quality Outputs
        </CardTitle>
        <CardDescription>
          % of Eligible Researchers in High Quality Outputs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mt-2 h-[300px]">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quartile" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="percentage" fill="var(--color-percentage)" />
            </BarChart>
          </ChartContainer>
        </div>
        <div className="text-muted-foreground mt-2 text-sm">
          <p>How Many Publications in Each Quartile</p>
        </div>
      </CardContent>
    </Card>
  );
}
