import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { impactDimensions } from "@/lib/data/publications";

const ResearchImpactCard: React.FC = () => (
  <Card className="animate-fade-in transition-shadow hover:shadow-md">
    <CardHeader>
      <CardTitle>Research Impact</CardTitle>
    </CardHeader>
    <CardContent className="h-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={impactDimensions}>
          <PolarGrid />
          <PolarAngleAxis dataKey="category" />
          <PolarRadiusAxis angle={40} domain={[0, 100]} />
          <Tooltip />
          <Radar
            name="Impact"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default ResearchImpactCard;
