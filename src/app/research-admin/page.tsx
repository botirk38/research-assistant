"use client";

import React, { useState, useMemo } from "react";
import type { DateRange } from "react-day-picker";
import type { UniversityOverviewData } from "./_dashboard-sections/university-overview-section";

import { DashboardHeader } from "./_components/dashboard-header";
import { DashboardFilters } from "./_components/dashboard-filters";

// Section components
import { UniversityOverviewSection } from "./_dashboard-sections/university-overview-section";
import ResearchQualitySection from "./_dashboard-sections/research-quality-section";
import { DepartmentPerformanceSection } from "./_dashboard-sections/department-performance-section";
import { TrendsAnalyticsSection } from "./_dashboard-sections/trends-analytics-section";

import {
  School,
  Laptop,
  Hammer,
  FlaskConical,
  Stethoscope,
  Briefcase,
} from "lucide-react";

const mockSchools = [
  { label: "All Schools", value: "All Schools", icon: School },
  {
    label: "School of Computer Science",
    value: "School of Computer Science",
    icon: Laptop,
  },
  {
    label: "School of Engineering",
    value: "School of Engineering",
    icon: Hammer,
  },
  {
    label: "School of Natural Sciences",
    value: "School of Natural Sciences",
    icon: FlaskConical,
  },
  {
    label: "School of Medicine",
    value: "School of Medicine",
    icon: Stethoscope,
  },
  {
    label: "School of Business",
    value: "School of Business",
    icon: Briefcase,
  },
];

const mockREFData = [
  { refScore: "4*", quantity: 125 },
  { refScore: "3*", quantity: 340 },
  { refScore: "2*", quantity: 485 },
  { refScore: "1*", quantity: 220 },
  { refScore: "Unclassified", quantity: 80 },
];

const mockCOREData = [
  { coreRanking: "A*", quantity: 85 },
  { coreRanking: "A", quantity: 220 },
  { coreRanking: "B", quantity: 380 },
  { coreRanking: "C", quantity: 290 },
  { coreRanking: "Unranked", quantity: 275 },
];

const mockInterdisciplinaryData = [
  {
    department: "Computer Science",
    quantity: 45,
    school: "School of Computer Science",
  },
  { department: "Engineering", quantity: 38, school: "School of Engineering" },
  { department: "Physics", quantity: 32, school: "School of Natural Sciences" },
  {
    department: "Chemistry",
    quantity: 28,
    school: "School of Natural Sciences",
  },
  { department: "Biology", quantity: 25, school: "School of Natural Sciences" },
  {
    department: "Mathematics",
    quantity: 22,
    school: "School of Natural Sciences",
  },
];

const mockDepartmentREFData = [
  {
    department: "Computer Science",
    refScore: "4*",
    quantity: 25,
    school: "School of Computer Science",
  },
  {
    department: "Computer Science",
    refScore: "3*",
    quantity: 45,
    school: "School of Computer Science",
  },
  {
    department: "Computer Science",
    refScore: "2*",
    quantity: 35,
    school: "School of Computer Science",
  },
  {
    department: "Engineering",
    refScore: "4*",
    quantity: 20,
    school: "School of Engineering",
  },
  {
    department: "Engineering",
    refScore: "3*",
    quantity: 55,
    school: "School of Engineering",
  },
  {
    department: "Engineering",
    refScore: "2*",
    quantity: 40,
    school: "School of Engineering",
  },
  {
    department: "Physics",
    refScore: "4*",
    quantity: 30,
    school: "School of Natural Sciences",
  },
  {
    department: "Physics",
    refScore: "3*",
    quantity: 40,
    school: "School of Natural Sciences",
  },
  {
    department: "Physics",
    refScore: "2*",
    quantity: 25,
    school: "School of Natural Sciences",
  },
];

const mockCollaborationData = [
  {
    department: "Computer Science",
    collaborationType: "Internal" as const,
    quantity: 65,
    school: "School of Computer Science",
  },
  {
    department: "Computer Science",
    collaborationType: "External" as const,
    quantity: 40,
    school: "School of Computer Science",
  },
  {
    department: "Engineering",
    collaborationType: "Internal" as const,
    quantity: 58,
    school: "School of Engineering",
  },
  {
    department: "Engineering",
    collaborationType: "External" as const,
    quantity: 57,
    school: "School of Engineering",
  },
  {
    department: "Physics",
    collaborationType: "Internal" as const,
    quantity: 45,
    school: "School of Natural Sciences",
  },
  {
    department: "Physics",
    collaborationType: "External" as const,
    quantity: 50,
    school: "School of Natural Sciences",
  },
];

const mockOverviewData = [
  {
    metric: "Publications",
    current: 520,
    previous: 480,
    school: "All Schools",
  },
  { metric: "Citations", current: 3200, previous: 2950, school: "All Schools" },
  {
    metric: "REF 4* Outputs",
    current: 125,
    previous: 110,
    school: "All Schools",
  },
  {
    metric: "Collaborations",
    current: 210,
    previous: 180,
    school: "All Schools",
  },
  {
    metric: "Publications",
    current: 120,
    previous: 100,
    school: "School of Computer Science",
  },
  {
    metric: "Citations",
    current: 800,
    previous: 700,
    school: "School of Computer Science",
  },
  {
    metric: "REF 4* Outputs",
    current: 40,
    previous: 35,
    school: "School of Computer Science",
  },
  {
    metric: "Collaborations",
    current: 60,
    previous: 50,
    school: "School of Computer Science",
  },
  {
    metric: "Publications",
    current: 90,
    previous: 85,
    school: "School of Engineering",
  },
  {
    metric: "Citations",
    current: 600,
    previous: 550,
    school: "School of Engineering",
  },
  {
    metric: "REF 4* Outputs",
    current: 30,
    previous: 28,
    school: "School of Engineering",
  },
  {
    metric: "Collaborations",
    current: 45,
    previous: 40,
    school: "School of Engineering",
  },
  {
    metric: "Publications",
    current: 80,
    previous: 75,
    school: "School of Natural Sciences",
  },
  {
    metric: "Citations",
    current: 500,
    previous: 480,
    school: "School of Natural Sciences",
  },
  {
    metric: "REF 4* Outputs",
    current: 25,
    previous: 22,
    school: "School of Natural Sciences",
  },
  {
    metric: "Collaborations",
    current: 40,
    previous: 35,
    school: "School of Natural Sciences",
  },
  // Add more schools as needed
];

export default function ResearchAdminDashboard() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2024, 0, 1),
    to: new Date(2024, 11, 31),
  });
  const [selectedSchool, setSelectedSchool] = useState<string>("All Schools");

  // Filter data based on selected school
  const filteredData = useMemo(() => {
    const filterBySchool = <T extends { school?: string }>(data: T[]) =>
      selectedSchool === "All Schools"
        ? data
        : data.filter((item) => item.school === selectedSchool);

    return {
      interdisciplinary: filterBySchool(mockInterdisciplinaryData),
      departmentREF: filterBySchool(mockDepartmentREFData),
      collaboration: filterBySchool(mockCollaborationData),
    };
  }, [selectedSchool]);

  // Filter overview data and metrics based on selected school
  const filteredOverviewData = React.useMemo<UniversityOverviewData[]>(() => {
    if (selectedSchool === "All Schools") {
      // Aggregate by metric
      const metricMap = new Map<string, UniversityOverviewData>();
      for (const item of mockOverviewData) {
        const key = item.metric;
        if (!metricMap.has(key)) {
          metricMap.set(key, { ...item, current: 0, previous: 0 });
        }
        const agg = metricMap.get(key)!;
        agg.current += item.current;
        agg.previous += item.previous;
      }
      return Array.from(metricMap.values());
    }
    // Specific school
    return mockOverviewData.filter((item) => item.school === selectedSchool);
  }, [selectedSchool]);

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto space-y-12 px-6 py-8">
        {/* Header Section */}
        <div className="space-y-4">
          <DashboardHeader />
          <DashboardFilters
            dateRange={dateRange}
            onDateRangeChange={setDateRange}
            selectedSchool={selectedSchool}
            onSchoolChange={setSelectedSchool}
            schools={mockSchools}
          />
        </div>

        {/* Overview Section */}
        <UniversityOverviewSection
          overviewData={filteredOverviewData}
          refScoreData={mockREFData}
          interdisciplinaryData={mockInterdisciplinaryData}
          coreRankingData={mockCOREData}
          collaborationData={mockCollaborationData}
          dateRange={dateRange}
          schoolFilter={selectedSchool}
        />

        {/* Section Divider */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <span className="border-muted-foreground/20 w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background text-muted-foreground px-4 font-medium tracking-wide">
              Research Quality Analysis
            </span>
          </div>
        </div>

        {/* Research Quality Section */}
        <ResearchQualitySection
          refScoreData={mockREFData}
          coreRankingData={mockCOREData}
        />

        {/* Section Divider */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <span className="border-muted-foreground/20 w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background text-muted-foreground px-4 font-medium tracking-wide">
              Department Performance
            </span>
          </div>
        </div>

        {/* Department Performance Section */}
        <DepartmentPerformanceSection
          interdisciplinaryData={filteredData.interdisciplinary}
          departmentREFData={filteredData.departmentREF}
          collaborationData={filteredData.collaboration}
          dateRange={dateRange}
          schoolFilter={selectedSchool}
        />

        {/* Section Divider */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <span className="border-muted-foreground/20 w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background text-muted-foreground px-4 font-medium tracking-wide">
              Trends & Analytics
            </span>
          </div>
        </div>

        {/* Trends & Analytics Section */}
        <TrendsAnalyticsSection />

        {/* Footer spacing */}
        <div className="h-12" />
      </div>
    </div>
  );
}
