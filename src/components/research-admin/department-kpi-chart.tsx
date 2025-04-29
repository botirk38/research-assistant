"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

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

export function DepartmentKPIChart() {
  return (
    <div>
      <div className="mb-4 flex flex-col space-y-1.5">
        <h3 className="leading-none font-semibold tracking-tight">
          Department KPI Tracking Chart
        </h3>
        <p className="text-muted-foreground text-sm">
          Performance metrics by department
        </p>
      </div>

      <div className="h-[400px]">
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
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" />
            <YAxis yAxisId="left" orientation="left" stroke="#10b981" />
            <YAxis yAxisId="right" orientation="right" stroke="#3b82f6" />
            <Tooltip />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="publications"
              name="Publications"
              fill="#10b981"
            />
            <Bar
              yAxisId="left"
              dataKey="citations"
              name="Citations"
              fill="#3b82f6"
            />
            <Bar
              yAxisId="right"
              dataKey="funding"
              name="Funding (£)"
              fill="#8b5cf6"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
