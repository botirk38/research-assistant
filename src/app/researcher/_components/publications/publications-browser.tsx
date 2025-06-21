"use client";

import { useState, useEffect } from "react";
import { PublicationsFilter } from "./publications-filter";
import { PublicationsSearchBar } from "./publication-search-bar";
import { PublicationCard } from "./publication-card";
import { mockPublications } from "@/lib/data/publications";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LayoutGrid, Network, Table } from "lucide-react";
import { PublicationsTable } from "./publications-table";
import { usePublicationsFilters } from "@/hooks/publications-browser/use-publication-filters";
import { PublicationsNetwork } from "./publication-network";
import { usePagination } from "@/hooks/use-pagination";
import { useAutoPagination } from "@/hooks/use-auto-pagination";
import { useIsMobile } from "@/hooks/use-mobile";
import { ItemsPerPageSelector } from "@/components/items-per-page-selector";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { DEFAULT_ITEMS_PER_PAGE } from "@/utils/pagination";

export default function PublicationsBrowser() {
  const [viewMode, setViewMode] = useState<"card" | "table" | "network">(
    "table",
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const isMobile = useIsMobile();

  const {
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    selectedJournals,
    setSelectedJournals,
    selectedYears,
    setSelectedYears,
    citationRange,
    setCitationRange,
    filteredPublications,
    resetFilters,
    journals,
    years,
  } = usePublicationsFilters({ publications: mockPublications });

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
    totalItems: filteredPublications.length,
    defaultItemsPerPage: DEFAULT_ITEMS_PER_PAGE,
  });

  const { autoCalculatePageSize, handleAutoCalculateToggle } =
    useAutoPagination({
      view: viewMode === "network" ? "card" : viewMode, // Network view uses card-like spacing
      isMobile,
      onItemsPerPageChange: setItemsPerPage,
      onPageReset: () => setCurrentPage(1),
    });

  // Reset to first page when view changes or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [viewMode, filteredPublications.length, setCurrentPage]);

  const paginatedPublications =
    viewMode === "network"
      ? filteredPublications // Network view shows all for connections
      : filteredPublications.slice(startIndex, endIndex);

  const handleItemsPerPageChangeWithAutoReset = (value: string) => {
    handleItemsPerPageChange(value);
    if (autoCalculatePageSize) {
      handleAutoCalculateToggle(false);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr]">
      {/* Search and sort bar */}
      <div className="md:col-span-2">
        <PublicationsSearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortBy={sortBy}
          setSortBy={setSortBy}
          isMobile={isMobile}
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
        />
      </div>

      {/* Filters */}
      <PublicationsFilter
        isVisible={!isMobile || isFilterOpen}
        isMobile={isMobile}
        onClose={() => setIsFilterOpen(false)}
        journals={journals}
        selectedJournals={selectedJournals}
        setSelectedJournals={setSelectedJournals}
        years={years}
        selectedYears={selectedYears}
        setSelectedYears={setSelectedYears}
        citationRange={citationRange}
        setCitationRange={setCitationRange}
        resetFilters={resetFilters}
      />

      {/* Results */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="font-semibold">
              {filteredPublications.length}{" "}
              {filteredPublications.length === 1
                ? "Publication"
                : "Publications"}{" "}
              Found
            </h2>
            {filteredPublications.length > 0 && viewMode !== "network" && (
              <p className="text-muted-foreground text-sm">
                Showing {startIndex + 1}-
                {Math.min(endIndex, filteredPublications.length)} of{" "}
                {filteredPublications.length}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Page Size Controls - Hide for network view */}
            {viewMode !== "network" && (
              <ItemsPerPageSelector
                itemsPerPage={itemsPerPage}
                autoCalculatePageSize={autoCalculatePageSize}
                onItemsPerPageChange={handleItemsPerPageChangeWithAutoReset}
                onAutoCalculateToggle={handleAutoCalculateToggle}
              />
            )}

            {/* View Mode Toggle */}
            <ToggleGroup
              type="single"
              value={viewMode}
              onValueChange={(value) =>
                value && setViewMode(value as "card" | "table" | "network")
              }
            >
              <ToggleGroupItem value="table" aria-label="Table view">
                <Table className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="card" aria-label="Card view">
                <LayoutGrid className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="network" aria-label="Network view">
                <Network className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        {filteredPublications.length === 0 ? (
          <div className="bg-muted/50 rounded-lg py-12 text-center">
            <h3 className="text-lg font-medium">
              No matching publications found
            </h3>
            <p className="text-muted-foreground mt-2">
              Try adjusting your search criteria or filters
            </p>
          </div>
        ) : (
          <>
            {viewMode === "card" && (
              <div className="space-y-4">
                {paginatedPublications.map((publication, index) => (
                  <PublicationCard key={index} publication={publication} />
                ))}
              </div>
            )}
            {viewMode === "table" && (
              <PublicationsTable publications={paginatedPublications} />
            )}
            {viewMode === "network" && (
              <PublicationsNetwork publications={paginatedPublications} />
            )}

            {/* Pagination - Hide for network view */}
            {viewMode !== "network" && totalPages > 1 && (
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
