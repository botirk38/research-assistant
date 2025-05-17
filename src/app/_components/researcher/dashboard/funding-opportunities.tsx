"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LayoutGrid, Table as TableIcon } from "lucide-react";
import { mockOpportunities } from "@/lib/data/funding-opportunities";
import FundingCard from "./funding-opportunities/funding-opportunities-card";
import FundingTable from "./funding-opportunities/funding-opportunities-table";

const FundingOpportunities: React.FC = () => {
  const [view, setView] = useState<"card" | "table">("card");
  const router = useRouter();

  const handleFundingOpportunityClick = (id: string) => {
    router.push(`/researcher/funding-opportunities/${id}`);
  };

  return (
    <div className="space-y-4">
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

      {view === "card" ? (
        <FundingCard
          data={mockOpportunities.slice(0, 3)} // Display only the first 3 opportunities in card view
          onFundingOpportunityClick={handleFundingOpportunityClick}
        />
      ) : (
        <FundingTable
          data={mockOpportunities.slice(0, 3)} // Display only the first 5 opportunities in table view
          onFundingOpportunityClick={handleFundingOpportunityClick}
        />
      )}
    </div>
  );
};

export default FundingOpportunities;
