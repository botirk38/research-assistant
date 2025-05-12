import  { Card } from "@/components/ui/card";
import  { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import type { ResearchIdea } from "@/types/researcher";

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

export default ResearchIdeasTable;
