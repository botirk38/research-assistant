"use client";

import React, { useState, useMemo } from "react";
import type { DateRange } from "react-day-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePickerWithRange } from "@/components/date-range-picker";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import shared chart components
import {
  UniversityOverviewChart,
  REFScoreDistributionChart,
  InterdisciplinaryBreakdownChart,
  COREankingChart,
  DepartmentREFBreakdownChart,
  CollaborationBreakdownChart,
  ResearcherQualityChart,
  ComparisonTrends,
  DepartmentKPIChart,
} from "@/components/charts";

// Mock data
const mockUniversityOverviewData = [
  { metric: "Publications", current: 1250, previous: 1180 },
  { metric: "Avg REF Score", current: 3.2, previous: 3.1 },
  { metric: "Interdisciplinary", current: 340, previous: 295 },
];

const mockSchools = [
  "All Schools",
  "School of Computer Science",
  "School of Engineering",
  "School of Natural Sciences",
  "School of Medicine",
  "School of Business",
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

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto space-y-12 px-6 py-8">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">
                Research Performance Dashboard
              </h1>
              <p className="text-muted-foreground text-xl">
                University-wide research metrics and analytics
              </p>
            </div>
            <Badge variant="outline" className="px-4 py-2 text-lg">
              Research Admin
            </Badge>
          </div>

          {/* Filters Section */}
          <Card className="bg-muted/20 border-0">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold">
                Dashboard Filters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-3">
                  <label className="text-muted-foreground text-sm font-medium">
                    Time Period
                  </label>
                  <DatePickerWithRange
                    value={dateRange}
                    onChange={setDateRange}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-muted-foreground text-sm font-medium">
                    School Filter
                  </label>
                  <Select
                    value={selectedSchool}
                    onValueChange={setSelectedSchool}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {mockSchools.map((school) => (
                        <SelectItem key={school} value={school}>
                          {school}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Overview Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">University Overview</h2>
            <p className="text-muted-foreground text-lg">
              Key performance indicators across all research activities
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <UniversityOverviewChart
              data={mockUniversityOverviewData}
              dateRange={dateRange}
              schoolFilter={selectedSchool}
              className="border-0 shadow-sm"
            />
            <REFScoreDistributionChart
              data={mockREFData}
              dateRange={dateRange}
              schoolFilter={selectedSchool}
              className="border-0 shadow-sm"
            />
          </div>
        </section>

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
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">
              Research Quality & Rankings
            </h2>
            <p className="text-muted-foreground text-lg">
              Publication quality metrics and conference/journal rankings
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <COREankingChart
              data={mockCOREData}
              dateRange={dateRange}
              schoolFilter={selectedSchool}
              className="border-0 shadow-sm"
            />
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold">
                  Researcher Quality Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResearcherQualityChart />
              </CardContent>
            </Card>
          </div>
        </section>

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
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Department Performance</h2>
            <p className="text-muted-foreground text-lg">
              Departmental research metrics and collaboration patterns
            </p>
          </div>
          <div className="space-y-8">
            <InterdisciplinaryBreakdownChart
              data={filteredData.interdisciplinary}
              dateRange={dateRange}
              schoolFilter={selectedSchool}
              className="border-0 shadow-sm"
            />
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
              <DepartmentREFBreakdownChart
                data={filteredData.departmentREF}
                dateRange={dateRange}
                schoolFilter={selectedSchool}
                className="border-0 shadow-sm"
              />
              <CollaborationBreakdownChart
                data={filteredData.collaboration}
                dateRange={dateRange}
                schoolFilter={selectedSchool}
                className="border-0 shadow-sm"
              />
            </div>
          </div>
        </section>

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
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Trends & Analytics</h2>
            <p className="text-muted-foreground text-lg">
              Historical performance trends and key performance indicators
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold">
                  Publications Trend
                </CardTitle>
                <CardDescription>
                  Track publications over the selected period
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ComparisonTrends metric="publications" />
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold">
                  REF Scores Trend
                </CardTitle>
                <CardDescription>
                  Track REF scores over the selected period
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ComparisonTrends metric="ref" />
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold">
                  Interdisciplinary Trend
                </CardTitle>
                <CardDescription>
                  Track interdisciplinary research over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ComparisonTrends metric="interdisciplinary" />
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold">
                  Collaborations Trend
                </CardTitle>
                <CardDescription>
                  Track collaborations over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ComparisonTrends metric="collaborations" />
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold">
                  Department KPI Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <DepartmentKPIChart />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer spacing */}
        <div className="h-12" />
      </div>
    </div>
  );
}
