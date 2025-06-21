import React from "react";
import {
  REFScoreDistributionChart,
  COREankingChart,
  ResearcherQualityChart,
} from "@/components/charts";

// Accept mock data as props for flexibility and testability
interface ResearchQualitySectionProps {
  refScoreData: Array<{ refScore: string; quantity: number }>;
  coreRankingData: Array<{ coreRanking: string; quantity: number }>;
}

export const ResearchQualitySection: React.FC<ResearchQualitySectionProps> = ({
  refScoreData,
  coreRankingData,
}) => (
  <section className="space-y-6">
    <div className="space-y-2">
      <h2 className="text-3xl font-semibold">Research Quality & Rankings</h2>
      <p className="text-muted-foreground text-lg">
        Publication quality metrics and conference/journal rankings
      </p>
    </div>
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <REFScoreDistributionChart data={refScoreData} />
      <COREankingChart data={coreRankingData} />
      <ResearcherQualityChart />
    </div>
  </section>
);

export default ResearchQualitySection;
