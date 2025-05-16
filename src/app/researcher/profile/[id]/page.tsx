import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getResearcherData } from "@/lib/data/researcher-profile";
import ProfileHeader from "@/app/_components/researcher/profile/profile-header";
import StatCards from "@/app/_components/researcher/profile/stat-cards";
import OverviewTabContent from "@/app/_components/researcher/profile/overview-tab-content";
import PublicationsTabContent from "@/app/_components/researcher/profile/publication-tab-content";
import ProjectsTabContent from "@/app/_components/researcher/profile/projects-tab-content";
import EducationAwardsTabContent from "@/app/_components/researcher/profile/education-awards-tab-content";
import ContactInfo from "@/app/_components/researcher/profile/contact-info";
import SocialLinks from "@/app/_components/researcher/profile/social-links";
import DepartmentInfo from "@/app/_components/researcher/profile/department-info";
import ResearcherNotFound from "@/app/_components/researcher/profile/researcher-not-found";

export default async function ResearcherProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const researcher = getResearcherData(id);

  if (!researcher) {
    return <ResearcherNotFound />;
  }

  return (
    <div className="flex items-center justify-center">
      <div className="container">
        {/* Header with cover image and profile info */}
        <ProfileHeader researcher={researcher} />

        <div className="px-4 pb-12">
          {/* Stats cards */}
          <StatCards stats={researcher.stats} />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="publications">Publications</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="education">
                    Education & Awards
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <OverviewTabContent researcher={researcher} />
                </TabsContent>

                <TabsContent value="publications">
                  <PublicationsTabContent
                    publications={researcher.publications}
                  />
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
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ContactInfo researcher={researcher} />
              <SocialLinks links={researcher.socialLinks} />
              <DepartmentInfo
                department={researcher.department}
                institution={researcher.institution}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
