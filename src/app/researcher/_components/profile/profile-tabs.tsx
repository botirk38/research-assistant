import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewTabContent from "./overview-tab-content";
import PublicationsTabContent from "./publication-tab-content";
import ProjectsTabContent from "./projects-tab-content";
import EducationAwardsTabContent from "./education-awards-tab-content";
import type { ResearcherData } from "@/types/researcher";

export default function ProfileTabs({
  researcher,
}: {
  researcher: ResearcherData;
}) {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="mb-6">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="publications">Publications</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="education">Education & Awards</TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <OverviewTabContent researcher={researcher} />
      </TabsContent>
      <TabsContent value="publications">
        <PublicationsTabContent publications={researcher.publications} />
      </TabsContent>
      <TabsContent value="projects">
        <ProjectsTabContent projects={researcher.currentProjects} />
      </TabsContent>
      <TabsContent value="education">
        <EducationAwardsTabContent
          education={researcher.education}
          awards={researcher.awards}
        />
      </TabsContent>
    </Tabs>
  );
}
