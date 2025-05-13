import { Card } from "@/components/ui/card";
import type { FundingOpportunity } from "@/types/researcher";
import { Table, TableHead,TableHeader,TableRow, TableBody,TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface FundingOpportunityTable {
    data: FundingOpportunity[];
    onFundingOpportunityClick: (id: string) => void;
}
const FundingTable: React.FC<FundingOpportunityTable> = ({ data, onFundingOpportunityClick}) => (
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
              <Button size="sm" variant="destructive" onClick={() => onFundingOpportunityClick(opportunity.id)}>
                View Details
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);


export default FundingTable;
