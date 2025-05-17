import type { Dispatch, SetStateAction } from "react";
import { Filter, DollarSign, Calendar, ChevronDown } from "lucide-react";
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

interface FilterSidebarProps {
  isVisible: boolean;
  isMobile: boolean;
  onClose: () => void;
  filters: FundingOpportunityFilterState;
  setFilters: Dispatch<SetStateAction<FundingOpportunityFilterState>>;
  eligibilityOptions: string[];
  categoryOptions: string[];
  resetFilters: () => void;
}

export function FilterSidebar({
  isVisible,
  isMobile,
  onClose,
  filters,
  setFilters,
  eligibilityOptions,
  categoryOptions,
  resetFilters,
}: FilterSidebarProps) {
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
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
    <div className="bg-card sticky top-4 rounded-lg border p-4">
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
          "match-score",
        ]}
      >
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

        <AccordionItem value="categories">
          <AccordionTrigger>
            <span className="flex items-center">
              <ChevronDown className="mr-2 h-4 w-4" />
              Research Categories
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="max-h-60 space-y-2 overflow-y-auto pt-2">
              {categoryOptions.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${option}`}
                    checked={filters.selectedCategories.includes(option)}
                    onCheckedChange={() => toggleCategory(option)}
                  />
                  <Label htmlFor={`category-${option}`} className="text-sm">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-4 space-x-2">
        <Button variant="outline" size="sm" onClick={resetFilters}>
          Reset Filters
        </Button>
      </div>
    </div>
  );
}
