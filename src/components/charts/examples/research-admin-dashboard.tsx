"use client";

import React, { useState, useMemo } from "react";
import { DateRange } from "react-day-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePickerWithRange } from "@/components/date-range-picker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, BarChart3, Network, BookOpen, PieChart } from "lucide-react";

// Import shared chart components
import {
  UniversityMetricsCard,
  REFScoreDistributionChart,
  InterdisciplinaryBreakdownChart,
  COREankingChart,
  DepartmentREFBreakdownChart,
  CollaborationBreakdownChart,
  ResearcherQualityChart,
  ComparisonTrends,
  DepartmentKPIChart,
} from "@/components/charts";

// Mock data - in real implementation, this would come from your data layer
const mockUniversityData = {
  totalPublications: 1250,
  previousTotalPublications: 1180,
  totalREFScore: 3.2,
  previousREFScore: 3.1,
  interdisciplinaryPapers: 340,
  previousInterdisciplinaryPapers: 295,
};

const mockSchools = [
  "All Schools",
  "School of Computer Science",
  "School of Engineering",
  "School of Natural Sciences",
  "School of Medicine",
  "School of Business",
];

const mockREFData = [
  { refScore: "4*", quantity: 125, date: "2024-01-01" },
  { refScore: "3*", quantity: 340, date: "2024-01-01" },
  { refScore: "2*", quantity: 485, date: "2024-01-01" },
  { refScore: "1*", quantity: 220, date: "2024-01-01" },
  { refScore: "Unclassified", quantity: 80, date: "2024-01-01" },
];

const mockInterdisciplinaryData = [
  { department: "Computer Science", quantity: 45, school: "School of Computer Science" },
  { department: "Engineering", quantity: 38, school: "School of Engineering" },
  { department: "Physics", quantity: 32, school: "School of Natural Sciences" },
  { department: "Chemistry", quantity: 28, school: "School of Natural Sciences" },
  { department: "Biology", quantity: 25, school: "School of Natural Sciences" },
  { department: "Mathematics", quantity: 22, school: "School of Natural Sciences" },
  { department: "Business", quantity: 18, school: "School of Business" },
  { department: "Medicine", quantity: 15, school: "School of Medicine" },
];

const mockCOREData = [
  { coreRanking: "A*", quantity: 85, date: "2024-01-01" },
  { coreRanking: "A", quantity: 220, date: "2024-01-01" },
  { coreRanking: "B", quantity: 380, date: "2024-01-01" },
  { coreRanking: "C", quantity: 290, date: "2024-01-01" },
  { coreRanking: "Unranked", quantity: 275, date: "2024-01-01" },
];

const mockDepartmentREFData = [
  { department: "Computer Science", refScore: "4*", quantity: 25, school: "School of Computer Science" },
  { department: "Computer Science", refScore: "3*", quantity: 45, school: "School of Computer Science" },
  { department: "Computer Science", refScore: "2*", quantity: 35, school: "School of Computer Science" },
  { department: "Engineering", refScore: "4*", quantity: 20, school: "School of Engineering" },
  { department: "Engineering", refScore: "3*", quantity: 55, school: "School of Engineering" },
  { department: "Engineering", refScore: "2*", quantity: 40, school: "School of Engineering" },
  { department: "Physics", refScore: "4*", quantity: 30, school: "School of Natural Sciences" },
  { department: "Physics", refScore: "3*", quantity: 40, school: "School of Natural Sciences" },
  { department: "Physics", refScore: "2*", quantity: 25, school: "School of Natural Sciences" },
];

const mockCollaborationData = [
  { department: "Computer Science", collaborationType: "Internal", quantity: 65, school: "School of Computer Science" },
  { department: "Computer Science", collaborationType: "External", quantity: 40, school: "School of Computer Science" },
  { department: "Engineering", collaborationType: "Internal", quantity: 58, school: "School of Engineering" },
  { department: "Engineering", collaborationType: "External", quantity: 57, school: "School of Engineering" },
  { department: "Physics", collaborationType: "Internal", quantity: 45, school: "School of Natural Sciences" },
  { department: "Physics", collaborationType: "External", quantity: 50, school: "School of Natural Sciences" },
];

interface ResearchAdminDashboardProps {
  className?: string;
}

export function ResearchAdminDashboard({ className }: ResearchAdminDashboardProps) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2024, 0, 1),
    to: new Date(2024, 11, 31),
  });
  const [selectedSchool, setSelectedSchool] = useState<string>("All Schools");
  const [selectedTrend, setSelectedTrend] = useState<string>("overall_publications");

  // Filter data based on selected school
  const filteredData = useMemo(() => {
    const filterBySchool = <T extends { school?: string }>(data: T[]) =>
      selectedSchool === "All Schools"
        ? data
        : data.filter(item => item.school === selectedSchool);

    return {
      interdisciplinary: filterBySchool(mockInterdisciplinaryData),
      departmentREF: filterBySchool(mockDepartmentREFData),
      collaboration: filterBySchool(mockCollaborationData),
    };
  }, [selectedSchool]);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold">Research Performance Overview</h1>
          <p className="text-muted-foreground">Research Admin/VP of Research Dashboard</p>
        </div>
      </div>

      {/* Global Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Global Filters</CardTitle>
          <CardDescription>Filter all dashboard data by date range and school</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <label className="text-sm font-medium mb-2 block">Date Range</label>
            <DatePickerWithRange
              date={dateRange}
              onDateChange={setDateRange}
              placeholder="Select date range"
            />
          </div>
          <div className="flex-1">
            <label className="text-sm font-medium mb-2 block">Select School</label>
            <Select value={selectedSchool} onValueChange={setSelectedSchool}>
              <SelectTrigger>
                <SelectValue placeholder="Select a school" />
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
        </CardContent>
      </Card>

      {/* University-Wide Overview Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">University-Wide Overview</h2>

        {/* Overview Metric Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <UniversityMetricsCard
            title="Total Publications"
            description="Research outputs for selected period"
            value={mockUniversityData.totalPublications}
            previousValue={mockUniversityData.previousTotalPublications}
            icon={<FileText className="h-4 w-4" />}
            formatType="number"
          />
          <UniversityMetricsCard
            title="Average REF Score"
            description="Overall research quality rating"
            value={mockUniversityData.totalREFScore}
            previousValue={mockUniversityData.previousREFScore}
            icon={<BarChart3 className="h-4 w-4" />}
            formatType="number"
          />
          <UniversityMetricsCard
            title="Interdisciplinary Papers"
            description="Cross-department collaborations"
            value={mockUniversityData.interdisciplinaryPapers}
            previousValue={mockUniversityData.previousInterdisciplinaryPapers}
            icon={<Network className="h-4 w-4" />}
            formatType="number"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <REFScoreDistributionChart
            data={mockREFData}
            dateRange={dateRange}
            schoolFilter={selectedSchool}
          />

          <COREankingChart
            data={mockCOREData}
            dateRange={dateRange}
            schoolFilter={selectedSchool}
            chartType="both"
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <InterdisciplinaryBreakdownChart
            data={filteredData.interdisciplinary}
            dateRange={dateRange}
            schoolFilter={selectedSchool}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <DepartmentREFBreakdownChart
            data={filteredData.departmentREF}
            dateRange={dateRange}
            schoolFilter={selectedSchool}
          />

          <CollaborationBreakdownChart
            data={filteredData.collaboration}
            dateRange={dateRange}
            schoolFilter={selectedSchool}
          />
        </div>
      </div>

      {/* Research Output Quality & Distribution Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Research Output Quality & Distribution</h2>
        <ResearcherQualityChart />
      </div>

      {/* Comparison Trends Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Comparison Trends (Time Range)</h2>
        <Card>
          <CardHeader>
            <CardTitle>Trend Selection</CardTitle>
            <CardDescription>Select which metric to display in the trend chart</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedTrend} onValueChange={setSelectedTrend}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overall_publications">Publications</TabsTrigger>
                <TabsTrigger value="ref_overall_university">REF Scores</TabsTrigger>
                <TabsTrigger value="interdisciplinary">Interdisciplinary</TabsTrigger>
                <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
              </TabsList>
              <TabsContent value={selectedTrend} className="mt-4">
                <ComparisonTrends />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Department KPI Tracking Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Department KPI Tracking</h2>
        <DepartmentKPIChart />
      </div>
    </div>
  );
}

export default ResearchAdminDashboard;
