import { useState } from "react";
import { LayoutGrid, Table as TableIcon } from "lucide-react";
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
      id: "1",
      keywords: ["AI", "Medical Imaging", "Neural Networks"],
      pdfUrl: "#",
      doi: "10.1234/jmai.2023.001",
      title: "Deep Learning for Medical Imaging",
      subtitle: "Latest advances in neural network applications for radiology",
      journal: "Journal of Medical AI",
      year: 2023,
      citations: 52,
      url: "#",
      coAuthors: ["A. Smith", "J. Doe"],
    },
    {
      id: "2",
      keywords: ["AI", "Healthcare", "Ethics"],
      pdfUrl: "#",
      doi: "10.1234/jai.2023.002",
      title: "Explainable AI in Healthcare",
      subtitle: "Methods and applications for transparency in clinical models",
      journal: "IEEE Transactions on Medical Imaging",
      year: 2022,
      citations: 37,
      url: "#",
      coAuthors: ["L. Zhang"],
    },
  ];

  const explorationPublications: Publication[] = [
    {
      id: "3",
      keywords: ["Quantum Computing", "Machine Learning"],
      pdfUrl: "#",
      doi: "10.1234/jqcm.2024.003",
      title: "Quantum Computing Applications",
      subtitle: "Emerging field exploration",
      journal: "Quantum Journal",
      year: 2024,
      citations: 10,
      url: "#",
      coAuthors: ["S. Patel"],
    },
    {
      id: "4",
      keywords: ["Sustainability", "AI Systems"],
      doi: "10.1234/jais.2023.004",
      pdfUrl: "#",
      title: "Sustainable AI Systems",
      subtitle: "New research direction",
      journal: "AI & Sustainability Review",
      year: 2023,
      citations: 5,
      url: "#",
      coAuthors: ["M. Green"],
    },
  ];

  return (
    <div className="mb-8 space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
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
            subtitle="Recent publications and research interests based on your profile"
            publications={researchPublications}
          />
        ) : (
          <ResearchTable data={researchPublications} />
        )}
      </div>

      {/* Exploration Section */}
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
            subtitle="Topics of ongoing interest based on your profile"
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
