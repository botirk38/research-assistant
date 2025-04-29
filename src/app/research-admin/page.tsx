"use client";

import { DatePickerWithRange } from "@/components/date-range-picker";
import { ResearchOverviewCards } from "@/components/research-admin/research-overview-cards";
import { ResearcherQualityChart } from "@/components/research-admin/researcher-quality-chart";
import { ComparisonTrends } from "@/components/research-admin/comparison-trends";
import { DepartmentKPIChart } from "@/components/research-admin/department-kpi-chart";

export default function ResearchDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col items-start justify-between md:flex-row md:items-center">
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            Research Admin/VP of Research
          </h1>
          <div className="mt-4 md:mt-0">
            <DatePickerWithRange />
          </div>
        </div>

        <ResearchOverviewCards />

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <ResearcherQualityChart />
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <ComparisonTrends />
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <DepartmentKPIChart />
        </div>
      </div>
    </div>
  );
}
