import React from "react";
import {
  InterdisciplinaryBreakdownChart,
  DepartmentREFBreakdownChart,
  CollaborationBreakdownChart,
} from "@/components/charts";
import type { DateRange } from "react-day-picker";

interface InterdisciplinaryData {
  department: string;
  quantity: number;
  school: string;
}

interface DepartmentREFData {
  department: string;
  refScore: string;
  quantity: number;
  school: string;
}

interface CollaborationData {
  department: string;
  collaborationType: "Internal" | "External";
  quantity: number;
  school: string;
}

interface DepartmentPerformanceSectionProps {
  interdisciplinaryData: InterdisciplinaryData[];
  departmentREFData: DepartmentREFData[];
  collaborationData: CollaborationData[];
  dateRange: DateRange | undefined;
  schoolFilter: string;
}

export function DepartmentPerformanceSection({
  interdisciplinaryData,
  departmentREFData,
  collaborationData,
  dateRange,
  schoolFilter,
}: DepartmentPerformanceSectionProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold">Department Performance</h2>
        <p className="text-muted-foreground text-lg">
          Departmental research metrics and collaboration patterns
        </p>
      </div>
      <div className="space-y-8">
        <InterdisciplinaryBreakdownChart
          data={interdisciplinaryData}
          dateRange={dateRange}
          schoolFilter={schoolFilter}
          className="border-0 shadow-sm"
        />
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
          <DepartmentREFBreakdownChart
            data={departmentREFData}
            dateRange={dateRange}
            schoolFilter={schoolFilter}
            className="border-0 shadow-sm"
          />
          <CollaborationBreakdownChart
            data={collaborationData}
            dateRange={dateRange}
            schoolFilter={schoolFilter}
            className="border-0 shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
