"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { formatDateRange } from "little-date";

import type { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerWithRangeProps {
  value?: DateRange;
  onChange?: (date: DateRange | undefined) => void;
  className?: string;
}

export function DatePickerWithRange({
  className,
  value,
  onChange,
}: DatePickerWithRangeProps) {
  const currentYear = new Date().getFullYear();
  const [date, setDate] = React.useState<DateRange | undefined>(
    value ?? {
      from: new Date(currentYear, 0, 1),
      to: new Date(),
    },
  );

  // Update local state and call the onChange handler
  const handleSelect = (selectedDate: DateRange | undefined) => {
    setDate(selectedDate);
    if (onChange) {
      onChange(selectedDate);
    }
  };

  // Keep local state in sync with provided value
  React.useEffect(() => {
    if (value) {
      setDate(value);
    }
  }, [value]);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full max-w-xs justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />

            {value?.from && value?.to
              ? formatDateRange(value.from, value.to, {
                  includeTime: false,
                })
              : "Select date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
