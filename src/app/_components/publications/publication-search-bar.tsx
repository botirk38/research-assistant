import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PublicationsSearchBarProps {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  sortBy: string;
  setSortBy: (v: string) => void;
  isMobile: boolean;
  isFilterOpen: boolean;
  setIsFilterOpen: (v: boolean) => void;
}

export function PublicationsSearchBar({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  isMobile,
  isFilterOpen,
  setIsFilterOpen,
}: PublicationsSearchBarProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="relative flex-grow">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        <Input
          placeholder="Search by title, journal, author..."
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
            <SelectItem value="citations">Citations (Most)</SelectItem>
            <SelectItem value="year-newest">Year (Newest)</SelectItem>
            <SelectItem value="year-oldest">Year (Oldest)</SelectItem>
            <SelectItem value="title">Title (A-Z)</SelectItem>
          </SelectContent>
        </Select>
        {isMobile && (
          <Button
            variant="outline"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        )}
      </div>
    </div>
  );
}
