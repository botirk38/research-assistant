"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LayoutGrid, Table as TableIcon, Users } from "lucide-react";
import { useRouter } from "next/navigation";

type Collaborator = {
  name: string;
  affiliation: string;
    id: string;
};

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

const CollaborationCard: React.FC<{ collaborators: Collaborator[] }> = ({
    collaborators,
}) => {

    const router = useRouter();

    const handleConnectClick = (id : string) => {
        router.push(`/researcher/profile/${id}`)
    }

    return(
    <Card className="transition-shadow hover:shadow-md">
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Users className="text-muted-foreground h-5 w-5" />
                Potential Research Collaborations
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {collaborators.map((collaborator, index) => (
                <div
                    key={index}
                    className="bg-accent flex items-center justify-between rounded-lg p-3"
                >
                    <div className="flex-1">
                        <h3 className="text-card-foreground font-medium">
                            {collaborator.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {collaborator.affiliation}
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        className="border-border text-card-foreground hover:bg-accent"
                        onClick={() => handleConnectClick(collaborator.id)}
                    >
                        Connect
                    </Button>
                </div>
            ))}
        </CardContent>
    </Card>
    )
};

const CollaborationTable: React.FC<{ collaborators: Collaborator[] }> = ({
  collaborators,
}) => (
  <Card className="p-4">
    <h3 className="text-primary mb-4 text-base font-semibold">
      Potential Research Collaborations
    </h3>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Affiliation</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {collaborators.map((collaborator, idx) => (
          <TableRow key={idx}>
            <TableCell>{collaborator.name}</TableCell>
            <TableCell>{collaborator.affiliation}</TableCell>
            <TableCell className="text-right">
              <Button size="sm" variant="outline">
                Connect
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

const Collaborations: React.FC = () => {
  const [view, setView] = useState<"card" | "table">("card");

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
        <CollaborationCard collaborators={collaborators} />
      ) : (
        <CollaborationTable collaborators={collaborators} />
      )}
    </div>
  );
};

export default Collaborations;
