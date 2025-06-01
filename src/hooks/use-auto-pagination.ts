import { useState, useEffect, useCallback } from "react";
import { DEFAULT_ITEMS_PER_PAGE } from "@/utils/pagination";

// Calculate items per page based on viewport height
const calculateItemsPerPage = (view: "card" | "table", isMobile: boolean) => {
  if (typeof window === "undefined") return DEFAULT_ITEMS_PER_PAGE;

  const viewportHeight = window.innerHeight;
  const headerHeight = 200; // Approximate header and controls height
  const paginationHeight = 80; // Pagination component height
  const availableHeight = viewportHeight - headerHeight - paginationHeight;

  if (view === "card") {
    // Card view: estimate ~150px per card on desktop, ~200px on mobile
    const cardHeight = isMobile ? 200 : 150;
    return Math.max(3, Math.floor(availableHeight / cardHeight));
  } else {
    // Table view: estimate ~60px per row on desktop, ~80px on mobile
    const rowHeight = isMobile ? 80 : 60;
    return Math.max(5, Math.floor(availableHeight / rowHeight));
  }
};

interface UseAutoPaginationProps {
  view: "card" | "table";
  isMobile: boolean;
  onItemsPerPageChange: (items: number) => void;
  onPageReset?: () => void;
}

export function useAutoPagination({
  view,
  isMobile,
  onItemsPerPageChange,
  onPageReset,
}: UseAutoPaginationProps) {
  const [autoCalculatePageSize, setAutoCalculatePageSize] = useState(false);

  const updateItemsPerPage = useCallback(() => {
    if (!autoCalculatePageSize) return;

    const calculated = calculateItemsPerPage(view, isMobile);
    onItemsPerPageChange(calculated);
  }, [autoCalculatePageSize, view, isMobile, onItemsPerPageChange]);

  useEffect(() => {
    if (!autoCalculatePageSize) return;

    updateItemsPerPage();

    const handleResize = () => {
      updateItemsPerPage();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateItemsPerPage, autoCalculatePageSize]);

  const handleAutoCalculateToggle = useCallback(
    (enabled: boolean) => {
      setAutoCalculatePageSize(enabled);
      if (enabled) {
        const calculated = calculateItemsPerPage(view, isMobile);
        onItemsPerPageChange(calculated);
        // Only reset page when initially enabling auto-calculate
        onPageReset?.();
      }
    },
    [view, isMobile, onItemsPerPageChange, onPageReset],
  );

  return {
    autoCalculatePageSize,
    handleAutoCalculateToggle,
  };
}
