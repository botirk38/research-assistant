import { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LayoutGrid, Table as TableIcon, DollarSign } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────

interface FundingOpportunity {
  title: string;
  amount: string;
  deadline: string;
}

const opportunities: FundingOpportunity[] = [
  {
    title: "NSF Advanced Computing Initiative",
    amount: "$1.2M",
    deadline: "June 15, 2025",
  },
  {
    title: "NIH Medical Technology Research",
    amount: "$850K",
    deadline: "August 30, 2025",
  },
];

const FundingCard: React.FC<{ data: FundingOpportunity[] }> = ({ data }) => (
  <Card className="border-t-destructive border-border border border-t-4 transition-shadow hover:shadow-md">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <DollarSign className="text-destructive h-5 w-5" />
        Funding Opportunities
      </CardTitle>
      <CardDescription>
        Personalized grant recommendations based on your research profile
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-3">
      {data.map((opportunity, index) => (
        <div
          key={index}
          className="border-destructive/20 bg-destructive/5 rounded-lg border p-4"
        >
          <div className="flex justify-between">
            <h3 className="text-card-foreground font-medium">
              {opportunity.title}
            </h3>
            <span className="text-destructive font-medium">
              {opportunity.amount}
            </span>
          </div>
          <p className="text-muted-foreground mt-1 text-sm">
            Deadline: {opportunity.deadline}
          </p>
          <div className="mt-3 flex justify-end">
            <Button
              size="sm"
              className="bg-destructive text-primary-foreground hover:bg-destructive/90"
            >
              View Details
            </Button>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);

const FundingTable: React.FC<{ data: FundingOpportunity[] }> = ({ data }) => (
  <Card className="border-t-destructive border-t-4 p-4">
    <h3 className="text-primary mb-4 text-base font-semibold">
      Funding Opportunities
    </h3>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Deadline</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((opportunity, idx) => (
          <TableRow key={idx}>
            <TableCell>{opportunity.title}</TableCell>
            <TableCell>{opportunity.amount}</TableCell>
            <TableCell>{opportunity.deadline}</TableCell>
            <TableCell className="text-right">
              <Button size="sm" variant="destructive">
                View Details
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

// ─── Main Component ──────────────────────────────────────────────────

const FundingOpportunities: React.FC = () => {
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
        <FundingCard data={opportunities} />
      ) : (
        <FundingTable data={opportunities} />
      )}
    </div>
  );
};

export default FundingOpportunities;
