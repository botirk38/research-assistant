import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import type { Publication } from "@/types/researcher";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const PublicationsCard: React.FC<{
  title: string;
  subtitle?: string;
  publications: Publication[];
}> = ({ title, subtitle, publications }) => (
  <Card className="transition-shadow hover:shadow-md">
    <CardHeader className="flex flex-row items-center justify-between">
      <div>
        <CardTitle>{title}</CardTitle>
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
      </div>
      <Button variant="outline" size="sm" className="rounded-full p-2">
        <Settings className="h-4 w-4" />
      </Button>
    </CardHeader>
    <CardContent className="space-y-4">
      {publications.map((item, index) => (
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

export default PublicationsCard;
