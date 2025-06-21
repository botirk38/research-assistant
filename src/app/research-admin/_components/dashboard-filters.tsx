import React from "react";
import type { DateRange } from "react-day-picker";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SchoolSelect } from "@/components/filters/SchoolSelect";
import { DateRangeSelector } from "@/app/researcher/_components/dashboard/top-navigation/date-range-selector";

interface SchoolOption {
  label: string;
  value: string;
  icon: React.ElementType;
}
interface DashboardFiltersProps {
  dateRange: DateRange | undefined;
  onDateRangeChange: (range: DateRange | undefined) => void;
  selectedSchool: string;
  onSchoolChange: (school: string) => void;
  schools: SchoolOption[];
}

export function DashboardFilters({
  dateRange,
  onDateRangeChange,
  selectedSchool,
  onSchoolChange,
  schools,
}: DashboardFiltersProps) {
  return (
    <Card className="bg-muted/20 border-0">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">
          Dashboard Filters
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-muted-foreground text-sm font-medium">
              Time Period
            </label>
            <DateRangeSelector
              value={dateRange}
              onChange={onDateRangeChange}
              className="w-full"
            />
          </div>
          <div className="space-y-3">
            <label className="text-muted-foreground text-sm font-medium">
              School Filter
            </label>
            <SchoolSelect
              schools={schools}
              selectedSchool={selectedSchool}
              onSchoolChange={onSchoolChange}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default DashboardFilters;
