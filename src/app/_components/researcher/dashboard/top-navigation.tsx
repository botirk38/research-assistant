"use client";

import type { DateRange } from "react-day-picker";
import { DateRangeSelector } from "./top-navigation/date-range-selector";

interface TopNavigationProps {
    dateRange?: DateRange;
    onDateChange: (newDateRange: DateRange | undefined) => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ dateRange, onDateChange }) => {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
      <h1 className="font-display text-foreground text-3xl font-semibold">
        Publications Overview
      </h1>
      <DateRangeSelector
        value={dateRange}
        onChange={onDateChange}
      />
    </div>
  );
};

export default TopNavigation;
