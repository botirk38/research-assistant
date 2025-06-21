import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ComparisonTrends } from "@/components/charts";

interface TrendsCardProps {
  metric: "ref" | "publications" | "interdisciplinary" | "collaborations";
  title: string;
  description: string;
}

export function TrendsCard({ metric, title, description }: TrendsCardProps) {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ComparisonTrends metric={metric} />
      </CardContent>
    </Card>
  );
}

export default TrendsCard;
