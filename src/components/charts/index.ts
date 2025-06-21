// Main chart components index - organized by domain
// This provides a centralized export for all reusable chart components

// Publications domain
export * from "./publications";

// Research metrics domain
export * from "./research-metrics";

// Department analytics domain
export * from "./department-analytics";

// University overview domain
export * from "./university-overview";

// Shared utilities
export * from "./utils";

// Convenience re-exports for commonly used charts
export { CitedPapersChart } from "./publications/cited-papers-chart";
export { PublicationsOverTimeChart } from "./publications/publications-over-time-chart";
export { REFLevelsChart } from "./publications/ref-levels-chart";
export { DepartmentKPIChart } from "./department-analytics/department-kpi-chart";
export { ResearcherQualityChart } from "./research-metrics/researcher-quality-chart";
export { ComparisonTrends } from "./research-metrics/comparison-trends";
