"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
} from "@/components/ui/chart";

const data = [
  {
    department: "Computer Science",
    publications: 120,
    citations: 840,
    funding: 1200000,
  },
  {
    department: "Engineering",
    publications: 98,
    citations: 620,
    funding: 980000,
  },
  { department: "Physics", publications: 86, citations: 750, funding: 1050000 },
  {
    department: "Chemistry",
    publications: 99,
    citations: 680,
    funding: 890000,
  },
  { department: "Biology", publications: 85, citations: 590, funding: 760000 },
  {
    department: "Mathematics",
    publications: 65,
    citations: 420,
    funding: 540000,
  },
];

const chartConfig = {
  publications: {
    label: "Publications",
    color: "hsl(var(--chart-1))",
  },
  citations: {
    label: "Citations",
    color: "hsl(var(--chart-2))",
  },
  funding: {
    label: "Funding (£)",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function DepartmentKPIChart() {
  return (
    <div>
      <div className="mb-4 flex flex-col space-y-1.5">
        <h3 className="text-foreground leading-none font-semibold tracking-tight">
          Department KPI Tracking Chart
        </h3>
        <p className="text-muted-foreground text-sm">
          Performance metrics by department
        </p>
      </div>

      <ChartContainer config={chartConfig} className="min-h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="department"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              stroke="hsl(var(--chart-1))"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="hsl(var(--chart-3))"
              tickFormatter={(value) => `£${value / 1000000}M`}
              tickLine={false}
              axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegend />} />

            <Bar
              yAxisId="left"
              dataKey="publications"
              fill="var(--color-publications)"
              radius={4}
            />
            <Bar
              yAxisId="left"
              dataKey="citations"
              fill="var(--color-citations)"
              radius={4}
            />
            <Bar
              yAxisId="right"
              dataKey="funding"
              fill="var(--color-funding)"
              radius={4}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
