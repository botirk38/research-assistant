"use client";

import { useState, useEffect, useMemo } from "react";
import { PublicationsFilter } from "./publications-filter";
import { PublicationsSearchBar } from "./publication-search-bar";
import { PublicationCard } from "./publication-card";
import { mockPublications } from "@/lib/data/publications";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LayoutGrid, Table } from "lucide-react";
import { PublicationsTable } from "./publications-table";

export default function PublicationsBrowser() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"card" | "table" | "network">(
    "table",
  );
  const [selectedJournals, setSelectedJournals] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [citationRange, setCitationRange] = useState<[number, number]>([
    0, 250,
  ]);
  const [sortBy, setSortBy] = useState<string>("citations");
  const [isMobile, setIsMobile] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Extract unique journals and years
  const journals = useMemo(
    () => Array.from(new Set(mockPublications.map((pub) => pub.journal))),
    [],
  );
  const years = useMemo(
    () =>
      Array.from(new Set(mockPublications.map((pub) => pub.year))).sort(
        (a, b) => b - a,
      ),
    [],
  );

  // Responsive effect
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Filter and sort publications
  const filteredPublications = useMemo(() => {
    let results = mockPublications.filter((publication) => {
      // Search
      const matchesSearch =
        searchQuery === "" ||
        publication.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        publication.subtitle
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        publication.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
        publication.coAuthors.some((author) =>
          author.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      // Journal
      const matchesJournal =
        selectedJournals.length === 0 ||
        selectedJournals.includes(publication.journal);

      // Year
      const matchesYear =
        selectedYears.length === 0 || selectedYears.includes(publication.year);

      // Citations
      const matchesCitations =
        publication.citations >= citationRange[0] &&
        publication.citations <= citationRange[1];

      return matchesSearch && matchesJournal && matchesYear && matchesCitations;
    });

    // Sort
    results = results.sort((a, b) => {
      switch (sortBy) {
        case "year-newest":
          return b.year - a.year;
        case "year-oldest":
          return a.year - b.year;
        case "citations":
          return b.citations - a.citations;
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return results;
  }, [searchQuery, selectedJournals, selectedYears, citationRange, sortBy]);

  // Reset all filters
  const resetFilters = () => {
    setSelectedJournals([]);
    setSelectedYears([]);
    setCitationRange([0, 250]);
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
          <h2 className="font-semibold">
            {filteredPublications.length}{" "}
            {filteredPublications.length === 1 ? "Publication" : "Publications"}{" "}
            Found
          </h2>

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
          </ToggleGroup>
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
                {filteredPublications.map((publication, index) => (
                  <PublicationCard key={index} publication={publication} />
                ))}
              </div>
            )}
            {viewMode === "table" && (
              <PublicationsTable publications={filteredPublications} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
