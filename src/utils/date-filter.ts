import type { DateRange } from "react-day-picker";

export function filterDataByDateRange<T extends { date: Date }>(
  data: T[],
  dateRange: DateRange | undefined
): T[] {
  if (!dateRange?.from) return data;

  return data.filter((item) => {
    const itemDate = item.date;
    if (dateRange.from && dateRange.to) {
      return itemDate >= dateRange.from && itemDate <= dateRange.to;
    }
    const from = dateRange.from ?? new Date();
    return itemDate >= from;
  });
}
