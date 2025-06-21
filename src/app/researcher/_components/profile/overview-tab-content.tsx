import type { ResearcherData } from "@/types/researcher";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const OverviewTabContent = ({ researcher }: { researcher: ResearcherData }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Biography</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{researcher.bio}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Research Interests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {researcher.researchInterests.map((interest, index) => (
              <Badge key={index} variant="secondary">
                {interest}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5">
            {researcher.currentProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
export default OverviewTabContent;
