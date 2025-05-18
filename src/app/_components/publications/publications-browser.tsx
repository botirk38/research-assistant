"use client";

import { useState, useEffect, useMemo } from "react";
import { PublicationsFilter } from "./publications-filter";
import { PublicationsSearchBar } from "./publication-search-bar";
import type { Publication } from "@/types/researcher";
import { PublicationCard } from "./publication-card";

const mockPublications: Publication[] = [
  {
    title: "Quantum Computing Applications in Cryptography",
    subtitle: "A Comprehensive Review of Post-Quantum Cryptographic Methods",
    journal: "Journal of Quantum Information Science",
    year: 2024,
    citations: 87,
    url: "https://example.com/quantum-cryptography",
    coAuthors: ["Maria Rodriguez", "David Chen", "Sarah Johnson"],
  },
  {
    title: "Neural Networks for Climate Prediction",
    subtitle: "Improving Accuracy in Long-term Climate Modeling",
    journal: "Environmental Science & Technology",
    year: 2023,
    citations: 142,
    url: "https://example.com/climate-neural-networks",
    coAuthors: ["James Wilson", "Emily Parker", "Michael Brown"],
  },
  {
    title: "CRISPR-Cas9 Applications in Treating Genetic Disorders",
    subtitle: "Recent Advances and Ethical Considerations",
    journal: "Nature Biotechnology",
    year: 2024,
    citations: 215,
    url: "https://example.com/crispr-applications",
    coAuthors: ["Robert Lee", "Jennifer Adams", "Thomas Garcia"],
  },
  {
    title: "Sustainable Urban Planning in the 21st Century",
    subtitle: "Integrating Green Infrastructure in Metropolitan Areas",
    journal: "Urban Studies",
    year: 2022,
    citations: 78,
    url: "https://example.com/sustainable-urban-planning",
    coAuthors: ["Lisa Wong", "Daniel Miller", "Rachel Green"],
  },
  {
    title: "Artificial Intelligence in Healthcare Diagnostics",
    subtitle: "Improving Early Detection of Diseases",
    journal: "Journal of Medical Informatics",
    year: 2023,
    citations: 193,
    url: "https://example.com/ai-healthcare-diagnostics",
    coAuthors: ["John Smith", "Sophia Martinez", "William Taylor"],
  },
  {
    title: "Blockchain Technology for Supply Chain Management",
    subtitle: "Enhancing Transparency and Efficiency",
    journal: "Journal of Operations Management",
    year: 2022,
    citations: 112,
    url: "https://example.com/blockchain-supply-chain",
    coAuthors: ["Kevin Zhang", "Amanda Johnson", "Christopher Lee"],
  },
  {
    title: "The Role of Microbiome in Mental Health",
    subtitle: "Exploring the Gut-Brain Connection",
    journal: "Neuroscience & Biobehavioral Reviews",
    year: 2024,
    citations: 156,
    url: "https://example.com/microbiome-mental-health",
    coAuthors: ["Elizabeth Brown", "Richard Davis", "Michelle Kim"],
  },
  {
    title: "Renewable Energy Integration in Power Grids",
    subtitle: "Challenges and Solutions for Grid Stability",
    journal: "Energy Policy",
    year: 2021,
    citations: 203,
    url: "https://example.com/renewable-energy-grid",
    coAuthors: ["Andrew Wilson", "Patricia Moore", "Steven Clark"],
  },
  {
    title: "Machine Learning for Drug Discovery",
    subtitle: "Accelerating Pharmaceutical Research and Development",
    journal: "Journal of Medicinal Chemistry",
    year: 2023,
    citations: 178,
    url: "https://example.com/ml-drug-discovery",
    coAuthors: ["Laura Martinez", "Paul Johnson", "Karen Wong"],
  },
  {
    title: "Ocean Acidification and Coral Reef Ecosystems",
    subtitle: "Impacts and Adaptation Strategies",
    journal: "Marine Biology",
    year: 2022,
    citations: 124,
    url: "https://example.com/ocean-acidification-coral",
    coAuthors: ["Mark Thompson", "Jessica Lee", "Robert Brown"],
  },
  {
    title: "Cybersecurity in Internet of Things Devices",
    subtitle: "Vulnerabilities and Protection Mechanisms",
    journal: "IEEE Internet of Things Journal",
    year: 2024,
    citations: 92,
    url: "https://example.com/iot-cybersecurity",
    coAuthors: ["David Wilson", "Susan Chen", "James Rodriguez"],
  },
  {
    title: "Neuroplasticity in Adult Learning",
    subtitle: "Implications for Education and Cognitive Training",
    journal: "Journal of Cognitive Neuroscience",
    year: 2021,
    citations: 167,
    url: "https://example.com/neuroplasticity-learning",
    coAuthors: ["Jennifer Smith", "Michael Davis", "Emily Johnson"],
  },
];

export default function PublicationsBrowser() {
  const [searchQuery, setSearchQuery] = useState("");
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
          <div className="space-y-4">
            {filteredPublications.map((publication, index) => (
              <PublicationCard key={index} publication={publication} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
