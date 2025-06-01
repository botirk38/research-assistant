import { useState, useMemo } from "react";
import type {
  FundingOpportunity,
  FundingOpportunityFilterState,
} from "@/types/researcher";
import type { DateRange } from "react-day-picker";

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

const matchesCountries = (
  opportunity: FundingOpportunity,
  countries: string[],
) => countries.length === 0 || countries.includes(opportunity.country);

interface UseFundingFiltersProps {
  opportunities: FundingOpportunity[];
}

export function useFundingFilters({ opportunities }: UseFundingFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("deadline");

  const startOfYear = new Date(new Date().getFullYear(), 0, 1);
  const endOfYear = new Date(new Date().getFullYear(), 11, 31);

  const [filters, setFilters] = useState<FundingOpportunityFilterState>({
    fundingRange: [0, 500000],
    dateRange: { from: startOfYear, to: endOfYear },
    selectedEligibility: [],
    selectedCategories: [],
    selectedCountries: [],
    minMatchScore: 0,
  });

  const categoryOptions = useMemo(
    () => Array.from(new Set(opportunities.map((opp) => opp.category))),
    [opportunities],
  );

  const countryOptions = useMemo(
    () => Array.from(new Set(opportunities.map((opp) => opp.country))),
    [opportunities],
  );

  const eligibilityOptions = useMemo(
    () =>
      Array.from(
        new Set(opportunities.flatMap((opp) => opp.eligibility.split(", "))),
      ),
    [opportunities],
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
      (o: FundingOpportunity) => matchesCountries(o, filters.selectedCountries),
    ];

    return opportunities
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
  }, [opportunities, sortBy, filters, searchQuery]);

  const resetFilters = () => {
    setSearchQuery("");
    setFilters({
      fundingRange: [0, 500000],
      dateRange: { from: undefined, to: undefined },
      selectedEligibility: [],
      selectedCategories: [],
      selectedCountries: [],
      minMatchScore: 0,
    });
  };

  return {
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
  };
}
