import React from "react";
import {
  UniversityOverviewChart,
  REFScoreDistributionChart,
  InterdisciplinaryBreakdownChart,
  COREankingChart,
  CollaborationBreakdownChart,
} from "@/components/charts/university-overview";
import type { DateRange } from "react-day-picker";

// Example prop interfaces for the section
export interface UniversityOverviewData {
  metric: string;
  current: number;
  previous: number;
  date?: string;
}

interface REFScoreDistributionData {
  refScore: string;
  quantity: number;
  date?: string;
}

interface InterdisciplinaryData {
  department: string;
  quantity: number;
  school?: string;
  date?: string;
}

interface CORERankings {
  coreRanking: string;
  quantity: number;
  school?: string;
  date?: string;
}

interface CollaborationData {
  department: string;
  collaborationType: "Internal" | "External";
  quantity: number;
  school?: string;
  date?: string;
}

interface UniversityOverviewSectionProps {
  overviewData?: UniversityOverviewData[];
  refScoreData?: REFScoreDistributionData[];
  interdisciplinaryData?: InterdisciplinaryData[];
  coreRankingData?: CORERankings[];
  collaborationData?: CollaborationData[];
  dateRange?: DateRange;
  schoolFilter?: string;
  loading?: boolean;
}

export function UniversityOverviewSection({
  overviewData = [],
  refScoreData = [],
  interdisciplinaryData = [],
  coreRankingData = [],
  collaborationData = [],
  dateRange,
  schoolFilter,
  loading = false,
}: UniversityOverviewSectionProps) {
  // Dynamic section header
  const sectionTitle =
    !schoolFilter || schoolFilter === "All Schools"
      ? "University Overview"
      : `${schoolFilter} Overview`;

  const sectionDescription =
    !schoolFilter || schoolFilter === "All Schools"
      ? "Key performance indicators and research activity across the university"
      : `Key performance indicators and research activity for ${schoolFilter}`;

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold">{sectionTitle}</h2>
        <p className="text-muted-foreground text-lg">{sectionDescription}</p>
      </div>
      <div className="space-y-8">
        {/* Main Overview Chart */}
        <UniversityOverviewChart
          data={overviewData}
          dateRange={dateRange}
          schoolFilter={schoolFilter}
          loading={loading}
        />

        {/* Additional Breakdown Charts */}
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
          <REFScoreDistributionChart
            data={refScoreData}
            dateRange={dateRange}
            schoolFilter={schoolFilter}
            loading={loading}
          />
          <InterdisciplinaryBreakdownChart
            data={interdisciplinaryData}
            dateRange={dateRange}
            schoolFilter={schoolFilter}
            loading={loading}
          />
        </div>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
          <COREankingChart
            data={coreRankingData}
            dateRange={dateRange}
            schoolFilter={schoolFilter}
            loading={loading}
          />
          <CollaborationBreakdownChart
            data={collaborationData}
            dateRange={dateRange}
            schoolFilter={schoolFilter}
            loading={loading}
          />
        </div>
      </div>
    </section>
  );
}

export default UniversityOverviewSection;
