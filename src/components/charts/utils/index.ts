import type { DateRange } from "react-day-picker";

// Fixed color palette for consistent visualization
export const CHART_COLORS = [
  "#8b5cf6", // purple
  "#06b6d4", // cyan
  "#10b981", // green
  "#f59e0b", // amber
  "#ef4444", // red
  "#6366f1", // indigo
  "#ec4899", // pink
  "#14b8a6", // teal
  "#f97316", // orange
  "#84cc16", // lime
];

/**
 * Generates a random HSL color
 */
export function getRandomHSLColor(): string {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 30) + 60; // 60-90%
  const lightness = Math.floor(Math.random() * 20) + 45; // 45-65%
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

/**
 * Gets a color from the predefined palette
 */
export function getChartColor(index: number): string {
  return CHART_COLORS[index % CHART_COLORS.length] || getRandomHSLColor();
}

/**
 * Filters data by date range
 */
export function filterDataByDateRange<T extends { date?: string }>(
  data: T[],
  dateRange: DateRange | undefined,
): T[] {
  if (!dateRange?.from || !dateRange?.to) {
    return data;
  }

  return data.filter((item) => {
    if (!item.date) return true;

    const itemDate = new Date(item.date);
    const fromDate = new Date(dateRange.from!);
    const toDate = new Date(dateRange.to!);

    return itemDate >= fromDate && itemDate <= toDate;
  });
}

/**
 * Formats numbers for chart display
 */
export function formatChartValue(
  value: number,
  type: "number" | "currency" | "percentage" = "number",
): string {
  switch (type) {
    case "currency":
      return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);

    case "percentage":
      return `${value.toFixed(1)}%`;

    case "number":
    default:
      if (value >= 1000000) {
        return `${(value / 1000000).toFixed(1)}M`;
      } else if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}K`;
      }
      return value.toString();
  }
}

/**
 * Generates chart configuration from data
 */
export function generateChartConfig(
  data: Array<{ [key: string]: any }>,
  keyField: string = "name",
): Record<string, { label: string; color: string }> {
  const config: Record<string, { label: string; color: string }> = {};

  data.forEach((item, index) => {
    const key = item[keyField] as string;
    if (key && !config[key]) {
      config[key] = {
        label: key,
        color: getChartColor(index),
      };
    }
  });

  return config;
}

/**
 * Sorts chart data by a specific field
 */
export function sortChartData<T extends Record<string, any>>(
  data: T[],
  sortBy: keyof T,
  order: "asc" | "desc" = "desc",
): T[] {
  return [...data].sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];

    if (typeof aVal === "number" && typeof bVal === "number") {
      return order === "asc" ? aVal - bVal : bVal - aVal;
    }

    if (typeof aVal === "string" && typeof bVal === "string") {
      return order === "asc"
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }

    return 0;
  });
}
