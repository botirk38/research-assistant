import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
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
import { LayoutGrid, Table as TableIcon } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────

type ResearchIdea = {
  title: string;
  description: string;
};

// ─── Sample Data ─────────────────────────────────────────────────────

const ideas: ResearchIdea[] = [
  {
    title: "Federated Learning for Privacy-Preserving Medical Analysis",
    description: "Aligns with your work in healthcare AI",
  },
  {
    title: "Multi-modal Learning for Clinical Decision Support",
    description: "Extension of your medical imaging research",
  },
];

// ─── Components ──────────────────────────────────────────────────────

const ResearchIdeasCard: React.FC<{ ideas: ResearchIdea[] }> = ({ ideas }) => (
  <Card className="transition-shadow hover:shadow-md">
    <CardHeader>
      <CardTitle>Open Research Ideas</CardTitle>
      <CardDescription>
        Recommendations based on your research profile and interests
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-3">
      {ideas.map((idea, index) => (
        <div key={index} className="bg-accent rounded-lg p-3">
          <h3 className="text-card-foreground font-medium">{idea.title}</h3>
          <p className="text-muted-foreground text-sm">{idea.description}</p>
        </div>
      ))}
    </CardContent>
  </Card>
);

const ResearchIdeasTable: React.FC<{ ideas: ResearchIdea[] }> = ({ ideas }) => (
  <Card className="p-4">
    <h3 className="text-primary mb-4 text-base font-semibold">
      Open Research Ideas
    </h3>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ideas.map((idea, idx) => (
          <TableRow key={idx}>
            <TableCell>{idea.title}</TableCell>
            <TableCell>{idea.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

// ─── Main Wrapper Component ──────────────────────────────────────────

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
