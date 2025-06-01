import { useState, useMemo } from "react";
import type { Publication } from "@/types/researcher";

interface UsePublicationsFiltersProps {
  publications: Publication[];
}

export function usePublicationsFilters({
  publications,
}: UsePublicationsFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<string>("citations");
  const [selectedJournals, setSelectedJournals] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [citationRange, setCitationRange] = useState<[number, number]>([
    0, 250,
  ]);

  // Extract unique journals and years
  const journals = useMemo(
    () => Array.from(new Set(publications.map((pub) => pub.journal))),
    [publications],
  );

  const years = useMemo(
    () =>
      Array.from(new Set(publications.map((pub) => pub.year))).sort(
        (a, b) => b - a,
      ),
    [publications],
  );

  // Filter and sort publications
  const filteredPublications = useMemo(() => {
    let results = publications.filter((publication) => {
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
  }, [
    searchQuery,
    selectedJournals,
    selectedYears,
    citationRange,
    sortBy,
    publications,
  ]);

  // Reset all filters
  const resetFilters = () => {
    setSelectedJournals([]);
    setSelectedYears([]);
    setCitationRange([0, 250]);
  };

  return {
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
  };
}
