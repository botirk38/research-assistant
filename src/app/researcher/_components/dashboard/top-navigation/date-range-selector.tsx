import {
  subDays,
  subMonths,
  subYears,
  startOfMonth,
  endOfMonth,
  startOfYear,
} from "date-fns";
import type { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePickerWithRange } from "@/components/date-range-picker";

type PresetRange = {
  label: string;
  value: string;
  getDateRange: () => DateRange;
};

const presetRanges: PresetRange[] = [
  {
    label: "Last 7 days",
    value: "last-7-days",
    getDateRange: () => ({
      from: subDays(new Date(), 7),
      to: new Date(),
    }),
  },
  {
    label: "Last 30 days",
    value: "last-30-days",
    getDateRange: () => ({
      from: subDays(new Date(), 30),
      to: new Date(),
    }),
  },
  {
    label: "Last month",
    value: "last-month",
    getDateRange: () => {
      const lastMonth = subMonths(new Date(), 1);
      return {
        from: startOfMonth(lastMonth),
        to: endOfMonth(lastMonth),
      };
    },
  },
  {
    label: "Last 6 months",
    value: "last-6-months",
    getDateRange: () => ({
      from: subMonths(new Date(), 6),
      to: new Date(),
    }),
  },
  {
    label: "Last year",
    value: "last-year",
    getDateRange: () => ({
      from: subYears(new Date(), 1),
      to: new Date(),
    }),
  },
  {
    label: "Year to date",
    value: "year-to-date",
    getDateRange: () => ({
      from: startOfYear(new Date()),
      to: new Date(),
    }),
  },
  {
    label: "Current REF period",
    value: "current-ref-period",
    getDateRange: () => ({
      from: new Date(2021, 0, 1), // Jan 1, 2021
      to: new Date(), // Current date
    }),
  },
  {
    label: "Last REF period",
    value: "last-ref-period",
    getDateRange: () => ({
      from: new Date(2014, 0, 1), // Jan 1, 2014
      to: new Date(2020, 11, 31), // Dec 31, 2020
    }),
  },
];

interface DateRangeSelectorProps {
  value?: DateRange | undefined;
  onChange: (newDateRange: DateRange | undefined) => void;
  className?: string;
}

export function DateRangeSelector({
  value,
  onChange,
  className,
}: DateRangeSelectorProps) {
  // Handle preset selection
  const handlePresetSelect = (presetValue: string) => {
    const preset = presetRanges.find((p) => p.value === presetValue);
    if (preset) {
      const newDateRange = preset.getDateRange();
      onChange(newDateRange);
    }
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <Select onValueChange={handlePresetSelect}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Preset ranges" />
        </SelectTrigger>
        <SelectContent>
          {presetRanges.map((preset) => (
            <SelectItem key={preset.value} value={preset.value}>
              {preset.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <DatePickerWithRange value={value} onChange={onChange} />
    </div>
  );
}
