import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TopNavigation: React.FC = () => (
  <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
    <h1 className="font-display text-foreground text-3xl font-semibold">
      Publications Overview
    </h1>
    <Select defaultValue="all">
      <SelectTrigger className="border-border bg-secondary text-foreground w-[240px] border shadow-sm">
        <SelectValue placeholder="From - To Dates" />
      </SelectTrigger>
      <SelectContent className="border-border bg-popover border">
        <SelectItem value="all">All Time</SelectItem>
        <SelectItem value="2023">2023 - Present</SelectItem>
        <SelectItem value="2020">2020 - 2023</SelectItem>
        <SelectItem value="2015">2015 - 2020</SelectItem>
        <SelectItem value="custom">Custom Range</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

export default TopNavigation;
