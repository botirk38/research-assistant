"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { quartile: "Q1", percentage: 42 },
  { quartile: "Q2", percentage: 28 },
  { quartile: "Q3", percentage: 18 },
  { quartile: "Q4", percentage: 12 },
];

export function ResearcherQualityChart() {
  return (
    <div>
      <div className="flex flex-col space-y-1.5">
        <h3 className="text-foreground leading-none font-semibold tracking-tight">
          Researcher Quality Outputs
        </h3>
        <p className="text-muted-foreground text-sm">
          % of Eligible Researchers in High Quality Outputs
        </p>
      </div>
      <div className="mt-4 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
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
            <Tooltip
              formatter={(value) => [`${Number(value)}%`, "Percentage"]}
              labelFormatter={(label) => `Quartile ${label}`}
            />
            <Bar dataKey="percentage" fill="var(--chart-1)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="text-muted-foreground mt-2 text-sm">
        <p>How Many Publications in Each Quartile</p>
      </div>
    </div>
  );
}
