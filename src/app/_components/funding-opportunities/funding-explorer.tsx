"use client";

import { useState, useMemo } from "react";
import type {
  FundingOpportunity,
  FundingOpportunityFilterState,
} from "@/types/researcher";
import { FilterSidebar } from "./explorer/filter-sidebar";
import { FundingSearchBar } from "./explorer/funding-search-bar";
import { OpportunityCard } from "./explorer/opportunity-card";
import { mockOpportunities } from "@/lib/data/funding-opportunities";
import type { DateRange } from "react-day-picker";
import { useIsMobile } from "@/hooks/use-mobile";

const matchesSearch = (opportunity: FundingOpportunity, searchQuery: string) =>
  searchQuery === "" ||
  opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  opportunity.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
  opportunity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
  opportunity.category.toLowerCase().includes(searchQuery.toLowerCase());

const matchesFunding = (
  opportunity: FundingOpportunity,
  range: [number, number],
) => {
  const amount = Number.parseInt(opportunity.amount.replace(/[^0-9]/g, ""));
  return amount >= range[0] && amount <= range[1];
};

const matchesEligibility = (opportunity: FundingOpportunity, elig: string[]) =>
  elig.length === 0 || elig.some((e) => opportunity.eligibility.includes(e));

const matchesCategory = (opportunity: FundingOpportunity, cats: string[]) =>
  cats.length === 0 || cats.includes(opportunity.category);

const matchesScore = (
  opportunity: FundingOpportunity,
  min: number | undefined,
) => !min || opportunity.matchScore >= min;

const matchesDateRange = (
  opportunity: FundingOpportunity,
  dateRange: DateRange | undefined,
) => {
  if (!dateRange?.from && !dateRange?.to) return true;
  const oppDate = new Date(opportunity.deadline);
  if (dateRange?.from && oppDate < dateRange.from) return false;
  if (dateRange?.to && oppDate > dateRange.to) return false;
  return true;
};

export default function FundingExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("deadline");
  const startOfYear = new Date(new Date().getFullYear(), 0, 1);
  const endOfYear = new Date(new Date().getFullYear(), 11, 31);

  const [filters, setFilters] = useState<FundingOpportunityFilterState>({
    fundingRange: [0, 500000],
    dateRange: { from: startOfYear, to: endOfYear },
    selectedEligibility: [],
    selectedCategories: [],
    minMatchScore: 0,
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const isMobile = useIsMobile();

  const categoryOptions = useMemo(
    () => Array.from(new Set(mockOpportunities.map((opp) => opp.category))),
    [],
  );
  const eligibilityOptions = useMemo(
    () =>
      Array.from(
        new Set(
          mockOpportunities.flatMap((opp) => opp.eligibility.split(", ")),
        ),
      ),
    [],
  );

  const filteredOpportunities = useMemo(() => {
    const filterFns = [
      (o: FundingOpportunity) => matchesSearch(o, searchQuery),
      (o: FundingOpportunity) => matchesFunding(o, filters.fundingRange),
      (o: FundingOpportunity) =>
        matchesEligibility(o, filters.selectedEligibility),
      (o: FundingOpportunity) => matchesCategory(o, filters.selectedCategories),
      (o: FundingOpportunity) => matchesScore(o, filters.minMatchScore),
      (o: FundingOpportunity) => matchesDateRange(o, filters.dateRange),
    ];

    return mockOpportunities
      .filter((opportunity) => filterFns.every((fn) => fn(opportunity)))
      .sort((a, b) => {
        switch (sortBy) {
          case "deadline":
            return (
              new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
            );
          case "amount-high":
            return (
              Number.parseInt(b.amount.replace(/[^0-9]/g, "")) -
              Number.parseInt(a.amount.replace(/[^0-9]/g, ""))
            );
          case "amount-low":
            return (
              Number.parseInt(a.amount.replace(/[^0-9]/g, "")) -
              Number.parseInt(b.amount.replace(/[^0-9]/g, ""))
            );
          case "match-score":
            return b.matchScore - a.matchScore;
          case "title":
            return a.title.localeCompare(b.title);
          default:
            return 0;
        }
      });
  }, [sortBy, filters, searchQuery]);

  const resetFilters = () => {
    setSearchQuery("");
    setFilters({
      fundingRange: [0, 500000],
      dateRange: { from: undefined, to: undefined },
      selectedEligibility: [],
      selectedCategories: [],
      minMatchScore: 0,
    });
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
        resetFilters={resetFilters}
      />

      {/* Results */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold">
            {filteredOpportunities.length}{" "}
            {filteredOpportunities.length === 1
              ? "Opportunity"
              : "Opportunities"}{" "}
            Found
          </h2>
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
          <div className="space-y-4">
            {filteredOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
