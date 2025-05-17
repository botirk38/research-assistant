import type { Dispatch, SetStateAction } from "react";
import {
  Filter,
  BookOpen,
  Calendar,
  QuoteIcon as Citation,
} from "lucide-react";
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
import { ScrollArea } from "@/components/ui/scroll-area";

interface PublicationsFilterProps {
  isVisible: boolean;
  isMobile: boolean;
  onClose: () => void;
  journals: string[];
  selectedJournals: string[];
  setSelectedJournals: Dispatch<SetStateAction<string[]>>;
  years: number[];
  selectedYears: number[];
  setSelectedYears: Dispatch<SetStateAction<number[]>>;
  citationRange: [number, number];
  setCitationRange: Dispatch<SetStateAction<[number, number]>>;
  resetFilters: () => void;
}

export function PublicationsFilter({
  isVisible,
  isMobile,
  onClose,
  journals,
  selectedJournals,
  setSelectedJournals,
  years,
  selectedYears,
  setSelectedYears,
  citationRange,
  setCitationRange,
  resetFilters,
}: PublicationsFilterProps) {
  // Toggle journal selection
  const toggleJournal = (value: string) => {
    setSelectedJournals((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  // Toggle year selection
  const toggleYear = (value: number) => {
    setSelectedYears((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  if (!isVisible) {
    return null;
  }

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
        defaultValue={["journals", "years", "citations"]}
      >
        <AccordionItem value="journals">
          <AccordionTrigger>
            <span className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4" />
              Journals
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ScrollArea className="h-[200px] pr-4">
              <div className="space-y-2 pt-2">
                {journals.map((journal) => (
                  <div key={journal} className="flex items-center space-x-2">
                    <Checkbox
                      id={`journal-${journal}`}
                      checked={selectedJournals.includes(journal)}
                      onCheckedChange={() => toggleJournal(journal)}
                    />
                    <Label htmlFor={`journal-${journal}`} className="text-sm">
                      {journal}
                    </Label>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="years">
          <AccordionTrigger>
            <span className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              Publication Years
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {years.map((year) => (
                <div key={year} className="flex items-center space-x-2">
                  <Checkbox
                    id={`year-${year}`}
                    checked={selectedYears.includes(year)}
                    onCheckedChange={() => toggleYear(year)}
                  />
                  <Label htmlFor={`year-${year}`} className="text-sm">
                    {year}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="citations">
          <AccordionTrigger>
            <span className="flex items-center">
              <Citation className="mr-2 h-4 w-4" />
              Citation Count
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider
                defaultValue={[0, 250]}
                max={250}
                step={10}
                value={citationRange}
                onValueChange={(value) =>
                  setCitationRange(value as [number, number])
                }
              />
              <div className="flex justify-between text-sm">
                <span>{citationRange[0]} citations</span>
                <span>{citationRange[1]} citations</span>
              </div>
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
