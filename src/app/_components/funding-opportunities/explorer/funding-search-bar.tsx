import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FundingSearchBarProps {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  sortBy: string;
  setSortBy: (v: string) => void;
  isFilterOpen: boolean;
  setIsFilterOpen: (v: boolean) => void;
}

export function FundingSearchBar({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  isFilterOpen,
  setIsFilterOpen,
}: FundingSearchBarProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row md:col-span-2">
      <div className="relative flex-grow">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
        <Input
          type="text"
          placeholder="Search by keyword, research area, or organization..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="deadline">Deadline (Soonest)</SelectItem>
            <SelectItem value="amount-high">Amount (Highest)</SelectItem>
            <SelectItem value="amount-low">Amount (Lowest)</SelectItem>
            <SelectItem value="match-score">Match Score (Highest)</SelectItem>
            <SelectItem value="title">Title (A-Z)</SelectItem>
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          className="md:hidden"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>
    </div>
  );
}
