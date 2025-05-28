import type { FundingOpportunity } from "@/types/researcher";
import { Link as LucideLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function FundingTable({
  opportunities,
}: {
  opportunities: FundingOpportunity[];
}) {
  return (
    <div className="w-full rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Organization</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Deadline</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Match</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {opportunities.map((opp) => (
            <TableRow key={opp.id}>
              <TableCell>{opp.title}</TableCell>
              <TableCell>{opp.organization}</TableCell>
              <TableCell>{opp.amount}</TableCell>
              <TableCell>
                {new Date(opp.deadline).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <Badge variant="outline">{opp.category}</Badge>
              </TableCell>
              <TableCell>{opp.country}</TableCell>
              <TableCell>
                <Badge
                  variant={opp.matchScore > 85 ? "default" : "secondary"}
                  className={opp.matchScore > 85 ? "bg-green-500" : ""}
                >
                  {opp.matchScore}%
                </Badge>
              </TableCell>
              <TableCell>
                <Button asChild variant="outline" size="sm">
                  <a href={`/opportunities/${opp.id}`}>
                    <LucideLink className="mr-1 h-4 w-4" />
                    View
                  </a>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default FundingTable;
