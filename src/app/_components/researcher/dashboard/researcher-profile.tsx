import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import ResearchImpactCard from "./research-impact-card";
import type { DateRange } from "react-day-picker";
import { useMemo } from "react";

// Mock data with dates to demonstrate filtering
const fullResearchAreas = [
  { label: "Machine Learning", value: 42, date: new Date("2023-01-15") },
  { label: "Data Visualization", value: 28, date: new Date("2023-03-22") },
  { label: "Natural Language Processing", value: 18, date: new Date("2023-06-10") },
  { label: "Computer Vision", value: 12, date: new Date("2023-09-05") },
];

const areaColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50"];

const ResearchProfileCard: React.FC<{ dateRange: DateRange | undefined }> = ({ dateRange }) => {
  // Filter data based on date range
  const filteredData = useMemo(() => {
    if (!dateRange || (!dateRange.from && !dateRange.to)) {
      return fullResearchAreas;
    }

    return fullResearchAreas.filter(item => {
      const itemDate = item.date;
      if (dateRange.from && dateRange.to) {
        return itemDate >= dateRange.from && itemDate <= dateRange.to;
      } else if (dateRange.from) {
        return itemDate >= dateRange.from;
      } else if (dateRange.to) {
        return itemDate <= dateRange.to;
      }
      return true;
    });
  }, [dateRange]);

  return (
    <Card className="animate-fade-in transition-shadow hover:shadow-md">
      <CardHeader>
        <CardTitle>My Research Profile</CardTitle>
        <CardDescription>Based on Publication Analysis</CardDescription>
      </CardHeader>
      <CardContent className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={filteredData}
            margin={{ top: 0, right: 0, left: 40, bottom: 0 }}
          >
            <XAxis type="number" />
            <YAxis type="category" dataKey="label" />
            <Tooltip />
            <Bar dataKey="value" barSize={20}>
              {filteredData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={areaColors[index % areaColors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

// ResearchProfileSection Component
const ResearchProfileSection: React.FC<{ dateRange: DateRange | undefined }> = ({ dateRange }) => (
  <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
    <ResearchProfileCard dateRange={dateRange} />
    <ResearchImpactCard />
  </div>
);

export default ResearchProfileSection;
