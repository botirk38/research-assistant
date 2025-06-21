import ContactInfo from "./contact-info";
import SocialLinks from "./social-links";
import DepartmentInfo from "./department-info";
import type { ResearcherData } from "@/types/researcher";

export default function ProfileSidebar({
  researcher,
}: {
  researcher: ResearcherData;
}) {
  return (
    <div className="space-y-6">
      <ContactInfo researcher={researcher} />
      <SocialLinks links={researcher.socialLinks} />
      <DepartmentInfo
        department={researcher.department}
        institution={researcher.institution}
      />
    </div>
  );
}
