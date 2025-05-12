import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LayoutGrid, Table as TableIcon } from "lucide-react";
import { ideas } from "@/lib/data/publications";
import ResearchIdeasCard from "./research-ideas/research-ideas-card";
import ResearchIdeasTable from "./research-ideas/research-ideas-table";


const ResearchIdeas: React.FC = () => {
  const [view, setView] = useState<"card" | "table">("card");

  return (
    <div className="space-y-4">
      {/* Toggle Header */}
      <div className="flex items-center justify-between">
        <ToggleGroup
          type="single"
          value={view}
          onValueChange={(val: "card" | "table") => {
            if (val) setView(val);
          }}
        >
          <ToggleGroupItem value="card" aria-label="Card view">
            <LayoutGrid className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="table" aria-label="Table view">
            <TableIcon className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Conditional View */}
      {view === "card" ? (
        <ResearchIdeasCard ideas={ideas} />
      ) : (
        <ResearchIdeasTable ideas={ideas} />
      )}
    </div>
  );
};

export default ResearchIdeas;
