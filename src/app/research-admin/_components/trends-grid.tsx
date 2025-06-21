import { TrendsCard } from "./trends-card";

export function TrendsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      <TrendsCard
        metric="publications"
        title="Publications Trend"
        description="Track publications over the selected period"
      />
      <TrendsCard
        metric="ref"
        title="REF Scores Trend"
        description="Track REF scores over the selected period"
      />
      <TrendsCard
        metric="interdisciplinary"
        title="Interdisciplinary Trend"
        description="Track interdisciplinary research over time"
      />
      <TrendsCard
        metric="collaborations"
        title="Collaborations Trend"
        description="Track collaborations over time"
      />
    </div>
  );
}

export default TrendsGrid;
