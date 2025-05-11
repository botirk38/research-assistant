import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { DateRange } from "react-day-picker";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { useMemo } from "react";


// Sample data
const allPublicationsOverTime = [
  { year: "2023", count: 3, date: new Date(2023, 9, 1) },   // Oct 2023
  { year: "2024 Q1", count: 5, date: new Date(2024, 2, 1) }, // Mar 2024
  { year: "2024 Q2", count: 7, date: new Date(2024, 5, 1) }, // Jun 2024
  { year: "2024 Q3", count: 9, date: new Date(2024, 8, 1) }, // Sep 2024
  { year: "2024 Q4", count: 12, date: new Date(2024, 11, 1) }, // Dec 2024
  { year: "2025 Q1", count: 4, date: new Date(2025, 2, 1) }, // Mar 2025
];

const allCoreLevels = [
  { level: "A*", count: 2, date: new Date(2024, 10, 15) },  // Nov 2024
  { level: "A", count: 3, date: new Date(2024, 7, 22) },    // Aug 2024
  { level: "B", count: 4, date: new Date(2025, 0, 10) },    // Jan 2025
  { level: "C", count: 1, date: new Date(2024, 5, 18) },    // Jun 2024
];

// Updated citation sources to represent researcher's papers
const allCitationSources = [
  { name: "Advanced ML for Personalized Medicine", value: 920, date: new Date(2024, 9, 23) },    // Oct 2024
  { name: "Neural Networks in Edge Computing", value: 750, date: new Date(2024, 11, 15) },       // Dec 2024
  { name: "Quantum Data Mining Applications", value: 430, date: new Date(2024, 6, 5) },          // Jul 2024
  { name: "AI Ethics in Digital Governance", value: 580, date: new Date(2025, 1, 12) },          // Feb 2025
];


const pieColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50"];

// ChartCard wrapper
const ChartCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="h-64">{children}</CardContent>
  </Card>
);

// Main component with date filtering
interface PublicationsStatsProps {
  dateRange: DateRange | undefined;
}

const PublicationsStats: React.FC<PublicationsStatsProps> = ({ dateRange }) => {
  // Filter data based on date range
  const filteredPublicationsOverTime = useMemo(() => {
    if (!dateRange?.from) return allPublicationsOverTime;

    return allPublicationsOverTime.filter((item) => {
      const itemDate = item.date;
      if (dateRange.from && dateRange.to) {
        return itemDate >= dateRange.from && itemDate <= dateRange.to;
      }
        const from = dateRange.from ?? new Date();
        return itemDate >= from;
    });
  }, [dateRange]);

  const filteredCoreLevels = useMemo(() => {
    if (!dateRange?.from) return allCoreLevels;

    return allCoreLevels.filter((item) => {
      const itemDate = item.date;
      if (dateRange.from && dateRange.to) {
        return itemDate >= dateRange.from && itemDate <= dateRange.to;
      }
      const from = dateRange.from ?? new Date();

        return itemDate >= from;
    });
  }, [dateRange]);

  const filteredCitationSources = useMemo(() => {
    if (!dateRange?.from) return allCitationSources;

    return allCitationSources.filter((item) => {
      const itemDate = item.date;
      if (dateRange.from && dateRange.to) {
        return itemDate >= dateRange.from && itemDate <= dateRange.to;
      }

      const from = dateRange.from ?? new Date();

        return itemDate >= from;
    });
  }, [dateRange]);

  return (
    <div className="mb-8">
      <h1 className="text-foreground mb-6 text-2xl font-bold">My Publications</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ChartCard title="Publications Over Time">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={filteredPublicationsOverTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="CORE Reference Levels">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={filteredCoreLevels}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="level" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Most Cited Papers">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={filteredCitationSources}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={60}
                label
              >
                {filteredCitationSources.map((_entry, index) => (
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
      </div>
    </div>
  );
};

export default PublicationsStats;
