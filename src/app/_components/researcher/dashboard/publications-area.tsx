import { useState } from "react";
import {
  LayoutGrid,
  Table as TableIcon,
  Compass,
  Settings,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import type { Publication } from "@/types/researcher";

// ─── Cards ───────────────────────────────────────────────────────────

const PublicationsCard: React.FC<{
  title: string;
  subtitle?: string;
  publications: Publication[];
}> = ({ title, subtitle, publications }) => (
  <Card className="transition-shadow hover:shadow-md">
    <CardHeader className="flex flex-row items-center justify-between">
      <div>
        <CardTitle>{title}</CardTitle>
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
      </div>
      <Button variant="outline" size="sm" className="rounded-full p-2">
        <Settings className="h-4 w-4" />
      </Button>
    </CardHeader>
    <CardContent className="space-y-4">
      {publications.map((item, index) => (
        <div
          key={index}
          className="border-border hover:bg-accent rounded-lg border p-3"
        >
          <h3 className="text-card-foreground font-medium">{item.title}</h3>
          <p className="text-muted-foreground text-sm">{item.subtitle}</p>
        </div>
      ))}
    </CardContent>
  </Card>
);

const ExplorationCard: React.FC<{
  title: string;
  subtitle?: string;
  interests: Publication[];
}> = ({ title, subtitle, interests }) => (
  <Card className="border-muted border-dashed transition-shadow hover:shadow-sm">
    <CardHeader className="flex flex-row items-center justify-between">
      <div>
        <CardTitle className="flex items-center gap-2 text-base">
          <Compass className="text-muted-foreground h-4 w-4" />
          {title}
        </CardTitle>
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
      </div>
    </CardHeader>
    <CardContent className="space-y-4 pt-2">
      {interests.map((item, index) => (
        <div key={index}>
          <h3 className="text-card-foreground font-medium">{item.title}</h3>
          <p className="text-muted-foreground text-sm">{item.subtitle}</p>
        </div>
      ))}
    </CardContent>
  </Card>
);

// ─── Tables ──────────────────────────────────────────────────────────

const ResearchTable: React.FC<{ data: Publication[] }> = ({ data }) => (
  <Card className="p-4">
    <h3 className="text-primary mb-4 text-base font-semibold">
      Research Areas
    </h3>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Subtitle</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, idx) => (
          <TableRow key={idx}>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.subtitle}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

const ExplorationTable: React.FC<{ data: Publication[] }> = ({ data }) => (
  <Card className="p-4">
    <h3 className="text-primary mb-4 text-base font-semibold">
      Exploration Areas
    </h3>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Subtitle</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, idx) => (
          <TableRow key={idx}>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.subtitle}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

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
            subtitle="Peer-reviewed publications"
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
