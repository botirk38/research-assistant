"use client";

import { useState, useEffect } from "react";
import { FilterSidebar } from "./explorer/filter-sidebar";
import { FundingSearchBar } from "./explorer/funding-search-bar";
import { OpportunityCard } from "./explorer/opportunity-card";
import { mockOpportunities } from "@/lib/data/funding-opportunities";
import { useIsMobile } from "@/hooks/use-mobile";
import { useFundingFilters } from "@/hooks/funding-explorer/use-funding-filters";
import { usePagination } from "@/hooks/use-pagination";
import { useAutoPagination } from "@/hooks/use-auto-pagination";
import { LayoutGrid, Table } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import FundingTable from "./explorer/funding-table";
import { ItemsPerPageSelector } from "@/components/items-per-page-selector";
import { DEFAULT_ITEMS_PER_PAGE } from "@/utils/pagination";

export default function FundingExplorer() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [view, setView] = useState<"card" | "table">("table");
  const isMobile = useIsMobile();

  const {
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    filters,
    setFilters,
    filteredOpportunities,
    resetFilters,
    categoryOptions,
    countryOptions,
    eligibilityOptions,
  } = useFundingFilters({ opportunities: mockOpportunities });

  const {
    currentPage,
    itemsPerPage,
    totalPages,
    startIndex,
    endIndex,
    setCurrentPage,
    setItemsPerPage,
    handlePageChange: paginationPageChange,
    handleItemsPerPageChange,
  } = usePagination({
    totalItems: filteredOpportunities.length,
    defaultItemsPerPage: DEFAULT_ITEMS_PER_PAGE,
  });

  const { autoCalculatePageSize, handleAutoCalculateToggle } =
    useAutoPagination({
      view,
      isMobile,
      onItemsPerPageChange: setItemsPerPage,
      onPageReset: () => setCurrentPage(1),
    });

  // Reset to first page when view changes or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [view, filteredOpportunities.length, setCurrentPage]);

  const paginatedOpportunities = filteredOpportunities.slice(
    startIndex,
    endIndex,
  );

  const handleItemsPerPageChangeWithAutoReset = (value: string) => {
    handleItemsPerPageChange(value);
    // Disable auto-calculate when manually set, but don't reset page unnecessarily
    if (autoCalculatePageSize) {
      handleAutoCalculateToggle(false);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr]">
      <FundingSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
      />

      <FilterSidebar
        isVisible={!isMobile || isFilterOpen}
        isMobile={isMobile}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
        eligibilityOptions={eligibilityOptions}
        categoryOptions={categoryOptions}
        countryOptions={countryOptions}
        resetFilters={resetFilters}
      />

      {/* Results */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="font-semibold">
              {filteredOpportunities.length}{" "}
              {filteredOpportunities.length === 1
                ? "Opportunity"
                : "Opportunities"}{" "}
              Found
            </h2>
            {filteredOpportunities.length > 0 && (
              <p className="text-muted-foreground text-sm">
                Showing {startIndex + 1}-
                {Math.min(endIndex, filteredOpportunities.length)} of{" "}
                {filteredOpportunities.length}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Page Size Controls */}
            <ItemsPerPageSelector
              itemsPerPage={itemsPerPage}
              autoCalculatePageSize={autoCalculatePageSize}
              onItemsPerPageChange={handleItemsPerPageChangeWithAutoReset}
              onAutoCalculateToggle={handleAutoCalculateToggle}
            />

            {/* View Mode Toggle */}
            <ToggleGroup
              type="single"
              value={view}
              onValueChange={(value) =>
                value && setView(value as "card" | "table")
              }
            >
              <ToggleGroupItem value="table" aria-label="Table view">
                <Table className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="card" aria-label="Card view">
                <LayoutGrid className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        {filteredOpportunities.length === 0 ? (
          <div className="bg-muted/50 rounded-lg py-12 text-center">
            <h3 className="text-lg font-medium">
              No matching opportunities found
            </h3>
            <p className="text-muted-foreground mt-2">
              Try adjusting your search criteria or filters
            </p>
          </div>
        ) : (
          <>
            {view === "table" ? (
              <div className="space-y-4">
                <FundingTable opportunities={paginatedOpportunities} />
              </div>
            ) : (
              <div className="space-y-4">
                {paginatedOpportunities.map((opportunity) => (
                  <OpportunityCard
                    key={opportunity.id}
                    opportunity={opportunity}
                  />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e: React.MouseEvent) => {
                          e.preventDefault();
                          if (currentPage > 1)
                            paginationPageChange(currentPage - 1);
                        }}
                        className={
                          currentPage <= 1
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>

                    {/* First page */}
                    {currentPage > 3 && (
                      <>
                        <PaginationItem>
                          <PaginationLink
                            href="#"
                            onClick={(e: React.MouseEvent) => {
                              e.preventDefault();
                              paginationPageChange(1);
                            }}
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        {currentPage > 4 && (
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )}
                      </>
                    )}

                    {/* Pages around current page */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter((page) => {
                        return (
                          page >= currentPage - 2 && page <= currentPage + 2
                        );
                      })
                      .map((page) => (
                        <PaginationItem key={page}>
                          <PaginationLink
                            href="#"
                            onClick={(e: React.MouseEvent) => {
                              e.preventDefault();
                              paginationPageChange(page);
                            }}
                            isActive={currentPage === page}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      ))}

                    {/* Last page */}
                    {currentPage < totalPages - 2 && (
                      <>
                        {currentPage < totalPages - 3 && (
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )}
                        <PaginationItem>
                          <PaginationLink
                            href="#"
                            onClick={(e: React.MouseEvent) => {
                              e.preventDefault();
                              paginationPageChange(totalPages);
                            }}
                          >
                            {totalPages}
                          </PaginationLink>
                        </PaginationItem>
                      </>
                    )}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e: React.MouseEvent) => {
                          e.preventDefault();
                          if (currentPage < totalPages)
                            paginationPageChange(currentPage + 1);
                        }}
                        className={
                          currentPage >= totalPages
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
