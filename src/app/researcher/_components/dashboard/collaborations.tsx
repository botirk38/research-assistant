"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LayoutGrid, Table as TableIcon } from "lucide-react";
import type { Collaborator } from "@/types/researcher";
import CollaborationCard from "./collaborations/collaboration-card";
import CollaborationTable from "./collaborations/collaboration-table";
import { useRouter } from "next/navigation";

const collaborators: Collaborator[] = [
  {
    id: "sarah-chen",
    name: "Dr. Sarah Chen",
    affiliation: "Stanford University • Medical AI",
  },
  {
    id: "james-wilson",
    name: "Prof. James Wilson",
    affiliation: "MIT • Computer Vision",
  },
];

const Collaborations: React.FC = () => {
  const [view, setView] = useState<"card" | "table">("card");

  const router = useRouter();

  const handleConnectClick = (id: string) => {
    router.push(`/researcher/profile/${id}`);
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
        <CollaborationCard
          collaborators={collaborators}
          onConnectClick={handleConnectClick}
        />
      ) : (
        <CollaborationTable
          collaborators={collaborators}
          onConnectClick={handleConnectClick}
        />
      )}
    </div>
  );
};

export default Collaborations;
