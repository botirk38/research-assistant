import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsTabContent = ({ projects }: { projects: string[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Research Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
              <h3 className="text-lg font-semibold">{project}</h3>
              <p className="text-muted-foreground mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsTabContent;
