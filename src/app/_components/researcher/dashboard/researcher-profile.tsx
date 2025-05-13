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
import { filterDataByDateRange } from "@/utils/date-filter";
import { fullResearchAreas, areaColors } from "@/lib/data/publications";

const ResearchProfileCard: React.FC<{ dateRange: DateRange | undefined }> = ({
  dateRange,
}) => {
  const filteredData = filterDataByDateRange(fullResearchAreas, dateRange);

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
                <Cell
                  key={`cell-${index}`}
                  fill={areaColors[index % areaColors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

// ResearchProfileSection Component
const ResearchProfileSection: React.FC<{
  dateRange: DateRange | undefined;
}> = ({ dateRange }) => (
  <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
    <ResearchProfileCard dateRange={dateRange} />
    <ResearchImpactCard />
  </div>
);

export default ResearchProfileSection;
