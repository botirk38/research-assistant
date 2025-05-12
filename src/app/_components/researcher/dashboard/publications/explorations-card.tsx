import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import type { Publication } from "@/types/researcher";
import { Compass } from "lucide-react";

const ExplorationCard: React.FC<{
  title: string;
  subtitle?: string;
  interests: Publication[];
}> = ({ title, subtitle, interests }) => (
  <Card className="border-muted border-dashed transition-shadow hover:shadow-sm">
    <CardHeader className="flex flex-row items-center justify-between">
      <div>
        <CardTitle className="flex items-center gap-2 text-base">
          <Compass className="text-muted-foreground h-4 w-4" />
          {title}
        </CardTitle>
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
      </div>
    </CardHeader>
    <CardContent className="space-y-4 pt-2">
      {interests.map((item, index) => (
        <div key={index}>
          <h3 className="text-card-foreground font-medium">{item.title}</h3>
          <p className="text-muted-foreground text-sm">{item.subtitle}</p>
        </div>
      ))}
    </CardContent>
  </Card>
);

export default ExplorationCard;
