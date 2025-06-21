import type { DateRange } from "react-day-picker";
import {
  PublicationsOverTimeChart,
  REFLevelsChart,
  CitedPapersChart,
} from "@/components/charts/publications";

interface PublicationsStatsProps {
  dateRange: DateRange | undefined;
}

const PublicationsStats: React.FC<PublicationsStatsProps> = ({ dateRange }) => {
  return (
    <div className="mb-8">
      <h1 className="text-foreground mb-6 text-2xl font-bold">
        My Publications
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <PublicationsOverTimeChart dateRange={dateRange} />
        <REFLevelsChart dateRange={dateRange} />
        <CitedPapersChart dateRange={dateRange} />
      </div>
    </div>
  );
};

export default PublicationsStats;
