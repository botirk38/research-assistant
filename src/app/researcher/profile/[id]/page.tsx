import { getResearcherData } from "@/lib/data/researcher-profile";
import ProfileHeader from "../../_components/profile/profile-header";
import StatCards from "../../_components/profile/stat-cards";
import ResearcherNotFound from "../../_components/profile/researcher-not-found";
import ProfileTabs from "../../_components/profile/profile-tabs";
import ProfileSidebar from "../../_components/profile/profile-sidebar";

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
        <ProfileHeader researcher={researcher} />
        <div className="px-4 pb-12">
          <StatCards stats={researcher.stats} />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ProfileTabs researcher={researcher} />
            </div>
            <ProfileSidebar researcher={researcher} />
          </div>
        </div>
      </div>
    </div>
  );
}
