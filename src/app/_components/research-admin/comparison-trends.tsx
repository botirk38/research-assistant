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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data = [
  { month: "Jan", publications: 65, ref: 40, interdisciplinary: 24 },
  { month: "Feb", publications: 59, ref: 38, interdisciplinary: 22 },
  { month: "Mar", publications: 80, ref: 45, interdisciplinary: 35 },
  { month: "Apr", publications: 81, ref: 50, interdisciplinary: 31 },
  { month: "May", publications: 56, ref: 39, interdisciplinary: 17 },
  { month: "Jun", publications: 55, ref: 37, interdisciplinary: 18 },
  { month: "Jul", publications: 40, ref: 30, interdisciplinary: 10 },
];

export function ComparisonTrends() {
  return (
    <div>
      <div className="mb-4 flex flex-col space-y-1.5">
        <h3 className="text-foreground leading-none font-semibold tracking-tight">
          Comparison Trends
        </h3>
        <p className="text-muted-foreground text-sm">Time Range Analysis</p>
      </div>

      <Tabs defaultValue="overall">
        <TabsList className="mb-4 grid grid-cols-3">
          <TabsTrigger value="overall">Overall Publications</TabsTrigger>
          <TabsTrigger value="ref">REF (University)</TabsTrigger>
          <TabsTrigger value="interdisciplinary">Interdisciplinary</TabsTrigger>
        </TabsList>

        <TabsContent value="overall" className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="publications"
                stroke="var(--chart-1)"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="ref" className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="ref"
                stroke="var(--chart-2)"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="interdisciplinary" className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="interdisciplinary"
                stroke="var(--chart-3)"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </TabsContent>
      </Tabs>
    </div>
  );
}
