import React, { useMemo, useState } from "react";
import {
  InterdisciplinaryBreakdownChart,
  DepartmentREFBreakdownChart,
  CollaborationBreakdownChart,
} from "@/components/charts";
import { DepartmentSelect } from "@/components/filters/DepartmentSelect";
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
  // Generate department options based on all data for the selected school
  const departmentOptions = useMemo(() => {
    const allDepartments = [
      ...interdisciplinaryData,
      ...departmentREFData,
      ...collaborationData,
    ]
      .filter((item) => item.school === schoolFilter)
      .map((item) => item.department);

    const uniqueDepartments = Array.from(new Set(allDepartments));
    uniqueDepartments.sort();
    return ["All Departments", ...uniqueDepartments];
  }, [
    interdisciplinaryData,
    departmentREFData,
    collaborationData,
    schoolFilter,
  ]);

  const [selectedDepartment, setSelectedDepartment] =
    useState<string>("All Departments");

  // Filter data by department if a specific department is selected
  const filterByDepartment = <T extends { department: string }>(data: T[]) =>
    selectedDepartment === "All Departments"
      ? data
      : data.filter((item) => item.department === selectedDepartment);

  const filteredInterdisciplinaryData = filterByDepartment(
    interdisciplinaryData,
  );
  const filteredDepartmentREFData = filterByDepartment(departmentREFData);
  const filteredCollaborationData = filterByDepartment(collaborationData);

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold">Department Performance</h2>
        <p className="text-muted-foreground text-lg">
          Departmental research metrics and collaboration patterns
        </p>
      </div>
      {/* Department filter only shown if a specific school is selected */}
      {schoolFilter !== "All Schools" && (
        <div className="max-w-xs">
          <DepartmentSelect
            departments={departmentOptions}
            selectedDepartment={selectedDepartment}
            onDepartmentChange={setSelectedDepartment}
          />
        </div>
      )}
      <div className="space-y-8">
        <InterdisciplinaryBreakdownChart
          data={filteredInterdisciplinaryData}
          dateRange={dateRange}
          schoolFilter={schoolFilter}
          departmentFilter={selectedDepartment}
          className="border-0 shadow-sm"
        />
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
          <DepartmentREFBreakdownChart
            data={filteredDepartmentREFData}
            dateRange={dateRange}
            schoolFilter={schoolFilter}
            departmentFilter={selectedDepartment}
            className="border-0 shadow-sm"
          />
          <CollaborationBreakdownChart
            data={filteredCollaborationData}
            dateRange={dateRange}
            departmentFilter={selectedDepartment}
            schoolFilter={schoolFilter}
            className="border-0 shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
