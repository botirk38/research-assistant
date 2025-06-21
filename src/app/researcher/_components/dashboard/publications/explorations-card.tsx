import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import type { Publication } from "@/types/researcher";
import { Compass } from "lucide-react";

const ExplorationCard: React.FC<{
  title: string;
  subtitle?: string;
  interests: Publication[];
}> = ({ title, subtitle, interests }) => (
  <Card className="transition-shadow hover:shadow-md">
    <CardHeader className="flex flex-row items-center justify-between">
      <div className="space-y-1">
        <CardTitle className="flex items-center gap-2">
          <Compass className="text-muted-foreground h-4 w-4" />
          {title}
        </CardTitle>
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      {interests.map((item, index) => (
        <div
          key={index}
          className="border-border hover:bg-accent rounded-lg border p-3"
        >
          <h3 className="text-card-foreground font-medium">{item.title}</h3>
          <p className="text-muted-foreground text-sm">{item.subtitle}</p>
        </div>
      ))}
    </CardContent>
  </Card>
);

export default ExplorationCard;
