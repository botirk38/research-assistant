import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import type { ResearchIdea } from "@/types/researcher";


const ResearchIdeasCard: React.FC<{ ideas: ResearchIdea[] }> = ({ ideas }) => (
  <Card className="transition-shadow hover:shadow-md">
    <CardHeader>
      <CardTitle>Open Research Ideas</CardTitle>
      <CardDescription>
        Recommendations based on your research profile and interests
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-3">
      {ideas.map((idea, index) => (
        <div key={index} className="bg-accent rounded-lg p-3">
          <h3 className="text-card-foreground font-medium">{idea.title}</h3>
          <p className="text-muted-foreground text-sm">{idea.description}</p>
        </div>
      ))}
    </CardContent>
  </Card>
);

export default ResearchIdeasCard;
