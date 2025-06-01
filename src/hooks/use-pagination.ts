import { useState, useCallback, useEffect } from "react";

interface UsePaginationProps {
  totalItems: number;
  defaultItemsPerPage?: number;
  onPageChange?: (page: number) => void;
}

interface UsePaginationReturn {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (items: number) => void;
  handlePageChange: (page: number) => void;
  handleItemsPerPageChange: (value: string) => void;
}

export function usePagination({
  totalItems,
  defaultItemsPerPage = 10,
  onPageChange,
}: UsePaginationProps): UsePaginationReturn {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Ensure current page doesn't exceed total pages when items change
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
        onPageChange?.(page);
      }
    },
    [totalPages, onPageChange],
  );

  const handleItemsPerPageChange = useCallback(
    (value: string) => {
      const newItemsPerPage = parseInt(value);
      if (!isNaN(newItemsPerPage) && newItemsPerPage > 0) {
        setItemsPerPage(newItemsPerPage);
        // Only reset to page 1 if current page would be invalid
        const newTotalPages = Math.ceil(totalItems / newItemsPerPage);
        if (currentPage > newTotalPages) {
          setCurrentPage(1);
        }
      }
    },
    [totalItems, currentPage],
  );

  const handleSetItemsPerPage = useCallback(
    (items: number) => {
      if (items > 0) {
        setItemsPerPage(items);
        // Only reset to page 1 if current page would be invalid
        const newTotalPages = Math.ceil(totalItems / items);
        if (currentPage > newTotalPages) {
          setCurrentPage(1);
        }
      }
    },
    [totalItems, currentPage],
  );

  return {
    currentPage,
    itemsPerPage,
    totalPages,
    startIndex,
    endIndex,
    setCurrentPage,
    setItemsPerPage: handleSetItemsPerPage,
    handlePageChange,
    handleItemsPerPageChange,
  };
}
