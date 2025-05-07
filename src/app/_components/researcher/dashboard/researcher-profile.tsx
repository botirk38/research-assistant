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

const researchAreas = [
  { label: "Machine Learning", value: 42 },
  { label: "Data Visualization", value: 28 },
  { label: "Natural Language Processing", value: 18 },
  { label: "Computer Vision", value: 12 },
];

const areaColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50"];

const ResearchProfileCard: React.FC = () => (
  <Card className="animate-fade-in transition-shadow hover:shadow-md">
    <CardHeader>
      <CardTitle>My Research Profile</CardTitle>
      <CardDescription>Based on Publication Analysis</CardDescription>
    </CardHeader>
    <CardContent className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={researchAreas}
          margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis type="number" />
          <YAxis type="category" dataKey="label" />
          <Tooltip />
          <Bar dataKey="value" barSize={20}>
            {researchAreas.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={areaColors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

// ResearchProfileSection Component
const ResearchProfileSection: React.FC = () => (
  <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
    <ResearchProfileCard />
    <ResearchImpactCard />
  </div>
);

export default ResearchProfileSection;
