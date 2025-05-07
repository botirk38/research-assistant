import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

// Sample data
const publicationsOverTime = [
  { year: "2019", count: 3 },
  { year: "2020", count: 5 },
  { year: "2021", count: 7 },
  { year: "2022", count: 9 },
  { year: "2023", count: 12 },
];

const coreLevels = [
  { level: "A*", count: 2 },
  { level: "A", count: 3 },
  { level: "B", count: 4 },
  { level: "C", count: 3 },
];

const citationSources = [
  { name: "Dr. Alice Smith", value: 840 },
  { name: "Prof. John Doe", value: 620 },
  { name: "Dr. Emily Zhang", value: 430 },
  { name: "You (Self-Citations)", value: 310 },
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

// Main component
const PublicationsStats: React.FC = () => (
  <div className="mb-8">
    <h1 className="text-foreground mb-6 text-2xl font-bold">My Publications</h1>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <ChartCard title="Publications Over Time">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={publicationsOverTime}>
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
          <BarChart data={coreLevels}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="level" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Citation Sources">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={citationSources}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              label
            >
              {citationSources.map((_entry, index) => (
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

export default PublicationsStats;
