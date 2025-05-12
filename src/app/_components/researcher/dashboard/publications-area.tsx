import { useState } from "react";
import {
  LayoutGrid,
  Table as TableIcon,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { Publication } from "@/types/researcher";
import ExplorationCard from "./publications/explorations-card";
import ResearchTable from "./publications/research-table";
import ExplorationTable from "./publications/exploration-table";
import PublicationsCard from "./publications/publications-card";



const PublicationsArea: React.FC = () => {
  const [researchView, setResearchView] = useState<"card" | "table">("card");
  const [explorationView, setExplorationView] = useState<"card" | "table">(
    "card",
  );

  const researchPublications: Publication[] = [
    {
      title: "Deep Learning for Medical Imaging",
      subtitle: "Journal of Medical AI, 2023",
    },
    {
      title: "Explainable AI in Healthcare",
      subtitle: "IEEE Transactions, 2022",
    },
  ];

  const explorationPublications: Publication[] = [
    {
      title: "Quantum Computing Applications",
      subtitle: "Emerging field exploration",
    },
    {
      title: "Sustainable AI Systems",
      subtitle: "New research direction",
    },
  ];

  return (
    <div className="mb-8 space-y-8">
      {/* Research Section */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <ToggleGroup
            type="single"
            value={researchView}
            onValueChange={(val: "card" | "table") => {
              if (val) setResearchView(val);
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
        {researchView === "card" ? (
          <PublicationsCard
            title="Research Areas"
            publications={researchPublications}
          />
        ) : (
          <ResearchTable data={researchPublications} />
        )}
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <ToggleGroup
            type="single"
            value={explorationView}
            onValueChange={(val: "card" | "table") => {
              if (val) setExplorationView(val);
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
        {explorationView === "card" ? (
          <ExplorationCard
            title="Exploration Areas"
            subtitle="Topics of ongoing interest"
            interests={explorationPublications}
          />
        ) : (
          <ExplorationTable data={explorationPublications} />
        )}
      </div>
    </div>
  );
};

export default PublicationsArea;
