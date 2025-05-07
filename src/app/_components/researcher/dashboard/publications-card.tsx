import { Settings } from "lucide-react";
import type { Publication } from "@/types/researcher";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PublicationItemProps {
  title: string;
  subtitle: string;
}

interface PublicationsCardProps {
  title: string;
  publications: Publication[];
}

const PublicationItem: React.FC<PublicationItemProps> = ({
  title,
  subtitle,
}) => (
  <div className="border-border hover:bg-accent rounded-lg border p-3 transition-normal">
    <h3 className="text-card-foreground font-medium">{title}</h3>
    <p className="text-muted-foreground text-sm">{subtitle}</p>
  </div>
);

const PublicationsCard: React.FC<PublicationsCardProps> = ({
  title,
  publications,
}) => (
  <Card className="animate-fade-in transition-shadow hover:shadow-md">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
      <div>
        <CardTitle>{title}</CardTitle>
      </div>
      <Button variant="outline" size="sm" className="rounded-full p-3">
        <Settings className="h-4 w-4" />
      </Button>
    </CardHeader>
    <CardContent className="space-y-4">
      {publications.map((pub, index) => (
        <PublicationItem
          key={index}
          title={pub.title}
          subtitle={pub.subtitle}
        />
      ))}
    </CardContent>
  </Card>
);

export default PublicationsCard;
