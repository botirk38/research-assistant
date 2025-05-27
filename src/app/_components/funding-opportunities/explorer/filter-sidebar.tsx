import type { Dispatch, SetStateAction } from "react";
import { Filter, DollarSign, Calendar, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DatePickerWithRange } from "@/components/date-range-picker";
import type { DateRange } from "react-day-picker";
import type { FundingOpportunityFilterState } from "@/types/researcher";
import { Badge } from "@/components/ui/badge";
import { explorationAreas, fullResearchAreas } from "@/lib/data/publications";

interface FilterSidebarProps {
  isVisible: boolean;
  isMobile: boolean;
  onClose: () => void;
  filters: FundingOpportunityFilterState;
  setFilters: Dispatch<SetStateAction<FundingOpportunityFilterState>>;
  eligibilityOptions: string[];
  categoryOptions: string[];
  countryOptions: string[];
  resetFilters: () => void;
}

// Helper functions for category area types
const isResearchArea = (option: string) =>
  fullResearchAreas.some((r) => r.label === option);

const isExplorationArea = (option: string) =>
  explorationAreas.some((r) => r.label === option);

const getCategoryType = (option: string) => {
  if (isResearchArea(option)) return "Research Area";
  if (isExplorationArea(option)) return "Exploration Area";
  return undefined;
};

export function FilterSidebar({
  isVisible,
  isMobile,
  onClose,
  filters,
  setFilters,
  eligibilityOptions,
  categoryOptions,
  countryOptions,
  resetFilters,
}: FilterSidebarProps) {
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Toggle eligibility selection
  const toggleEligibility = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedEligibility: prev.selectedEligibility.includes(value)
        ? prev.selectedEligibility.filter((item) => item !== value)
        : [...prev.selectedEligibility, value],
    }));
  };

  // Toggle category selection
  const toggleCategory = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(value)
        ? prev.selectedCategories.filter((item) => item !== value)
        : [...prev.selectedCategories, value],
    }));
  };

  // Toggle country selection
  const toggleCountry = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedCountries: prev.selectedCountries.includes(value)
        ? prev.selectedCountries.filter((item) => item !== value)
        : [...prev.selectedCountries, value],
    }));
  };

  if (!isVisible) {
    return null;
  }

  const handleDateChange = (dateRange: DateRange | undefined) => {
    setFilters((prev) => ({
      ...prev,
      dateRange,
    }));
  };

  return (
    <div className="bg-card sticky top-4 rounded-lg border p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center text-lg font-semibold">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </h2>
        {isMobile && (
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
        )}
      </div>

      <Accordion
        type="multiple"
        defaultValue={[
          "funding",
          "dates",
          "eligibility",
          "categories",
          "countries",
          "match-score",
        ]}
      >
        {/* Funding Amount */}
        <AccordionItem value="funding">
          <AccordionTrigger>
            <span className="flex items-center">
              <DollarSign className="mr-2 h-4 w-4" />
              Funding Amount
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider
                defaultValue={[0, 500000]}
                max={500000}
                step={10000}
                value={filters.fundingRange}
                onValueChange={(value) =>
                  setFilters((prev) => ({
                    ...prev,
                    fundingRange: value as [number, number],
                  }))
                }
              />
              <div className="flex justify-between text-sm">
                <span>{formatCurrency(filters.fundingRange[0])}</span>
                <span>{formatCurrency(filters.fundingRange[1])}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Application Deadlines */}
        <AccordionItem value="dates">
          <AccordionTrigger>
            <span className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              Application Deadlines
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="pt-2">
              <DatePickerWithRange
                onChange={handleDateChange}
                value={filters.dateRange}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Countries */}
        <AccordionItem value="countries">
          <AccordionTrigger>
            <span className="flex items-center">
              <Globe className="mr-2 h-4 w-4" />
              Countries
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="max-h-60 space-y-2 overflow-y-auto pt-2">
              {countryOptions.map((country) => (
                <div key={country} className="flex items-center space-x-2">
                  <Checkbox
                    id={`country-${country}`}
                    checked={filters.selectedCountries.includes(country)}
                    onCheckedChange={() => toggleCountry(country)}
                  />
                  <Label htmlFor={`country-${country}`} className="text-sm">
                    {country}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Eligibility Requirements */}
        <AccordionItem value="eligibility">
          <AccordionTrigger>
            <span className="flex items-center">
              <ChevronDown className="mr-2 h-4 w-4" />
              Eligibility Requirements
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="max-h-60 space-y-2 overflow-y-auto pt-2">
              {eligibilityOptions.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={`eligibility-${option}`}
                    checked={filters.selectedEligibility.includes(option)}
                    onCheckedChange={() => toggleEligibility(option)}
                  />
                  <Label htmlFor={`eligibility-${option}`} className="text-sm">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Match Score */}
        <AccordionItem value="match-score">
          <AccordionTrigger>
            <span className="flex items-center">
              <ChevronDown className="mr-2 h-4 w-4" />
              Match Score
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider
                defaultValue={[0]}
                max={100}
                step={5}
                value={[filters.minMatchScore ?? 0]}
                onValueChange={(value) =>
                  setFilters((prev) => ({
                    ...prev,
                    minMatchScore: value[0],
                  }))
                }
              />
              <div className="flex justify-between text-sm">
                <span>Min: {filters.minMatchScore}%</span>
                <span>100%</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Research Categories */}
        <AccordionItem value="categories">
          <AccordionTrigger>
            <span className="flex items-center">
              <ChevronDown className="mr-2 h-4 w-4" />
              Research Categories
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="max-h-60 space-y-2 overflow-y-auto pt-2">
              {categoryOptions.map((option) => {
                const isSelected = filters.selectedCategories.includes(option);
                const type = getCategoryType(option);
                return (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${option}`}
                      checked={isSelected}
                      onCheckedChange={() => toggleCategory(option)}
                    />
                    <Label
                      htmlFor={`category-${option}`}
                      className={`text-sm ${isSelected ? "text-primary font-semibold" : ""}`}
                    >
                      {option}
                    </Label>
                    {type && (
                      <Badge
                        variant={
                          type === "Research Area" ? "default" : "secondary"
                        }
                        className={
                          isSelected
                            ? "border-primary text-primary bg-primary/10 border"
                            : ""
                        }
                      >
                        {type}
                      </Badge>
                    )}
                  </div>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-4 flex justify-end space-x-2">
        <Button variant="outline" size="sm" onClick={resetFilters}>
          Reset Filters
        </Button>
      </div>
    </div>
  );
}
