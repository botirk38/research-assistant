import ResearchImpactCard from "./researcher-profile/research-impact-card";
import ResearchProfileCard from "./researcher-profile/research-profile-card";
import type { DateRange } from "react-day-picker";

const ResearchProfileSection: React.FC<{
  dateRange: DateRange | undefined;
}> = ({ dateRange }) => (
  <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
    <ResearchProfileCard dateRange={dateRange} />
    <ResearchImpactCard />
  </div>
);

export default ResearchProfileSection;
