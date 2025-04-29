"use client";

import { DatePickerWithRange } from "@/components/date-range-picker";
import { ResearchOverviewCards } from "../_components/research-admin/research-overview-cards";
import { ResearcherQualityChart } from "../_components/research-admin/researcher-quality-chart";
import { ComparisonTrends } from "../_components/research-admin/comparison-trends";
import { DepartmentKPIChart } from "../_components/research-admin/department-kpi-chart";

export default function ResearchDashboard() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col items-start justify-between md:flex-row md:items-center">
          <h1 className="text-foreground text-2xl font-bold md:text-3xl">
            Research Admin/VP of Research
          </h1>
          <div className="mt-4 md:mt-0">
            <DatePickerWithRange />
          </div>
        </div>

        <ResearchOverviewCards />

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="border-border bg-card text-card-foreground rounded-xl border p-6 shadow-sm">
            <ResearcherQualityChart />
          </div>
          <div className="border-border bg-card text-card-foreground rounded-xl border p-6 shadow-sm">
            <ComparisonTrends />
          </div>
        </div>

        <div className="border-border bg-card text-card-foreground mt-8 rounded-xl border p-6 shadow-sm">
          <DepartmentKPIChart />
        </div>
      </div>
    </div>
  );
}
